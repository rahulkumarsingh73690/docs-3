import{_ as e,c as t,o as a,a as i}from"./app.da189b1e.js";const f='{"title":"API First Development","description":"","frontmatter":{"slug":"api-first-development","title":"API First Development"},"headers":[{"level":2,"title":"Benefits of Services","slug":"benefits-of-services"},{"level":2,"title":"API First Development Model","slug":"api-first-development-model"},{"level":3,"title":"Multiple Web UI Validation Examples using same Services","slug":"multiple-web-ui-validation-examples-using-same-services"},{"level":2,"title":"World Validation","slug":"world-validation"}],"relativePath":"api-first-development.md","lastUpdated":1649756884287}',s={},r=i('<p>One message we continually try to re-iterate is the importance of Services (aka APIs) having a well-defined coarse-grained Services Contract which serves as the interface into your system by which all external consumers bind to - making it the most important contract in your system.</p><p>A strategy we recommend for maximizing re-use of your Services is to design them from an API-first point of view where all consumers (e.g. Desktop, Mobile and Web UIs) have equal accessibility to your services since they all consume the same published API&#39;s for all of their functionality.</p><h2 id="benefits-of-services" tabindex="-1">Benefits of Services <a class="header-anchor" href="#benefits-of-services" aria-hidden="true">#</a></h2><p>This is the development model ServiceStack has always promoted and what most of its features are centered around, where your Services Contract is defined by decoupled impl-free DTOs. If your Services retain this property then they&#39;ll be able to encapsulate any of its capabilities of infinite complexity and make it available remotely to all consumers with never any more complexity than the cost of a Service call:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/dtos-role.png" alt=""></p><p>This is ultimately where most of the value of Services are derived, they&#39;re the ultimate form of encapsulating complexity and offers the highest level of software reuse. ServiceStack amplifies your Services capabilities by making them available in multiple <a href="/why-servicestack#multiple-hosting-options">Hosting Options</a>, <a href="/why-servicestack#multiple-pluggable-formats">serialization formats</a>, <a href="/why-servicestack#multiple-endpoints">MQ and SOAP endpoints</a> to enable more seamless integrations in a variety of different scenarios including native end-to-end Typed APIs for the most popular <a href="/why-servicestack#multiple-clients">Web, Mobile and Desktop Apps</a> that reduce the effort and complexity required to call your Services in all consumers - multiplicatively increasing the value provided.</p><h2 id="api-first-development-model" tabindex="-1">API First Development Model <a class="header-anchor" href="#api-first-development-model" aria-hidden="true">#</a></h2><p>The typical practice in .NET has been you need to maintain <strong>separate controllers</strong> and logic for your <strong>HTML UIs</strong> and <strong>API controllers</strong> for your <strong>HTTP APIs</strong>. This approach forces code duplication and breaks your systems well-defined Service Contracts where any custom logic in your MVC Controllers and Razor pages becomes another entry point into your system where no longer are all your system capabilities available to all clients, some are only available when using a browser to navigate MVC pages.</p><p>Whereas if you develop your APIs first, focusing instead of exposing your System&#39;s functionality behind pure-logic APIs, all clients including Web, Mobile, Desktop clients and B2B integrations will be able to utilize your same well-tested System Interfaces.</p><p>In ServiceStack there are no &quot;MVC Controllers&quot; just for HTML pages, there are only Services, which are written with pure logic that&#39;s unopinionated as to what clients are calling it, with clean <strong>Request DTOs</strong> received as Inputs that typically return clean <strong>Response DTOs</strong> as outputs. HTML is then just another serialization format, providing a View of your Services or serving as a bundled UI that works on top of your existing Services, in all cases calling the same well tested and defined Services that all other clients use.</p><p>For web development this means that UI logic and Error handling should ideally be utilizing the pure API Error Responses rather than behind server-side pages which gets easily coupled to your server implementation rather than your external published APIs.</p><h3 id="multiple-web-ui-validation-examples-using-same-services" tabindex="-1">Multiple Web UI Validation Examples using same Services <a class="header-anchor" href="#multiple-web-ui-validation-examples-using-same-services" aria-hidden="true">#</a></h3><p>To better demonstrate the benefits of this approach and and show how there&#39;s no loss of flexibility, we&#39;ve created the <a href="https://github.com/NetCoreApps/Validation" target="_blank" rel="noopener noreferrer">World Validation</a> .NET Core App which uses the same pure unopinionated ServiceStack Services to support <strong>8 different HTML UI strategies</strong> including server HTML Rendered and Ajax Client forms, multiple View Engines, multiple layouts - all utilizing the same Services and declarative <a href="/validation">Fluent Validation</a>.</p><p><a href="https://github.com/NetCoreApps/Validation" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/apps/Validation/home.png" alt=""></a></p><h4 align="center">View Source on GitHub <a href="https://github.com/NetCoreApps/Validation">NetCoreApps/Validation</a></h4><p>It should be noted that these are just examples of different HTML UIs, with no additional effort, all ServiceStack Services automatically provide native integrations into <strong>all popular Mobile and Desktop Apps</strong> with <a href="/add-servicestack-reference">Add ServiceStack Reference</a>.</p><h2 id="world-validation" tabindex="-1"><a href="/world-validation">World Validation</a> <a class="header-anchor" href="#world-validation" aria-hidden="true">#</a></h2><p>The annotated <a href="/world-validation">World Validation Docs</a> walks through and showcases the implementation of how the most popular <strong>Server HTML rendered</strong> approaches and <strong>Client UI rendered</strong> technologies which are able all to use the same single suite of ServiceStack Services.</p>',18),o=[r];function n(l,c,d,p,h,u){return a(),t("div",null,o)}var v=e(s,[["render",n]]);export{f as __pageData,v as default};
