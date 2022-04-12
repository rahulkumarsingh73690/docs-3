import{_ as t,c as a,o as r,b as e,a as o}from"./app.da189b1e.js";const m='{"title":"Svelte Project Templates","description":"","frontmatter":{"slug":"templates-svelte","title":"Svelte Project Templates"},"headers":[{"level":2,"title":"Svelte .NET Core Single Page App Templates","slug":"svelte-net-core-single-page-app-templates"},{"level":2,"title":"Development workflow","slug":"development-workflow"},{"level":3,"title":"Watched .NET Core builds","slug":"watched-net-core-builds"},{"level":3,"title":"Create a production build","slug":"create-a-production-build"},{"level":3,"title":"Updating Server TypeScript DTOs","slug":"updating-server-typescript-dtos"},{"level":3,"title":"Deployments","slug":"deployments"},{"level":2,"title":"Svelte template","slug":"svelte-template"}],"relativePath":"templates-svelte.md","lastUpdated":1649756885187}',n={},s=e("div",{class:"my-8 ml-20"},[e("svg",{style:{"max-width":"200px"},xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 98.1 118","xml:space":"preserve"},[e("path",{fill:"#FF3E00",d:`M91.8,15.6C80.9-0.1,59.2-4.7,43.6,5.2L16.1,22.8C8.6,27.5,3.4,35.2,1.9,43.9c-1.3,7.3-0.2,14.8,3.3,21.3
	c-2.4,3.6-4,7.6-4.7,11.8c-1.6,8.9,0.5,18.1,5.7,25.4c11,15.7,32.6,20.3,48.2,10.4l27.5-17.5c7.5-4.7,12.7-12.4,14.2-21.1
	c1.3-7.3,0.2-14.8-3.3-21.3c2.4-3.6,4-7.6,4.7-11.8C99.2,32.1,97.1,22.9,91.8,15.6`}),e("path",{fill:"#FFFFFF",d:`M40.9,103.9c-8.9,2.3-18.2-1.2-23.4-8.7c-3.2-4.4-4.4-9.9-3.5-15.3c0.2-0.9,0.4-1.7,0.6-2.6l0.5-1.6l1.4,1
	c3.3,2.4,6.9,4.2,10.8,5.4l1,0.3l-0.1,1c-0.1,1.4,0.3,2.9,1.1,4.1c1.6,2.3,4.4,3.4,7.1,2.7c0.6-0.2,1.2-0.4,1.7-0.7L65.5,72
	c1.4-0.9,2.3-2.2,2.6-3.8c0.3-1.6-0.1-3.3-1-4.6c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7l-10.5,6.7
	c-1.7,1.1-3.6,1.9-5.6,2.4c-8.9,2.3-18.2-1.2-23.4-8.7c-3.1-4.4-4.4-9.9-3.4-15.3c0.9-5.2,4.1-9.9,8.6-12.7l27.5-17.5
	c1.7-1.1,3.6-1.9,5.6-2.5c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.2,0.9-0.4,1.7-0.7,2.6l-0.5,1.6l-1.4-1
	c-3.3-2.4-6.9-4.2-10.8-5.4l-1-0.3l0.1-1c0.1-1.4-0.3-2.9-1.1-4.1c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7L32.4,46.1
	c-1.4,0.9-2.3,2.2-2.6,3.8s0.1,3.3,1,4.6c1.6,2.3,4.4,3.3,7.1,2.6c0.6-0.2,1.2-0.4,1.7-0.7l10.5-6.7c1.7-1.1,3.6-1.9,5.6-2.5
	c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.9,5.2-4.1,9.9-8.6,12.7l-27.5,17.5C44.8,102.5,42.9,103.3,40.9,103.9`})])],-1),l=o(`__VP_STATIC_START__<p><a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">Svelte</a> is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.</p><p>Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes.</p><p><a href="https://svelte.dev/blog/svelte-3-rethinking-reactivity" target="_blank" rel="noopener noreferrer">Read the introductory blog post</a> to learn more.</p><h2 id="svelte-net-core-single-page-app-templates" tabindex="-1">Svelte .NET Core Single Page App Templates <a class="header-anchor" href="#svelte-net-core-single-page-app-templates" aria-hidden="true">#</a></h2><p>.NET 6.0 svelte v3 rollup App Project Template integrated with ServiceStack Services and built-in Routing, User Registration and Sign Up forms.</p><p><a href="http://svelte-spa.web-templates.io/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/svelte-spa.png" alt=""></a></p><blockquote><p>Browse <a href="https://github.com/NetCoreTemplates/svelte-spa" target="_blank" rel="noopener noreferrer">source code</a>, view live demo <a href="http://svelte-spa.web-templates.io" target="_blank" rel="noopener noreferrer">svelte-spa.web-templates.io</a> and install with <a href="https://docs.servicestack.net/dotnet-new" target="_blank" rel="noopener noreferrer">dotnet-new</a>:</p></blockquote><div class="language-bash"><pre><code>$ dotnet tool <span class="token function">install</span> -g x
</code></pre></div><div class="language-bash"><pre><code>$ x new svelte-spa ProjectName
</code></pre></div><h2 id="development-workflow" tabindex="-1">Development workflow <a class="header-anchor" href="#development-workflow" aria-hidden="true">#</a></h2><p><a href="https://youtu.be/cKlFABFECnQ" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/screencasts/svelte-spa-youtube.png" alt=""></a></p><div class="info custom-block"><p class="custom-block-title">YouTube</p><p><a href="https://youtu.be/cKlFABFECnQ" target="_blank" rel="noopener noreferrer">youtu.be/cKlFABFECnQ</a></p></div><p>Run the <code>dev</code> npm script or Gulp task and leave it running in the background:</p><div class="language-bash"><pre><code>$ <span class="token function">npm</span> run dev
</code></pre></div><p>This initially generates a full development build of your Web App then stays running in the background to process files as they\u2019re changed. This enables the normal dev workflow of running your <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Web App, saving changes locally which are then reloaded using ServiceStack\u2019s built-in hot reloading. Alternatively hitting <code>F5</code> will refresh the page and view the latest changes.</p><p>Each change updates the output dev resources so even if you stop the dev task your Web App remains in a working state that\u2019s viewable when running the <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Web App.</p><h3 id="watched-net-core-builds" tabindex="-1">Watched .NET Core builds <a class="header-anchor" href="#watched-net-core-builds" aria-hidden="true">#</a></h3><p>.NET Core projects can also benefit from Live Coding using dotnet watch which performs a \u201Cwatched build\u201D where it automatically stops, recompiles and restarts your .NET Core App when it detects source file changes. You can start a watched build from the command-line with:</p><div class="language-bash"><pre><code>$ dotnet <span class="token function">watch</span> run
</code></pre></div><h3 id="create-a-production-build" tabindex="-1">Create a production build <a class="header-anchor" href="#create-a-production-build" aria-hidden="true">#</a></h3><p>Run the <code>build</code> npm script or gulp task to generate a static production build of your App saved to your .NET App&#39;s <code>/wwwroot</code> folder:</p><div class="language-bash"><pre><code>$ <span class="token function">npm</span> run build
</code></pre></div><p>This will let you run the production build of your App that&#39;s hosted by your .NET App.</p><h3 id="updating-server-typescript-dtos" tabindex="-1">Updating Server TypeScript DTOs <a class="header-anchor" href="#updating-server-typescript-dtos" aria-hidden="true">#</a></h3><p>Run the <code>dtos</code> npm script or Gulp task to update your server dtos in <code>/src/dtos.ts</code>:</p><div class="language-bash"><pre><code>$ <span class="token function">npm</span> run dtos
</code></pre></div><h3 id="deployments" tabindex="-1">Deployments <a class="header-anchor" href="#deployments" aria-hidden="true">#</a></h3><p>When your App is ready to deploy, run the <code>publish</code> npm (or Gulp) script to package your App for deployment:</p><div class="language-bash"><pre><code>$ <span class="token function">npm</span> run publish
</code></pre></div><p>Which will create a production build of your App which then runs <code>dotnet publish -c Release</code> to Publish a Release build of your App in the <code>/bin/netcoreapp3.1/publish</code> folder which can then copied to remote server or an included in a Docker container to deploy your App.</p><h2 id="svelte-template" tabindex="-1">Svelte template <a class="header-anchor" href="#svelte-template" aria-hidden="true">#</a></h2><p>This project was bootstrapped with <a href="https://github.com/sveltejs/template" target="_blank" rel="noopener noreferrer">sveltejs/template</a>. To learn more about Svelte we recommend going through <a href="https://svelte.dev/tutorial/basics" target="_blank" rel="noopener noreferrer">Svelte&#39;s interactive tutorial</a>.</p>__VP_STATIC_END__`,32),p=[s,l];function i(c,d,h,u,v,g){return r(),a("div",null,p)}var f=t(n,[["render",i]]);export{m as __pageData,f as default};
