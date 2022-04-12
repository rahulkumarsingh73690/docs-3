import{_ as n,c as s,o as a,a as e}from"./app.da189b1e.js";const w='{"title":"Self-Hosting","description":"","frontmatter":{"title":"Self-Hosting"},"headers":[{"level":2,"title":"Complete C# Console Host Example","slug":"complete-c-console-host-example"},{"level":2,"title":"Complete VB.NET Console Host Example","slug":"complete-vb-net-console-host-example"},{"level":2,"title":"Complete F# Console Host Example","slug":"complete-f-console-host-example"},{"level":2,"title":"Windows Service Template","slug":"windows-service-template"},{"level":2,"title":"Serving Razor Views or Static Files from HttpListener","slug":"serving-razor-views-or-static-files-from-httplistener"},{"level":2,"title":"Serve Static Files from your Project Path","slug":"serve-static-files-from-your-project-path"},{"level":2,"title":"Host as a Windows or Linux Console Host, Windows Service or Linux Daemon","slug":"host-as-a-windows-or-linux-console-host-windows-service-or-linux-daemon"},{"level":2,"title":"Easily Convert to an ASP.NET Web Service","slug":"easily-convert-to-an-asp-net-web-service"}],"relativePath":"self-hosting.md","lastUpdated":1649756885179}',t={},o=e(`__VP_STATIC_START__<p>The quickest way to create a Self-Hosting application is to Create a new self-hosting <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> Project Template from <a href="https://github.com/ServiceStack/ServiceStackVS#servicestack-vsnet-templates" target="_blank" rel="noopener noreferrer">ServiceStackVS VS.NET Extension</a>.</p><p>Otherwise it&#39;s very easy to host ServiceStack in a Console App or Windows Service. You just have to Install the <a href="https://www.nuget.org/packages/ServiceStack" target="_blank" rel="noopener noreferrer">ServiceStack NuGet package</a> and derive your AppHost from <code>AppSelfHostBase</code> instead of <code>AppHostBase</code>:</p><p>If using this in a .NET standard console app, you should reference <a href="https://www.nuget.org/packages/ServiceStack.Kestrel" target="_blank" rel="noopener noreferrer">ServiceStack.Kestrel</a> NuGet package.</p><h2 id="complete-c-console-host-example" tabindex="-1">Complete C# Console Host Example <a class="header-anchor" href="#complete-c-console-host-example" aria-hidden="true">#</a></h2><div class="language-csharp"><pre><code><span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">ServiceStack</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Program</span> 
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/hello/{Name}&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloResponse</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Result <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloService</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Service</span></span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">Hello</span> request<span class="token punctuation">)</span> 
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HelloResponse</span> <span class="token punctuation">{</span> Result <span class="token operator">=</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span>Name <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//Define the Web Services AppHost</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppHost</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AppSelfHostBase</span></span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token function">AppHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
          <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span><span class="token string">&quot;HttpListener Self-Host&quot;</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">HelloService</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Assembly<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">Funq<span class="token punctuation">.</span>Container</span> container<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//Run it!</span>
    <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> listeningOn <span class="token operator">=</span> args<span class="token punctuation">.</span>Length <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">?</span> <span class="token string">&quot;http://*:1337/&quot;</span> <span class="token punctuation">:</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> appHost <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">AppHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span>listeningOn<span class="token punctuation">)</span><span class="token punctuation">;</span>

        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;AppHost Created at {0}, listening on {1}&quot;</span><span class="token punctuation">,</span> 
            DateTime<span class="token punctuation">.</span>Now<span class="token punctuation">,</span> listeningOn<span class="token punctuation">)</span><span class="token punctuation">;</span>
            
        Console<span class="token punctuation">.</span><span class="token function">ReadKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="complete-vb-net-console-host-example" tabindex="-1">Complete <a href="http://VB.NET" target="_blank" rel="noopener noreferrer">VB.NET</a> Console Host Example <a class="header-anchor" href="#complete-vb-net-console-host-example" aria-hidden="true">#</a></h2><div class="language-vb"><pre><code><span class="token keyword">Imports</span> System
<span class="token keyword">Imports</span> ServiceStack

<span class="token keyword">Public</span> <span class="token keyword">Class</span> Program

    <span class="token operator">&lt;</span>Route<span class="token punctuation">(</span><span class="token string">&quot;/hello/{Name}&quot;</span><span class="token punctuation">)</span><span class="token operator">&gt;</span>
    <span class="token keyword">Public</span> <span class="token keyword">Class</span> Hello
        <span class="token keyword">Public</span> <span class="token keyword">Property</span> Name <span class="token keyword">As</span> <span class="token keyword">String</span>
    <span class="token keyword">End</span> <span class="token keyword">Class</span>


    <span class="token keyword">Public</span> <span class="token keyword">Class</span> HelloResponse
        <span class="token keyword">Public</span> <span class="token keyword">Property</span> Result <span class="token keyword">As</span> <span class="token keyword">String</span>
    <span class="token keyword">End</span> <span class="token keyword">Class</span>


    <span class="token keyword">Public</span> <span class="token keyword">Class</span> HelloService
        <span class="token keyword">Inherits</span> Service
        <span class="token keyword">Public</span> <span class="token keyword">Function</span> Any<span class="token punctuation">(</span>Request <span class="token keyword">As</span> Hello<span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Object</span>
            <span class="token keyword">Return</span> <span class="token keyword">New</span> HelloResponse<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">With</span> <span class="token punctuation">{</span><span class="token punctuation">.</span>Result <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span> <span class="token operator">&amp;</span> Request<span class="token punctuation">.</span>Name<span class="token punctuation">}</span>
        <span class="token keyword">End</span> <span class="token keyword">Function</span>
    <span class="token keyword">End</span> <span class="token keyword">Class</span>

    <span class="token comment">&#39; Define the Web Services AppHost</span>
    <span class="token keyword">Public</span> <span class="token keyword">Class</span> AppHost
        <span class="token keyword">Inherits</span> AppSelfHostBase

        <span class="token keyword">Public</span> <span class="token keyword">Sub</span> <span class="token keyword">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">MyBase</span><span class="token punctuation">.</span><span class="token keyword">New</span><span class="token punctuation">(</span><span class="token string">&quot;HttpListener Self-Host&quot;</span><span class="token punctuation">,</span> <span class="token keyword">GetType</span><span class="token punctuation">(</span>HelloService<span class="token punctuation">)</span><span class="token punctuation">.</span>Assembly<span class="token punctuation">)</span>
        <span class="token keyword">End</span> <span class="token keyword">Sub</span>

        <span class="token keyword">Public</span> <span class="token keyword">Overrides</span> <span class="token keyword">Sub</span> Configure<span class="token punctuation">(</span>container <span class="token keyword">As</span> Funq<span class="token punctuation">.</span>Container<span class="token punctuation">)</span>
        <span class="token keyword">End</span> <span class="token keyword">Sub</span>
    <span class="token keyword">End</span> <span class="token keyword">Class</span>

    <span class="token comment">&#39; Run it!</span>
    <span class="token keyword">Overloads</span> <span class="token keyword">Shared</span> <span class="token keyword">Sub</span> Main<span class="token punctuation">(</span><span class="token keyword">ByVal</span> Args<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">)</span>        
        <span class="token keyword">Dim</span> listeningOn <span class="token keyword">As</span> <span class="token keyword">String</span> <span class="token operator">=</span> <span class="token keyword">If</span><span class="token punctuation">(</span>Args<span class="token punctuation">.</span>Length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;http://*:1337/&quot;</span><span class="token punctuation">,</span> Args<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token keyword">Dim</span> AppHost <span class="token keyword">As</span> IAppHost <span class="token operator">=</span> <span class="token keyword">New</span> AppHost<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Init<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Start<span class="token punctuation">(</span>listeningOn<span class="token punctuation">)</span>

        Console<span class="token punctuation">.</span>WriteLine<span class="token punctuation">(</span><span class="token string">&quot;AppHost Created at {0}, listening on {1}&quot;</span><span class="token punctuation">,</span>
            DateTime<span class="token punctuation">.</span>Now<span class="token punctuation">,</span> listeningOn<span class="token punctuation">)</span>

        Console<span class="token punctuation">.</span>ReadKey<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">End</span> <span class="token keyword">Sub</span>
<span class="token keyword">End</span> <span class="token keyword">Class</span>
</code></pre></div><h2 id="complete-f-console-host-example" tabindex="-1">Complete F# Console Host Example <a class="header-anchor" href="#complete-f-console-host-example" aria-hidden="true">#</a></h2><div class="language-fsharp"><pre><code><span class="token keyword">open</span> System
<span class="token keyword">open</span> ServiceStack
 
<span class="token keyword">type</span> <span class="token class-name">Hello</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token keyword">mutable</span> Name<span class="token punctuation">:</span> <span class="token class-name">string</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">HelloResponse</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token keyword">mutable</span> Result<span class="token punctuation">:</span> <span class="token class-name">string</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">HelloService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span>
    <span class="token keyword">interface</span> <span class="token class-name">IService</span> <span class="token keyword">with</span>
        <span class="token keyword">member</span> this<span class="token punctuation">.</span>Any <span class="token punctuation">(</span>req<span class="token punctuation">:</span><span class="token class-name">Hello</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">{</span> Result <span class="token operator">=</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> req<span class="token punctuation">.</span>Name <span class="token punctuation">}</span>
 
<span class="token comment">//Define the Web Services AppHost</span>
<span class="token keyword">type</span> <span class="token class-name">AppHost</span> <span class="token operator">=</span>
    <span class="token keyword">inherit</span> <span class="token class-name">AppSelfHostBase</span> 
    <span class="token keyword">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token keyword">inherit</span> <span class="token class-name">AppSelfHostBase</span><span class="token punctuation">(</span><span class="token string">&quot;Hello F# Services&quot;</span><span class="token punctuation">,</span> typeof<span class="token operator">&lt;</span>HelloService<span class="token operator">&gt;</span><span class="token punctuation">.</span>Assembly<span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token keyword">override</span> this<span class="token punctuation">.</span>Configure container <span class="token operator">=</span>
        <span class="token keyword">base</span><span class="token punctuation">.</span>Routes
            <span class="token punctuation">.</span>Add<span class="token operator">&lt;</span>Hello<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span>Add<span class="token operator">&lt;</span>Hello<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">&quot;/hello/{Name}&quot;</span><span class="token punctuation">)</span> <span class="token operator">|&gt;</span> ignore
 
<span class="token comment">//Run it!</span>
<span class="token annotation"><span class="token punctuation">[&lt;</span><span class="token class-name">EntryPoint</span><span class="token punctuation">&gt;]</span></span>
<span class="token keyword">let</span> main args <span class="token operator">=</span>
    <span class="token keyword">let</span> host <span class="token operator">=</span> <span class="token keyword">if</span> args<span class="token punctuation">.</span>Length <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">then</span> <span class="token string">&quot;http://*:1337/&quot;</span> <span class="token keyword">else</span> args<span class="token punctuation">.</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    printfn <span class="token string">&quot;listening on %s ...&quot;</span> host
    <span class="token keyword">let</span> appHost <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AppHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    appHost<span class="token punctuation">.</span><span class="token function">Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    appHost<span class="token punctuation">.</span>Start host
    Console<span class="token punctuation">.</span><span class="token function">ReadLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">|&gt;</span> ignore
    <span class="token number">0</span>
</code></pre></div><p>When any of these are running, you can call your hello service at <code>http://localhost:1337/hello/World!</code></p><h2 id="windows-service-template" tabindex="-1">Windows Service Template <a class="header-anchor" href="#windows-service-template" aria-hidden="true">#</a></h2><p>You can use <a href="https://github.com/NetFrameworkTemplates/winservice-netfx" target="_blank" rel="noopener noreferrer">winservice-netfx</a> to create a Windows Service but as this requires Visual Studio it&#39;s faster to continue creating new Windows Service projects within <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> using the <strong>ServiceStack Windows Service Empty</strong> Project Template.</p><h2 id="serving-razor-views-or-static-files-from-httplistener" tabindex="-1">Serving Razor Views or Static Files from HttpListener <a class="header-anchor" href="#serving-razor-views-or-static-files-from-httplistener" aria-hidden="true">#</a></h2><p>The PhysicalPath for self-hosted HttpListener hosts is at the same directory where the <code>.exe</code> is run (e.g. in <code>/bin</code>). To serve any static files or execute any Razor Views you need to set the <strong>Copy Output Directory</strong> of all static assets you want available to <code>Copy if newer</code>. The <a href="https://github.com/ServiceStack/ServiceStack.Gap" target="_blank" rel="noopener noreferrer">ServiceStack.Gap</a> feature provides an alternative packaging approach that can embed static resources and pre-compile razor views into a single <code>.exe</code> for the most optimal deployment.</p><h2 id="serve-static-files-from-your-project-path" tabindex="-1">Serve Static Files from your Project Path <a class="header-anchor" href="#serve-static-files-from-your-project-path" aria-hidden="true">#</a></h2><p>An alternative way for the Self-Hosted Console Application to find your Static files and Razor Views is to change the physical path so it points at your project directory. This enables an optimal <strong>Live Reloading</strong> development experience since its serving the original source Views you edit directly in your Project and not any copies that are copied to your <code>/bin</code>.</p><p>You can change the Physical Path from the location where the <strong>.exe</strong> is run in <code>\\bin\\Debug</code> to your Project folder in <code>DEBUG</code> builds with:</p><div class="language-csharp"><pre><code><span class="token function">SetConfig</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">HostConfig</span> <span class="token punctuation">{</span>
<span class="token preprocessor property">#<span class="token directive keyword">if</span> DEBUG</span>
    DebugMode <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    WebHostPhysicalPath <span class="token operator">=</span> <span class="token string">&quot;~/../..&quot;</span><span class="token punctuation">.</span><span class="token function">MapServerPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token preprocessor property">#<span class="token directive keyword">endif</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>You will still need to &quot;Copy to Output Directory&quot; in RELEASE builds if you&#39;re not using <a href="/virtual-file-system#embedded-resources">Embedded Resources</a> so the Console App can locate the Razor Views and Static files at runtime</p></div><h2 id="host-as-a-windows-or-linux-console-host-windows-service-or-linux-daemon" tabindex="-1">Host as a Windows or Linux Console Host, Windows Service or Linux Daemon <a class="header-anchor" href="#host-as-a-windows-or-linux-console-host-windows-service-or-linux-daemon" aria-hidden="true">#</a></h2><p>This will run in as a Console Host in any Operating System with .NET 3.5 or Mono installed. In addition this can also be wrapped-up and run inside a <a href="https://github.com/ServiceStack/ServiceStack.Examples/tree/master/src/StarterTemplates/WinServiceAppHost" target="_blank" rel="noopener noreferrer">Windows Service</a> or run as a <a href="/servicestack-as-daemon-on-linux">Linux Daemon</a> which you can optionally elect to serve behind <a href="/servicestack-as-daemon-on-linux">Apache or Nginx reverse proxies</a>.</p><h2 id="easily-convert-to-an-asp-net-web-service" tabindex="-1">Easily Convert to an <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Web Service <a class="header-anchor" href="#easily-convert-to-an-asp-net-web-service" aria-hidden="true">#</a></h2><p>As both AppHostBase and AppHostHttpListenerBase follow the same API they are easily convertible between the two. Here&#39;s some step-by-step instructions showing you how to convert an <a href="http://www.servicestack.net/mythz_blog/?p=785" target="_blank" rel="noopener noreferrer">F# Console Host to an ASP.NET Web Service on OSX!</a></p><h1 id="community-resources" tabindex="-1">Community Resources <a class="header-anchor" href="#community-resources" aria-hidden="true">#</a></h1><ul><li><a href="http://lderache.github.io/servicestack-how-to-selfhost-plus-razor-plus-webform/" target="_blank" rel="noopener noreferrer">ServiceStack how to: SelfHost + Razor + WebForm Auth</a> by <a href="https://twitter.com/laurentderache" target="_blank" rel="noopener noreferrer">@laurentderache</a></li><li><a href="http://en.rdebug.com/2013/05/servicestack-selfhosted-performance-boost/" target="_blank" rel="noopener noreferrer">ServiceStack SelfHosted Performance Boost</a> by <a href="https://twitter.com/rudygt" target="_blank" rel="noopener noreferrer">@rudygt</a></li><li><a href="http://www.ienablemuch.com/2012/12/self-hosting-servicestack-serving.html" target="_blank" rel="noopener noreferrer">Self-hosting ServiceStack serving razor&#39;d HTML</a> by <a href="http://twitter.com/ienablemuch" target="_blank" rel="noopener noreferrer">@ienablemuch</a></li></ul>__VP_STATIC_END__`,25),p=[o];function c(l,r,i,k,u,d){return a(),s("div",null,p)}var y=n(t,[["render",c]]);export{w as __pageData,y as default};
