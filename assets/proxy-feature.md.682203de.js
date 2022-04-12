import{_ as n,c as s,o as a,a as t}from"./app.da189b1e.js";const m='{"title":"Proxy Feature","description":"","frontmatter":{"title":"Proxy Feature","slug":"proxy-feature"},"relativePath":"proxy-feature.md","lastUpdated":1649756885143}',e={},p=t(`<p>The <code>ProxyFeature</code> plugin is an application-level proxy that can be used to transparently proxy HTTP Requests through to downstream servers whose behavior can be customized with custom C# hooks to control how requests are proxied.</p><p><code>ProxyFeature</code> registers an async/non-blocking <code>RawHttpHandler</code> which bypasses ServiceStack&#39;s Request Pipeline that in <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> is executed as an <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> <code>IHttpAsyncHandler</code> so it should be flexible and performant enough to handle many demanding workloads.</p><p>The example configuration below registers multiple proxies which proxies all requests to <code>/techstacks</code>, <code>/marketing</code> or <code>/finance</code> endpoints to their configured downstream servers:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ProxyFeature</span><span class="token punctuation">(</span>
    <span class="token named-parameter punctuation">matchingRequests</span><span class="token punctuation">:</span> req <span class="token operator">=&gt;</span> req<span class="token punctuation">.</span>PathInfo<span class="token punctuation">.</span><span class="token function">StartsWith</span><span class="token punctuation">(</span><span class="token string">&quot;/techstacks&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token named-parameter punctuation">resolveUrl</span><span class="token punctuation">:</span>req <span class="token operator">=&gt;</span> <span class="token interpolation-string"><span class="token string">$&quot;http://</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp"><span class="token function">resolve</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">.techstacks.io&quot;</span></span> <span class="token operator">+</span> req<span class="token punctuation">.</span>RawUrl<span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span><span class="token string">&quot;/techstacks&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 
Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ProxyFeature</span><span class="token punctuation">(</span>
    <span class="token named-parameter punctuation">matchingRequests</span><span class="token punctuation">:</span> req <span class="token operator">=&gt;</span> req<span class="token punctuation">.</span>PathInfo<span class="token punctuation">.</span><span class="token function">StartsWith</span><span class="token punctuation">(</span><span class="token string">&quot;/marketing&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token named-parameter punctuation">resolveUrl</span><span class="token punctuation">:</span>req <span class="token operator">=&gt;</span> <span class="token string">&quot;http://marketing.domain.com&quot;</span> <span class="token operator">+</span> req<span class="token punctuation">.</span>RawUrl<span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span><span class="token string">&quot;/marketing&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 
Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ProxyFeature</span><span class="token punctuation">(</span>
    <span class="token named-parameter punctuation">matchingRequests</span><span class="token punctuation">:</span> req <span class="token operator">=&gt;</span> req<span class="token punctuation">.</span>PathInfo<span class="token punctuation">.</span><span class="token function">StartsWith</span><span class="token punctuation">(</span><span class="token string">&quot;/finance&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token named-parameter punctuation">resolveUrl</span><span class="token punctuation">:</span>req <span class="token operator">=&gt;</span> <span class="token string">&quot;http://finance.domain.com&quot;</span> <span class="token operator">+</span> req<span class="token punctuation">.</span>RawUrl<span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span><span class="token string">&quot;/finance&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><p>Just like a normal HTTP Proxy, <code>ProxyFeature</code> forwards all the HTTP Request Headers and returns all the HTTP Response Headers and body of the downstream server inc. HTTP Error Responses. This works especially well with ServiceStack&#39;s message-based design as the proxied endpoint e.g <code>/techstacks</code> can be treated as if it were the <strong>BaseUrl</strong> for the downstream server which allows external clients to treat it like they&#39;re communicating with the downstream server directly despite every request being transparently proxied behind a central external ServiceStack instance.</p><p>One potential use-case is to enable smart load balancing which lets you use C# to dynamically control which external downstream server requests are proxied to.</p><p>Thanks to ServiceStack&#39;s clean Service Gateway design you can use the clean POCO DTOs from any server instance, which you can get using the <a href="https://docs.servicestack.net/dotnet-tool" target="_blank" rel="noopener noreferrer">x dotnet tool</a> or <a href="https://github.com/ServiceStack/servicestack-cli" target="_blank" rel="noopener noreferrer">npm servicestack-cli</a> utils from either the public url or proxy endpoint url, e.g:</p><div class="language-bash"><pre><code>$ x csharp https://techstacks.io
$ x csharp https://external.domain.com/techstacks
</code></pre></div><p>The resulting DTOs can be used with any <a href="/csharp-client#built-in-clients">.NET Service Client</a>, configured with the proxy endpoint as the <strong>BaseUrl</strong>:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JsonServiceClient</span><span class="token punctuation">(</span><span class="token string">&quot;https://external.domain.com/techstacks&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token class-name"><span class="token keyword">var</span></span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">GetTechnology</span> <span class="token punctuation">{</span> Slug <span class="token operator">=</span> <span class="token string">&quot;ServiceStack&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
response<span class="token punctuation">.</span><span class="token function">PrintDump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Another potential use-case is to have the proxy act like a facade to access multiple internal microservices that can be made available behind a single external URL, e.g:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> authRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Authenticate</span> <span class="token punctuation">{</span> <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
 
<span class="token class-name"><span class="token keyword">var</span></span> marketingClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JsonServiceClient</span><span class="token punctuation">(</span><span class="token string">&quot;https://external.domain.com/marketing&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> authResponse <span class="token operator">=</span> marketingClient<span class="token punctuation">.</span><span class="token function">Post</span><span class="token punctuation">(</span>authRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token class-name"><span class="token keyword">var</span></span> financeClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JsonHttpClient</span><span class="token punctuation">(</span><span class="token string">&quot;https://external.domain.com/finance&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> authResponse <span class="token operator">=</span> <span class="token keyword">await</span> financeClient<span class="token punctuation">.</span><span class="token function">PostAsync</span><span class="token punctuation">(</span>authRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>When needed, there&#39;s a number of customization options available which enables complete control in how the request is proxied and ultimately what response is returned to clients:</p><div class="language-csharp"><pre><code><span class="token keyword">class</span> <span class="token class-name">ProxyFeature</span>
<span class="token punctuation">{</span>
    <span class="token comment">// Required filters to specify which requests to proxy and which url to use</span>
    <span class="token function">ProxyFeature</span><span class="token punctuation">(</span>
        <span class="token class-name">Func<span class="token punctuation">&lt;</span>IHttpRequest<span class="token punctuation">,</span> <span class="token keyword">bool</span><span class="token punctuation">&gt;</span></span> matchingRequests<span class="token punctuation">,</span> <span class="token comment">// Which requests should be proxied</span>
        <span class="token class-name">Func<span class="token punctuation">&lt;</span>IHttpRequest<span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> resolveUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// Which downstream url to use </span>
 
    <span class="token comment">// Customize the HTTP Request Headers that are sent to downstream server</span>
    Action<span class="token operator">&lt;</span>IHttpRequest<span class="token punctuation">,</span> HttpWebRequest<span class="token operator">&gt;</span> ProxyRequestFilter
 
    <span class="token comment">// Customize the downstream HTTP Response Headers that are returned to client</span>
    Action<span class="token operator">&lt;</span>IHttpResponse<span class="token punctuation">,</span> HttpWebResponse<span class="token operator">&gt;</span> ProxyResponseFilter
 
    <span class="token comment">// Inspect or Transform the HTTP Request Body that&#39;s sent downstream</span>
    Func<span class="token operator">&lt;</span>IHttpRequest<span class="token punctuation">,</span> Stream<span class="token punctuation">,</span> Task<span class="token operator">&lt;</span>Stream<span class="token operator">&gt;&gt;</span> TransformRequest
 
    <span class="token comment">// Inspect or Transform the downstream HTTP Response Body that&#39;s returned</span>
    Func<span class="token operator">&lt;</span>IHttpResponse<span class="token punctuation">,</span> Stream<span class="token punctuation">,</span> Task<span class="token operator">&lt;</span>Stream<span class="token operator">&gt;&gt;</span> TransformResponse
<span class="token punctuation">}</span>
</code></pre></div><p>So you could use the <code>TransformResponse</code> delegate for instance to rewrite any internal urls to use external urls with something like:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ProxyFeature</span><span class="token punctuation">(</span>
    <span class="token named-parameter punctuation">matchingRequests</span><span class="token punctuation">:</span> req <span class="token operator">=&gt;</span> req<span class="token punctuation">.</span>PathInfo<span class="token punctuation">.</span><span class="token function">StartsWith</span><span class="token punctuation">(</span><span class="token string">&quot;/techstacks&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token named-parameter punctuation">resolveUrl</span><span class="token punctuation">:</span> req <span class="token operator">=&gt;</span> <span class="token interpolation-string"><span class="token string">$&quot;http://</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp"><span class="token function">resolve</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">.techstacks.io&quot;</span></span> <span class="token operator">+</span> req<span class="token punctuation">.</span>RawUrl<span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span><span class="token string">&quot;/techstacks&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        TransformResponse <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>res<span class="token punctuation">,</span> responseStream<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
        <span class="token punctuation">{</span>
            <span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">StreamReader</span><span class="token punctuation">(</span>responseStream<span class="token punctuation">,</span> Encoding<span class="token punctuation">.</span>UTF8<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name"><span class="token keyword">var</span></span> responseBody <span class="token operator">=</span> <span class="token keyword">await</span> reader<span class="token punctuation">.</span><span class="token function">ReadToEndAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name"><span class="token keyword">var</span></span> replacedBody <span class="token operator">=</span> responseBody<span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span>
                <span class="token string">&quot;https://techstacks.io&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;https://external.domain.com/techstacks&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> MemoryStreamFactory<span class="token punctuation">.</span><span class="token function">GetStream</span><span class="token punctuation">(</span>replacedBody<span class="token punctuation">.</span><span class="token function">ToUtf8Bytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,16),o=[p];function c(r,u,l,i,k,d){return a(),s("div",null,o)}var g=n(e,[["render",c]]);export{m as __pageData,g as default};
