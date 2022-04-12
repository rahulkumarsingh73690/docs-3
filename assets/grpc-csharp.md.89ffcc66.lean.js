import{_ as n,c as s,o as a,a as t}from"./app.da189b1e.js";const m='{"title":"gRPC protoc C# Client","description":"","frontmatter":{"slug":"grpc-csharp","title":"gRPC protoc C# Client"},"headers":[{"level":2,"title":"C# protoc generated GrpcServiceClient TodoWorld Example","slug":"c-protoc-generated-grpcserviceclient-todoworld-example"},{"level":3,"title":"C# smart gRPC GrpcServicesClient Example","slug":"c-smart-grpc-grpcservicesclient-example"},{"level":3,"title":"protoc-only generated Service Client","slug":"protoc-only-generated-service-client"},{"level":3,"title":"C# protoc gRPC insecure Example","slug":"c-protoc-grpc-insecure-example"},{"level":3,"title":"C# protoc gRPC SSL Example","slug":"c-protoc-grpc-ssl-example"},{"level":3,"title":"C# Local Development gRPC SSL CRUD Example","slug":"c-local-development-grpc-ssl-crud-example"},{"level":3,"title":"More Examples","slug":"more-examples"}],"relativePath":"grpc-csharp.md","lastUpdated":1649756884295}',p={},e=t(`__VP_STATIC_START__<p><a href="https://youtu.be/0TXk9y24NIw" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/grpc/csharp.png" alt=""></a></p><blockquote><p>YouTube: <a href="https://youtu.be/0TXk9y24NIw" target="_blank" rel="noopener noreferrer">youtu.be/0TXk9y24NIw</a></p></blockquote><h2 id="c-protoc-generated-grpcserviceclient-todoworld-example" tabindex="-1">C# protoc generated GrpcServiceClient TodoWorld Example <a class="header-anchor" href="#c-protoc-generated-grpcserviceclient-todoworld-example" aria-hidden="true">#</a></h2><p>Install <a href="https://docs.servicestack.net/dotnet-tool" target="_blank" rel="noopener noreferrer">x dotnet tool</a>:</p><div class="language-bash"><pre><code>$ dotnet tool <span class="token function">install</span> --global x 
</code></pre></div><p>Create a new C# Console App:</p><div class="language-bash"><pre><code>$ dotnet new console
</code></pre></div><p>Add required NuGet Packages:</p><div class="language-bash"><pre><code>$ dotnet <span class="token function">add</span> package Google.Protobuf
$ dotnet <span class="token function">add</span> package ServiceStack.GrpcClient
</code></pre></div><p>Download TodoWorld SSL Certificate used for its gRPC HTTP/2 Services:</p><div class="language-bash"><pre><code>$ x get https://todoworld.servicestack.net/grpc.crt 
</code></pre></div><p>Add protoc generated TodoWorld DTOs and gRPC GrpcServiceClient:</p><div class="language-bash"><pre><code>$ x proto-csharp https://todoworld.servicestack.net
</code></pre></div><p>Use protoc generated DTOs and <code>GrpcServiceClient</code> to call TodoWorld gRPC Service:</p><h3 id="c-smart-grpc-grpcservicesclient-example" tabindex="-1">C# smart gRPC GrpcServicesClient Example <a class="header-anchor" href="#c-smart-grpc-grpcservicesclient-example" aria-hidden="true">#</a></h3><p>The smart client registers a ServiceStack Interceptor to enable the richer integration features in ServiceStack Services as found in ServiceStack&#39;s Generic <code>GrpcServiceClient</code> above, including detailed structured Exception handling, built-in JWT, Session, Credentials Auth support, <a href="https://docs.servicestack.net/jwt-authprovider#automatically-refreshing-access-tokens" target="_blank" rel="noopener noreferrer">Automatically refreshing Access Tokens</a>, etc.</p><p>This ServiceStack Interceptor can be registered using <code>GrpcServiceStack.Client()</code> when creating the protoc <code>GrpcServicesClient</code>:</p><div class="language-csharp"><pre><code><span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Security<span class="token punctuation">.</span>Cryptography<span class="token punctuation">.</span>X509Certificates</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Threading<span class="token punctuation">.</span>Tasks</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">ServiceStack</span><span class="token punctuation">;</span>

<span class="token keyword">namespace</span> <span class="token namespace">TodoWorld</span>
<span class="token punctuation">{</span>
    <span class="token keyword">class</span> <span class="token class-name">Program</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name"><span class="token keyword">var</span></span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">GrpcServices<span class="token punctuation">.</span>GrpcServicesClient</span><span class="token punctuation">(</span>
                GrpcServiceStack<span class="token punctuation">.</span><span class="token function">Client</span><span class="token punctuation">(</span><span class="token string">&quot;https://todoworld.servicestack.net:50051&quot;</span><span class="token punctuation">,</span> 
                    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">X509Certificate2</span><span class="token punctuation">(</span><span class="token string">&quot;grpc.crt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    GrpcUtils<span class="token punctuation">.</span><span class="token function">AllowSelfSignedCertificatesFrom</span><span class="token punctuation">(</span><span class="token string">&quot;todoworld.servicestack.net&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name"><span class="token keyword">var</span></span> response <span class="token operator">=</span> <span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">GetHelloAsync</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Hello</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;gRPC C#&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>Result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Override <code>Program.cs</code> with the above C# Example:</p><div class="language-bash"><pre><code>$ x mix todoworld-csharp-smart
</code></pre></div><p>Run example:</p><div class="language-bash"><pre><code>$ dotnet run
</code></pre></div><h3 id="protoc-only-generated-service-client" tabindex="-1">protoc-only generated Service Client <a class="header-anchor" href="#protoc-only-generated-service-client" aria-hidden="true">#</a></h3><p>Alternatively clients can opt to use the vanilla protoc generated ServiceClient without any dependency to <strong>ServiceStack.GrpcClient</strong> which will fallback to gRPC&#39;s default behavior of basic error handling with any auth headers needing to be populated manually.</p><p>Add required core package dependencies:</p><div class="language-bash"><pre><code>$ dotnet <span class="token function">add</span> package Grpc.Core
$ dotnet <span class="token function">add</span> package Grpc.Net.Client
</code></pre></div><h3 id="c-protoc-grpc-insecure-example" tabindex="-1">C# protoc gRPC insecure Example <a class="header-anchor" href="#c-protoc-grpc-insecure-example" aria-hidden="true">#</a></h3><div class="language-csharp"><pre><code><span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Threading<span class="token punctuation">.</span>Tasks</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Grpc<span class="token punctuation">.</span>Core</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Grpc<span class="token punctuation">.</span>Net<span class="token punctuation">.</span>Client</span><span class="token punctuation">;</span>

<span class="token keyword">namespace</span> <span class="token namespace">TodoWorld</span>
<span class="token punctuation">{</span>
    <span class="token keyword">class</span> <span class="token class-name">Program</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            AppContext<span class="token punctuation">.</span><span class="token function">SetSwitch</span><span class="token punctuation">(</span><span class="token string">&quot;System.Net.Http.SocketsHttpHandler.Http2UnencryptedSupport&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name"><span class="token keyword">var</span></span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">GrpcServices<span class="token punctuation">.</span>GrpcServicesClient</span><span class="token punctuation">(</span>
                GrpcChannel<span class="token punctuation">.</span><span class="token function">ForAddress</span><span class="token punctuation">(</span><span class="token string">&quot;http://todoworld.servicestack.net:5054&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name"><span class="token keyword">var</span></span> response <span class="token operator">=</span> <span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">GetHelloAsync</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Hello</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;gRPC C#&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>Result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Override <code>Program.cs</code> with the above C# Example:</p><div class="language-bash"><pre><code>$ x mix todoworld-csharp
</code></pre></div><p>Run example:</p><div class="language-bash"><pre><code>$ dotnet run
</code></pre></div><h3 id="c-protoc-grpc-ssl-example" tabindex="-1">C# protoc gRPC SSL Example <a class="header-anchor" href="#c-protoc-grpc-ssl-example" aria-hidden="true">#</a></h3><div class="language-csharp"><pre><code><span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Linq</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Net<span class="token punctuation">.</span>Security</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Security<span class="token punctuation">.</span>Cryptography<span class="token punctuation">.</span>X509Certificates</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Threading<span class="token punctuation">.</span>Tasks</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Grpc<span class="token punctuation">.</span>Core</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Grpc<span class="token punctuation">.</span>Net<span class="token punctuation">.</span>Client</span><span class="token punctuation">;</span>

<span class="token keyword">namespace</span> <span class="token namespace">TodoWorld</span>
<span class="token punctuation">{</span>
    <span class="token keyword">class</span> <span class="token class-name">Program</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name"><span class="token keyword">var</span></span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">GrpcServices<span class="token punctuation">.</span>GrpcServicesClient</span><span class="token punctuation">(</span>
                GrpcChannel<span class="token punctuation">.</span><span class="token function">ForAddress</span><span class="token punctuation">(</span><span class="token string">&quot;https://todoworld.servicestack.net:50051&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">GrpcChannelOptions</span> <span class="token punctuation">{</span>
                    HttpClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">System<span class="token punctuation">.</span>Net<span class="token punctuation">.</span>Http<span class="token punctuation">.</span>HttpClient</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">System<span class="token punctuation">.</span>Net<span class="token punctuation">.</span>Http<span class="token punctuation">.</span>HttpClientHandler</span> <span class="token punctuation">{</span>
                        ClientCertificates <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">X509Certificate2</span><span class="token punctuation">(</span><span class="token string">&quot;grpc.crt&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        ServerCertificateCustomValidationCallback <span class="token operator">=</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span> cert<span class="token punctuation">,</span> certChain<span class="token punctuation">,</span> sslErrors<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
                            cert<span class="token punctuation">.</span>SubjectName<span class="token punctuation">.</span>RawData<span class="token punctuation">.</span><span class="token function">SequenceEqual</span><span class="token punctuation">(</span>cert<span class="token punctuation">.</span>IssuerName<span class="token punctuation">.</span>RawData<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token comment">// self-signed</span>
                            cert<span class="token punctuation">.</span><span class="token function">GetNameInfo</span><span class="token punctuation">(</span>X509NameType<span class="token punctuation">.</span>DnsName<span class="token punctuation">,</span> <span class="token named-parameter punctuation">forIssuer</span><span class="token punctuation">:</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;todoworld.servicestack.net&quot;</span> <span class="token operator">&amp;&amp;</span>
                            <span class="token punctuation">(</span>sslErrors <span class="token operator">&amp;</span> <span class="token operator">~</span>sslErrors<span class="token punctuation">.</span>RemoteCertificateChainErrors<span class="token punctuation">)</span> <span class="token operator">==</span> sslErrors<span class="token punctuation">.</span>None <span class="token comment">// only this</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name"><span class="token keyword">var</span></span> response <span class="token operator">=</span> <span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">GetHelloAsync</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Hello</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;gRPC C#&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>Result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Override <code>Program.cs</code> with the above C# Example:</p><div class="language-bash"><pre><code>$ x mix todoworld-csharp-ssl
</code></pre></div><p>Run example:</p><div class="language-bash"><pre><code>$ dotnet run
</code></pre></div><h3 id="c-local-development-grpc-ssl-crud-example" tabindex="-1">C# Local Development gRPC SSL CRUD Example <a class="header-anchor" href="#c-local-development-grpc-ssl-crud-example" aria-hidden="true">#</a></h3><div class="language-csharp"><pre><code><span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Threading<span class="token punctuation">.</span>Tasks</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Grpc<span class="token punctuation">.</span>Net<span class="token punctuation">.</span>Client</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">TodoWorld</span><span class="token punctuation">;</span>

<span class="token keyword">namespace</span> <span class="token namespace">CSharp</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Program</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// Certificate registration not required when using trusted local development certificate  </span>
            <span class="token class-name"><span class="token keyword">var</span></span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">GrpcServices<span class="token punctuation">.</span>GrpcServicesClient</span><span class="token punctuation">(</span>GrpcChannel<span class="token punctuation">.</span><span class="token function">ForAddress</span><span class="token punctuation">(</span><span class="token string">&quot;https://localhost:5001&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">PostResetTodosAsync</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ResetTodos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//POST /todos</span>
            <span class="token class-name"><span class="token keyword">var</span></span> todo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">PostCreateTodoAsync</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">CreateTodo</span> <span class="token punctuation">{</span> Title <span class="token operator">=</span> <span class="token string">&quot;ServiceStack&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Result<span class="token punctuation">;</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;new todo Id: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">todo<span class="token punctuation">.</span>Id</span><span class="token punctuation">}</span></span><span class="token string">, Title: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">todo<span class="token punctuation">.</span>Title</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            <span class="token comment">//GET /todos</span>
            <span class="token class-name"><span class="token keyword">var</span></span> all <span class="token operator">=</span> <span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">CallGetTodosAsync</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">GetTodos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;todos: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">all<span class="token punctuation">.</span>Results<span class="token punctuation">?.</span>Count <span class="token operator">??</span> <span class="token number">0</span></span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//GET /todos/1</span>
            todo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">CallGetTodoAsync</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">GetTodo</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> todo<span class="token punctuation">.</span>Id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Result<span class="token punctuation">;</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;get todo Id: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">todo<span class="token punctuation">.</span>Id</span><span class="token punctuation">}</span></span><span class="token string">, Title: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">todo<span class="token punctuation">.</span>Title</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//GET /todos</span>
            all <span class="token operator">=</span> <span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">CallGetTodosAsync</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">GetTodos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;todos: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">all<span class="token punctuation">.</span>Results<span class="token punctuation">?.</span>Count <span class="token operator">??</span> <span class="token number">0</span></span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//PUT /todos/1</span>
            <span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">PutUpdateTodoAsync</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">UpdateTodo</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> todo<span class="token punctuation">.</span>Id<span class="token punctuation">,</span> Title <span class="token operator">=</span> <span class="token string">&quot;gRPC&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//GET /todos/1</span>
            todo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">CallGetTodoAsync</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">GetTodo</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> todo<span class="token punctuation">.</span>Id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Result<span class="token punctuation">;</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;updated todo Title: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">todo<span class="token punctuation">.</span>Title</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//DELETE /todos/1</span>
            <span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">CallDeleteTodoAsync</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">DeleteTodo</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> todo<span class="token punctuation">.</span>Id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//GET /todos</span>
            all <span class="token operator">=</span> <span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">CallGetTodosAsync</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">GetTodos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;todos: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">all<span class="token punctuation">.</span>Results<span class="token punctuation">?.</span>Count <span class="token operator">??</span> <span class="token number">0</span></span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Refer to <a href="https://github.com/NetCoreApps/todo-world/tree/master/src/clients/csharp" target="_blank" rel="noopener noreferrer">/src/clients/csharp</a> for a complete example project.</p><h3 id="more-examples" tabindex="-1">More Examples <a class="header-anchor" href="#more-examples" aria-hidden="true">#</a></h3><p>For more protoc generated <code>GrpcServices.GrpcServiceClient</code> examples check out the unit tests at:</p><ul><li><a href="https://github.com/ServiceStack/ServiceStack/blob/master/tests/ServiceStack.Extensions.Tests/Protoc/ProtocTests.cs" target="_blank" rel="noopener noreferrer">ProtocTests.cs</a></li><li><a href="https://github.com/ServiceStack/ServiceStack/blob/master/tests/ServiceStack.Extensions.Tests/Protoc/ProtocTodoTests.cs" target="_blank" rel="noopener noreferrer">ProtocTodoTests.cs</a></li><li><a href="https://github.com/ServiceStack/ServiceStack/blob/master/tests/ServiceStack.Extensions.Tests/Protoc/ProtocAuthTests.cs" target="_blank" rel="noopener noreferrer">ProtocAuthTests.cs</a></li><li><a href="https://github.com/ServiceStack/ServiceStack/blob/master/tests/ServiceStack.Extensions.Tests/Protoc/ProtocServerEventsTests.cs" target="_blank" rel="noopener noreferrer">ProtocServerEventsTests.cs</a></li><li><a href="https://github.com/ServiceStack/ServiceStack/blob/master/tests/ServiceStack.Extensions.Tests/Protoc/ProtocDynamicAutoQueryTests.cs" target="_blank" rel="noopener noreferrer">ProtocDynamicAutoQueryTests.cs</a></li></ul>__VP_STATIC_END__`,44),o=[e];function c(l,u,r,i,k,d){return a(),s("div",null,o)}var h=n(p,[["render",c]]);export{m as __pageData,h as default};
