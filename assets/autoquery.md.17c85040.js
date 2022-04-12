import{_ as e,c as t,o as r,a}from"./app.da189b1e.js";const g='{"title":"AutoQuery","description":"","frontmatter":{"slug":"autoquery","title":"AutoQuery"},"headers":[{"level":2,"title":"AutoQuery - Instant Queryable APIs","slug":"autoquery-instant-queryable-apis"},{"level":3,"title":"Why not OData","slug":"why-not-odata"},{"level":2,"title":"Introducing AutoQuery","slug":"introducing-autoquery"},{"level":3,"title":"AutoQuery Services are ServiceStack Services","slug":"autoquery-services-are-servicestack-services"},{"level":3,"title":"AutoQuery RDBMS","slug":"autoquery-rdbms"},{"level":3,"title":"AutoQuery Data Sources","slug":"autoquery-data-sources"},{"level":2,"title":"ServiceStack Studio","slug":"servicestack-studio"},{"level":3,"title":"Live AutoQuery Viewer Examples","slug":"live-autoquery-viewer-examples"},{"level":2,"title":"Northwind","slug":"northwind"},{"level":2,"title":"StackApis","slug":"stackapis"},{"level":2,"title":"AutoQuery Viewer","slug":"autoquery-viewer"},{"level":2,"title":"TechStacks Cocoa OSX Desktop App","slug":"techstacks-cocoa-osx-desktop-app"}],"relativePath":"autoquery.md","lastUpdated":1649756884291}',i={},o=a('<p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/autoquery/autoquery-splash.png" alt=""></p><h2 id="autoquery-instant-queryable-apis" tabindex="-1">AutoQuery - Instant Queryable APIs <a class="header-anchor" href="#autoquery-instant-queryable-apis" aria-hidden="true">#</a></h2><p>The AutoQuery support in ServiceStack adds Auto Querying functionality akin to OData&#39;s querying support for Web Api, although we&#39;ve strongly disregarded their approach which we&#39;ve long considered <a href="http://stackoverflow.com/a/9579090/85785" target="_blank" rel="noopener noreferrer">promotes web service anti-patterns</a>. To explain the design goals behind AutoQuery it&#39;s important to identify and avoid the parts of OData we consider make it a poor fit for services.</p><h3 id="why-not-odata" tabindex="-1"><a href="/why-not-odata">Why not OData</a> <a class="header-anchor" href="#why-not-odata" aria-hidden="true">#</a></h3><p><a href="/why-not-odata">Why not OData</a> goes through what aspects make OData a poor Services technology who&#39;s Services anti-patterns violates Microsoft&#39;s own Services Design guidelines where its implementation, complexity, poor performance, tight-coupling and inhibitive versionability is reminiscent of their earlier rigid, heavy-weight SOAP/SOA frameworks that&#39;s still entrenched in a number of legacy systems - <a href="http://www.infoq.com/articles/interview-servicestack" target="_blank" rel="noopener noreferrer">poorly ideologised, over-engineered Services technology</a> many companies are still trying to recover from.</p><h2 id="introducing-autoquery" tabindex="-1">Introducing <a href="/autoquery-rdbms">AutoQuery</a> <a class="header-anchor" href="#introducing-autoquery" aria-hidden="true">#</a></h2><p>The solution to overcome most of OData issues is ultimately quite simple: enhance the ideal API the developer would naturally write and complete their implementation for them! This is essentially the philosophy behind AutoQuery which utilizes conventions to automate creation of intent-based self-descriptive APIs that are able to specify configurable conventions and leverage extensibility options to maximize the utility of AutoQuery services.</p><p>AutoQuerying aims to work like optional typing by making it easy to expose contract-less data services for rapid prototyping, then allowing the API to be gradually formalized by decorating Request DTO&#39;s with its supported usage, whilst allowing complete freedom in either utilizing and extending AutoQuery&#39;s built-in functionality or replacing it entirely without breaking the Service Contract.</p><h3 id="autoquery-services-are-servicestack-services" tabindex="-1">AutoQuery Services are ServiceStack Services <a class="header-anchor" href="#autoquery-services-are-servicestack-services" aria-hidden="true">#</a></h3><p>An important point worthy of highlighting is that AutoQuery Services are just normal ServiceStack Services, utilizing the same <a href="/order-of-operations">Request Pipeline</a>, which can be mapped to any <a href="/routing">user-defined route</a>, is available in all <a href="/formats">registered formats</a> and can be <a href="/clients-overview">consumed from existing typed Service Clients</a>.</p><p>In addition to leveraging ServiceStack&#39;s existing functionality, maximizing re-use in this way reduces the cognitive overhead required for developers who can re-use their existing knowledge in implementing, customizing, introspecting and consuming ServiceStack services.</p><h3 id="autoquery-rdbms" tabindex="-1"><a href="/autoquery-rdbms">AutoQuery RDBMS</a> <a class="header-anchor" href="#autoquery-rdbms" aria-hidden="true">#</a></h3><p>Enables the rapid development of high-performance, fully-queryable typed RDBMS data-driven services and <a href="./ormlite/#ormlite-rdbms-providers">supports most major Relational Databases</a></p><h3 id="autoquery-data-sources" tabindex="-1"><a href="/autoquery-data">AutoQuery Data</a> Sources <a class="header-anchor" href="#autoquery-data-sources" aria-hidden="true">#</a></h3><p>AutoQuery Data&#39;s Open Provider model supports multiple back-end data sources. The 3 data source providers available include:</p><ul><li><a href="/autoquery-memory">AutoQuery Memory</a> - for querying static or dynamic in-memory .NET collections, some example uses include showing querying a flat-file <strong>.csv</strong> file and querying a throttled 3rd Party API with it&#39;s built-in configurable caching.</li><li><a href="/autoquery-service">AutoQuery Service</a> - a step higher than <code>MemorySource</code> where you can decorate the response of existing Services with AutoQuery&#39;s rich querying capabilities.</li><li><a href="/autoquery-dynamodb">AutoQuery DynamoDB</a> - adds rich querying capabilities over an AWS DynamoDB Table, offering a giant leap of productivity than constructing DynamoDB queries manually.</li></ul><h2 id="servicestack-studio" tabindex="-1"><a href="/studio">ServiceStack Studio</a> <a class="header-anchor" href="#servicestack-studio" aria-hidden="true">#</a></h2><p>If you&#39;re just getting started AutoQuery we also recommend using <a href="/studio">ServiceStack Studio</a> Desktop App which provides an instant UI to quickly browse and query all your AutoQuery Services that provides a fast way to explore AutoQuery features and construct AutoQuery requests through a Simple UI.</p><p><a href="https://youtu.be/2FFRLxs7orU" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/studio-home.png" alt=""></a></p><div class="info custom-block"><p class="custom-block-title">YouTube</p><p><a href="https://youtu.be/2FFRLxs7orU" target="_blank" rel="noopener noreferrer">youtu.be/2FFRLxs7orU</a></p></div><h1 id="autoquery-examples" tabindex="-1">AutoQuery Examples <a class="header-anchor" href="#autoquery-examples" aria-hidden="true">#</a></h1><h3 id="live-autoquery-viewer-examples" tabindex="-1">Live AutoQuery Viewer Examples <a class="header-anchor" href="#live-autoquery-viewer-examples" aria-hidden="true">#</a></h3><ul><li><a href="http://github.servicestack.net/ss_admin/" target="_blank" rel="noopener noreferrer">http://github.servicestack.net/ss_admin/</a></li><li><a href="http://northwind.netcore.io/ss_admin/" target="_blank" rel="noopener noreferrer">http://northwind.netcore.io/ss_admin/</a></li><li><a href="http://stackapis.netcore.io/ss_admin/" target="_blank" rel="noopener noreferrer">http://stackapis.netcore.io/ss_admin/</a></li></ul><h2 id="northwind" tabindex="-1"><a href="https://github.com/ServiceStackApps/Northwind" target="_blank" rel="noopener noreferrer">Northwind</a> <a class="header-anchor" href="#northwind" aria-hidden="true">#</a></h2><p>Northwind database viewer, showing how to easily expose read and cached view services of an internal dataset with ServiceStack + OrmLite</p><p><a href="http://northwind.netcore.io" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/livedemos/northwind.png" alt=""></a></p><h4 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-hidden="true">#</a></h4><ul><li><a href="/autoquery">AutoQuery</a><ul><li><a href="https://github.com/ServiceStackApps/Northwind/blob/master/src/Northwind/Northwind.ServiceModel/AutoQuery.cs" target="_blank" rel="noopener noreferrer">Northwind AutoQuery DTOs</a></li><li><a href="/ormlite/installation">OrmLite Sqlite</a></li></ul></li></ul><h2 id="stackapis" tabindex="-1"><a href="https://github.com/ServiceStackApps/StackApis" target="_blank" rel="noopener noreferrer">StackApis</a> <a class="header-anchor" href="#stackapis" aria-hidden="true">#</a></h2><p>AngularJS Single Page App leveraging AutoQuery in &lt;50 lines of JavaScript + 1 AutoQuery DTO</p><p><a href="http://stackapis.netcore.io" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/livedemos/stackapis.png" alt=""></a></p><h4 id="features-1" tabindex="-1">Features <a class="header-anchor" href="#features-1" aria-hidden="true">#</a></h4><ul><li><a href="/autoquery">AutoQuery</a><ul><li><a href="https://github.com/ServiceStackApps/StackApis#stackapis-autoquery-service" target="_blank" rel="noopener noreferrer">StackApis AutoQuery DTO</a></li><li><a href="/ormlite/installation">OrmLite Sqlite</a></li></ul></li></ul><h2 id="autoquery-viewer" tabindex="-1"><a href="https://github.com/ServiceStackApps/AutoQueryViewer" target="_blank" rel="noopener noreferrer">AutoQuery Viewer</a> <a class="header-anchor" href="#autoquery-viewer" aria-hidden="true">#</a></h2><p>AutoQuery Viewer is a native iPad App that provides an automatic UI for browsing, inspecting and querying any publicly accessible <a href="/autoquery">ServiceStack AutoQuery Service</a> from an iPad.</p><p><a href="https://itunes.apple.com/us/app/autoquery-viewer/id968625288?ls=1&amp;mt=8" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/wikis/autoquery/autoqueryviewer-appstore.png" alt="AutoQuery Viewer on AppStore"></a></p><h4 id="features-2" tabindex="-1">Features <a class="header-anchor" href="#features-2" aria-hidden="true">#</a></h4><ul><li><a href="https://github.com/ServiceStackApps/AutoQueryViewer#techstacks-autoquery-reqeust-dtos" target="_blank" rel="noopener noreferrer">TechStacks AutoQuery DTOs</a></li><li><a href="https://github.com/ServiceStackApps/AutoQueryViewer#githubautoquery-request-dtos" target="_blank" rel="noopener noreferrer">GitHub AutoQuery DTOs</a></li><li><a href="https://github.com/ServiceStackApps/AutoQueryViewer#stakapi-autoquery-request-dto" target="_blank" rel="noopener noreferrer">Stack Apis AutoQuery DTO</a></li></ul><h2 id="techstacks-cocoa-osx-desktop-app" tabindex="-1"><a href="https://github.com/ServiceStackApps/TechStacksDesktopApp" target="_blank" rel="noopener noreferrer">TechStacks Cocoa OSX Desktop App</a> <a class="header-anchor" href="#techstacks-cocoa-osx-desktop-app" aria-hidden="true">#</a></h2><p>TechStacks OSX Desktop App is built around 2 AutoQuery Services showing how much querying functionality <a href="/autoquery">AutoQuery Services</a> provides for free and how easy they are to call with <a href="/swift-add-servicestack-reference">ServiceStack&#39;s new support for Swift and XCode</a>.</p><p><a href="https://github.com/ServiceStackApps/TechStacksDesktopApp" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/release-notes/techstacks-desktop-field.png" alt="TechStack Desktop Search Fields"></a></p>',41),s=[o];function n(u,c,l,h,p,d){return r(),t("div",null,s)}var f=e(i,[["render",n]]);export{g as __pageData,f as default};
