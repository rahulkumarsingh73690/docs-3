import{_ as s,c as t,o as e,b as n,e as a,a as p}from"./app.da189b1e.js";const w=`{"title":"MVC Integration","description":"","frontmatter":{"slug":"mvc-integration","title":"MVC Integration"},"headers":[{"level":3,"title":"Add ServiceStack to an existing MVC Project","slug":"add-servicestack-to-an-existing-mvc-project"},{"level":3,"title":"Enabling ServiceStack in Web.Config","slug":"enabling-servicestack-in-web-config"},{"level":3,"title":"Add your ServiceStack AppHost","slug":"add-your-servicestack-apphost"},{"level":3,"title":"Inferring ServiceStack's HandlerFactoryPath (/api)","slug":"inferring-servicestack-s-handlerfactorypath-api"},{"level":3,"title":"Initializing ServiceStack","slug":"initializing-servicestack"},{"level":3,"title":"Removing Web API","slug":"removing-web-api"},{"level":2,"title":"Optional Configuration","slug":"optional-configuration"},{"level":3,"title":"Sharing dependencies with MVC Controllers","slug":"sharing-dependencies-with-mvc-controllers"},{"level":2,"title":"Calling ServiceStack Services from MVC Controllers","slug":"calling-servicestack-services-from-mvc-controllers"},{"level":3,"title":"Using the Service Gateway","slug":"using-the-service-gateway"},{"level":3,"title":"Calling Services Directly","slug":"calling-services-directly"},{"level":3,"title":"Adding Mini Profiler","slug":"adding-mini-profiler"},{"level":2,"title":"Accessing ServiceStack from MVC","slug":"accessing-servicestack-from-mvc"}],"relativePath":"mvc-integration.md","lastUpdated":1649756885139}`,o={},c=n("h3",{id:"add-servicestack-to-an-existing-mvc-project",tabindex:"-1"},[a("Add ServiceStack to an existing MVC Project "),n("a",{class:"header-anchor",href:"#add-servicestack-to-an-existing-mvc-project","aria-hidden":"true"},"#")],-1),l=n("p",null,[a("You can easily add ServiceStack to any "),n("a",{href:"http://ASP.NET",target:"_blank",rel:"noopener noreferrer"},"ASP.NET"),a(" MVC project by getting it from NuGet with:")],-1),i=n("div",{class:"nuget-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-700"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle text-lg text-white"},[n("p",null,[n("code",null,'<PackageReference Include="ServiceStack.Mvc" Version="6.*" />')])])]),n("div",{class:"flex"},[n("div",{class:"bg-sky-500 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),r=p(`__VP_STATIC_START__<p>This install ServiceStack with additional (and optional) integration support for MVC letting you use ServiceStack&#39;s IOC to initialize MVC controllers or create MVC Controllers with built-in access to ServiceStack&#39;s components.</p><h3 id="enabling-servicestack-in-web-config" tabindex="-1">Enabling ServiceStack in Web.Config <a class="header-anchor" href="#enabling-servicestack-in-web-config" aria-hidden="true">#</a></h3><p>Typically when hosting ServiceStack with MVC you&#39;d want to host it at the <code>/api</code> custom route which you can do by adding the IIS7+ configuration below to your <strong>Web.config</strong>:</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>location</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>api<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>system.web</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>httpHandlers</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ServiceStack.HttpHandlerFactory, ServiceStack<span class="token punctuation">&quot;</span></span> 
           <span class="token attr-name">verb</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>httpHandlers</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>system.web</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>system.webServer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modules</span> <span class="token attr-name">runAllManagedModulesForAllRequests</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>validation</span> <span class="token attr-name">validateIntegratedModeConfiguration</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>handlers</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ServiceStack.Factory<span class="token punctuation">&quot;</span></span> 
           <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ServiceStack.HttpHandlerFactory, ServiceStack<span class="token punctuation">&quot;</span></span> <span class="token attr-name">verb</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span> 
           <span class="token attr-name">preCondition</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>integratedMode<span class="token punctuation">&quot;</span></span> 
           <span class="token attr-name">resourceType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Unspecified<span class="token punctuation">&quot;</span></span> <span class="token attr-name">allowPathInfo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>handlers</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>system.webServer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>location</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>See <a href="/servicestack-side-by-side-with-another-web-framework">Run Side-by-Side with another web framework</a> for other web.config examples of hosting ServiceStack, e.g with IIS6/Mono</p></div><h3 id="add-your-servicestack-apphost" tabindex="-1">Add your ServiceStack AppHost <a class="header-anchor" href="#add-your-servicestack-apphost" aria-hidden="true">#</a></h3><p>The smallest ServiceStack AppHost for MVC would look something like:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppHost</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AppHostBase</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">AppHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span><span class="token string">&quot;MVC&quot;</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">MyServices</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Assembly<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">Container</span> container<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>            
        <span class="token function">SetConfig</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">HostConfig</span> <span class="token punctuation">{</span> 
            HandlerFactoryPath <span class="token operator">=</span> <span class="token string">&quot;api&quot;</span> 
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        ControllerBuilder<span class="token punctuation">.</span>Current<span class="token punctuation">.</span><span class="token function">SetControllerFactory</span><span class="token punctuation">(</span>
            <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FunqControllerFactory</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/hello/{Name}&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hello</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyServices</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Service</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">Hello</span> request<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> request<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="inferring-servicestack-s-handlerfactorypath-api" tabindex="-1">Inferring ServiceStack&#39;s HandlerFactoryPath (/api) <a class="header-anchor" href="#inferring-servicestack-s-handlerfactorypath-api" aria-hidden="true">#</a></h3><p>Whilst ServiceStack automatically tries to infer the handler path based on the <code>&lt;location&gt;</code> tag, if there&#39;s an uncommon Web.config setup or there are some other issue inferring it, it&#39; recommended to also explicitly set the <code>/api</code> handler path in <code>Config.HandlerFactoryPath</code>, e.g:</p><div class="language-csharp"><pre><code><span class="token function">SetConfig</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">HostConfig</span> <span class="token punctuation">{</span> 
    HandlerFactoryPath <span class="token operator">=</span> <span class="token string">&quot;api&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="initializing-servicestack" tabindex="-1">Initializing ServiceStack <a class="header-anchor" href="#initializing-servicestack" aria-hidden="true">#</a></h3><p>Hosting in <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> MVC is very similar to hosting in any <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> framework, i.e. The ServiceStack AppHost still needs to be initialized on start up in your <code>Global.asax.cs</code> (or WebActivator), e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Global</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">System<span class="token punctuation">.</span>Web<span class="token punctuation">.</span>HttpApplication</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Application_Start</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> sender<span class="token punctuation">,</span> <span class="token class-name">EventArgs</span> e<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">AppHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>You <em>MUST</em> also register ServiceStacks <code>/api</code> path by adding the lines below to MvcApplication.RegisterRoutes(RouteCollection) in the <strong>Global.asax</strong>:</p><div class="language-csharp"><pre><code>routes<span class="token punctuation">.</span><span class="token function">IgnoreRoute</span><span class="token punctuation">(</span><span class="token string">&quot;api/{*pathInfo}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
routes<span class="token punctuation">.</span><span class="token function">IgnoreRoute</span><span class="token punctuation">(</span><span class="token string">&quot;{*favicon}&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> favicon <span class="token operator">=</span> <span class="token string">@&quot;(.*/)?favicon.ico(/.*)?&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p>Place them before the current entries the method.</p><h3 id="removing-web-api" tabindex="-1">Removing Web API <a class="header-anchor" href="#removing-web-api" aria-hidden="true">#</a></h3><p>For MVC applications that include WebApi, you would need to unregister it by commenting out this line:</p><div class="language-csharp"><pre><code><span class="token comment">//WebApiConfig.Register(GlobalConfiguration.Configuration);</span>
</code></pre></div><h2 id="optional-configuration" tabindex="-1">Optional Configuration <a class="header-anchor" href="#optional-configuration" aria-hidden="true">#</a></h2><h3 id="sharing-dependencies-with-mvc-controllers" tabindex="-1">Sharing dependencies with MVC Controllers <a class="header-anchor" href="#sharing-dependencies-with-mvc-controllers" aria-hidden="true">#</a></h3><p>To register all your dependencies in your ServiceStack AppHost, register an MVC Controller factory so both your MVC Controllers and ServiceStack services get auto-wired with these dependencies in your <code>AppHost.Configure()</code>, e.g:</p><div class="language-csharp"><pre><code><span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">Funq<span class="token punctuation">.</span>Container</span> container<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token comment">//Set MVC to use the same Funq IOC as ServiceStack</span>
    ControllerBuilder<span class="token punctuation">.</span>Current<span class="token punctuation">.</span><span class="token function">SetControllerFactory</span><span class="token punctuation">(</span>
        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FunqControllerFactory</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="calling-servicestack-services-from-mvc-controllers" tabindex="-1">Calling ServiceStack Services from MVC Controllers <a class="header-anchor" href="#calling-servicestack-services-from-mvc-controllers" aria-hidden="true">#</a></h2><h3 id="using-the-service-gateway" tabindex="-1">Using the Service Gateway <a class="header-anchor" href="#using-the-service-gateway" aria-hidden="true">#</a></h3><p>The preferred method for calling ServiceStack Services is via the loosely-coupled <a href="/service-gateway">Service Gateway</a>:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> HelloController <span class="token punctuation">:</span> ServiceStackController 
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Index</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> name<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        ViewBag<span class="token punctuation">.</span>GreetResult <span class="token operator">=</span> <span class="token keyword">base</span><span class="token punctuation">.</span>Gateway<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Hello</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Result<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">View</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>        
<span class="token punctuation">}</span>
</code></pre></div><h3 id="calling-services-directly" tabindex="-1">Calling Services Directly <a class="header-anchor" href="#calling-services-directly" aria-hidden="true">#</a></h3><p>Alternatively just like in ServiceStack, you can retrieve an autowired Service and execute it directly using <code>base.ResolveService&lt;TService&gt;()</code>, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> HelloController <span class="token punctuation">:</span> ServiceStackController 
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Index</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> name<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> service <span class="token operator">=</span> <span class="token keyword">base</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ResolveService</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>HelloService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
           ViewBag<span class="token punctuation">.</span>GreetResult <span class="token operator">=</span> service<span class="token punctuation">.</span><span class="token function">Any</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Hello</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Result<span class="token punctuation">;</span>
           <span class="token keyword">return</span> <span class="token function">View</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>        
<span class="token punctuation">}</span>
</code></pre></div><p>For any other external methods or MVC Controllers that don&#39;t inherit <code>ServiceStackController</code> you can execute Services with:</p><div class="language-csharp"><pre><code><span class="token comment">//Using Gateway</span>
<span class="token class-name"><span class="token keyword">var</span></span> gateway <span class="token operator">=</span> HostContext<span class="token punctuation">.</span>AppHost<span class="token punctuation">.</span><span class="token function">GetServiceGateway</span><span class="token punctuation">(</span><span class="token keyword">base</span><span class="token punctuation">.</span>HttpContext<span class="token punctuation">.</span><span class="token function">ToRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ViewBag<span class="token punctuation">.</span>GreetResult <span class="token operator">=</span> gateway<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Hello</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Result<span class="token punctuation">;</span>

<span class="token comment">//Calling Service Directly</span>
<span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> service <span class="token operator">=</span> HostContext<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ResolveService</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>HelloService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">base</span><span class="token punctuation">.</span>HttpContext<span class="token punctuation">.</span><span class="token function">ToRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    ViewBag<span class="token punctuation">.</span>GreetResult <span class="token operator">=</span> service<span class="token punctuation">.</span><span class="token function">Any</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Hello</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Another cleaner way to share functionality between MVC and ServiceStack is to get them both injected with a shared dependency. See the <a href="http://stackoverflow.com/a/10572977" target="_blank" rel="noopener noreferrer">IGreeter example on StackOverflow</a>.</p><h3 id="adding-mini-profiler" tabindex="-1">Adding Mini Profiler <a class="header-anchor" href="#adding-mini-profiler" aria-hidden="true">#</a></h3><p>To enable the Mini Profiler add the following lines in to MvcApplication in <strong>Global.asax.cs</strong>:</p><div class="language-csharp"><pre><code><span class="token keyword">protected</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Application_BeginRequest</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> src<span class="token punctuation">,</span> <span class="token class-name">EventArgs</span> e<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Request<span class="token punctuation">.</span>IsLocal<span class="token punctuation">)</span>
        ServiceStack<span class="token punctuation">.</span>MiniProfiler<span class="token punctuation">.</span>Profiler<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">protected</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Application_EndRequest</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> src<span class="token punctuation">,</span> <span class="token class-name">EventArgs</span> e<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    ServiceStack<span class="token punctuation">.</span>MiniProfiler<span class="token punctuation">.</span>Profiler<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>For more info on the MiniProfiler see the <a href="/built-in-profiling">Built in profiling</a> docs.</p><p>The Urls for metadata page and included Services:</p><ul><li><a href="http://bootstrapapi.servicestack.net/api/metadata" target="_blank" rel="noopener noreferrer">/api/metadata</a> - Auto generated metadata pages</li><li><a href="http://bootstrapapi.servicestack.net/api/hello/World" target="_blank" rel="noopener noreferrer">/api/hello</a> - Simple Hello World Service</li><li><a href="http://bootstrapapi.servicestack.net/api/todos" target="_blank" rel="noopener noreferrer">/api/todos</a> - Simple REST Service see: <a href="http://todos.netcore.io" target="_blank" rel="noopener noreferrer">http://todos.netcore.io</a></li><li><a href="http://todos.netcore.io/" target="_blank" rel="noopener noreferrer">/default.htm</a> - Backbone.js TODO application talking to the TODO REST service at /api/todos</li></ul><h2 id="accessing-servicestack-from-mvc" tabindex="-1"><a href="/servicestack-integration">Accessing ServiceStack from MVC</a> <a class="header-anchor" href="#accessing-servicestack-from-mvc" aria-hidden="true">#</a></h2><p>Once you have MVC + ServiceStack up and running checkout <a href="/servicestack-integration">ServiceStack Integration</a> docs to explore different ways of accessing ServiceStack from MVC.</p>__VP_STATIC_END__`,42),u=[c,l,i,r];function k(d,g,h,v,f,m){return e(),t("div",null,u)}var S=s(o,[["render",k]]);export{w as __pageData,S as default};
