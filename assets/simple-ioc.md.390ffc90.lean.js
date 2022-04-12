import{_ as n,c as s,o as a,a as t}from"./app.da189b1e.js";const h='{"title":"Simple Container","description":"","frontmatter":{"slug":"simple-ioc","title":"Simple Container"},"headers":[{"level":2,"title":"Fast, small, minimal dependency IOC","slug":"fast-small-minimal-dependency-ioc"}],"relativePath":"simple-ioc.md","lastUpdated":1649756885183}',e={},p=t(`__VP_STATIC_START__<p><a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Common/SimpleContainer.cs" target="_blank" rel="noopener noreferrer">SimpleContainer</a> is an IOC that implements <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/IContainer.cs" target="_blank" rel="noopener noreferrer">IContainer</a> - a minimal interface for a useful IOC:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IContainer</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name">Func<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span> <span class="token function">CreateFactory</span><span class="token punctuation">(</span><span class="token class-name">Type</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token return-type class-name">IContainer</span> <span class="token function">AddSingleton</span><span class="token punctuation">(</span><span class="token class-name">Type</span> type<span class="token punctuation">,</span> <span class="token class-name">Func<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span> factory<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token return-type class-name">IContainer</span> <span class="token function">AddTransient</span><span class="token punctuation">(</span><span class="token class-name">Type</span> type<span class="token punctuation">,</span> <span class="token class-name">Func<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span> factory<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Resolve</span><span class="token punctuation">(</span><span class="token class-name">Type</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token return-type class-name"><span class="token keyword">bool</span></span> <span class="token function">Exists</span><span class="token punctuation">(</span><span class="token class-name">Type</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>It&#39;s late-bound API supports registering dependencies in the 2 most useful Scopes: Singleton and Transient. Leveraging the utility of extension methods, every IOC implementing <code>IContainer</code> also gains the same <a href="https://github.com/ServiceStack/ServiceStack/blob/710da129005f3df5dc93ea0e51e6d8a8681ec04e/src/ServiceStack.Common/SimpleContainer.cs#L114" target="_blank" rel="noopener noreferrer">Typed Generic API</a>, e.g:</p><div class="language-csharp"><pre><code>container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddTransient</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IFoo<span class="token punctuation">,</span>Foo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddTransient</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IFoo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddTransient</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IBar<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
container<span class="token punctuation">.</span><span class="token function">AddTransient</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FooImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddTransient</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>FooImpl<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

container<span class="token punctuation">.</span><span class="token function">AddSingleton</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">Foo</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
container<span class="token punctuation">.</span><span class="token function">AddSingleton</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> foo<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> foo <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Resolve</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IFoo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> bar <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">Resolve</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">IBar</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> hasFoo <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Exists</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IFoo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Both <code>Funq.Container</code> and <code>SimpleContainer</code> implement the <code>IContainer</code> interface which ServiceStack&#39;s <a href="https://sharpscript.net/docs/sharp-pages" target="_blank" rel="noopener noreferrer">SharpPagesFeature</a> utilizes to replace the TemplateContext&#39;s built-in IOC to use Funq where it shares the same IOC instance and is able to resolve ServiceStack&#39;s AppHost dependencies.</p><h2 id="fast-small-minimal-dependency-ioc" tabindex="-1">Fast, small, minimal dependency IOC <a class="header-anchor" href="#fast-small-minimal-dependency-ioc" aria-hidden="true">#</a></h2><p><a href="/ioc">Funq</a> was originally chosen for ServiceStack because it was the amongst the fastest, smallest and most embeddable IOC&#39;s available with a pleasant Typed API, which is integrated into <code>ServiceStack.dll</code> where it provides all IOC functionality in ServiceStack.</p><p><code>SimpleContainer</code> is even smaller and faster than Funq and only requires a dependency to <code>ServiceStack.Common.dll</code>. It supports AutoWiring, constructor and public property injection but not Funq&#39;s other less used features like Child Containers, named dependencies and Request Scoped dependencies.</p>__VP_STATIC_END__`,8),o=[p];function c(l,i,u,r,k,d){return a(),s("div",null,o)}var f=n(e,[["render",c]]);export{h as __pageData,f as default};
