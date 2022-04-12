import{_ as e,c as a,o as t,a as s}from"./app.da189b1e.js";const k='{"title":"Postman","description":"","frontmatter":{"title":"Postman"},"headers":[{"level":3,"title":"Importing the Postman Collection","slug":"importing-the-postman-collection"},{"level":3,"title":"Available Routes","slug":"available-routes"},{"level":3,"title":"Label Customization","slug":"label-customization"},{"level":2,"title":"Calling Services","slug":"calling-services"},{"level":3,"title":"Support for authenticated requests","slug":"support-for-authenticated-requests"},{"level":2,"title":"Other PostmanFeature options","slug":"other-postmanfeature-options"}],"relativePath":"postman.md","lastUpdated":1649756885143}',n={},o=s(`__VP_STATIC_START__<p>The <a href="http://www.getpostman.com/" target="_blank" rel="noopener noreferrer">Postman Rest Client</a> is a very popular and easy to use HTTP Request composer that makes it easy to call web services, similar to <a href="https://www.blackbaud.com/files/support/guides/infinitydevguide/Subsystems/inwebapi-developer-help/Content/InfinityWebAPI/coUsingFiddlerCreateHTTPRequest.htm" target="_blank" rel="noopener noreferrer">Fiddler&#39;s Composer</a>. It also provides as an alternative for autogenerating API documentation to <a href="/openapi">ServiceStack&#39;s Open API support</a> that makes it easier to call existing services but does require users to install the <a href="http://www.getpostman.com/" target="_blank" rel="noopener noreferrer">Postman Rest Client</a>.</p><p>Support for Postman is built into ServiceStack and can be enabled by registering the Plugins below:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">PostmanFeature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">CorsFeature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>As Postman makes cross-site requests, is also requires CORS support.</p></div><p>Once enabled, a link with appear in your metadata page:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/release-notes/postman-metadata.png" alt="Postman Metadata link"></p><h3 id="importing-the-postman-collection" tabindex="-1">Importing the Postman Collection <a class="header-anchor" href="#importing-the-postman-collection" aria-hidden="true">#</a></h3><p>By default the link to the Postman JSON metadata collection is at <code>/postman</code>, this url can be imported into postman by clicking on <strong>import collections</strong>:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/wikis/postman-import-link.png" alt="Postman Import Icon"></p><p>This will open up the import dialog, where you can paste the metadata url and click <strong>Import</strong>:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/wikis/postman-import.png" alt="Postman Import Dialog"></p><h3 id="available-routes" tabindex="-1">Available Routes <a class="header-anchor" href="#available-routes" aria-hidden="true">#</a></h3><p>Once imported it will populate a list of available operations that can be selected and easily called from within the Postman UI. Just like the <a href="/openapi">Open API Support</a> the list of operations returned respects the <a href="/auth-restricting-services">Restriction Attributes</a> and only shows the operations each user is allowed to see. The operations returned also favour custom user-defined routes, when none exists it will fallback to use the <a href="/routing#pre-defined-routes">pre-defined routes</a>.</p><h3 id="label-customization" tabindex="-1">Label Customization <a class="header-anchor" href="#label-customization" aria-hidden="true">#</a></h3><p>The label for each operation can be further customized using the <code>?label</code> query string param whose preferred style which can vary depending on the granularity and naming of your Request DTO&#39;s, and whether they have custom routes defined on them.</p><p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/wikis/postman-labels.png" alt="Postman Label Styles"></p><p>The screenshot above shows an example of importing the same service with the different label styles below:</p><ul><li><a href="https://benchmarks.servicestack.net/postman?label=route" target="_blank" rel="noopener noreferrer">/postman?label=route</a></li><li><a href="https://benchmarks.servicestack.net/postman?label=type" target="_blank" rel="noopener noreferrer">/postman?label=type</a></li></ul><p>The <code>label</code> param accepts a collection of string tokens that controls how the label is formatted.The <code>type</code> and <code>route</code> are special tokens that get replaced by the <strong>Request DTO name</strong> and <strong>Route</strong> respectively. Everything else are just added string literals including the <code>+</code> character which is just a url-encoded version of the <code></code> space character.</p><p>Here are some examples using the example definition below:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/contacts/{Id}&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GetContact</span> <span class="token punctuation">{</span> <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
</code></pre></div><table class="table"><tr><td><b>/postman?label=type</b></td><td>GetContact</td></tr><tr><td><b>/postman?label=route</b></td><td>/contacts/{Id}</td></tr><tr><td><b>/postman?label=type:english</b></td><td>Get contact</td></tr><tr><td><b>/postman?label=type:english,+(,route,)</b></td><td>Get contact (/contacts/{Id})</td></tr></table><h4 id="specifying-the-default-label-format" tabindex="-1">Specifying the Default Label Format <a class="header-anchor" href="#specifying-the-default-label-format" aria-hidden="true">#</a></h4><p>The default label format can also be configured when registering the Postman plugin, e.g:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">PostmanFeature</span> <span class="token punctuation">{</span> 
    DefaultLabelFmt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> <span class="token string">&quot;type:english&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;route&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="calling-services" tabindex="-1">Calling Services <a class="header-anchor" href="#calling-services" aria-hidden="true">#</a></h2><p>Calling Services is as easy as selecting the service you want to call, filling in the parameters you want to call it with then clicking <strong>Send</strong>. At a mimimum you want to specify values for all the path variables in the <code>/pathInfo</code> which are prefixed with a colon followed by its name, e.g: <code>:VariableName</code></p><p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/wikis/postman-call-searchtestresults.png" alt="Call Service in Postman"></p><p>The Path Info variables appear first in the list of available <strong>URL params</strong> for each service, as seen with <strong>TestPlanId</strong> above. By default each variable is seeded with its type. Any variables defined on the /pathinfo are sent on the pathinfo whilst other variables in a <code>GET</code> request are sent on the Query String. <code>POST</code> requests also allow sending parameters as <strong>form-data</strong>.</p><h3 id="support-for-authenticated-requests" tabindex="-1">Support for authenticated requests <a class="header-anchor" href="#support-for-authenticated-requests" aria-hidden="true">#</a></h3><p>Calling authentication-only services can be done with the <code>/postman?exportSession=true</code> parameter which will redirect to a url that captures your session cookies into a deep-linkable url like <code>/postman?ssopt=temp&amp;ssid={key}&amp;sspid={key}</code> that can be copied into Postman.</p><p>This lets you replace your session cookies with the session ids on the url, effectively allowing you to take over someone elses session, in this case telling Postman to make requests on your behalf using your authenticated session cookies.</p><p>As this functionality is potentially dangerous it&#39;s only enabled by default in <strong>DebugMode</strong> but can be overridden with:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">PostmanFeature</span> <span class="token punctuation">{</span> 
    EnableSessionExport <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="other-postmanfeature-options" tabindex="-1">Other PostmanFeature options <a class="header-anchor" href="#other-postmanfeature-options" aria-hidden="true">#</a></h2><p>Like other <a href="/plugins">ServiceStack plugins</a> the available options for each Feature can be configured on the Plugin itself at registration:</p><h4 id="registering-at-a-custom-path" tabindex="-1">Registering at a custom path <a class="header-anchor" href="#registering-at-a-custom-path" aria-hidden="true">#</a></h4><p>Use <code>AtRestPath</code> to host the postman metadata route on an alternate:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">PostmanFeature</span> <span class="token punctuation">{</span> 
    AtRestPath <span class="token operator">=</span> <span class="token string">&quot;/alt-postman-link&quot;</span>  <span class="token comment">//default /postman</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="sending-custom-http-headers" tabindex="-1">Sending Custom HTTP Headers <a class="header-anchor" href="#sending-custom-http-headers" aria-hidden="true">#</a></h4><p>Use <code>Headers</code> to get Postman to send custom HTTP Headers on each request, e.g:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">PostmanFeature</span> <span class="token punctuation">{</span> 
    Headers <span class="token operator">=</span> <span class="token string">&quot;Accept: application/json\\nX-Custom-Header: Value&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>The default is <code>Accept: application/json</code> to ensure each request returns its response as JSON. Multiple headers can be separated with the <code>\\n</code> new-line character.</p><h4 id="friendly-type-aliases" tabindex="-1">Friendly Type Aliases <a class="header-anchor" href="#friendly-type-aliases" aria-hidden="true">#</a></h4><p>The names of the type for Request DTO Property Types displayed can also be customized by adding them to the <code>FriendlyTypeNames</code> Dictionary. E.g. we can show <code>DateTime</code> types as <code>Date</code> in Postmans UI with:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">PostmanFeature</span> <span class="token punctuation">{</span> 
    FriendlyTypeNames <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">{</span><span class="token string">&quot;DateTime&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Date&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>__VP_STATIC_END__`,46),p=[o];function i(c,r,l,u,d,h){return t(),a("div",null,p)}var g=e(n,[["render",i]]);export{k as __pageData,g as default};
