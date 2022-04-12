import{_ as n,c as a,o as s,a as e}from"./app.da189b1e.js";const g='{"title":"Getting started with OrmLite","description":"","frontmatter":{"title":"Getting started with OrmLite"},"headers":[{"level":3,"title":"SQL Server Dialects","slug":"sql-server-dialects"},{"level":2,"title":"OrmLite Connection Factory","slug":"ormlite-connection-factory"},{"level":3,"title":"Creating Table and Seed Data Example","slug":"creating-table-and-seed-data-example"},{"level":2,"title":"OrmLite Interactive Tour","slug":"ormlite-interactive-tour"}],"relativePath":"ormlite/getting-started.md","lastUpdated":1649756885139}',t={},o=e(`<p>After <a href="./installation">installing OrmLite</a> we now need to configure OrmLite&#39;s DB Connection Factory containing the RDBMS Dialect you want to use and the primary DB connection string you wish to connect to. Most NuGet OrmLite packages only contain a single provider listed below:</p><div class="language-csharp"><pre><code>SqlServerDialect<span class="token punctuation">.</span>Provider      <span class="token comment">// SQL Server Version 2012+</span>
SqliteDialect<span class="token punctuation">.</span>Provider         <span class="token comment">// Sqlite</span>
PostgreSqlDialect<span class="token punctuation">.</span>Provider     <span class="token comment">// PostgreSQL </span>
MySqlDialect<span class="token punctuation">.</span>Provider          <span class="token comment">// MySql</span>
OracleDialect<span class="token punctuation">.</span>Provider         <span class="token comment">// Oracle</span>
FirebirdDialect<span class="token punctuation">.</span>Provider       <span class="token comment">// Firebird</span>
</code></pre></div><h3 id="sql-server-dialects" tabindex="-1">SQL Server Dialects <a class="header-anchor" href="#sql-server-dialects" aria-hidden="true">#</a></h3><p>Except for SQL Server which has a number of different dialects to take advantage of features available in each version, please use the best matching version closest to your SQL Server version:</p><div class="language-csharp"><pre><code>SqlServer2008Dialect<span class="token punctuation">.</span>Provider  <span class="token comment">// SQL Server &lt;= 2008</span>
SqlServer2012Dialect<span class="token punctuation">.</span>Provider  <span class="token comment">// SQL Server 2012</span>
SqlServer2014Dialect<span class="token punctuation">.</span>Provider  <span class="token comment">// SQL Server 2014</span>
SqlServer2016Dialect<span class="token punctuation">.</span>Provider  <span class="token comment">// SQL Server 2016</span>
SqlServer2017Dialect<span class="token punctuation">.</span>Provider  <span class="token comment">// SQL Server 2017+</span>
</code></pre></div><h2 id="ormlite-connection-factory" tabindex="-1">OrmLite Connection Factory <a class="header-anchor" href="#ormlite-connection-factory" aria-hidden="true">#</a></h2><p>To configure OrmLite you&#39;ll need your App&#39;s DB Connection string along the above RDBMS Dialect Provider, e.g:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> dbFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OrmLiteConnectionFactory</span><span class="token punctuation">(</span>
    connectionString<span class="token punctuation">,</span>  
    SqlServerDialect<span class="token punctuation">.</span>Provider<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>If you&#39;re using an IOC register <code>OrmLiteConnectionFactory</code> as a <strong>singleton</strong>:</p><div class="language-csharp"><pre><code>services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddSingleton</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IDbConnectionFactory<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OrmLiteConnectionFactory</span><span class="token punctuation">(</span><span class="token string">&quot;:memory:&quot;</span><span class="token punctuation">,</span> SqliteDialect<span class="token punctuation">.</span>Provider<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//InMemory Sqlite DB</span>
</code></pre></div><p>Which can then be used to open DB Connections to your RDBMS.</p><h3 id="creating-table-and-seed-data-example" tabindex="-1">Creating Table and Seed Data Example <a class="header-anchor" href="#creating-table-and-seed-data-example" aria-hidden="true">#</a></h3><p>If connecting to an empty database you can use OrmLite&#39;s Create Table APIs to create any missing tables you need, which OrmLite creates based solely on the Schema definition of your POCO data models.</p><p><code>CreateTableIfNotExists</code> returns <strong>true</strong> if the table didn&#39;t exist and OrmLite created it, where it can be further populated with any initial seed data it should have, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> db <span class="token operator">=</span> dbFactory<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">CreateTableIfNotExists</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Poco<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    db<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Poco</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> <span class="token string">&quot;Seed Data&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">SingleById</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Poco<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
result<span class="token punctuation">.</span><span class="token function">PrintDump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//= {Id: 1, Name:Seed Data}</span>
</code></pre></div><h2 id="ormlite-interactive-tour" tabindex="-1">OrmLite Interactive Tour <a class="header-anchor" href="#ormlite-interactive-tour" aria-hidden="true">#</a></h2><p>A quick way to learn about OrmLite is to take the <a href="https://gist.cafe/87164fa870ac7503b43333d1d275456c?docs=8a70f8bf2755f0a755afeca6b2a5238e" target="_blank" rel="noopener noreferrer">OrmLite Interactive Tour</a> which lets you try out and explore different OrmLite features immediately from the comfort of your own browser without needing to install anything:</p><p><a href="https://gist.cafe/87164fa870ac7503b43333d1d275456c?docs=8a70f8bf2755f0a755afeca6b2a5238e" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/gistcafe/ormlite-tour-screenshot.png" alt=""></a></p>`,18),c=[o];function p(r,i,l,u,d,k){return s(),a("div",null,c)}var h=n(t,[["render",p]]);export{g as __pageData,h as default};
