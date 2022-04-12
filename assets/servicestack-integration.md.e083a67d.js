import{_ as n,c as s,o as a,a as e}from"./app.da189b1e.js";const m='{"title":"ServiceStack Integration","description":"","frontmatter":{"slug":"servicestack-integration","title":"ServiceStack Integration"},"headers":[{"level":2,"title":"Use ServiceStack Authentication","slug":"use-servicestack-authentication"},{"level":3,"title":"MVC and WebForms Examples","slug":"mvc-and-webforms-examples"},{"level":3,"title":"Integrating with ServiceStack from MVC or WebForms","slug":"integrating-with-servicestack-from-mvc-or-webforms"},{"level":3,"title":"Authentication Attributes","slug":"authentication-attributes"},{"level":3,"title":"Required Role or Permission","slug":"required-role-or-permission"},{"level":3,"title":"Calling ServiceStack Services Directly","slug":"calling-servicestack-services-directly"}],"relativePath":"servicestack-integration.md","lastUpdated":1649756885183}',t={},o=e(`<p>This article explains how to make use of ServiceStack components in existing <strong><a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> MVC</strong> and <strong>WebForms</strong> Web Applications. The base <code>ServiceStackController</code> and WebForms <code>ServiceStackPage</code> both share a common code-base to provide easy access to the same clean, high-performance components found in ServiceStack&#39;s <code>Service</code> base class, directly from within your MVC Controllers and WebForm pages.</p><p>This is an outline of the API&#39;s found in MVC&#39;s <code>ServiceStackController</code> and WebForms <code>ServiceStackPage</code>:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ServiceStackController</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Controller</span></span>
<span class="token punctuation">{</span>
    <span class="token comment">//...</span>
    <span class="token return-type class-name">IServiceStackProvider</span> ServiceStackProvider <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token return-type class-name">IAppSettings</span> AppSettings <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token return-type class-name">IHttpRequest</span> ServiceStackRequest <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token return-type class-name">IHttpResponse</span> ServiceStackResponse <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token return-type class-name">ICacheClient</span> Cache <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token return-type class-name">IDbConnection</span> Db <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token return-type class-name">IRedisClient</span> Redis <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token return-type class-name">IMessageFactory</span> MessageFactory <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token return-type class-name">IMessageProducer</span> MessageProducer <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token return-type class-name">ISessionFactory</span> SessionFactory <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token return-type class-name">ISession</span> SessionBag <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token return-type class-name"><span class="token keyword">bool</span></span> IsAuthenticated <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token return-type class-name">T</span> <span class="token generic-method"><span class="token function">TryResolve</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name">T</span> <span class="token generic-method"><span class="token function">ResolveService</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> requestDto<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">ForwardRequestToServiceStack</span><span class="token punctuation">(</span><span class="token class-name">IRequest</span> request<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name">IAuthSession</span> <span class="token function">GetSession</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">bool</span></span> reload <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name">TUserSession</span> <span class="token generic-method"><span class="token function">SessionAs</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TUserSession<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ClearSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token generic-method"><span class="token function">PublishMessage</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token class-name">T</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="use-servicestack-authentication" tabindex="-1">Use ServiceStack Authentication <a class="header-anchor" href="#use-servicestack-authentication" aria-hidden="true">#</a></h2><p>One benefit of integration with ServiceStack is to be able to make use of ServiceStack&#39;s simple and flexible <a href="/authentication-and-authorization">Authentication Providers</a> which require minimal configuration and supports a number of different <a href="/caching">Session Providers</a> and persistent <a href="/authentication-and-authorization#userauth-persistence---the-iuserauthrepository">Data Store back-ends</a> to make it easy to integrate with an existing environment.</p><h3 id="mvc-and-webforms-examples" tabindex="-1">MVC and WebForms Examples <a class="header-anchor" href="#mvc-and-webforms-examples" aria-hidden="true">#</a></h3><p>To illustrate the seamless integration with ServiceStack, we&#39;ve created 2 new authentication-enabled example websites:</p><ul><li><strong><a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> MVC</strong> Live Demo: <a href="http://mvc.servicestack.net/" target="_blank" rel="noopener noreferrer">mvc.servicestack.net</a> and <a href="https://github.com/ServiceStack/Test/tree/master/src/Mvc" target="_blank" rel="noopener noreferrer">source code</a></li><li><strong><a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> WebForms</strong> Live Demo: <a href="http://webforms.servicestack.net/" target="_blank" rel="noopener noreferrer">webforms.servicestack.net</a> and <a href="https://github.com/ServiceStack/Test/tree/master/src/WebForms" target="_blank" rel="noopener noreferrer">source code</a></li></ul><p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/release-notes/mvc-integration.png" alt="MVC with ServiceStack Authentication"></p><h3 id="integrating-with-servicestack-from-mvc-or-webforms" tabindex="-1">Integrating with ServiceStack from MVC or WebForms <a class="header-anchor" href="#integrating-with-servicestack-from-mvc-or-webforms" aria-hidden="true">#</a></h3><p>We&#39;ll go through the MVC example to showcase the different ways you can integrate with ServiceStack from an external Web Framework.</p><h4 id="using-resolveservice-to-call-services-directly" tabindex="-1">Using ResolveService to call Services directly <a class="header-anchor" href="#using-resolveservice-to-call-services-directly" aria-hidden="true">#</a></h4><p>The <code>Login</code> Action is a standard MVC Action handling HTML Form input accepting 3 parameters, a <code>userName</code>, <code>password</code> as well as a relative <code>redirect</code> url to redirect to when authentication is successful. Login uses the <code>ResolveService&lt;TService&gt;</code> API which just resolves an auto-wired instance of the ServiceStack <code>AuthenticateService</code> from the IOC and injects the current HTTP Request context, which we then use to call a method on the Service directly:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token return-type class-name">ActionResult</span> <span class="token function">Login</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> userName<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> password<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> redirect<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ModelState<span class="token punctuation">.</span>IsValid<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">try</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> authService <span class="token operator">=</span> <span class="token generic-method"><span class="token function">ResolveService</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>AuthenticateService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token class-name"><span class="token keyword">var</span></span> response <span class="token operator">=</span> authService<span class="token punctuation">.</span><span class="token function">Authenticate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Authenticate</span> <span class="token punctuation">{</span>
                    provider <span class="token operator">=</span> CredentialsAuthProvider<span class="token punctuation">.</span>Name<span class="token punctuation">,</span>
                    UserName <span class="token operator">=</span> userName<span class="token punctuation">,</span>
                    Password <span class="token operator">=</span> password<span class="token punctuation">,</span>
                    RememberMe <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">// add ASP.NET auth cookie</span>
                FormsAuthentication<span class="token punctuation">.</span><span class="token function">SetAuthCookie</span><span class="token punctuation">(</span>userName<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">return</span> <span class="token function">Redirect</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">.</span><span class="token function">IsNullOrEmpty</span><span class="token punctuation">(</span>redirect<span class="token punctuation">)</span> <span class="token punctuation">?</span> <span class="token string">&quot;/&quot;</span> <span class="token punctuation">:</span> redirect<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            ModelState<span class="token punctuation">.</span><span class="token function">AddModelError</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">.</span>Empty<span class="token punctuation">,</span> ex<span class="token punctuation">.</span>Message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">View</span><span class="token punctuation">(</span><span class="token string">&quot;Index&quot;</span><span class="token punctuation">,</span> <span class="token function">GetViewModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Since the above example calls the Service method directly any exceptions raised by the Service implementation are thrown and caught as normal</p></div><h4 id="using-execute-to-process-request-dto-s" tabindex="-1">Using Execute to process Request DTO&#39;s <a class="header-anchor" href="#using-execute-to-process-request-dto-s" aria-hidden="true">#</a></h4><p>The <code>Logout()</code> MVC Action uses ServiceStack&#39;s <code>Execute()</code> API which can call the desired ServiceStack Service with just a populated Request DTO:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token return-type class-name">ActionResult</span> <span class="token function">Logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Authenticate</span> <span class="token punctuation">{</span> provider <span class="token operator">=</span> <span class="token string">&quot;logout&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    FormsAuthentication<span class="token punctuation">.</span><span class="token function">SignOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

    <span class="token keyword">return</span> <span class="token function">Redirect</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="using-forwardrequesttoservicestack-to-proxy-http-requests" tabindex="-1">Using ForwardRequestToServiceStack to proxy HTTP Requests <a class="header-anchor" href="#using-forwardrequesttoservicestack-to-proxy-http-requests" aria-hidden="true">#</a></h4><p>The <code>ForwardingController</code> handles OAuth callbacks that have been configured to callback to <code>/auth/*</code> route which is handled by MVC as ServiceStack is mounted at and only configured to handle <code>/api</code> requests.</p><p>Instead of creating new OAuth Applications with each provider to use the new <code>/api/auth/*</code> callback url so ServiceStack can handle the OAuth callback, we can use just use the new <code>ForwardRequestToServiceStack()</code> which just forwards the incoming HTTP Request from MVC to ServiceStack to process, effectively acting as a proxy:</p><div class="language-csharp"><pre><code>routes<span class="token punctuation">.</span><span class="token function">MapRoute</span><span class="token punctuation">(</span><span class="token string">&quot;Forwarding&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;auth/{*pathinfo}&quot;</span><span class="token punctuation">,</span> 
    <span class="token keyword">new</span> <span class="token punctuation">{</span> controller <span class="token operator">=</span> <span class="token string">&quot;Forwarding&quot;</span><span class="token punctuation">,</span> action <span class="token operator">=</span> <span class="token string">&quot;Index&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token range operator">..</span><span class="token punctuation">.</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ForwardingController</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ServiceStackController</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">ActionResult</span> <span class="token function">Index</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> response <span class="token operator">=</span> <span class="token function">ForwardRequestToServiceStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ServiceStackResponse<span class="token punctuation">.</span>IsClosed<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">EmptyResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name"><span class="token keyword">string</span></span> redirectUrl<span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> httpResult <span class="token operator">=</span> response <span class="token keyword">as</span> <span class="token class-name">IHttpResult</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>httpResult <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> httpResult<span class="token punctuation">.</span>Headers<span class="token punctuation">.</span><span class="token function">TryGetValue</span><span class="token punctuation">(</span>HttpHeaders<span class="token punctuation">.</span>Location<span class="token punctuation">,</span> <span class="token keyword">out</span> redirectUrl<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token function">Redirect</span><span class="token punctuation">(</span>redirectUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token function">Redirect</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>The <code>Execute()</code> and <code>ForwardRequestToServiceStack()</code> are high-level API&#39;s that call into ServiceStack&#39;s internal Request pipeline, executing any Action Filters and also converts any exceptions into a populated serializable Response DTO with a populated <code>ResponseStatus</code> as would be returned to Service Clients.</p><h3 id="authentication-attributes" tabindex="-1">Authentication Attributes <a class="header-anchor" href="#authentication-attributes" aria-hidden="true">#</a></h3><p>Since we&#39;re using ServiceStack for Authentication, we&#39;re also able to re-use ServiceStack&#39;s Authentication Attribute Filters directly on MVC Controllers and WebForm Pages just as if they were ServiceStack Services, e.g:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Authenticate</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AuthOnlyController</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ServiceStackController</span></span> 
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">ActionResult</span> <span class="token function">Index</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">View</span><span class="token punctuation">(</span><span class="token generic-method"><span class="token function">SessionAs</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>CustomUserSession<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>         
<span class="token punctuation">}</span>
</code></pre></div><p>The above controller hanldes the <a href="http://mvc.servicestack.net/AuthOnly" target="_blank" rel="noopener noreferrer">mvc.servicestack.net/AuthOnly</a> route which only allows access to Authorized users. If a user is not authenticated they&#39;re automatically redirected to <a href="http://mvc.servicestack.net/?redirect=%2fAuthOnly#f=Unauthorized" target="_blank" rel="noopener noreferrer">/?redirect=/AuthOnly#f=Unauthorized</a> to prompt the user to login, after successfully logging in it will redirect back to the original <code>/AuthOnly</code> url.</p><h3 id="required-role-or-permission" tabindex="-1">Required Role or Permission <a class="header-anchor" href="#required-role-or-permission" aria-hidden="true">#</a></h3><p>The <code>[RequiredRole]</code> and <code>[RequiredPermission]</code> attributes work similar to the <code>[Authentication]</code> attribute except they also assert that the user is a member of the specified role:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">RequiredRole</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;TheRole&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RequiresRoleController</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ServiceStackController</span></span> 
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">ActionResult</span> <span class="token function">Index</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">View</span><span class="token punctuation">(</span><span class="token generic-method"><span class="token function">SessionAs</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>CustomUserSession<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>The above Controller handles the <a href="http://mvc.servicestack.net/RequiresRole" target="_blank" rel="noopener noreferrer">/RequiresRole</a> Route and will only grant access if the Authenticated User is also a member of the <strong>TheRole</strong>.</p><h3 id="calling-servicestack-services-directly" tabindex="-1">Calling ServiceStack Services Directly <a class="header-anchor" href="#calling-servicestack-services-directly" aria-hidden="true">#</a></h3><p>The simplest way to consume ServiceStack Services requiring the least effort and moving parts is to call them directly:</p><h4 id="using-servicestack-oauth-in-mvc" tabindex="-1">Using ServiceStack OAuth in MVC <a class="header-anchor" href="#using-servicestack-oauth-in-mvc" aria-hidden="true">#</a></h4><p>Integrating with ServiceStack&#39;s OAuth providers requires the least effort as they&#39;re linkable directly in the format <code>/api/auth/{provider}</code> which is handled by ServiceStack&#39;s OAuth Service who initiates the Authentication process by redirecting to the selected OAuth provider:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/release-notes/mvc-auth.png" alt="MVC OAuth with HTML"></p><h4 id="calling-servicestack-with-ajax-in-mvc" tabindex="-1">Calling ServiceStack with Ajax in MVC <a class="header-anchor" href="#calling-servicestack-with-ajax-in-mvc" aria-hidden="true">#</a></h4><p>Posting HTML Forms directly to ServiceStack Services isn&#39;t that much more effort, Start with a plain HTML Form with field names that match with the Services property names:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/release-notes/mvc-register.png" alt="MVC Register with HTML"></p><p>We can then use ServiceStack&#39;s built-in <a href="/ss-utils-js">ss-utils.js JavaScript Libraray</a> to take care of Ajaxifying, auto-binding and submitting the form via Ajax. It also has built-in support for <a href="/ss-utils-js#bootstrap-forms">Bootstrap Forms Field Validation conventions</a> to automatically bind errors to the appropriate fields. The only custom code required is to bind the form is then:</p><div class="language-javascript"><pre><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#form-register&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bindForm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">r</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>In this case we&#39;ve added a success callback to redirect to the home page if the registration was successful which will either be authenticated with the newly registered user if <strong>Auto Login</strong> was checked, otherwise you can use the login form to Sign in as the newly registered user.</p>`,42),p=[o];function c(i,r,l,u,k,d){return a(),s("div",null,p)}var g=n(t,[["render",c]]);export{m as __pageData,g as default};
