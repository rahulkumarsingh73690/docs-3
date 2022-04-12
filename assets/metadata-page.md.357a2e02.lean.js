import{_ as a,c as n,o as s,a as e}from"./app.da189b1e.js";const h='{"title":"Metadata Pages","description":"","frontmatter":{"title":"Metadata Pages"},"headers":[{"level":2,"title":"Annotating Services","slug":"annotating-services"},{"level":3,"title":"Group Services by Tag","slug":"group-services-by-tag"},{"level":2,"title":"Adding Links to Metadata page","slug":"adding-links-to-metadata-page"},{"level":3,"title":"Debug Links","slug":"debug-links"},{"level":2,"title":"Metadata Page Filters","slug":"metadata-page-filters"},{"level":2,"title":"Updating HTML and Metadata Page Templates","slug":"updating-html-and-metadata-page-templates"},{"level":2,"title":"How to disable the metadata page?","slug":"how-to-disable-the-metadata-page"},{"level":2,"title":"Matching Requests with their Response DTOs","slug":"matching-requests-with-their-response-dtos"},{"level":3,"title":"IReturn Marker Interface","slug":"ireturn-marker-interface"},{"level":3,"title":"Response Type Naming Convention","slug":"response-type-naming-convention"},{"level":3,"title":"Service Response Type","slug":"service-response-type"},{"level":2,"title":"Auth Info in Metadata Pages","slug":"auth-info-in-metadata-pages"}],"relativePath":"metadata-page.md","lastUpdated":1649756885135}',t={},p=e(`__VP_STATIC_START__<p>ServiceStack will automatically generate a metadata page about the webservice. The metadata can be found under the URL <code>/metadata</code>:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/wikis/metadata-chat.png" alt="Example"></p><p>The Metadata page contains:</p><ul><li>List of all visible web services and the endpoints they&#39;re accessible on</li><li>Links to a detailed page of each format, with example request and responses</li><li>Links to SOAP 1.1/1.2 WSDLs</li><li>Links to all XSD types for all services</li><li>Links to internally available debug metadata info</li><li>Links to Client examples documentation</li></ul><p>The metadata pages provide automatic generated documentation around your services, allowing consumers of your APIs to more easily introspect and provide greater visibility of your services.</p><h2 id="annotating-services" tabindex="-1">Annotating Services <a class="header-anchor" href="#annotating-services" aria-hidden="true">#</a></h2><p>You can also optionally add custom annotations and documentation on services which will automatically appear on the metadata pages. Here is an example of a fully annotated Service:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Api</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;Service Description&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/swagger/{Name}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> Summary <span class="token operator">=</span> <span class="token string">&quot;GET Summary&quot;</span><span class="token punctuation">,</span> Notes<span class="token operator">=</span><span class="token string">&quot;Notes&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/swagger/{Name}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span> Summary <span class="token operator">=</span><span class="token string">&quot;POST Summary&quot;</span><span class="token punctuation">,</span> Notes<span class="token operator">=</span><span class="token string">&quot;Notes&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyRequestDto</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ApiMember</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Name<span class="token operator">=</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">,</span> Description <span class="token operator">=</span> <span class="token string">&quot;Name Description&quot;</span><span class="token punctuation">,</span> 
        ParameterType <span class="token operator">=</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">,</span> DataType <span class="token operator">=</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span> IsRequired <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>If now the detail page of the specific service is inspected, the description configured above will be displayed on both the <a href="/openapi">Open API</a> and Metadata Detail Page:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/release-notes/metadata-swagger-api.png" alt="Metadata Detail Page"></p><h3 id="group-services-by-tag" tabindex="-1">Group Services by Tag <a class="header-anchor" href="#group-services-by-tag" aria-hidden="true">#</a></h3><p>Services can also be <a href="/api-design#group-services-by-tag">grouped by Tag</a> by annotating them with the <code>[Tag]</code> attribute:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Tag</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;web&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebApi</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IReturn<span class="token punctuation">&lt;</span>MyResponse<span class="token punctuation">&gt;</span></span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Tag</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;mobile&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MobileApi</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IReturn<span class="token punctuation">&lt;</span>MyResponse<span class="token punctuation">&gt;</span></span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Tag</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;web&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">,</span><span class="token class-name">Tag</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;mobile&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebAndMobileApi</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IReturn<span class="token punctuation">&lt;</span>MyResponse<span class="token punctuation">&gt;</span></span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><p>Where they&#39;ll appear as a tab to additionally filter APIs in metadata pages:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/metadata/tag-groups.png" alt=""></p><h2 id="adding-links-to-metadata-page" tabindex="-1">Adding Links to Metadata page <a class="header-anchor" href="#adding-links-to-metadata-page" aria-hidden="true">#</a></h2><h3 id="debug-links" tabindex="-1">Debug Links <a class="header-anchor" href="#debug-links" aria-hidden="true">#</a></h3><p>A good place to provide better visibility of functionality in ServiceStack is with the <strong>Plugin Links</strong> and <strong>Debug Info</strong> links section to the <code>/metadata</code> page which add links to any Plugins with Web UI&#39;s, e.g:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/release-notes/debug-links.png" alt="Debug Info Links"></p><p>The Debug Links section is only available in <strong>DebugMode</strong> (recap: set by default in Debug builds or explicitly with <code>Config.DebugMode = true</code>). In addition, users with the <strong>Admin</strong> role (or if <code>Config.AdminAuthSecret</code> is enabled) can also view the debug Plugins UI&#39;s in production.</p><p>You can add links to your own <a href="/plugins">Plugins</a> in the metadata pages with:</p><div class="language-csharp"><pre><code>appHost<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetPlugin</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>MetadataFeature<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">AddPluginLink</span><span class="token punctuation">(</span><span class="token string">&quot;swagger-ui/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Swagger UI&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
appHost<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetPlugin</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>MetadataFeature<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">AddDebugLink</span><span class="token punctuation">(</span><span class="token string">&quot;?debug=requestinfo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Request Info&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><code>AddPluginLink</code> adds links under the <strong>Plugin Links</strong> section and should be used if your plugin is publicly visible, otherwise use <code>AddDebugLink</code> for plugins only available during debugging or development.</p><h2 id="metadata-page-filters" tabindex="-1">Metadata Page Filters <a class="header-anchor" href="#metadata-page-filters" aria-hidden="true">#</a></h2><p>Use the <code>IndexPageFilter</code> and <code>DetailPageFilter</code> on the <code>MetadataFeature</code> plugin to customize the Master and detail metadata pages before they&#39;re rendered. E.g. you can reverse the order of operation names with:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> metadata <span class="token operator">=</span> appHost<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetPlugin</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>MetadataFeature<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
metadata<span class="token punctuation">.</span>IndexPageFilter <span class="token operator">=</span> page <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    page<span class="token punctuation">.</span>OperationNames<span class="token punctuation">.</span><span class="token function">Sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> y<span class="token punctuation">.</span><span class="token function">CompareTo</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="updating-html-and-metadata-page-templates" tabindex="-1">Updating HTML and Metadata Page Templates <a class="header-anchor" href="#updating-html-and-metadata-page-templates" aria-hidden="true">#</a></h2><p>The HTML templates for the metadata pages are maintained as <a href="https://github.com/ServiceStack/ServiceStack/tree/master/src/ServiceStack/Templates" target="_blank" rel="noopener noreferrer">embedded html template resources</a>.</p><p>The VFS lets you replace built-in ServiceStack templates with your own by simply copying the metadata or <a href="http://bit.ly/164YbrQ" target="_blank" rel="noopener noreferrer">HtmlFormat Template files</a> you want to customize and placing them in your Website Directory at:</p><div class="language-"><pre><code>/Templates/HtmlFormat.html        // The auto HtmlFormat template
/Templates/IndexOperations.html   // The /metadata template
/Templates/OperationControl.html  // Individual operation template
</code></pre></div><p>Which you can customize locally that ServiceStack will pick up and use instead.</p><h2 id="how-to-disable-the-metadata-page" tabindex="-1">How to disable the metadata page? <a class="header-anchor" href="#how-to-disable-the-metadata-page" aria-hidden="true">#</a></h2><p>The metadata page is a feature and can be removed by setting:</p><div class="language-csharp"><pre><code><span class="token function">SetConfig</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">HostConfig</span> <span class="token punctuation">{</span> 
    EnableFeatures <span class="token operator">=</span> Feature<span class="token punctuation">.</span>All<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>Feature<span class="token punctuation">.</span>Metadata<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><hr><p>This can be extended to disable as many selected features are required, e.g. to also disable SOAP support you can combine with:</p><div class="language-csharp"><pre><code><span class="token function">SetConfig</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">HostConfig</span> <span class="token punctuation">{</span> 
    EnableFeatures <span class="token operator">=</span> Feature<span class="token punctuation">.</span>All<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>
        Feature<span class="token punctuation">.</span>Metadata <span class="token operator">|</span> Feature<span class="token punctuation">.</span>Soap11 <span class="token operator">|</span> Feature<span class="token punctuation">.</span>Soap12<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="matching-requests-with-their-response-dtos" tabindex="-1">Matching Requests with their Response DTOs <a class="header-anchor" href="#matching-requests-with-their-response-dtos" aria-hidden="true">#</a></h2><p>There are a number of different ways to match Requests with their Response DTO&#39;s for use in metadata services:</p><h3 id="ireturn-marker-interface" tabindex="-1">IReturn Marker Interface <a class="header-anchor" href="#ireturn-marker-interface" aria-hidden="true">#</a></h3><p>The recommended way to associate Request with their Response DTO&#39;s is to annotate the Request DTO with an <code>IReturn&lt;T&gt;</code> marker, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IReturn<span class="token punctuation">&lt;</span>GreetingResponse<span class="token punctuation">&gt;</span></span></span> <span class="token punctuation">{</span> <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GreetingResponse</span> <span class="token punctuation">{</span> <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
</code></pre></div><p>This also has the primary benefit of enabling a terse and typed generic Client API as the Response type is captured in the Request DTO:</p><div class="language-csharp"><pre><code>GreetingResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Hello</span> <span class="token punctuation">{</span> <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Without the <code>IReturn&lt;T&gt;</code> marker the Response DTO would need to be specified on all call-sites, e.g:</p><div class="language-csharp"><pre><code>GreetingResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Get</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>GreetingResponse<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Hello</span> <span class="token punctuation">{</span> <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="response-type-naming-convention" tabindex="-1">Response Type Naming Convention <a class="header-anchor" href="#response-type-naming-convention" aria-hidden="true">#</a></h3><p>An alternative way to specify the Response Type is to use the built-in naming convention:</p><div class="language-"><pre><code>{Request DTO Name} + Response
</code></pre></div><p>Where the Response DTO adds a <code>Response</code> suffix to the Request DTO, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token punctuation">{</span> <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloResponse</span> <span class="token punctuation">{</span> <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
</code></pre></div><h3 id="service-response-type" tabindex="-1">Service Response Type <a class="header-anchor" href="#service-response-type" aria-hidden="true">#</a></h3><p>You can also specify the Response Type by specifying it on the Services method signature, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyServices</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Service</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">GreetingResponse</span> <span class="token function">Get</span><span class="token punctuation">(</span>Hello request<span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="auth-info-in-metadata-pages" tabindex="-1">Auth Info in <a href="/metadata-page">Metadata Pages</a> <a class="header-anchor" href="#auth-info-in-metadata-pages" aria-hidden="true">#</a></h2><p>The Metadata pages also label protected Services. On the metadata index page it displays a yellow key next to each Service requiring Authentication:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/release-notes/metadata-auth-summary.png" alt=""></p><p>Hovering over the key will show which also permissions or roles the Service needs.</p><p>This information is also shown the metadata detail pages which will list which permissions/roles are required (if any), e.g:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/release-notes/metadata-auth.png" alt=""></p>__VP_STATIC_END__`,60),o=[p];function c(i,l,u,r,d,k){return s(),n("div",null,o)}var m=a(t,[["render",c]]);export{h as __pageData,m as default};
