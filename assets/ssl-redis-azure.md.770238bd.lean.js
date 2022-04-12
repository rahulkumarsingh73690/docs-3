import{_ as n,c as s,o as a,a as e}from"./app.da189b1e.js";const m='{"title":"Secure SSL Redis connections","description":"","frontmatter":{"slug":"ssl-redis-azure","title":"Secure SSL Redis connections"},"headers":[{"level":3,"title":"General SSL Info","slug":"general-ssl-info"},{"level":3,"title":"Specify SSL and TLS Version","slug":"specify-ssl-and-tls-version"},{"level":3,"title":"Secure SSL Redis connections to Azure Redis","slug":"secure-ssl-redis-connections-to-azure-redis"},{"level":2,"title":"Getting Started","slug":"getting-started"},{"level":2,"title":"Configuring our AppHost","slug":"configuring-our-apphost"},{"level":2,"title":"Accessing Redis from a Web Service","slug":"accessing-redis-from-a-web-service"},{"level":2,"title":"Troubleshooting","slug":"troubleshooting"},{"level":3,"title":"Add Required SSL Certificates to work in Mono","slug":"add-required-ssl-certificates-to-work-in-mono"}],"relativePath":"ssl-redis-azure.md","lastUpdated":1649756885183}',t={},o=e(`__VP_STATIC_START__<p><a href="https://github.com/ServiceStack/ServiceStack.Redis" target="_blank" rel="noopener noreferrer">ServiceStack.Redis</a> client includes support for SSL making it suitable for accessing remote Redis server instances over a secure SSL connection.</p><p>Redis is normally used as a back-end datastore whose access is typically limited to Internal networks or authorized networks protected via firewalls, when communicating outside of your VPC you&#39;ll typically want to communicate over SSL.</p><h3 id="general-ssl-info" tabindex="-1">General SSL Info <a class="header-anchor" href="#general-ssl-info" aria-hidden="true">#</a></h3><p>ServiceStack.Redis uses .NET&#39;s <a href="https://docs.microsoft.com/en-us/dotnet/api/system.net.security.sslstream.-ctor?view=net-5.0#System_Net_Security_SslStream__ctor_System_IO_Stream_System_Boolean_System_Net_Security_RemoteCertificateValidationCallback_System_Net_Security_LocalCertificateSelectionCallback_" target="_blank" rel="noopener noreferrer">SslStream</a> to establish its SSL connection where you can configure its <a href="https://docs.microsoft.com/en-us/dotnet/api/system.net.security.remotecertificatevalidationcallback?view=net-5.0" target="_blank" rel="noopener noreferrer">RemoteCertificateValidationCallback</a> to validate whether to accept the specified certificate for authentication:</p><div class="language-csharp"><pre><code>RedisConfig<span class="token punctuation">.</span>CertificateValidationCallback <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> sender<span class="token punctuation">,</span>
    <span class="token class-name">X509Certificate</span> certificate<span class="token punctuation">,</span>
    <span class="token class-name">X509Chain</span> chain<span class="token punctuation">,</span>
    <span class="token class-name">SslPolicyErrors</span> sslPolicyErrors<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>And a <a href="https://docs.microsoft.com/en-us/dotnet/api/system.net.security.localcertificateselectioncallback?view=net-5.0" target="_blank" rel="noopener noreferrer">LocalCertificateSelectionCallback</a> to select the local SSL certificate used for authentication:</p><div class="language-csharp"><pre><code>RedisConfig<span class="token punctuation">.</span>CertificateSelectionCallback <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> sender<span class="token punctuation">,</span>
    <span class="token class-name"><span class="token keyword">string</span></span> targetHost<span class="token punctuation">,</span>
    <span class="token class-name">X509CertificateCollection</span> localCertificates<span class="token punctuation">,</span>
    <span class="token class-name">X509Certificate</span> remoteCertificate<span class="token punctuation">,</span>
    <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> acceptableIssuers<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="specify-ssl-and-tls-version" tabindex="-1">Specify SSL and TLS Version <a class="header-anchor" href="#specify-ssl-and-tls-version" aria-hidden="true">#</a></h3><p>You can specify to use SSL and what TLS version to use on your connection string, e.g:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> connString <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$&quot;redis://</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">Host</span><span class="token punctuation">}</span></span><span class="token string">?ssl=true&amp;sslprotocols=Tls12&amp;password=</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">Password<span class="token punctuation">.</span><span class="token function">UrlEncode</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> redisManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RedisManagerPool</span><span class="token punctuation">(</span>connString<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> client <span class="token operator">=</span> redisManager<span class="token punctuation">.</span><span class="token function">GetClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//...</span>
</code></pre></div><p>If using <code>RedisSentinel</code> SSL needs to be specified on both host connection string and <code>HostFilter</code>, e.g:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> sentinel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RedisSentinel</span><span class="token punctuation">(</span>connString<span class="token punctuation">,</span> masterName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    HostFilter <span class="token operator">=</span> host <span class="token operator">=&gt;</span> <span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">host</span><span class="token punctuation">}</span></span><span class="token string">?ssl=true&amp;sslprotocols=Tls12&quot;</span></span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
container<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> sentinel<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="secure-ssl-redis-connections-to-azure-redis" tabindex="-1">Secure SSL Redis connections to Azure Redis <a class="header-anchor" href="#secure-ssl-redis-connections-to-azure-redis" aria-hidden="true">#</a></h3><p>The SSL Support in the Redis Client also enables secure access to a redis-server instance over the Internet and public networks as well, a scenario that&#39;s been recently popularized by Cloud hosting environments like <a href="http://azure.microsoft.com/en-us/services/cache/" target="_blank" rel="noopener noreferrer">Azure Redis Cache</a>.</p><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h2><p>First we&#39;ll need a Redis instance to connect to, for this example we will be using Azure, so you will need an active account which you can create at the <a href="https://azure.microsoft.com/" target="_blank" rel="noopener noreferrer">Azure home page</a>.</p><p>Once you have access to the <a href="https://portal.azure.com/" target="_blank" rel="noopener noreferrer">Azure portal</a>, we can create a new Redis instance with 3 easy steps:</p><p>1 . Click <code>New</code> at the bottom left of the portal</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/redis/azure-new-button.png" alt="New"></p><p>2 . Select Redis Cache from the list</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/redis/azure-create-redis.png" alt="Redis instance menu item"></p><p>3 . Specify a DNS name, size, resource group and location</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/redis/azure-create-redis-demo.png" alt="Create instance"></p><p>It may take a while for the Redis Cache instance to be ready to use, from experience with a 1GB Basic instance, it takes around 15+ minutes.</p><p>Once the instance is ready, we can grab the <strong>password</strong> generated for us from the <strong>Keys tile</strong>. If we copy the key, and store it somewhere our host can access it, we can start connecting to Redis.</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/redis/azure-redis-instance.png" alt="Created Redis Instance and Keys menu"></p><h2 id="configuring-our-apphost" tabindex="-1">Configuring our AppHost <a class="header-anchor" href="#configuring-our-apphost" aria-hidden="true">#</a></h2><p>We have all the require information and our Redis Cache instance is running, we can now configure our AppHost to use it!</p><p>To make it simple to use the <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/Redis/IRedisClient.cs" target="_blank" rel="noopener noreferrer">IRedisClient</a> from our web service methods, we can register an <code>IRedisClientsManager</code> to handle the clients for us. This way, we can use the <code>base.Redis</code> property from our services to access the Redis server instance.</p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">Container</span> container<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> connString <span class="token operator">=</span> AppSettings<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;RedisConnectionString&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Register</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IRedisClientsManager<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> 
        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RedisManagerPool</span><span class="token punctuation">(</span>connectionString<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>We are getting our Redis connection string from our Web.Config <code>&lt;appSettings/&gt;</code>. The Redis connection string is made up of the domain name of the instance parsing query string parameters to specify other configuration options. In our example the format of the connection string looks like:</p><div class="language-"><pre><code>{AzureRedisKey}@servicestackdemo.redis.cache.windows.net?ssl=true 
</code></pre></div><h2 id="accessing-redis-from-a-web-service" tabindex="-1">Accessing Redis from a Web Service <a class="header-anchor" href="#accessing-redis-from-a-web-service" aria-hidden="true">#</a></h2><p>We can now try a simple example to test that our instance is working. Here&#39;s an example of a simple &quot;Todo&quot; service that persists items to our Redis instance:</p><div class="language-cs"><pre><code><span class="token comment">// Create your ServiceStack Web Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TodoService</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Service</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token class-name">Todo</span> todo<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//Return a single Todo if the id is provided.</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>todo<span class="token punctuation">.</span>Id <span class="token operator">!=</span> <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">long</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> Redis<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">As</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Todo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetById</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//Return all Todos items.</span>
        <span class="token keyword">return</span> Redis<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">As</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Todo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Handles creating the Todo items.</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Todo</span> <span class="token function">Post</span><span class="token punctuation">(</span><span class="token class-name">Todo</span> todo<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> todos <span class="token operator">=</span> Redis<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">As</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Todo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//Get next id for new todo</span>
        todo<span class="token punctuation">.</span>Id <span class="token operator">=</span> todos<span class="token punctuation">.</span><span class="token function">GetNextSequence</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        todos<span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span>todo<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> todo<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Handles updating the Todo items.</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Todo</span> <span class="token function">Put</span><span class="token punctuation">(</span><span class="token class-name">Todo</span> todo<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Redis<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">As</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Todo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span>todo<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> todo<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Handles Deleting the Todo item</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Delete</span><span class="token punctuation">(</span><span class="token class-name">Todo</span> todo<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Redis<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">As</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Todo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">DeleteById</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/todo&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/todo/{Id}&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Todo</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">long</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Content <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Order <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> Done <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>You can try a redis-powered TODO&#39;s web app like this in our <a href="http://todos.netcore.io" target="_blank" rel="noopener noreferrer">todos.netcore.io</a> Live Demo. A more comprehensive example can be seen in the <a href="https://github.com/ServiceStackApps/RedisStackOverflow/blob/master/src/RedisStackOverflow/RedisStackOverflow.ServiceInterface/IRepository.cs" target="_blank" rel="noopener noreferrer">Repository.cs</a> used to power the <a href="http://redisstackoverflow.netcore.io/" target="_blank" rel="noopener noreferrer">RedisStackOverflow Live Demo</a>.</p><p>Another property automatically injected when registering our <code>RedisManagerPool</code> is <code>base.Cache</code> which provides a substitutable <a href="/caching">Caching abstraction</a> our Services can use to cache results. E.g. we can make use of ServiceStack&#39;s high-level Caching API in <a href="/caching#cache-a-response-of-a-service">Request.ToOptimizedResultUsingCache</a> to enable maximum performance of your Services:</p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token class-name">CachedCustomers</span> request<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">base</span><span class="token punctuation">.</span>Request<span class="token punctuation">.</span><span class="token function">ToOptimizedResultUsingCache</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>Cache<span class="token punctuation">,</span> 
        <span class="token string">&quot;urn:customers&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ResolveService</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>CustomersService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Customers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>This snippet is from the <a href="https://github.com/ServiceStackApps/Northwind" target="_blank" rel="noopener noreferrer">Northwind example</a>.</p><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a></h2><h3 id="add-required-ssl-certificates-to-work-in-mono" tabindex="-1">Add Required SSL Certificates to work in Mono <a class="header-anchor" href="#add-required-ssl-certificates-to-work-in-mono" aria-hidden="true">#</a></h3><p>Connecting to Azure Redis Cache via SSL requires Microsoft SSL Certificates. The required certificates can be imported and registered with Mono by running the commands below:</p><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> mozroots --import --machine --sync
$ <span class="token function">sudo</span> certmgr -ssl -m https://go.microsoft.com
$ <span class="token function">sudo</span> certmgr -ssl -m https://nugetgallery.blob.core.windows.net
$ <span class="token function">sudo</span> certmgr -ssl -m https://nuget.org
</code></pre></div>__VP_STATIC_END__`,43),p=[o];function c(i,r,l,u,k,d){return a(),s("div",null,p)}var h=n(t,[["render",c]]);export{m as __pageData,h as default};
