import{_ as a,c as r,o as i,b as e,e as t,a as o}from"./app.da189b1e.js";const b=`{"title":"Instantly Servicify existing Systems","description":"","frontmatter":{"slug":"servicify","title":"Instantly Servicify existing Systems"},"headers":[{"level":2,"title":"AutoGen","slug":"autogen"},{"level":3,"title":"gRPC's Typed protoc Universe","slug":"grpc-s-typed-protoc-universe"},{"level":3,"title":"Dart gRPC Script Playground","slug":"dart-grpc-script-playground"},{"level":3,"title":"Flutter gRPC Android App","slug":"flutter-grpc-android-app"},{"level":2,"title":"React Native Typed Client","slug":"react-native-typed-client"}],"relativePath":"servicify.md","lastUpdated":1649756885183}`,s={},n=e("p",null,[t("In addition to "),e("a",{href:"/autoquery-rdbms"},"AutoQuery"),t(" automatically providing your Services implementations, "),e("a",{href:"/studio"},"Studio"),t(" providing its instant UI, ServiceStack also gained the capability to "),e("strong",null,[e("a",{href:"/autoquery-autogen"},"generate your entire API")]),t(" including Typed API contracts, data models, implementations & human-friendly pluralized HTTP API routes over an existing System RDBMS's tables.")],-1),c=e("iframe",{class:"video-hd",src:"https://www.youtube.com/embed/NaJ7TW-Q_pU",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""},null,-1),l=o('<h2 id="autogen" tabindex="-1"><a href="/autoquery-autogen">AutoGen</a> <a class="header-anchor" href="#autogen" aria-hidden="true">#</a></h2><p>ServiceStack&#39;s <strong>AutoGen</strong> enables a number of exciting possibilities, predominantly it&#39;s the fastest way to ServiceStack-ify an existing systems RDBMS where it will serve as an invaluable tool for anyone wanting to quickly migrate to ServiceStack and access its functionality ecosystem around ServiceStack Services:</p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/svg/servicify.svg" width="100%"><p><strong><a href="/autoquery-autogen">AutoGen&#39;s</a></strong> code generation is programmatically customizable where the generated types can be easily augmented with additional declarative attributes to inject your App&#39;s conventions into the auto generated Services &amp; Types to apply custom behavior like Authorization &amp; additional validation rules.</p><p>After codifying your system conventions the generated classes can optionally be &quot;ejected&quot; where code-first development can continue as normal.</p><p>This feature enables rewriting parts or modernizing legacy systems with the least amount of time &amp; effort, once Servicified you can take advantage of declarative features like Multitenancy, Optimistic Concurrency &amp; Validation, enable automatic features like Executable Audit History, allow business users to maintain validation rules in its RDBMS, manage them through <strong>Studio</strong> &amp; have them applied instantly at runtime and visibly surfaced through ServiceStack&#39;s myriad of <a href="/world-validation">client UI auto-binding options</a>. <strong>Studio</strong> can then enable stakeholders with an instant UI to quickly access and search through their data, import custom queries directly into Excel or access them in other registered Content Types through a custom UI where fine-grained app-level access can be applied to customize which tables &amp; operations different users have.</p><h3 id="grpc-s-typed-protoc-universe" tabindex="-1">gRPC&#39;s Typed protoc Universe <a class="header-anchor" href="#grpc-s-typed-protoc-universe" aria-hidden="true">#</a></h3><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/svg/grpc-icon-color.svg" height="100" align="right"><p><strong>AutoGen</strong> also enables access to ServiceStack&#39;s ecosystem of metadata services &amp; connectivity options where it&#39;s now become the <strong>fastest way to generate gRPC endpoints</strong> over an existing system. This is especially exciting as in addition to enabling high-performance connectivity to your Systems data, it opens it up to <a href="https://grpc.io/docs/languages/" target="_blank" rel="noopener noreferrer">all languages in gRPC&#39;s protoc universe</a>.</p><p>Whilst the Smart, Generic <a href="/grpc-generic">C# / F# / VB.NET Service Clients</a> continue to provide the best UX for consuming gRPC Services, one of the nicest <strong>protoc generated</strong> clients languages is <a href="http://dart.dev" target="_blank" rel="noopener noreferrer">Dart</a> - a modern high-level language with native class performance &amp; script-like productivity where individual source files can be run immediately without compilation, it&#39;s quality tooling, static analysis &amp; high-level features like async/await make it an ideal exploratory language for consuming gRPC endpoints.</p><h3 id="dart-grpc-script-playground" tabindex="-1">Dart gRPC Script Playground <a class="header-anchor" href="#dart-grpc-script-playground" aria-hidden="true">#</a></h3><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/svg/dart-logo.svg" height="75" align="right"><p>This quick demo shows an example of instantly Servicifying a database &amp; accesses it via gRPC in minutes, starting with a new <a href="https://github.com/NetCoreTemplates/grpc" target="_blank" rel="noopener noreferrer">grpc</a> project from scratch, it <a href="/mix-tool">mixes</a> in <a href="https://gist.github.com/gistlyn/464a80c15cb3af4f41db7810082dc00c" target="_blank" rel="noopener noreferrer">autocrudgen</a> to configure <strong>AutoGen</strong> to generate AutoQuery services for the registered <a href="https://gist.github.com/gistlyn/768d7b330b8c977f43310b954ceea668" target="_blank" rel="noopener noreferrer">sqlite</a> RDBMS that&#39;s copied into the project from the <a href="https://gist.github.com/gistlyn/97d0bcd3ebd582e06c85f8400683e037" target="_blank" rel="noopener noreferrer">northwind.sqlite</a> gist.</p><p>Once the servicified App is running it accesses the gRPC Services in a new Dart Console App using the UX-friendly <a href="/grpc-dart">Dart gRPC support in the x dotnet tool</a> to call the protoc generated Services:</p><blockquote><p>YouTube: <a href="https://youtu.be/5NNCaWMviXU" target="_blank" rel="noopener noreferrer">youtu.be/5NNCaWMviXU</a></p></blockquote><p><a href="https://youtu.be/5NNCaWMviXU" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/autogen-grpc.png" alt=""></a></p><h3 id="flutter-grpc-android-app" tabindex="-1">Flutter gRPC Android App <a class="header-anchor" href="#flutter-grpc-android-app" aria-hidden="true">#</a></h3><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/svg/flutter-logo.svg" height="75" align="right"><p>And if you can access it from Dart, you can access it from all platforms Dart runs on - the most exciting is Google&#39;s <a href="https://flutter.dev" target="_blank" rel="noopener noreferrer">Flutter</a> UI Kit for building beautiful, natively compiled applications for Mobile, Web, and Desktop from a single codebase:</p><blockquote><p>YouTube: <a href="https://youtu.be/3iz9aM1AlGA" target="_blank" rel="noopener noreferrer">youtu.be/3iz9aM1AlGA</a></p></blockquote><p><a href="https://youtu.be/3iz9aM1AlGA" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/autogen-grpc-flutter.jpg" alt=""></a></p><h2 id="react-native-typed-client" tabindex="-1">React Native Typed Client <a class="header-anchor" href="#react-native-typed-client" aria-hidden="true">#</a></h2><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/svg/react-native-logo.svg" width="300" align="right"><p>gRPC is just <a href="/why-servicestack#multiple-clients">one of the endpoints ServiceStack Services</a> can be accessed from, for an even richer &amp; more integrated development UX they&#39;re also available in all popular Mobile, Web &amp; Desktop languages <a href="/add-servicestack-reference">Add ServiceStack Reference</a> supports.</p><p>Like <a href="/typescript-add-servicestack-reference">TypeScript</a> which can be used in Browser &amp; Node TypeScript code-bases as well as JavaScript-only code-bases like <a href="https://reactnative.dev" target="_blank" rel="noopener noreferrer">React Native</a> - a highly productive Reactive UI for developing iOS and Android Apps:</p><p><a href="https://youtu.be/6-SiLAbY63w" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/autogen-react-native.png" alt=""></a></p><div class="info custom-block"><p class="custom-block-title">YouTube</p><p><a href="https://youtu.be/6-SiLAbY63w" target="_blank" rel="noopener noreferrer">youtu.be/6-SiLAbY63w</a></p></div>',27),p=[n,c,l];function g(d,u,h,m,f,v){return i(),r("div",null,p)}var S=a(s,[["render",g]]);export{b as __pageData,S as default};
