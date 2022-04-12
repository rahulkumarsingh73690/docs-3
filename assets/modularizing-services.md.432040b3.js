import{_ as s,c as n,o as a,a as t}from"./app.da189b1e.js";const m=`{"title":"Modularizing Services","description":"","frontmatter":{"title":"Modularizing Services"},"headers":[{"level":2,"title":"Modularizing services in multiple assemblies","slug":"modularizing-services-in-multiple-assemblies"},{"level":2,"title":"Encapsulating Services inside Plugins","slug":"encapsulating-services-inside-plugins"},{"level":2,"title":"\\"No touch\\" Host Configuration","slug":"no-touch-host-configuration"},{"level":3,"title":"ConfigureAppHost Interfaces","slug":"configureapphost-interfaces"},{"level":3,"title":"Bundle Startup Logic in your Services Assembly","slug":"bundle-startup-logic-in-your-services-assembly"},{"level":3,"title":"Register additional Service Assemblies on Startup","slug":"register-additional-service-assemblies-on-startup"},{"level":3,"title":"Register no-touch Startup before and after your AppHost's Configure","slug":"register-no-touch-startup-before-and-after-your-apphost-s-configure"}],"relativePath":"modularizing-services.md","lastUpdated":1649756885139}`,e={},p=t(`<p>ServiceStack only allows a <strong>single App Host</strong> for each App Domain. As you might be able to infer from the name, the role of the <strong>Host</strong> project is to be the conduit for binding all your services concrete dependencies, plugins, filters and everything else your service needs. The configuration of your service should be immutable after everything is initialized in your <code>AppHost.Configure()</code> method. The <a href="/physical-project-structure">Physical project structure wiki page</a> wiki shows the recommended physical project structure for typical solutions.</p><h2 id="modularizing-services-in-multiple-assemblies" tabindex="-1">Modularizing services in multiple assemblies <a class="header-anchor" href="#modularizing-services-in-multiple-assemblies" aria-hidden="true">#</a></h2><p>Whilst you can only have 1 AppHost, you can have multiple services spread across multiple assemblies. In that case you have to provide a list of assemblies containing the services to the AppHostBase constructor, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppHost</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AppHostBase</span></span>
<span class="token punctuation">{</span>
    <span class="token comment">//Tell ServiceStack the name of your app and which assemblies to scan for services</span>
    <span class="token keyword">public</span> <span class="token function">AppHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span><span class="token string">&quot;Hello ServiceStack!&quot;</span><span class="token punctuation">,</span> 
       <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">ServicesFromDll1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Assembly<span class="token punctuation">,</span>
       <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">ServicesFromDll2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Assembly
       <span class="token comment">/*, etc */</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">Container</span> container<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>You can also provide your own strategy for discovering and resolving the service types that ServiceStack should auto-wire by overriding <code>CreateServiceManager</code>, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppHost</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AppHostBase</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">AppHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span><span class="token string">&quot;Hello ServiceStack!&quot;</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">ServicesFromDll1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Assembly<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">Container</span> container<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token comment">//Alternative way to inject Service Resolver strategy</span>
    <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name">ServiceController</span> <span class="token function">CreateServiceController</span><span class="token punctuation">(</span>
        <span class="token keyword">params</span> <span class="token class-name">Assembly<span class="token punctuation">[</span><span class="token punctuation">]</span></span> assembliesWithServices<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>       
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ServiceController</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> assembliesWithServices<span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SelectMany</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span>x<span class="token punctuation">.</span><span class="token function">GetTypes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="encapsulating-services-inside-plugins" tabindex="-1">Encapsulating Services inside Plugins <a class="header-anchor" href="#encapsulating-services-inside-plugins" aria-hidden="true">#</a></h2><p>One way of modularizing services is to encapsulate them inside <a href="/plugins">Plugins</a> which allows you to manually register services, custom routes, filters, content types, allow customization and anything else your module needs.</p><p>To illustrate this point, we&#39;ll show what a Basic <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack/AuthFeature.cs" target="_blank" rel="noopener noreferrer">Auth Feature</a> example might look like:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BasicAuthFeature</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IPlugin</span></span> 
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> HtmlRedirect <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>   <span class="token comment">//User-defined configuration</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Register</span><span class="token punctuation">(</span><span class="token class-name">IAppHost</span> appHost<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//Register Services exposed by this module</span>
        appHost<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">RegisterService</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>AuthService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;/auth&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/auth/{provider}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        appHost<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">RegisterService</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>AssignRolesService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;/assignroles&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        appHost<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">RegisterService</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>UnAssignRolesService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;/unassignroles&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//Load dependent plugins</span>
        appHost<span class="token punctuation">.</span><span class="token function">LoadPlugin</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">SessionFeature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>With everything encapsulated inside a plugin, your users can easily enable them in your AppHost with:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">BasicAuthFeature</span> <span class="token punctuation">{</span> HtmlRedirect <span class="token operator">=</span> <span class="token string">&quot;~/login&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="no-touch-host-configuration" tabindex="-1">&quot;No touch&quot; Host Configuration <a class="header-anchor" href="#no-touch-host-configuration" aria-hidden="true">#</a></h2><p>To improve modularization and reuse the configuration logic for a ServiceStack AppHost can be split over multiple files as seen with <a href="/world-validation">World Validation&#39;s</a> AppHost where all it&#39;s Auth registration is maintained inside <a href="https://github.com/NetCoreApps/Validation/blob/master/world/Configure.Auth.cs" target="_blank" rel="noopener noreferrer">Configure.Auth.cs</a>:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConfigureAuth</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IConfigureAppHost</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">IAppHost</span> appHost<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> AppSettings <span class="token operator">=</span> appHost<span class="token punctuation">.</span>AppSettings<span class="token punctuation">;</span>
        appHost<span class="token punctuation">.</span>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">AuthFeature</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">CustomUserSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token keyword">new</span> <span class="token constructor-invocation class-name">IAuthProvider<span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token punctuation">{</span>
            <span class="token keyword">new</span> <span class="token constructor-invocation class-name">CredentialsAuthProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//Enable UserName/Password Credentials Auth</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        appHost<span class="token punctuation">.</span>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">RegistrationFeature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Enable /register Service</span>

        <span class="token comment">//override the default registration validation with your own custom implementation</span>
        appHost<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">RegisterAs</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>CustomRegistrationValidator<span class="token punctuation">,</span> IValidator<span class="token punctuation">&lt;</span>Register<span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        appHost<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Register</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ICacheClient<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">MemoryCacheClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Store User Sessions in Memory</span>

        appHost<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Register</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IAuthRepository<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">InMemoryAuthRepository</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Store Authenticated Users in Memory</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>This modular approach makes it easy to &quot;layer on&quot; functionality with tools like <a href="/web-apply">web +</a>.</p><h3 id="configureapphost-interfaces" tabindex="-1">ConfigureAppHost Interfaces <a class="header-anchor" href="#configureapphost-interfaces" aria-hidden="true">#</a></h3><p>You can use this to refactor out different cohesive parts your Host configuration over multiple files and decouple them from your concrete <code>AppHost</code> which ServiceStack automatically runs all <code>IPreConfigureAppHost</code>, <code>IConfigureAppHost</code> and <code>IPostConfigureAppHost</code> interfaces on Startup it can find in either your <code>AppHost</code> Assembly or <strong>Service Assemblies</strong> specified in your AppHost constructor.</p><p>This opens up a number of re-use benefits where you&#39;ll be able to use the same AppHost configuration if your Services are being hosted in <a href="/why-servicestack#multiple-hosting-options">different Hosting Options</a>, it makes it easy to maintain a standardized configuration across many of your ServiceStack projects, e.g. you can easily replace <code>Configure.Auth.cs</code> in all your projects to ensure they&#39;re running the same Auth Configuration without impacting any of the projects other bespoke host configuration.</p><h3 id="bundle-startup-logic-in-your-services-assembly" tabindex="-1">Bundle Startup Logic in your Services Assembly <a class="header-anchor" href="#bundle-startup-logic-in-your-services-assembly" aria-hidden="true">#</a></h3><p>It also allows you to maintain any necessary Startup configuration that your Services implementation needs alongside the Services themselves.</p><p>E.g. This is used to register the <code>Data.Contact</code> to DTO <code>Contact</code> <a href="/auto-mapping">Auto Mapping</a>:</p><div class="language-csharp"><pre><code><span class="token comment">// Register Custom Auto Mapping for converting Contact Data Model to Contact DTO</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ContactsHostConfig</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IConfigureAppHost</span></span> 
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">IAppHost</span> appHost<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
        AutoMapping<span class="token punctuation">.</span><span class="token function">RegisterConverter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Data<span class="token punctuation">.</span>Contact</span> from<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> from<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ConvertTo</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Contact<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token named-parameter punctuation">skipConverters</span><span class="token punctuation">:</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>There are <strong>3 different Startup interfaces</strong> you can use depending on when you want your configuration to run.</p><h3 id="register-additional-service-assemblies-on-startup" tabindex="-1">Register additional Service Assemblies on Startup <a class="header-anchor" href="#register-additional-service-assemblies-on-startup" aria-hidden="true">#</a></h3><p>Use <code>IPreConfigureAppHost</code> for Startup logic you want to run before the AppHost starts initialization, this is run before <code>AppHost.Config</code> is initialized or Services are registered so has limited configurability but is useful if you want to register additional Service Assemblies with ServiceStack, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConfigureContactsServices</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IPreConfigureAppHost</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">PreConfigure</span><span class="token punctuation">(</span><span class="token class-name">IAppHost</span> host<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> host<span class="token punctuation">.</span>ServiceAssemblies<span class="token punctuation">.</span><span class="token function">AddIfNotExists</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">MyServices</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Assembly<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="register-no-touch-startup-before-and-after-your-apphost-s-configure" tabindex="-1">Register no-touch Startup before and after your AppHost&#39;s Configure <a class="header-anchor" href="#register-no-touch-startup-before-and-after-your-apphost-s-configure" aria-hidden="true">#</a></h3><p>Use <code>IConfigureAppHost</code> for Startup logic you want to run immediately <strong>before</strong> <code>AppHost.Configure()</code>:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IConfigureAppHost</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">IAppHost</span> appHost<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Use <code>Priority &lt;= -1</code> for Startup logic you want to run <strong>before</strong> <code>AppHost.Configure()</code> and <code>Priority &gt;= 1</code> for logic you want to run immediately <strong>after</strong> <code>AppHost.Configure()</code>:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Priority</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyPreAppHostConfigure</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IConfigureAppHost</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">IAppHost</span> host<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Priority</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyPostAppHostConfigure</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IConfigureAppHost</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">IAppHost</span> host<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,32),o=[p];function c(i,u,l,r,k,d){return a(),n("div",null,o)}var h=s(e,[["render",c]]);export{m as __pageData,h as default};
