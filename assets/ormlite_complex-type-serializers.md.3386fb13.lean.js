import{_ as a,c as n,o as s,a as e}from"./app.da189b1e.js";const m='{"title":"Pluggable Complex Type Serializers","description":"","frontmatter":{"title":"Pluggable Complex Type Serializers"},"relativePath":"ormlite/complex-type-serializers.md","lastUpdated":1649756885139}',t={},o=e(`__VP_STATIC_START__<p>Pluggable serialization lets you specify different serialization strategies of Complex Types for each available RDBMS provider, e.g:</p><div class="language-csharp"><pre><code><span class="token comment">//ServiceStack&#39;s JSON and JSV Format</span>
SqliteDialect<span class="token punctuation">.</span>Provider<span class="token punctuation">.</span>StringSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JsvStringSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       
PostgreSqlDialect<span class="token punctuation">.</span>Provider<span class="token punctuation">.</span>StringSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JsonStringSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//.NET&#39;s XML and JSON DataContract serializers</span>
SqlServerDialect<span class="token punctuation">.</span>Provider<span class="token punctuation">.</span>StringSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">DataContractSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
MySqlDialect<span class="token punctuation">.</span>Provider<span class="token punctuation">.</span>StringSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JsonDataContractSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//.NET XmlSerializer</span>
OracleDialect<span class="token punctuation">.</span>Provider<span class="token punctuation">.</span>StringSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">XmlSerializableSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>You can also provide a custom serialization strategy by implementing <a href="https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.Text/src/ServiceStack.Text/IStringSerializer.cs" target="_blank" rel="noopener noreferrer">IStringSerializer</a>.</p><p>By default, all dialects use the existing <code>JsvStringSerializer</code>, except for PostgreSQL which due to its built-in support for JSON, uses the JSON format by default.</p>__VP_STATIC_END__`,4),p=[o];function c(i,r,l,u,k,S){return s(),n("div",null,p)}var g=a(t,[["render",c]]);export{m as __pageData,g as default};
