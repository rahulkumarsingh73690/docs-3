import{_ as s,c as n,o as a,a as e}from"./app.da189b1e.js";const y=`{"title":"Request & Response filters","description":"","frontmatter":{"slug":"request-and-response-filters","title":"Request & Response filters"},"headers":[{"level":2,"title":"Global Request Filters","slug":"global-request-filters"},{"level":3,"title":"Async","slug":"async"},{"level":2,"title":"Global Response Filters","slug":"global-response-filters"},{"level":2,"title":"Global Request and Response Filters","slug":"global-request-and-response-filters"},{"level":3,"title":"Typed Request Filters","slug":"typed-request-filters"},{"level":3,"title":"Autowired Typed Request Filters","slug":"autowired-typed-request-filters"},{"level":3,"title":"Apply custom behavior to multiple DTO's with Interfaces","slug":"apply-custom-behavior-to-multiple-dto-s-with-interfaces"},{"level":2,"title":"Message Queue Endpoints","slug":"message-queue-endpoints"}],"relativePath":"request-and-response-filters.md","lastUpdated":1649756885179}`,t={},p=e(`__VP_STATIC_START__<p>ServiceStack&#39;s Global Request and Response filter lets you apply your own generic custom behavior to ServiceStack Requests. These should be registered in your <code>AppHost.Configure()</code> Startup:</p><h2 id="global-request-filters" tabindex="-1">Global Request Filters <a class="header-anchor" href="#global-request-filters" aria-hidden="true">#</a></h2><p>The Request Filters are applied before the service gets called and accepts: (<a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/Web/IRequest.cs" target="_blank" rel="noopener noreferrer">IRequest</a>, <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/Web/IResponse.cs" target="_blank" rel="noopener noreferrer">IResponse</a>, RequestDto) e.g:</p><div class="language-csharp"><pre><code><span class="token comment">//Global Request Filter to check if the user has a session initialized</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>GlobalRequestFilters<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> requestDto<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> sessionId <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">GetCookieValue</span><span class="token punctuation">(</span><span class="token string">&quot;user-session&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>sessionId <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">ReturnAuthRequired</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="async" tabindex="-1">Async <a class="header-anchor" href="#async" aria-hidden="true">#</a></h3><p>Use <code>GlobalRequestFiltersAsync</code> when you need to make async requests in your Global Request Filters, e.g:</p><p>Simplified example of ServiceStack&#39;s <a href="/validation">Validation Feature</a>:</p><div class="language-csharp"><pre><code><span class="token comment">//Global Async Request Filter to automatically validate a Request DTO</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>GlobalRequestFiltersAsync<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> requestDto<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
<span class="token punctuation">{</span>    
    <span class="token class-name"><span class="token keyword">var</span></span> validator <span class="token operator">=</span> ValidatorCache<span class="token punctuation">.</span><span class="token function">GetValidator</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> requestDto<span class="token punctuation">.</span><span class="token function">GetType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>validator <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>

    <span class="token class-name"><span class="token keyword">var</span></span> validationResult <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">Validate</span><span class="token punctuation">(</span>validator<span class="token punctuation">,</span> req<span class="token punctuation">,</span> requestDto<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>validationResult<span class="token punctuation">.</span>IsValid<span class="token punctuation">)</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>

    <span class="token class-name"><span class="token keyword">var</span></span> errorResponse <span class="token operator">=</span> DtoUtils<span class="token punctuation">.</span><span class="token function">CreateErrorResponse</span><span class="token punctuation">(</span>requestDto<span class="token punctuation">,</span> validationResult<span class="token punctuation">.</span><span class="token function">ToErrorResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">WriteToResponse</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> errorResponse<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="info custom-block"><p class="custom-block-title">Tip</p><p>If you&#39;re writing your own response to the response stream inside the response filter, add <code>res.EndRequest();</code> to signal to ServiceStack not to do anymore processing for this request</p></div><p>Simple Rate-limiting example:</p><div class="language-csharp"><pre><code>GlobalRequestFiltersAsync<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span>res<span class="token punctuation">,</span>dto<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> response <span class="token operator">=</span> <span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">CheckRateLimit</span> <span class="token punctuation">{</span> 
        Service <span class="token operator">=</span> dto<span class="token punctuation">.</span><span class="token function">GetType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Name<span class="token punctuation">,</span>
        IpAddress <span class="token operator">=</span> req<span class="token punctuation">.</span>UserHostAddress<span class="token punctuation">,</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>RateLimitExceeded<span class="token punctuation">)</span> 
     <span class="token punctuation">{</span>
         res<span class="token punctuation">.</span>StatusCode <span class="token operator">=</span> <span class="token number">403</span><span class="token punctuation">;</span>
         res<span class="token punctuation">.</span>StatusDescription <span class="token operator">=</span> <span class="token string">&quot;RateLimitExceeded&quot;</span><span class="token punctuation">;</span>
         res<span class="token punctuation">.</span><span class="token function">EndRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="global-response-filters" tabindex="-1">Global Response Filters <a class="header-anchor" href="#global-response-filters" aria-hidden="true">#</a></h2><p>The Response Filters are applied after your service is called and accepts: (<a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/Web/IRequest.cs" target="_blank" rel="noopener noreferrer">IRequest</a>, <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/Web/IResponse.cs" target="_blank" rel="noopener noreferrer">IResponse</a>, ResponseDto) e.g:</p><div class="language-csharp"><pre><code><span class="token comment">//Add a response filter to add a &#39;Content-Disposition&#39; header so browsers treat it as a native .csv file</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>GlobalResponseFilters<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> responseDto<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>ResponseContentType <span class="token operator">==</span> ContentType<span class="token punctuation">.</span>Csv<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">AddHeader</span><span class="token punctuation">(</span>HttpHeaders<span class="token punctuation">.</span>ContentDisposition<span class="token punctuation">,</span>
        <span class="token keyword">string</span><span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">&quot;attachment;filename={0}.csv&quot;</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>OperationName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="global-request-and-response-filters" tabindex="-1">Global Request and Response Filters <a class="header-anchor" href="#global-request-and-response-filters" aria-hidden="true">#</a></h2><ul><li><code>PreRequestFilters</code> - Global Filter executed at the start of all ServiceStack Requests</li><li><code>GlobalRequestFilters</code> - Global Request Filter for ServiceStack Service Requests</li><li><code>GlobalResponseFilters</code> - Global Response Filter for ServiceStack Service Requests</li><li><code>GatewayRequestFilters</code> - Request Filter for <a href="/service-gateway">Service Gateway</a> Requests</li><li><code>GatewayResponseFilters</code> - Response Filter for <a href="/service-gateway">Service Gateway</a> Requests</li><li><code>GlobalMessageRequestFilters</code> - Request Filter for <a href="/messaging">Service MQ</a> Requests</li><li><code>GlobalMessageResponseFilters</code> - Response Filter for <a href="/messaging">Service MQ</a> Requests</li></ul><p>Async versions are also available:</p><ul><li><code>GlobalRequestFiltersAsync</code> - Global Request Filter for ServiceStack Service Requests</li><li><code>GlobalResponseFiltersAsync</code> - Global Response Filter for ServiceStack Service Requests</li><li><code>GatewayRequestFiltersAsync</code> - Request Filter for <a href="/service-gateway">Service Gateway</a> Requests</li><li><code>GatewayResponseFiltersAsync</code> - Response Filter for <a href="/service-gateway">Service Gateway</a> Requests</li><li><code>GlobalMessageRequestFiltersAsync</code> - Request Filter for <a href="/messaging">Service MQ</a> Requests</li><li><code>GlobalMessageResponseFiltersAsync</code> - Response Filter for <a href="/messaging">Service MQ</a> Requests</li></ul><h3 id="typed-request-filters" tabindex="-1">Typed Request Filters <a class="header-anchor" href="#typed-request-filters" aria-hidden="true">#</a></h3><p>A more typed API to register Global Request and Response filters per Request DTO Type are available under the <code>RegisterTyped*</code> API&#39;s in AppHost where you can register both typed Request and Response Filters for HTTP and MQ Services independently:</p><div class="language-csharp"><pre><code><span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token generic-method"><span class="token function">RegisterTypedRequestFilter</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token class-name">Action<span class="token punctuation">&lt;</span>IRequest<span class="token punctuation">,</span> IResponse<span class="token punctuation">,</span> T<span class="token punctuation">&gt;</span></span> filterFn<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token generic-method"><span class="token function">RegisterTypedResponseFilter</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token class-name">Action<span class="token punctuation">&lt;</span>IRequest<span class="token punctuation">,</span> IResponse<span class="token punctuation">,</span> T<span class="token punctuation">&gt;</span></span> filterFn<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token generic-method"><span class="token function">RegisterTypedMessageRequestFilter</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token class-name">Action<span class="token punctuation">&lt;</span>IRequest<span class="token punctuation">,</span> IResponse<span class="token punctuation">,</span> T<span class="token punctuation">&gt;</span></span> filterFn<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token generic-method"><span class="token function">RegisterTypedMessageResponseFilter</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token class-name">Action<span class="token punctuation">&lt;</span>IRequest<span class="token punctuation">,</span> IResponse<span class="token punctuation">,</span> T<span class="token punctuation">&gt;</span></span> filterFn<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Here&#39;s an example usage that enables more flexibility in multi-tenant solutions by attaching custom data on incoming requests, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">Container</span> container<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token generic-method"><span class="token function">RegisterTypedRequestFilter</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Resource<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> dto<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> route <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">GetRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>route <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> route<span class="token punctuation">.</span>Path <span class="token operator">==</span> <span class="token string">&quot;/tenant/{TenantName}/resource&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            dto<span class="token punctuation">.</span>SubResourceName <span class="token operator">=</span> <span class="token string">&quot;CustomResource&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="autowired-typed-request-filters" tabindex="-1">Autowired Typed Request Filters <a class="header-anchor" href="#autowired-typed-request-filters" aria-hidden="true">#</a></h3><p>You can also register Autowired Typed Request and Response Filters which lets you handle Request DTOs in a Typed Filter similar to how Autowired Services handles Typed Request DTOs with access to IOC injected dependencies.</p><p>Autowired Typed Filters just needs to implement <code>ITypedFilter&lt;TRequest&gt;</code> and can be registered in the IOC like a regular dependency, e.g:</p><div class="language-csharp"><pre><code>container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">RegisterAutoWiredAs</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Dependency<span class="token punctuation">,</span> IDependency<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">RegisterAutoWired</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TypedRequestFilter<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Then can be registered using the new <code>RegisterTypedRequestFilter</code> overload:</p><div class="language-csharp"><pre><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">RegisterTypedRequestFilter</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> c<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Resolve</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TypedRequestFilter<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Which invokes the Typed Request Filter on each <code>MyRequest</code> where it&#39;s able to access any IOC injected dependencies, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">class</span> <span class="token class-name">TypedRequestFilter</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ITypedFilter<span class="token punctuation">&lt;</span>MyRequest<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">IDependency</span> Dependency <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">// injected by IOC</span>
 
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Invoke</span><span class="token punctuation">(</span><span class="token class-name">IRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">IResponse</span> res<span class="token punctuation">,</span> <span class="token class-name">MyRequest</span> dto<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token comment">// Handle MyRequest using a Request Filter</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Dependency<span class="token punctuation">.</span><span class="token function">GrantAccess</span><span class="token punctuation">(</span>dto<span class="token punctuation">,</span> req<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span>StatusCode <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>HttpStatusCode<span class="token punctuation">.</span>Forbidden<span class="token punctuation">;</span>
            res<span class="token punctuation">.</span>StatusDescription <span class="token operator">=</span> <span class="token string">&quot;Thou shall not pass&quot;</span><span class="token punctuation">;</span>
            res<span class="token punctuation">.</span><span class="token function">EndRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="apply-custom-behavior-to-multiple-dto-s-with-interfaces" tabindex="-1">Apply custom behavior to multiple DTO&#39;s with Interfaces <a class="header-anchor" href="#apply-custom-behavior-to-multiple-dto-s-with-interfaces" aria-hidden="true">#</a></h3><p>Typed Filters can also be used to apply custom behavior on Request DTO&#39;s sharing a common interface, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">Container</span> container<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token generic-method"><span class="token function">RegisterTypedRequestFilter</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IHasSharedProperty<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> dtoInterface<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        dtoInterface<span class="token punctuation">.</span>SharedProperty <span class="token operator">=</span> <span class="token string">&quot;Is Shared&quot;</span><span class="token punctuation">;</span>    
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="message-queue-endpoints" tabindex="-1">Message Queue Endpoints <a class="header-anchor" href="#message-queue-endpoints" aria-hidden="true">#</a></h2><p>Non-HTTP requests like <a href="/redis-mq">Redis MQ</a> are treated as <em>Internal Requests</em> which only execute the alternate <code>GlobalMessageRequestFilters</code> and <code>GlobalMessageResponseFilters</code> and Action <a href="/filter-attributes">Filter attributes</a>.</p>__VP_STATIC_END__`,36),o=[p];function c(l,u,i,r,k,d){return a(),n("div",null,o)}var h=s(t,[["render",c]]);export{y as __pageData,h as default};
