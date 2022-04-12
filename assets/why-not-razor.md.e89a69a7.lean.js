import{_ as e,c as t,o as a,a as r}from"./app.da189b1e.js";const f='{"title":"Why not Razor?","description":"","frontmatter":{"slug":"why-not-razor","title":"Why not Razor?"},"headers":[{"level":2,"title":"End User Language with low ROI","slug":"end-user-language-with-low-roi"},{"level":2,"title":"Poor extensibility","slug":"poor-extensibility"},{"level":2,"title":"Limited by VS.NET","slug":"limited-by-vs-net"},{"level":2,"title":"Promotes poor modularity, tightly-coupled Architecture","slug":"promotes-poor-modularity-tightly-coupled-architecture"},{"level":2,"title":"Fragile","slug":"fragile"},{"level":2,"title":"The different flavors of Razor","slug":"the-different-flavors-of-razor"},{"level":2,"title":"Invasive Magic Behavior","slug":"invasive-magic-behavior"},{"level":2,"title":"Magic Behavior in .NET Core","slug":"magic-behavior-in-net-core"},{"level":3,"title":"Reasons against Magic behavior","slug":"reasons-against-magic-behavior"},{"level":3,"title":"Opt-in Feature Flags","slug":"opt-in-feature-flags"}],"relativePath":"why-not-razor.md","lastUpdated":1649756885191}',o={},n=r(`__VP_STATIC_START__<p>We added <a href="http://razor.servicestack.net" target="_blank" rel="noopener noreferrer">our Razor Support</a> in 2012 to be able to use Razor to generate the HTML UI for Services which includes a simplified development model for building Web Apps that includes <a href="http://razor.servicestack.net/#no-ceremony" target="_blank" rel="noopener noreferrer">No Ceremony Pages</a> which lets you use <a href="http://razor.servicestack.net/#smart-views" target="_blank" rel="noopener noreferrer">Smart View Pages</a> without Controllers to develop dynamic web pages with intuitive Cascading Layouts that can be called directly via pretty URLs.</p><p>These are some of the features added to make Razor more pleasant to use, but have since hit the law of diminishing returns trying to innovate around Razor any further. We&#39;re effectively limited by its coupling to external tooling whose development is controlled entirely by the authors of those tools.</p><h2 id="end-user-language-with-low-roi" tabindex="-1">End User Language with low ROI <a class="header-anchor" href="#end-user-language-with-low-roi" aria-hidden="true">#</a></h2><p>A major reason for our reduced focus around Razor is similar to VB6&#39;s one-way consumption of COM APIs, Razor is an &quot;end-user language&quot; for .NET APIs, i.e. server logic embedded in Razor pages is &quot;one-off code&quot; providing minimal utility and code reuse that&#39;s only applicable to HTML clients (i.e. Browsers) for the page it&#39;s embedded in whilst delivering a worse UX compared to the alternative <a href="/api-first-development">API First Development</a> model where your Web Pages use Ajax as just another client to call the same back-end Services that Mobile and Desktop clients use.</p><p>So instead of having browsers perform full-page POST backs and creating specific Controllers/Services that can only handle browser requests, you&#39;ll get much better responsiveness, utility and code-reuse by just developing &quot;pure&quot; back-end Services and using JavaScript to make Ajax requests. JavaScript is also much better than C# at being able to <a href="/ss-utils-js#fluent-validation">use a generic routine</a> to automatically update Form UIs with Service&#39;s structured error responses where it also benefits from reduced development effort.</p><p>In this light it&#39;s more important to interoperate with JavaScript than it is to have C# logic embedded in HTML pages.</p><h2 id="poor-extensibility" tabindex="-1">Poor extensibility <a class="header-anchor" href="#poor-extensibility" aria-hidden="true">#</a></h2><p>Razor is not easily extensible, to add a new directive you need to go deep into its compiler architecture where even something as pervasive as its <code>@model</code> directive is not a feature in <code>System.Web.Razor</code> itself, it has to be re-implemented in every Web Framework that uses it, forcing tight coupling to the Web Framework it&#39;s hosted in. You&#39;re also constrained as to what directives and features you should even attempt to add as if it&#39;s not supported by <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a>&#39;s designers there&#39;s no point implementing it as having broken intelli-sense is worse than having no intelli-sense at all.</p><h2 id="limited-by-vs-net" tabindex="-1">Limited by <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> <a class="header-anchor" href="#limited-by-vs-net" aria-hidden="true">#</a></h2><p>This touches on its most inhibiting constraint, we&#39;re limited to serving at the mercy of <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a>&#39;s designer tooling, an undocumented proprietary opaque blob that drives the design and limits everything that you can do with Razor. As an example ServiceStack doesn&#39;t need any XML configuration for executing its Razor implementation at runtime, but every ServiceStack project using Razor is forced to adopt a fragile <a href="/razor-notes#web-configuration-for-razor">chunk of XML configuration</a> for the sake of appeasing <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a>&#39;s designer.</p><p><a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a>&#39;s Razor support is also opinionated to only support Razor in <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> projects which is what forces ServiceStack&#39;s Self-Hosting Razor projects to maintain a duplicate copy of its Razor configuration in its <strong>app.config</strong> in a separate <strong>web.config</strong> file that should only be used for <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Web projects. Whilst this fixes intelli-sense in Self-Hosting projects, you&#39;ll still see an internal cosmetic designer error that every self-hosting Razor project puts up with as there&#39;s currently no workaround that removes it.</p><h2 id="promotes-poor-modularity-tightly-coupled-architecture" tabindex="-1">Promotes poor modularity, tightly-coupled Architecture <a class="header-anchor" href="#promotes-poor-modularity-tightly-coupled-architecture" aria-hidden="true">#</a></h2><p>Razor Views lives in the host project, together with all its Web Assets, MVC Controllers, App Configuration and all concrete dependencies used in the project. It uses static extension methods as the primary way to access shared C# functionality and forces the use of a centralized <code>/Views</code> and <code>/Views/Shared</code> folder for sharing Layouts and Partials. As a result most sufficiently large <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> MVC Apps we&#39;ve seen suffer from tight coupling to either concrete dependencies or its MVC Controller implementations, whether it&#39;s referenced directly from inside Razor Views or transitively through HTML Helpers and other static classes. These static references to contentious shared locations directly promotes all views being tightly coupled to each other and concrete dependencies which inhibits decoupling, unit testing and being able to remove or substitute dependencies.</p><p>Modularity can be measured at a high-level by how easy a feature can be removed and reused in other projects, it also helps reduce complexity by being able to visualize how a component and its dependencies works in isolation. MVC Razor&#39;s forced opinions makes it hard to maintain a modular code-base and why every ServiceStack <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> project template has always utilized a <a href="/physical-project-structure">recommended physical project structure</a> which isolates your Services implementation from your Host&#39;s configuration and its concrete dependencies, the decoupling encourages binding to clean, substitutable and testable interfaces whilst ServiceStack.Razor&#39;s <a href="http://razor.servicestack.net/#no-ceremony" target="_blank" rel="noopener noreferrer">Cascading Layouts feature</a> works intuitively and helps with modularity.</p><h2 id="fragile" tabindex="-1">Fragile <a class="header-anchor" href="#fragile" aria-hidden="true">#</a></h2><p>There&#39;s nothing else in ServiceStack that&#39;s as fragile Razor which is dependent on external build tools, pre-compilation steps, code generation, xml configuration, web.config transforms, project configuration, designer tooling, pre-compiled views, .dll versions, etc. All of which can go wrong to break Razor views.</p><p>We offer easy to use APIs for being able to <a href="/view-and-template-selection#executing-razor-in-code">dynamically create Razor Views</a> which we use ourselves to generate HTML emails, but as there&#39;s several external environmental factors that can cause Razor Views to fail we recommend adding Integration tests to ensure your Razor Views still work after an upgrade - a unit test won&#39;t be enough to catch a misconfigured project.</p><p>There&#39;s also needing hacks to <a href="/compiled-razor-views">implement pre-compiled Razor Views</a> like <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Razor.BuildTask/Support/HostContext.cs" target="_blank" rel="noopener noreferrer">maintaining empty stubs</a> of our HostContext and HostConfig classes to get successful builds.</p><h2 id="the-different-flavors-of-razor" tabindex="-1">The different flavors of Razor <a class="header-anchor" href="#the-different-flavors-of-razor" aria-hidden="true">#</a></h2><p>Due to its design and tight coupling to Web Frameworks, no 2 Razor versions from different Frameworks works the same. The way to return Razor Views, how views are resolved, the HTML Helpers available, the ways to customize Razor pages, the base class used, etc all use the different implementations in each host framework.</p><p>They&#39;re not even the same from the same team in the same product, with <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> MVC Razor being significantly different from <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> MVC Core Razor, both with different implementations and features not available in the other.</p><p>This inhibits consistency, knowledge-sharing, component sharing and code reuse.</p><h2 id="invasive-magic-behavior" tabindex="-1">Invasive Magic Behavior <a class="header-anchor" href="#invasive-magic-behavior" aria-hidden="true">#</a></h2><p><a href="https://www.asp.net/web-pages" target="_blank" rel="noopener noreferrer">ASP.NET Web Pages</a> is another flavour of Razor added to <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> a few years ago that was a failed attempt to create a Web Framework using just Razor Pages. It came with its own <a href="https://www.microsoft.com/web/webmatrix/" target="_blank" rel="noopener noreferrer">Web Matrix</a> IDE that&#39;s no longer available to download with its <a href="https://blogs.iis.net/webmatrix/webmatrix-product-support-ends-on-november-1st-2017" target="_blank" rel="noopener noreferrer">support for existing developers ending this year</a>. It&#39;s documentation is <a href="https://www.asp.net/web-pages" target="_blank" rel="noopener noreferrer">still hosted online</a> but contains several broken links.</p><p>What we&#39;re left with is a case where the complexity of a dead technology is forever embedded in <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> and actively causes issues for other active Web Frameworks that uses Razor <em>.cshtml</em> pages which all need to explicitly prevent Web Pages from breaking their pages by explicitly disabling it with:</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appSettings</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>webPages:Enabled<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appSettings</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>This configuration is needed in every ServiceStack Razor project despite not having any references to <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Web Pages. So the complexity of an failed and unused flavor of Razor is hidden by making all other Web Frameworks that use Razor appear to be &quot;more complex&quot; and require special configuration.</p><h2 id="magic-behavior-in-net-core" tabindex="-1">Magic Behavior in .NET Core <a class="header-anchor" href="#magic-behavior-in-net-core" aria-hidden="true">#</a></h2><p>We&#39;re very disappointed to see this practice of bundling magic behavior with the underlying platform has continued in .NET Core. Usually we just live with the defaults the <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> team decides to adopt, their choices always have a detrimental effect to the surrounding .NET ecosystem maintaining alternative solutions but at least if you&#39;re not using their defaults libraries they won&#39;t affect your project, but the special handling to support Razor is actively harmful to all .NET Core 2.0 projects not using it and continues to perpetuate the stigma that <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> is an opinionated, bloated and unnecessarily complex platform, something that .NET Core is trying hard to eradicate, but is tainted with practices like this.</p><p>The magic behavior has leaked to negatively impact .NET Core Web projects not using Razor and has prevented us from publishing our <a href="https://github.com/mythz/WebApp" target="_blank" rel="noopener noreferrer">Web App</a> binaries, a project that explicitly has no references to Razor or MVC and no .cshtml pages as its very purpose is to be able to build .NET Core Web Apps without Razor, but still fails when running:</p><pre><code>dotnet publish -c Release
</code></pre><p>i.e. the standard command to publish a .NET Core project, fails with:</p><div class="language-"><pre><code>EXEC(1,11): error CS0246: The type or namespace name &#39;System&#39; could not be found (are you missing a using directive or an assembly reference?) [C:\\src\\NetC
oreWebApps\\WebApp\\src\\WebApp\\WebApp.csproj]
EXEC(1,54): error CS0518: Predefined type &#39;System.String&#39; is not defined or imported [C:\\src\\NetCoreWebApps\\WebApp\\src\\WebApp\\WebApp.csproj]
C:\\Program Files\\dotnet\\sdk\\NuGetFallbackFolder\\microsoft.aspnetcore.mvc.razor.viewcompilation\\2.0.0\\build\\netstandard2.0\\Microsoft.AspNetCore.Mvc.Razor.Vi
ewCompilation.targets(60,5):
</code></pre></div><p>A nonsensical error from a component that has no reason for wasting CPU cycles in projects not using MVC or Razor. After spending some time scouring the Internet trying different workarounds, we&#39;ve found others experiencing similar issues where the solution was having to opt-in to stop MVC Razor Compilation breaking builds with:</p><pre><code>dotnet publish -c Release /p:MvcRazorCompileOnPublish=false
</code></pre><p>Which then started working as it expected. In our time spent trawling through issues we also discovered that you can reduce your published footprint by the <strong>150 .dlls</strong> in <code>/refs/*.dll</code> by opting out of the metadata that&#39;s unnecessarily exploding the file count of every .NET Core 2.0 Web App by opting out of metadata used by Razor with:</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PreserveCompilationContext</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PreserveCompilationContext</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="reasons-against-magic-behavior" tabindex="-1">Reasons against Magic behavior <a class="header-anchor" href="#reasons-against-magic-behavior" aria-hidden="true">#</a></h3><p>Seeing this magic behavior embedded in a clean platform rewrite whose design goals is marketed as having a lean core and a <strong>pay-for-play model</strong> is both contradictory and non-existent in other OSS platforms with lean runtimes and thriving OSS ecosystems, including those that .NET Core&#39;s HTTP Dev model was modelled after. Instead of having this behavior opt-in and having a true pay-for-play model, the true complexity cost of Razor is hidden by making every .NET Core Web App that doesn&#39;t need or want it appear more complex and increases the potential external factors that can break apps. This also reduces the simplicity and approachability of .NET Core and increases the nuances and conceptual space every developer must know of when developing .NET Core Web Apps. A major reason to avoid building monolithic frameworks is to minimize the impact of change so it doesn&#39;t leak into and impact unrelated parts of the system, it also reduces complexity by limiting what developers need to be concerned with and spend time researching to only the features they&#39;re actually using.</p><p>Magic behavior disincentives simplicity being a goal for Razor where instead of being on the same level playing field and using the same plugin APIs as everyone else, the <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Team can continue accumulating more magic behavior in each release slowing every .NET Core build and forcing every .NET Core App to carry its baggage indefinitely. There shouldn&#39;t be any reason why a HTML renderer needs to be reliant on magic behavior like this, if there&#39;s a limitation in MSBuild&#39;s system that doesn&#39;t support the magic behavior required by Razor, that&#39;s indicative of a limitation of MSBuild that should be resolved to the benefit of everyone, if that&#39;s not possible the Razor feature mandating special treatment should be rewritten so it&#39;s not invasively impacting every Web App indiscriminately.</p><h3 id="opt-in-feature-flags" tabindex="-1">Opt-in Feature Flags <a class="header-anchor" href="#opt-in-feature-flags" aria-hidden="true">#</a></h3><p>These issues may just be the result of not being able to properly infer whether a .NET Core Web App is using Razor which is why it&#39;s especially important that <strong>all magic behavior</strong> required to support any feature should be opt-in, even if it&#39;s just behind a simple global feature flag like <code>&lt;EnableRazor&gt;true&lt;/EnableRazor&gt;</code> so it&#39;s limited to only impact projects using Razor and provides a simple visible setting that can be commented out to be able to easily determine if its hidden behavior is the cause of broken project builds.</p>__VP_STATIC_END__`,42),i=[n];function s(l,p,c,h,d,u){return a(),t("div",null,i)}var m=e(o,[["render",s]]);export{f as __pageData,m as default};
