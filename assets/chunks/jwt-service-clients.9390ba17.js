import{_ as n,o as s,c as a,a as e}from"../app.c4573477.js";const t={},p=e(`<p>JWT first-class support for Refresh Token Cookies is implicitly enabled when configuring the <code>JwtAuthProvider</code> which uses <a href="/jwt-authprovider.html#jwt-token-cookies">JWT Token Cookies</a> by default which upon authentication will return the Refresh Token in a <code>ss-reftok</code> <strong>Secure</strong>, <strong>HttpOnly</strong> Cookie alongside the Users stateless Authenticated UserSession in the JWT <code>ss-tok</code> Cookie.</p><p>This supports <a href="/jwt-authprovider.html#transparent-server-auto-refresh-of-jwt-tokens">transparently auto refreshing access tokens</a> in HTTP Clients by default as the server will rotate JWT Access Token Cookies which expire before the Refresh Token expiration.</p><p>The alternative configuration of using explicit JWT Bearer Tokens is also supported in all smart, generic Service Clients for all <a href="/add-servicestack-reference">Add ServiceStack Reference</a> languages which enable a nicer (i.e. maintenance-free) development experience with all Service Clients automatically supports fetching new JWT Bearer Tokens &amp; transparently Auto Retry Requests on <strong>401 Unauthorized</strong> responses:</p><h4 id="c-f-vb-net-service-clients" tabindex="-1">C#, F# &amp; VB .NET Service Clients <a class="header-anchor" href="#c-f-vb-net-service-clients" aria-hidden="true">#</a></h4><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JsonServiceClient</span><span class="token punctuation">(</span>baseUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> authRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Authenticate</span> <span class="token punctuation">{</span>
    provider <span class="token operator">=</span> <span class="token string">&quot;credentials&quot;</span><span class="token punctuation">,</span>
    UserName <span class="token operator">=</span> userName<span class="token punctuation">,</span>
    Password <span class="token operator">=</span> password<span class="token punctuation">,</span>
    RememberMe <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> authResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Post</span><span class="token punctuation">(</span>authRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//client.GetTokenCookie();        // JWT Bearer Token</span>
<span class="token comment">//client.GetRefreshTokenCookie(); // JWT Refresh Token</span>

<span class="token comment">// When no longer valid, Auto Refreshes JWT Bearer Token using Refresh Token Cookie</span>
<span class="token class-name"><span class="token keyword">var</span></span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Post</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">SecureRequest</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;World&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

Inspect<span class="token punctuation">.</span><span class="token function">printDump</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// print API Response into human-readable format (alias: \`response.PrintDump()\`)</span>
</code></pre></div><h4 id="typescript-js-service-client" tabindex="-1">TypeScript &amp; JS Service Client <a class="header-anchor" href="#typescript-js-service-client" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">let</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JsonServiceClient</span><span class="token punctuation">(</span>baseUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> authRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Authenticate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>provider<span class="token operator">:</span><span class="token string">&quot;credentials&quot;</span><span class="token punctuation">,</span>userName<span class="token punctuation">,</span>password<span class="token punctuation">,</span>rememberMe<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> authResponse <span class="token operator">=</span> <span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>authRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// In Browser can&#39;t read &quot;HttpOnly&quot; Token Cookies by design, In Node.js can access client.cookies  </span>

<span class="token comment">// When no longer valid, Auto Refreshes JWT Bearer Token using Refresh Token Cookie</span>
<span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SecureRequest</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;World&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Inspect<span class="token punctuation">.</span><span class="token function">printDump</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// print API Response into human-readable format</span>
</code></pre></div><h4 id="python-service-client" tabindex="-1">Python Service Client <a class="header-anchor" href="#python-service-client" aria-hidden="true">#</a></h4><div class="language-python"><pre><code>client <span class="token operator">=</span> JsonServiceClient<span class="token punctuation">(</span>baseUrl<span class="token punctuation">)</span>
authRequest <span class="token operator">=</span> Authenticate<span class="token punctuation">(</span>
    provider<span class="token operator">=</span><span class="token string">&quot;credentials&quot;</span><span class="token punctuation">,</span> user_name<span class="token operator">=</span>user_name<span class="token punctuation">,</span> password<span class="token operator">=</span>password<span class="token punctuation">,</span> rememberMe<span class="token operator">=</span>true<span class="token punctuation">)</span>
authResponse <span class="token operator">=</span> client<span class="token punctuation">.</span>post<span class="token punctuation">(</span>authRequest<span class="token punctuation">)</span>

<span class="token comment"># When no longer valid, Auto Refreshes JWT Bearer Token using Refresh Token Cookie</span>
response <span class="token operator">=</span> client<span class="token punctuation">.</span>post<span class="token punctuation">(</span>SecureRequest<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">#client.token_cookie         # JWT Bearer Token</span>
<span class="token comment">#client.refresh_token_cookie # JWT Refresh Token</span>

printdump<span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token comment"># print API Response into human-readable format</span>
</code></pre></div><h4 id="dart-service-clients" tabindex="-1">Dart Service Clients <a class="header-anchor" href="#dart-service-clients" aria-hidden="true">#</a></h4><div class="language-dart"><pre><code><span class="token keyword">var</span> client <span class="token operator">=</span> <span class="token class-name">ClientFactory</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>baseUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> authRequest <span class="token operator">=</span> <span class="token class-name">Authenticate</span><span class="token punctuation">(</span>provider<span class="token punctuation">:</span><span class="token string">&quot;credentials&quot;</span><span class="token punctuation">,</span> userName<span class="token punctuation">:</span>userName<span class="token punctuation">,</span> password<span class="token punctuation">:</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> authResponse <span class="token operator">=</span> <span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>authRequest<span class="token punctuation">)</span>

<span class="token comment">//client.getTokenCookie()        // JWT Bearer Token</span>
<span class="token comment">//client.getRefreshTokenCookie() // JWT Refresh Token</span>

<span class="token comment">// When no longer valid, Auto Refreshes JWT Bearer Token using Refresh Token Cookie</span>
<span class="token keyword">var</span> response <span class="token operator">=</span> <span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token class-name">SecureRequest</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span><span class="token string">&quot;World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Inspect</span><span class="token punctuation">.</span><span class="token function">printDump</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// print API Response into human-readable format</span>
</code></pre></div><h4 id="java-service-clients" tabindex="-1">Java Service Clients <a class="header-anchor" href="#java-service-clients" aria-hidden="true">#</a></h4><div class="language-java"><pre><code><span class="token class-name">JsonServiceClient</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JsonServiceClient</span><span class="token punctuation">(</span>baseUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Authenticate</span> authRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Authenticate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setProvider</span><span class="token punctuation">(</span><span class="token string">&quot;credentials&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setUserName</span><span class="token punctuation">(</span>userName<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setRememberMe</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">AuthenticateResponse</span> authResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>authRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//client.getTokenCookie();         // JWT Bearer Token</span>
<span class="token comment">//client.getRefreshTokenCookie();  // JWT Refresh Token</span>

<span class="token comment">// When no longer valid, Auto Refreshes JWT Bearer Token using Refresh Token Cookie</span>
<span class="token class-name">SecureResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SecureRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Inspect</span><span class="token punctuation">.</span><span class="token function">printDump</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// print API Response into human-readable format</span>
</code></pre></div><h4 id="kotlin-service-clients" tabindex="-1">Kotlin Service Clients <a class="header-anchor" href="#kotlin-service-clients" aria-hidden="true">#</a></h4><div class="language-kotlin"><pre><code><span class="token keyword">val</span> client <span class="token operator">=</span> new <span class="token function">JsonServiceClient</span><span class="token punctuation">(</span>baseUrl<span class="token punctuation">)</span>
<span class="token keyword">val</span> authResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token function">Authenticate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">apply</span> <span class="token punctuation">{</span>
    provider <span class="token operator">=</span> <span class="token string">&quot;credentials&quot;</span>
    userName <span class="token operator">=</span> userName
    password <span class="token operator">=</span> password
    rememberMe <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//client.tokenCookie         // JWT Bearer Token</span>
<span class="token comment">//client.refreshTokenCookie  // JWT Refresh Token</span>

<span class="token comment">// When no longer valid, Auto Refreshes JWT Bearer Token using Refresh Token Cookie</span>
<span class="token keyword">val</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token function">SecureRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">apply</span> <span class="token punctuation">{</span>
    name <span class="token operator">=</span> <span class="token string">&quot;World&quot;</span>    
<span class="token punctuation">}</span><span class="token punctuation">)</span>

Inspect<span class="token punctuation">.</span><span class="token function">printDump</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token comment">// print API Response into human-readable format</span>
</code></pre></div><h4 id="swift-service-client" tabindex="-1">Swift Service Client <a class="header-anchor" href="#swift-service-client" aria-hidden="true">#</a></h4><div class="language-swift"><pre><code><span class="token keyword">let</span> client <span class="token operator">=</span> <span class="token class-name">JsonServiceClient</span><span class="token punctuation">(</span>baseUrl<span class="token punctuation">:</span> baseUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> authRequest <span class="token operator">=</span> <span class="token class-name">Authenticate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
authRequest<span class="token punctuation">.</span>provider <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;credentials&quot;</span></span>
authRequest<span class="token punctuation">.</span>userName <span class="token operator">=</span> userName
authRequest<span class="token punctuation">.</span>password <span class="token operator">=</span> password
authRequest<span class="token punctuation">.</span>rememberMe <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">let</span> authResponse <span class="token operator">=</span> <span class="token keyword">try</span> client<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>authRequest<span class="token punctuation">)</span>

<span class="token comment">//client.getTokenCookie()        // JWT Bearer Token</span>
<span class="token comment">//client.getRefreshTokenCookie() // JWT Refresh Token</span>

<span class="token comment">// When no longer valid, Auto Refreshes JWT Bearer Token using Refresh Token Cookie</span>
<span class="token keyword">let</span> request <span class="token operator">=</span> <span class="token class-name">SecureRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
request<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;World&quot;</span></span>
<span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">try</span> client<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span>

<span class="token class-name">Inspect</span><span class="token punctuation">.</span><span class="token function">printDump</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token comment">// print API Response into human-readable format</span>
</code></pre></div>`,17),o=[p];function c(l,u,r,i,k,d){return s(),a("div",null,o)}var m=n(t,[["render",c]]);export{m as j};