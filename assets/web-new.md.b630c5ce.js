import{w as o}from"./web-new-netcore.94431a02.js";import{A as n,o as i,c as s,d as e,u as t,f as c,a}from"./app.da189b1e.js";import{n as l}from"./web-new-netfx.9f7ebd95.js";const p=a(`<p>All ServiceStack Projects can be created using the .NET Core <a href="https://www.nuget.org/packages/x" target="_blank" rel="noopener noreferrer">x dotnet tool</a>:</p><div class="language-shell"><pre><code>    $ dotnet tool <span class="token function">install</span> --global x 
</code></pre></div><p>If you had a previous version installed, update with:</p><div class="language-shell"><pre><code>    $ dotnet tool update -g x
</code></pre></div><p>All features from the cross-platform <code>x</code> dotnet tool are also available from the <a href="/netcore-windows-desktop">.NET Core Windows Desktop app</a> tool:</p><div class="language-shell"><pre><code>    $ dotnet tool <span class="token function">install</span> --global app 
</code></pre></div><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h4><p>To view a list of projects run:</p><div class="language-shell"><pre><code>    $ x new
</code></pre></div><p>Where it will display all repositories in <a href="https://github.com/NetCoreTemplates" target="_blank" rel="noopener noreferrer">.NET Core</a>, <a href="https://github.com/NetFrameworkTemplates" target="_blank" rel="noopener noreferrer">.NET Framework</a> and <a href="https://github.com/NetFrameworkCoreTemplates" target="_blank" rel="noopener noreferrer">ASP.NET Core Framework</a> GitHub Orgs:</p>`,10),d=a(`<h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-hidden="true">#</a></h4><p>x new <code>&lt;template&gt;</code> <code>&lt;name&gt;</code></p><p>For example to create a new <strong>Vue Single Page App</strong>, run:</p><div class="language-shell"><pre><code>    $ x new vue-spa ProjectName
</code></pre></div><h2 id="modernized-project-templates" tabindex="-1">Modernized Project Templates <a class="header-anchor" href="#modernized-project-templates" aria-hidden="true">#</a></h2><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/ssvs/spa-templates-overview.png" alt=""></p><p>The <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Core Project Templates have been upgraded to use the latest external dependencies and have all been rewritten to take advantage of the ServiceStack Features added in this release, namely:</p><ul><li><strong><a href="/modular-startup">Modular Startup</a></strong> - <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Core Apps can take advantage of the modularity benefits and extensibility of <code>mix</code> features</li><li><strong><a href="/navigation">Navigation Items</a></strong> - Simplified maintenance and dynamic navigation items rendering using Navigation controls</li><li><strong>Auth Enabled</strong> - Integrated Auth including dynamic menu, protected pages, auth redirect flow inc. Forbidden pages</li><li><strong><a href="/svg">SVG</a></strong> - Pre-configured to use <code>svg/</code> folder, ready to drop in your App&#39;s assets and go</li><li><strong><a href="/html-css-and-javascript-minification">Optimal Library Bundles</a></strong> - CSS/JS bundles are split into optimal hashed library and frequently changing App bundles</li><li><strong>SSL</strong> - As it&#39;s recommended for Web Apps to use SSL, all templates now use <code>https://localhost:5001</code> and configured to use Same Site Cookies by default</li></ul><h3 id="auth-enabled-project-templates" tabindex="-1">Auth Enabled Project Templates <a class="header-anchor" href="#auth-enabled-project-templates" aria-hidden="true">#</a></h3><p>Most Project Templates are now integrated with Credentials Auth and Facebook, Google and Facebook 3rd Party OAuth providers, complete with protected Pages and Services and auth redirect flow to Sign In and Forbidden pages.</p><h4 id="angular-spa" tabindex="-1">angular-spa <a class="header-anchor" href="#angular-spa" aria-hidden="true">#</a></h4><blockquote><p>Angular CLI Bootstrap App</p></blockquote><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/angular-spa.png" alt=""></p><pre><code>$ x new angular-spa ProjectName            # .NET Core
$ x new angular-spa-netfx ProjectName      # Classic ASP.NET on .NET Framework
</code></pre><h4 id="mvcauth" tabindex="-1">mvcauth <a class="header-anchor" href="#mvcauth" aria-hidden="true">#</a></h4><blockquote><p>.NET 6.0 MVC Website integrated with ServiceStack Auth</p></blockquote><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/mvcauth.png" alt=""></p><pre><code>$ x new mvcauth ProjectName                # .NET Core
</code></pre><h4 id="mvcidentity" tabindex="-1">mvcidentity <a class="header-anchor" href="#mvcidentity" aria-hidden="true">#</a></h4><blockquote><p>.NET 6.0 MVC Website integrated with ServiceStack using MVC Identity Auth</p></blockquote><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/mvcidentity.png" alt=""></p><pre><code>$ x new mvcidentity ProjectName            # .NET Core
</code></pre><h4 id="mvcidentityserver" tabindex="-1">mvcidentityserver <a class="header-anchor" href="#mvcidentityserver" aria-hidden="true">#</a></h4><blockquote><p>.NET 6.0 MVC Website integrated with ServiceStack using IdentityServer4 Auth</p></blockquote><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/mvcidentityserver.png" alt=""></p><pre><code>$ x new mvcidentityserver ProjectName      # .NET Core
</code></pre><h4 id="razor" tabindex="-1">razor <a class="header-anchor" href="#razor" aria-hidden="true">#</a></h4><blockquote><p>ServiceStack.Razor Bootstrap Website</p></blockquote><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/razor.png" alt=""></p><pre><code>$ x new razor ProjectName                  # .NET Core
$ x new razor-corefx ProjectName           # ASP.NET Core on .NET Framework
$ x new razor-netfx ProjectName            # Classic ASP.NET on .NET Framework
</code></pre><h4 id="react-spa" tabindex="-1">react-spa <a class="header-anchor" href="#react-spa" aria-hidden="true">#</a></h4><blockquote><p>React Create App CLI Bootstrap App</p></blockquote><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/react-spa.png" alt=""></p><pre><code>$ x new react-spa ProjectName              # .NET Core
$ x new react-spa-netfx ProjectName        # Classic ASP.NET on .NET Framework
</code></pre><h4 id="react-lite" tabindex="-1">react-lite <a class="header-anchor" href="#react-lite" aria-hidden="true">#</a></h4><blockquote><p><a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Core Simple + lite (npm-free) React SPA using TypeScript</p></blockquote><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/react-lite.png" alt=""></p><pre><code>$ x new react-lite ProjectName             # .NET Core
$ x new react-lite-corefx ProjectName      # ASP.NET Core on .NET Framework
</code></pre><h4 id="script" tabindex="-1">script <a class="header-anchor" href="#script" aria-hidden="true">#</a></h4><blockquote><p>#Script Pages Bootstrap Website</p></blockquote><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/script.png" alt=""></p><pre><code>$ x new script ProjectName                 # .NET Core
$ x new script-corefx ProjectName          # ASP.NET Core on .NET Framework
$ x new script-netfx ProjectName           # Classic ASP.NET on .NET Framework
</code></pre><h4 id="vue-spa" tabindex="-1">vue-spa <a class="header-anchor" href="#vue-spa" aria-hidden="true">#</a></h4><blockquote><p>Vue CLI Bootstrap App</p></blockquote><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/vue-spa.png" alt=""></p><pre><code>$ x new vue-spa ProjectName                # .NET Core
$ x new vue-spa-netfx ProjectName          # Classic ASP.NET on .NET Framework
</code></pre><h4 id="vue-lite" tabindex="-1">vue-lite <a class="header-anchor" href="#vue-lite" aria-hidden="true">#</a></h4><blockquote><p><a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Core Simple + lite (npm-free) Vue SPA using TypeScript</p></blockquote><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/vue-lite.png" alt=""></p><pre><code>$ x new vue-lite ProjectName               # .NET Core
$ x new vue-lite-corefx ProjectName        # ASP.NET Core on .NET Framework
</code></pre><h4 id="vue-nuxt" tabindex="-1">vue-nuxt <a class="header-anchor" href="#vue-nuxt" aria-hidden="true">#</a></h4><blockquote><p>Nuxt.js SPA App with Bootstrap</p></blockquote><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/vue-nuxt.png" alt=""></p><pre><code>$ x new vue-nuxt ProjectName               # .NET Core
$ x new vue-nuxt-netfx ProjectName         # Classic ASP.NET on .NET Framework
</code></pre><h3 id="create-customized-projects-with-mix" tabindex="-1">Create Customized Projects with mix <a class="header-anchor" href="#create-customized-projects-with-mix" aria-hidden="true">#</a></h3><p>All new projects can be further customized with <a href="/mix-tool">mix</a> dotnet tool to mix in additional &quot;layered&quot; features.</p><h2 id="why-a-new-project-template-system" tabindex="-1">Why a new project template system? <a class="header-anchor" href="#why-a-new-project-template-system" aria-hidden="true">#</a></h2><p>It&#39;s not often that a tool causes enough friction that it ends up requiring less effort to develop a replacement than it is to continue using the tool. But this has been our experience with maintaining our <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> Templates in the <a href="https://github.com/ServiceStack/ServiceStackVS" target="_blank" rel="noopener noreferrer">ServiceStackVS</a> <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> Extension which has been the biggest time sink of all our 3rd Party Integrations where the iteration time to check in a change, wait for CI build, uninstall/re-install the <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> extension and create and test new projects is measured in hours not minutes. To top off the poor development experience we&#39;ve now appeared to have reached the limits of the number of Project Templates we can bundle in our 5MB <strong>ServiceStackVS.vsix</strong> <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> Extension as a number of Customers have reported seeing <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> warning messages that ServiceStackVS is taking too long to load.</p><p>Given all the scenarios ServiceStack can be used in, we needed a quicker way to create, update and test our growing <strong>47 starting project templates</strong>. In the age of simple command-line dev tools like git and .NET Core&#39;s light weight text/human friendly projects, maintaining and creating new .NET project templates still feels archaic &amp; legacy requiring packaging projects as binary blobs in NuGet packages which become stale the moment they&#39;re created.</p><h2 id="how-it-works" tabindex="-1">How it works <a class="header-anchor" href="#how-it-works" aria-hidden="true">#</a></h2><h3 id="github-powered-project-templates" tabindex="-1">GitHub powered Project Templates <a class="header-anchor" href="#github-powered-project-templates" aria-hidden="true">#</a></h3><p>Especially for SPA projects which need to be frequently updated, the existing .NET Project Templates system is a stale solution that doesn&#39;t offer much benefit over maintaining individual GitHub projects, which is exactly what the <code>dotnet-new</code> npm tool and now <code>x new</code> .NET Core are designed around.</p><p>Inside <a href="/dotnet-new">dotnet-new</a> and <code>x new</code> is an easier way to create and share any kind of project templates which are easier for developers to create, test, maintain and install. So if you&#39;re looking for a simpler way to be able to create and maintain your own value-added project templates with additional bespoke customizations, functionality, dependencies and configuration, using <code>x new</code> is a great way to maintain and share them.</p><p>Using GitHub for maintaining project templates yields us a lot of natural benefits:</p><ul><li>Uses the same familiar development workflow to create and update Project Templates</li><li>Git commit history provides a public audit trail of changes</li><li>Publish new versions of project templates by creating a new GitHub release</li><li>Compare changes between Project Templates using GitHub&#39;s compare changes viewer</li><li>Browse and Restore Previous Project Releases</li><li>End users can raise issues with individual project templates and send PR contributions</li></ul><h3 id="always-up-to-date" tabindex="-1">Always up to date <a class="header-anchor" href="#always-up-to-date" aria-hidden="true">#</a></h3><p>Importantly end users will always be able to view the latest list of project templates and create projects using the latest available version, even if using older versions of the tools as they query GitHub&#39;s public APIs to list all currently available projects that for installation will use the latest published release (or <strong>master</strong> if there are no published releases), which if available, downloads, caches and creates new projects from the latest published <code>.zip</code> release.</p><h3 id="just-regular-projects" tabindex="-1">Just regular Projects <a class="header-anchor" href="#just-regular-projects" aria-hidden="true">#</a></h3><p>Best of all creating and testing projects are now much easier since project templates are just working projects following a simple naming convention that when a new project is created with:</p><div class="language-shell"><pre><code>    $ x new <span class="token operator">&lt;</span>template<span class="token operator">&gt;</span> ProjectName
</code></pre></div><p>Replaces all occurrences in all text files, file and directory names, where:</p><ul><li><code>MyApp</code> is replaced with <code>ProjectName</code></li><li><code>my-app</code> is replaced with <code>project-name</code></li><li><code>My App</code> is replaced with <code>Project Name</code></li></ul><p>The tool installer then inspects the project contents and depending on what it finds will:</p><ul><li>Restore the .NET <code>.sln</code> if it exists</li><li>Install npm packages if <code>package.json</code> exists</li><li>Install libman packages if <code>libman.json</code> exists</li></ul><p>That after installation is complete, results in newly created projects being all setup and ready to run.</p><h3 id="available-project-templates" tabindex="-1">Available project templates <a class="header-anchor" href="#available-project-templates" aria-hidden="true">#</a></h3><p>One missing detail is how it finds which GitHub repo should be installed from the <code>&lt;template&gt;</code> name.</p><p>This can be configured with the <code>APP_SOURCE_TEMPLATES</code> Environment variable to configure the <code>x</code> tool to use your own GitHub organizations instead, e.g:</p><pre><code>APP_SOURCE_TEMPLATES=NetCoreTemplates;NetFrameworkTemplates;NetFrameworkCoreTemplates
</code></pre><p>Optionally you can display a friendly name next to each Organization name, e.g:</p><pre><code>APP_SOURCE_TEMPLATES=NetCoreTemplates .NET Core C# Templates;
</code></pre><p><code>x new</code> will then use the first GitHub Repo that matches the <code>&lt;template&gt;</code> name from all your GitHub Sources, so this does require that all repos have unique names across all your configured GitHub Sources.</p><p>These are the only sources <code>x new</code> looks at to create ServiceStack projects, which by default is configured to use <a href="https://github.com/NetCoreTemplates" target="_blank" rel="noopener noreferrer">NetCoreTemplates</a>, <a href="https://github.com/NetFrameworkTemplates" target="_blank" rel="noopener noreferrer">NetFrameworkTemplates</a> and <a href="https://github.com/NetFrameworkCoreTemplates" target="_blank" rel="noopener noreferrer">NetFrameworkCoreTemplates</a> GitHub Organizations, whose repos will be listed when running:</p><pre><code>$ x new
</code></pre>`,84),S=`{"title":"Create new Projects with 'x new'","description":"","frontmatter":{"slug":"web-new","title":"Create new Projects with 'x new'"},"headers":[{"level":2,"title":"Modernized Project Templates","slug":"modernized-project-templates"},{"level":3,"title":"Auth Enabled Project Templates","slug":"auth-enabled-project-templates"},{"level":3,"title":"Create Customized Projects with mix","slug":"create-customized-projects-with-mix"},{"level":2,"title":"Why a new project template system?","slug":"why-a-new-project-template-system"},{"level":2,"title":"How it works","slug":"how-it-works"},{"level":3,"title":"GitHub powered Project Templates","slug":"github-powered-project-templates"},{"level":3,"title":"Always up to date","slug":"always-up-to-date"},{"level":3,"title":"Just regular Projects","slug":"just-regular-projects"},{"level":3,"title":"Available project templates","slug":"available-project-templates"}],"relativePath":"web-new.md","lastUpdated":1649756885191}`,h={};function u(m){return(g,w)=>{const r=n("WebTroubleMd");return i(),s("div",null,[p,e(t(o)),e(t(c)),e(t(l)),d,e(r)])}}const k=Object.assign(h,{setup:u});export{S as __pageData,k as default};
