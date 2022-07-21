import{_ as e}from"./chunks/servicestack-logical-view-02.8c2e7be7.js";import{_ as t}from"./chunks/servicestack-httpclients.bdccdaac.js";import{_ as r}from"./chunks/servicestack-overview-01.b4b55383.js";import{_ as a,c as n,o as i,a as s}from"./app.c4573477.js";var c="/assets/servicestack-mqclients.71aaa491.png";const w='{"title":"Architecture Overview","description":"","frontmatter":{"title":"Architecture Overview"},"headers":[{"level":2,"title":"Server Architecture","slug":"server-architecture"},{"level":2,"title":"Client Architecture","slug":"client-architecture"},{"level":2,"title":"Implementation","slug":"implementation"}],"relativePath":"architecture-overview.md"}',o={},l=s('<p>Ultimately behind-the-scenes ServiceStack is just built on top of <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a>&#39;s Raw <a href="https://msdn.microsoft.com/en-us/library/ms227433.aspx" target="_blank" rel="noopener noreferrer">IHttpAsyncHandler</a>. Existing abstractions and <a href="http://mono.servicestack.net/mvc-powerpack/" target="_blank" rel="noopener noreferrer">xmlconfig-encumbered legacy ASP.NET providers</a> have been abandoned, in favour of fresh, simple and clean <a href="/caching">Caching</a>, <a href="/sessions">Session</a> and <a href="/authentication-and-authorization">Authentication</a> providers all based on clean POCOs, supporting multiple back-ends and all working seamlessly together. Our best-practices architecture is purposely kept simple, introduces minimal new concepts or artificial constructs that can all be eloquently captured in the diagram below:</p><h2 id="server-architecture" tabindex="-1">Server Architecture <a class="header-anchor" href="#server-architecture" aria-hidden="true">#</a></h2><p><img src="'+e+'" alt=""></p><h2 id="client-architecture" tabindex="-1">Client Architecture <a class="header-anchor" href="#client-architecture" aria-hidden="true">#</a></h2><p>ServiceStack&#39;s <a href="/advantages-of-message-based-web-services">Message-based design</a> allows us to easily support <a href="/clients-overview">typed, generic and re-usable Service Clients</a> for all our popular formats:</p><p><img src="'+t+'" alt=""></p><p>Having all clients share the same interface allow them to be hot-swappable at run-time without code changes and keep them highly testable where the same unit test can also <a href="https://github.com/ServiceStack/ServiceStack/blob/master/tests/ServiceStack.WebHost.IntegrationTests/Tests/WebServicesTests.cs" target="_blank" rel="noopener noreferrer">serve as an XML, JSON, JSV, SOAP Integration Test</a>.</p><p>By promoting clean (endpoint-ignorant and dependency-free) Service and DTO classes, your web services are instantly re-usable and can be hosted in non-http contexts as well. E.g. The client architecture when one of the <a href="/redis-mq">built-in MQ Host is enabled</a>:</p><p><img src="'+c+'" alt=""></p><h2 id="implementation" tabindex="-1">Implementation <a class="header-anchor" href="#implementation" aria-hidden="true">#</a></h2><p>The entry point for all <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> and HttpListener requests is in the <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack/HttpHandlerFactory.cs" target="_blank" rel="noopener noreferrer">ServiceStack.HttpHandlerFactory</a> whose purpose is to return the appropriate IHttpHandler for the incoming request.</p><p>There are 2 distinct modes in any ServiceStack application:</p><ol><li>AppHost Setup and Configuration - Only done once for all services. Run only once on App StartUp.</li><li>Runtime - Run on every request: uses dependencies, plugins, etc. defined in the AppHost. Each new request re-binds all IOC dependencies to a new service instance which gets disposed at the end of each request.</li></ol><p>The implementation of this can be visualized below:</p><p><img src="'+r+'" alt=""></p><p>After the <code>IHttpHandler</code> is returned, it gets executed with the current <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> or HttpListener request wrapped in a common <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/Web/IRequest.cs" target="_blank" rel="noopener noreferrer">IRequest</a> instance.</p>',16),p=[l];function h(d,u,m,f,v,b){return i(),n("div",null,p)}var A=a(o,[["render",h]]);export{w as __pageData,A as default};