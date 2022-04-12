import{_ as a,c as e,o as t,a as s,b as n}from"./app.da189b1e.js";const f='{"title":"Service Discovery","description":"","frontmatter":{"slug":"service-discovery","title":"Service Discovery"},"headers":[{"level":2,"title":"ServiceStack.Discovery.Consul","slug":"servicestack-discovery-consul"},{"level":2,"title":"ServiceStack.Discovery.Redis","slug":"servicestack-discovery-redis"},{"level":3,"title":"ServiceStack.SimpleCloudControl","slug":"servicestack-simplecloudcontrol"}],"relativePath":"service-discovery.md","lastUpdated":1649756885183}',o={},c=s('',3),p=n("div",{class:"nuget-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-700"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle text-lg text-white"},[n("p",null,[n("code",null,'<PackageReference Include="ServiceStack.Discovery.Consul" Version="6.*" />')])])]),n("div",{class:"flex"},[n("div",{class:"bg-sky-500 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),i=s(`__VP_STATIC_START__<p>Without any additional effort beyond registering the <code>ConsulFeature</code> plugin and starting a new ServiceStack Instance it provides an auto-updating, self-maintaining and periodically checked registry of available Services:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">Container</span> container<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">SetConfig</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">HostConfig</span> <span class="token punctuation">{</span>
        WebHostUrl <span class="token operator">=</span> <span class="token string">&quot;http://api.acme.com:1234&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Externally resolvable BaseUrl</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConsulFeature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Register the plugin, that&#39;s it!</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/release-notes/ServiceRegistration.png" alt=""></p><p>Once registered, the Service Gateway works as you&#39;d expect where internal requests are executed in process and external requests queries the Consul registry to discover the appropriate and available Service to call:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyService</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Service</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">RequestDTO</span> dto<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Gateway will automatically route external requests to correct service</span>
        <span class="token class-name"><span class="token keyword">var</span></span> internalCall <span class="token operator">=</span> Gateway<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">InternalDTO</span> <span class="token punctuation">{</span> <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> externalCall <span class="token operator">=</span> Gateway<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ExternalDTO</span> <span class="token punctuation">{</span> <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="https://raw.githubusercontent.com/MacLeanElectrical/servicestack-discovery-consul/master/assets/RequestDTOServiceDiscovery.png" alt="RequestDTO Service Discovery"></p><h2 id="servicestack-discovery-redis" tabindex="-1"><a href="https://github.com/rsafier/ServiceStack.Discovery.Redis" target="_blank" rel="noopener noreferrer">ServiceStack.Discovery.Redis</a> <a class="header-anchor" href="#servicestack-discovery-redis" aria-hidden="true">#</a></h2><p>The <a href="https://github.com/rsafier/ServiceStack.Discovery.Redis" target="_blank" rel="noopener noreferrer">RedisServiceDiscoveryFeature</a> by <a href="https://github.com/rsafier" target="_blank" rel="noopener noreferrer">Richard Safier</a> has similar goals to provide transparent service discovery but only requires access to Redis-backed datastore, but is otherwise just as easy to install:</p>__VP_STATIC_END__`,8),r=n("div",{class:"nuget-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-700"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle text-lg text-white"},[n("p",null,[n("code",null,'<PackageReference Include="ServiceStack.Discovery.Redis" Version="6.*" />')])])]),n("div",{class:"flex"},[n("div",{class:"bg-sky-500 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),l=s(`__VP_STATIC_START__<p>and Configure:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">Container</span> container<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Register</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IRedisClientsManager<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RedisManagerPool</span><span class="token punctuation">(</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
    <span class="token function">SetConfig</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">HostConfig</span> <span class="token punctuation">{</span>
        WebHostUrl <span class="token operator">=</span> <span class="token string">&quot;http://api.acme.com:1234&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">RedisServiceDiscoveryFeature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Once registered, calling the same Gateway API&#39;s function the same way with internal requests executed internally and external requests sent to the appropriate available node:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyService</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Service</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">RequestDTO</span> dto<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> internalCall <span class="token operator">=</span> Gateway<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">InternalDTO</span> <span class="token punctuation">{</span> <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> externalCall <span class="token operator">=</span> Gateway<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ExternalDTO</span> <span class="token punctuation">{</span> <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> 
        <span class="token punctuation">{</span>
            <span class="token class-name"><span class="token keyword">var</span></span> unknown <span class="token operator">=</span> Gateway<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ExternalDTOWithNoActiveNodesOnline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">RedisServiceDiscoveryGatewayException</span> e<span class="token punctuation">)</span> 
        <span class="token punctuation">{</span>
           <span class="token comment">// If a DTO type is not local or resolvable by Redis discovery process </span>
           <span class="token comment">// a RedisServiceDiscoveryGatewayException will be thrown</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Since all Redis Discovery data is stored in a redis instance the state of all available nodes can be viewed with any Redis GUI:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/release-notes/RedisDiscoveryScreenshot.png" alt=""></p><h3 id="servicestack-simplecloudcontrol" tabindex="-1"><a href="https://github.com/rsafier/ServiceStack.SimpleCloudControl" target="_blank" rel="noopener noreferrer">ServiceStack.SimpleCloudControl</a> <a class="header-anchor" href="#servicestack-simplecloudcontrol" aria-hidden="true">#</a></h3><p>In addition to this Redis Discovery Service Richard is also developing a series of ServiceStack plugins that enhances the functionality of ServiceStack.Discovery.Redis and provides cluster awareness to additional aspects of a ServiceStack AppHost&#39;s internal state.</p><h1 id="community-resources" tabindex="-1">Community Resources <a class="header-anchor" href="#community-resources" aria-hidden="true">#</a></h1><ul><li><a href="https://www.wwwlicious.com/servicestack-microservices-discovery-routing-3/" target="_blank" rel="noopener noreferrer">Service discovery, load balancing and routing</a> by <a href="https://twitter.com/wwwlicious" target="_blank" rel="noopener noreferrer">@wwwlicious</a></li></ul>__VP_STATIC_END__`,10),u=[c,p,i,r,l];function k(d,v,h,y,w,g){return t(),e("div",null,u)}var S=a(o,[["render",k]]);export{f as __pageData,S as default};
