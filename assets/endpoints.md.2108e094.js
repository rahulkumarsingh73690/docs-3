import{_ as a,c as n,o as s,a as e}from"./app.da189b1e.js";const g='{"title":"REST, SOAP & default endpoints","description":"","frontmatter":{"slug":"endpoints","title":"REST, SOAP & default endpoints"},"headers":[{"level":2,"title":"Sample requests:","slug":"sample-requests"},{"level":2,"title":"Option 1","slug":"option-1"},{"level":3,"title":"SOAP endpoint","slug":"soap-endpoint"},{"level":3,"title":"Rest endpoint:","slug":"rest-endpoint"},{"level":3,"title":"Default endpoint:","slug":"default-endpoint"},{"level":2,"title":"Option 2","slug":"option-2"},{"level":3,"title":"REST endpoint:","slug":"rest-endpoint-1"},{"level":3,"title":"Default endpoint:","slug":"default-endpoint-1"},{"level":2,"title":"Option 3","slug":"option-3"},{"level":3,"title":"Rest endpoint:","slug":"rest-endpoint-2"}],"relativePath":"endpoints.md","lastUpdated":1649756884295}',t={},o=e(`<p>When you create a service, there are by default three endpoints:</p><ul><li>User-defined REST endpoint</li><li>SOAP endpoint: <code>/[soap11|soap12]</code></li><li>Default endpoint: <code>/[xml|json|html|jsv|csv]/[reply|oneway]/[servicename]</code></li></ul><p>The preferred way to call the webservice is mostly using the REST endpoint. As you have seen, user-defined REST endpoints can be configured with the <code>Route</code> attribute for each request DTO.</p><p>But you can also call your service by using the default endpoint, without configuring a REST url with the default endpoint. Of course there&#39;s always the option to use the SOAP endpoint.</p><h2 id="sample-requests" tabindex="-1">Sample requests: <a class="header-anchor" href="#sample-requests" aria-hidden="true">#</a></h2><p>The possible requests for the following request DTO are:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hello</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="option-1" tabindex="-1">Option 1 <a class="header-anchor" href="#option-1" aria-hidden="true">#</a></h2><h3 id="soap-endpoint" tabindex="-1">SOAP endpoint <a class="header-anchor" href="#soap-endpoint" aria-hidden="true">#</a></h3><div class="language-"><pre><code>POST example.org/soap11
</code></pre></div><div class="language-xml"><pre><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">soap:</span>Envelope</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsd</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>soap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.xmlsoap.org/soap/envelope/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">soap:</span>Body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Hello</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>i</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.servicestack.net/types<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Name</span><span class="token punctuation">&gt;</span></span>String<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Name</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Hello</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">soap:</span>Body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">soap:</span>Envelope</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="rest-endpoint" tabindex="-1">Rest endpoint: <a class="header-anchor" href="#rest-endpoint" aria-hidden="true">#</a></h3><div class="language-"><pre><code>POST example.org/hello
</code></pre></div><div class="language-js"><pre><code><span class="token punctuation">{</span><span class="token string">&quot;Name&quot;</span><span class="token operator">:</span><span class="token string">&quot;World&quot;</span><span class="token punctuation">}</span>
</code></pre></div><h3 id="default-endpoint" tabindex="-1">Default endpoint: <a class="header-anchor" href="#default-endpoint" aria-hidden="true">#</a></h3><div class="language-"><pre><code>POST example.org/json/reply/Hello
</code></pre></div><div class="language-json"><pre><code><span class="token punctuation">{</span><span class="token property">&quot;Name&quot;</span><span class="token operator">:</span><span class="token string">&quot;World&quot;</span><span class="token punctuation">}</span>
</code></pre></div><h2 id="option-2" tabindex="-1">Option 2 <a class="header-anchor" href="#option-2" aria-hidden="true">#</a></h2><p>But you don&#39;t need to pass the <code>Name</code> of the request DTO in the request body. There&#39;s also the possibility to set the value of <code>Name</code> with URL parameters (works only with REST and default endpoint of course).</p><h3 id="rest-endpoint-1" tabindex="-1">REST endpoint: <a class="header-anchor" href="#rest-endpoint-1" aria-hidden="true">#</a></h3><div class="language-"><pre><code>POST example.org/hello?Name=World
</code></pre></div><h3 id="default-endpoint-1" tabindex="-1">Default endpoint: <a class="header-anchor" href="#default-endpoint-1" aria-hidden="true">#</a></h3><div class="language-"><pre><code>POST example.org/json/reply/Hello?Name=World
</code></pre></div><p>You can also combine the two approaches.</p><h2 id="option-3" tabindex="-1">Option 3 <a class="header-anchor" href="#option-3" aria-hidden="true">#</a></h2><p>Last but not least there exists another way to set the value of <code>Name</code>! But this works only with the REST endpoint: If you add the following mapping to the request DTO above:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/hello/{Name}&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
</code></pre></div><p>...you will be able to set the name in the URL itself, without any URL parameters:</p><h3 id="rest-endpoint-2" tabindex="-1">Rest endpoint: <a class="header-anchor" href="#rest-endpoint-2" aria-hidden="true">#</a></h3><div class="language-"><pre><code>GET example.org/hello/World
</code></pre></div><p>As you can see <code>{Name}</code> (in the mapping) is the placeholder for the value of the property <code>Name</code>.</p><div class="info custom-block"><p class="custom-block-title">Tip</p><p>The last two approaches are mostly used for GET and DELETE requests, because often clients don&#39;t support to attach a request body for these HTTP methods</p></div><div class="info custom-block"><p class="custom-block-title">Tip</p><p>As you may have noticed, ServiceStack is also capable to support different formats (JSON, XML, etc). There exists another separate tutorial about formats</p></div>`,33),p=[o];function l(c,i,u,r,d,h){return s(),n("div",null,p)}var m=a(t,[["render",l]]);export{g as __pageData,m as default};
