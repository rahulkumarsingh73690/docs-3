import{_ as s,c as t,o as e,a,b as n}from"./app.da189b1e.js";const v='{"title":"MsgPack Format","description":"","frontmatter":{"slug":"messagepack-format","title":"MsgPack Format"},"headers":[{"level":2,"title":"Installing via NuGet","slug":"installing-via-nuget"},{"level":2,"title":"Client Usage","slug":"client-usage"}],"relativePath":"messagepack-format.md","lastUpdated":1649756885135}',o={},p=a('<p><a href="http://msgpack.org/" target="_blank" rel="noopener noreferrer">Message Pack</a> is an efficient binary serialization format. It lets you exchange data among multiple languages like JSON but it&#39;s faster and smaller.</p><p>If you ever wished to use JSON for convenience (e.g. storing an image with metadata) but could not for technical reasons (encoding, size, speed...), MessagePack offers a great replacement. Despite the name it ends up being a much <a href="http://stackoverflow.com/questions/6355497/performant-entity-serialization-bson-vs-messagepack-vs-json" target="_blank" rel="noopener noreferrer">better &quot;Binary JSON&quot; than BSON is</a>, as it&#39;s much faster, smaller and doesn&#39;t require the foreign types like &quot;ObjectId&quot;, &quot;UUID&quot; that BSON has.</p><p>MsgPack is a great addition to your ServiceStack&#39;s web services as it has <a href="http://theburningmonk.com/2012/02/performance-test-binary-serializers-part-iii/" target="_blank" rel="noopener noreferrer">similar performance to Protocol Buffers</a> (.NET&#39;s fastest binary serializer) but is also schema-less like JSON so already works with your Un-Attributed, <strong>Clean POCOs</strong> - no code-changes required. (as opposed to <a href="/protobuf-format">Protobuf format</a> which requires decorating every serializable property with <code>[DataMember(Order=N)]</code>).</p><h2 id="installing-via-nuget" tabindex="-1">Installing via NuGet <a class="header-anchor" href="#installing-via-nuget" aria-hidden="true">#</a></h2><p>Message Pack is easily installed with the <a href="https://nuget.org/packages/ServiceStack.MsgPack" target="_blank" rel="noopener noreferrer">ServiceStack.MsgPack</a> NuGet package:</p>',5),c=n("div",{class:"nuget-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-700"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle text-lg text-white"},[n("p",null,[n("code",null,'<PackageReference Include="ServiceStack.MsgPack" Version="6.*" />')])])]),n("div",{class:"flex"},[n("div",{class:"bg-sky-500 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),i=a(`<p>After the NuGet Package is added to your Project, enable the MsgPack format in your <code>AppHost</code> with:</p><div class="language-cs"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">MsgPackFormat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>The NuGet plugin also includes the <strong>MsgPackServiceClient</strong> client below so you can easily call it from any C# Client.</p><h2 id="client-usage" tabindex="-1">Client Usage <a class="header-anchor" href="#client-usage" aria-hidden="true">#</a></h2><p>Just like the rest of ServiceStack C# Clients, MsgPackServiceClient is interchangeable with the other clients that equally supports all your ServiceStack&#39;s services including the <a href="/api-design">New API Design</a>, e.g:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MsgPackServiceClient</span><span class="token punctuation">(</span>BaseUri<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List<span class="token punctuation">&lt;</span>Todo<span class="token punctuation">&gt;</span></span> all <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Todos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// Count = 0</span>

<span class="token class-name"><span class="token keyword">var</span></span> todo <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Post</span><span class="token punctuation">(</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Todo</span> <span class="token punctuation">{</span> Content <span class="token operator">=</span> <span class="token string">&quot;New TODO&quot;</span><span class="token punctuation">,</span> Order <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// todo.Id = 1</span>
all <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Todos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                      <span class="token comment">// Count = 1</span>

todo<span class="token punctuation">.</span>Content <span class="token operator">=</span> <span class="token string">&quot;Updated TODO&quot;</span><span class="token punctuation">;</span>
todo <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Put</span><span class="token punctuation">(</span>todo<span class="token punctuation">)</span><span class="token punctuation">;</span>                            <span class="token comment">// todo.Content = Updated TODO</span>

client<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Todos</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
all <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Todos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
</code></pre></div><p>More examples of using MsgPackServiceClient can be found in the <a href="https://github.com/ServiceStack/ServiceStack/blob/master/tests/RazorRockstars.Console.Files/ReqStarsService.cs" target="_blank" rel="noopener noreferrer">New APIs Integration Test Suite</a>.</p>`,7),l=[p,c,i];function r(u,k,d,g,h,m){return e(),t("div",null,l)}var w=s(o,[["render",r]]);export{v as __pageData,w as default};
