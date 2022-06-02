import{_ as t,c as o,d as n,a as e,B as a,o as i}from"./app.877820b6.js";const k='{"title":"Run ASP.NET Core Apps on the .NET Framework","description":"","frontmatter":{"title":"Run ASP.NET Core Apps on the .NET Framework","slug":"templates-corefx"},"headers":[{"level":3,"title":"Status of ASP.NET Core on .NET Framework","slug":"status-of-asp-net-core-on-net-framework"},{"level":3,"title":"ASP.NET Core - still our top recommendation for .NET Framework","slug":"asp-net-core-still-our-top-recommendation-for-net-framework"},{"level":3,"title":"Future proofed and continually developed","slug":"future-proofed-and-continually-developed"},{"level":3,"title":"Reference .Core packages","slug":"reference-core-packages"},{"level":2,"title":"Troubleshooting","slug":"troubleshooting"},{"level":3,"title":"Resolving Runtime Assembly Loading Issues","slug":"resolving-runtime-assembly-loading-issues"}],"relativePath":"templates-corefx.md"}',s={},l=e('<p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/web.png" alt=""></p><h3 id="status-of-asp-net-core-on-net-framework" tabindex="-1">Status of <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Core on .NET Framework <a class="header-anchor" href="#status-of-asp-net-core-on-net-framework" aria-hidden="true">#</a></h3><p>The last important Microsoft announcement concerning the future of <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Core 2.1 was that it would stop supporting <a href="https://github.com/aspnet/AspNetCore/issues/3753" target="_blank" rel="noopener noreferrer">new versions of ASP.NET Core on the .NET Framework</a>. Whilst we disagreed against this decision which would&#39;ve put out a large class of the existing ecosystems from participating in the new <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Core development model and many from staged migrations to .NET Core from commencing, we&#39;re happy to see <a href="https://github.com/aspnet/AspNetCore/issues/3753#issuecomment-438046364" target="_blank" rel="noopener noreferrer">ASP.NET Core 2.1 LTS will enjoy the same indefinite level of support</a> as the rest of the .NET Framework - which should come as great news to the 1/3 of our Customers who are still creating new <a href="https://github.com/NetFrameworkCoreTemplates" target="_blank" rel="noopener noreferrer">ASP.NET Core on FX Project Templates</a>.</p><p>Whilst this announcement sends a clear message that new development on .NET Framework has effectively been put on product life support, <strong><a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Core 2.1 LTS</strong> is still a great rock-solid platform to build on if you&#39;re unable to jump directly to <strong>.NET Core</strong> immediately or if you want to get off .NET Core&#39;s major version release train and build upon a stable LTS platform.</p><h3 id="asp-net-core-still-our-top-recommendation-for-net-framework" tabindex="-1"><a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Core - still our top recommendation for .NET Framework <a class="header-anchor" href="#asp-net-core-still-our-top-recommendation-for-net-framework" aria-hidden="true">#</a></h3><p>If you need to stay on the .NET Framework, we&#39;d still recommend using the newer <strong><a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Core 2.1</strong> over classic <strong><a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> <a href="http://System.Web" target="_blank" rel="noopener noreferrer">System.Web</a></strong> projects as it&#39;s cleaner, lighter, more flexible and future proof. Unlike Microsoft web frameworks, ServiceStack is a <strong>single code-base</strong> which supports running on <a href="/why-servicestack#multiple-hosting-options">multiple platforms</a> so your ServiceStack Services can enjoy near perfect source-code compatibility when and if you choose to <strong>move to .NET Core</strong> in future.</p><p>Whilst Microsoft is stopping new development of <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Core on .NET Framework, we&#39;re not, our supported packages have standardized to multi-target both <strong>.NET v4.5+</strong> and <strong>.NET Standard 2.0</strong> which is supported natively on <strong><a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Core 2.1</strong>.</p><h3 id="future-proofed-and-continually-developed" tabindex="-1">Future proofed and continually developed <a class="header-anchor" href="#future-proofed-and-continually-developed" aria-hidden="true">#</a></h3><p>This includes our own innovations that we continue to invest in like <a href="https://sharpscript.net" target="_blank" rel="noopener noreferrer">#Script</a> (fka ServiceStack Templates) naturally support .NET Framework and .NET Core and runs everywhere ServiceStack does including within <a href="https://sharpscript.net/docs/mvc-netcore" target="_blank" rel="noopener noreferrer">classic ASP.NET MVC Controllers</a> which wasn&#39;t a design goal but was a natural consequence of developing clean libraries without external dependencies or reliance on external tooling.</p><p>This is to say that <strong><a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Core 2.1 LTS</strong> is still a fantastic rock-solid platform to run your .NET Framework workloads when you need to which will continue to receive enhancements and new features with each ServiceStack release courtesy of being derived from the same shared code-base which will enable seamless migrations to .NET Core should you wish to in future.</p><h4 id="start-from-pre-configured-project-templates" tabindex="-1">Start from pre-configured Project Templates <a class="header-anchor" href="#start-from-pre-configured-project-templates" aria-hidden="true">#</a></h4><p>Ultimately you&#39;ll miss out on niceties like the <a href="https://www.nuget.org/packages/Microsoft.AspNetCore.App" target="_blank" rel="noopener noreferrer">Microsoft.AspNetCore.App</a> meta-package, as a result we recommend starting from one of our <a href="https://github.com/NetFrameworkCoreTemplates" target="_blank" rel="noopener noreferrer">ASP.NET Core Framework project Templates</a> which by convention all have the <code>-corefx</code> suffix:</p>',12),c=e(`<h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h4><p>This will let you create an <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Core App running on the .NET Framework v4.7 using <a href="/web-new">web new</a> with:</p><div class="language-bash"><pre><code>$ dotnet tool <span class="token function">install</span> --global web 

$ x new web-corefx AcmeNetFx
</code></pre></div><p>Which can then be opened in your preferred <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> or Project Rider C# IDE.</p><h3 id="reference-core-packages" tabindex="-1">Reference .Core packages <a class="header-anchor" href="#reference-core-packages" aria-hidden="true">#</a></h3><p>The primary difference between <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Core Apps on <strong>.NET Core 2.1</strong> vs <strong>.NET Framework</strong> is needing to reference the <code>.Core</code> packages to force referencing ServiceStack <strong>.NET Standard 2.0</strong> libraries, which otherwise when installed in a .NET Framework project would install <code>net45</code> libraries. The differences between the 2 builds include:</p><ul><li><code>net45</code> - Contains support for running <strong><a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a></strong> Web or Self-Hosting <strong>HttpListener</strong> App Hosts</li><li><code>netstandard2.0</code> - Contains support for only running on <strong><a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Core</strong> App Hosts</li></ul><p>In order to run <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Core Apps on the .NET Framework it needs to only reference <code>.Core</code> NuGet packages which contains only the <strong>.NET Standard 2.0</strong> builds. Currently the list of <code>.Core</code> packages which contains only <strong>.NET Standard 2.0</strong> builds include:</p><ul><li>ServiceStack.Text.Core</li><li>ServiceStack.Interfaces.Core</li><li>ServiceStack.Client.Core</li><li>ServiceStack.HttpClient.Core</li><li>ServiceStack.Core</li><li>ServiceStack.Common.Core</li><li>ServiceStack.Mvc.Core</li><li>ServiceStack.Server.Core</li><li>ServiceStack.Redis.Core</li><li>ServiceStack.OrmLite.Core</li><li>ServiceStack.OrmLite.Sqlite.Core</li><li>ServiceStack.OrmLite.SqlServer.Core</li><li>ServiceStack.OrmLite.PostgreSQL.Core</li><li>ServiceStack.OrmLite.MySql.Core</li><li>ServiceStack.OrmLite.MySqlConnector.Core</li><li>ServiceStack.Aws.Core</li><li>ServiceStack.Azure.Core</li><li>ServiceStack.RabbitMq.Core</li><li>ServiceStack.Api.OpenApi.Core</li><li>ServiceStack.Admin.Core</li><li>ServiceStack.Stripe.Core</li><li>ServiceStack.Logging.Log4Net.Core</li><li>ServiceStack.Logging.NLog.Core</li><li>ServiceStack.Kestrel.Core</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Ultimately support for whether a <strong>.NET Standard 2.0</strong> library will run on the .NET Framework depends on whether external dependencies also support this scenario which as it&#39;s a more niche use-case, will be a less tested scenario</p></div><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a></h2><h3 id="resolving-runtime-assembly-loading-issues" tabindex="-1">Resolving Runtime Assembly Loading Issues <a class="header-anchor" href="#resolving-runtime-assembly-loading-issues" aria-hidden="true">#</a></h3><p>Many of Microsoft&#39;s core <strong>.NET Standard 2.0</strong> packages have been reported to have runtime Assembly loading issues that throw <code>FileNotFoundException</code> &quot;Could not load file or assembly ...&quot; Exceptions in .NET Framework projects, including:</p><ul><li><code>System.Runtime</code></li><li><code>System.Runtime.CompilerServices.Unsafe</code></li><li><code>System.Runtime.InteropServices.RuntimeInformation</code></li><li><code>System.Memory</code></li><li><code>System.Buffers</code></li><li><code>System.Numerics.Vectors</code></li><li><code>netstandard</code></li></ul><p>Some solutions that have been known to resolve these issues include:</p><ol><li>Adding the package, e.g. <code>System.Runtime.CompilerServices.Unsafe</code> reference directly on the Host project, <a href="https://github.com/dotnet/standard/issues/328#issuecomment-299577190" target="_blank" rel="noopener noreferrer">for netstandard</a> the package is <a href="https://www.nuget.org/packages/NETStandard.Library.NETFramework" target="_blank" rel="noopener noreferrer">NETStandard.Library.NETFramework</a> or installing .NET Core 2.0 SDK.</li><li>Manually Adding Binding Redirect, see:</li></ol><ul><li><a href="https://stackoverflow.com/a/52250140/85785" target="_blank" rel="noopener noreferrer">System.Runtime</a></li><li><a href="https://stackoverflow.com/a/55329952/85785" target="_blank" rel="noopener noreferrer">System.Runtime.CompilerServices.Unsafe</a></li><li><a href="https://stackoverflow.com/a/52637120/85785" target="_blank" rel="noopener noreferrer">System.Runtime.InteropServices.RuntimeInformation</a></li><li><a href="https://github.com/dotnet/corefx/issues/30106#issuecomment-395248278" target="_blank" rel="noopener noreferrer">System.Numerics.Vectors</a></li><li><a href="https://stackoverflow.com/a/48867478/85785" target="_blank" rel="noopener noreferrer">System.Net.Http</a></li></ul><ol start="3"><li><a href="https://stackoverflow.com/a/62770487/85785" target="_blank" rel="noopener noreferrer">Install the missing .dll into the GAC</a></li><li>If you had an existing binding redirect, try removing it</li><li>Adding <code>&lt;AutoGenerateBindingRedirects&gt;true&lt;/autoquery-autogenerateBindingRedirects&gt;</code> to your project&#39;s .csproj</li><li>Uninstalling and Reinstalling the problem packages from your projects</li><li>Clean Solution and remove project artifacts, including Nuget <code>/packages</code> and project <code>/bin</code> and <code>/obj</code> folders</li><li>Upgrading to the latest version of the .NET Framework (v4.7.2+)</li></ol><p>Many of these issues is the result of <a href="https://github.com/dotnet/standard/issues/481" target="_blank" rel="noopener noreferrer">older .NET Frameworks like .NET v4.6.1</a> not properly supporting .NET Standard 2.0 which is mostly resolved by installing .NET Framework v4.7.1+.</p>`,19);function p(d,h,u,f,g,m){const r=a("WebNewCorefxMd");return i(),o("div",null,[l,n(r),c])}var w=t(s,[["render",p]]);export{k as __pageData,w as default};