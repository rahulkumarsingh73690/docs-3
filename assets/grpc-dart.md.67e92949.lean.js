import{_ as t,c as p,o as e,a,b as n,e as s}from"./app.877820b6.js";const L='{"title":"gRPC protoc Dart Client","description":"","frontmatter":{"slug":"grpc-dart","title":"gRPC protoc Dart Client"},"headers":[{"level":2,"title":"Dart protoc generated GrpcServiceClient TodoWorld Example","slug":"dart-protoc-generated-grpcserviceclient-todoworld-example"},{"level":3,"title":"Generate protoc Dart gRPC Client","slug":"generate-protoc-dart-grpc-client"},{"level":3,"title":"Dart protoc gRPC insecure Example","slug":"dart-protoc-grpc-insecure-example"},{"level":3,"title":"Dart protoc gRPC SSL Example","slug":"dart-protoc-grpc-ssl-example"},{"level":3,"title":"Dart Local Development gRPC SSL CRUD Example","slug":"dart-local-development-grpc-ssl-crud-example"},{"level":3,"title":"Dart Server Events gRPC Server Stream Example","slug":"dart-server-events-grpc-server-stream-example"},{"level":3,"title":"Dart gRPC Server Stream Files Example","slug":"dart-grpc-server-stream-files-example"},{"level":3,"title":"Dart gRPC Authenticated Request Example","slug":"dart-grpc-authenticated-request-example"}],"relativePath":"grpc-dart.md"}',o={},c=a("",4),l=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"dotnet tool install --global x")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),i=n("p",null,[s("Install "),n("a",{href:"https://pub.dev/packages/stagehand",target:"_blank",rel:"noopener noreferrer"},"stagehand"),s(":")],-1),r=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"pub global activate stagehand")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),u=n("p",null,"Create a new Dart Console App:",-1),k=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"stagehand console-full")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),d=a("",3),h=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"pub get")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),g=n("h3",{id:"generate-protoc-dart-grpc-client",tabindex:"-1"},[s("Generate protoc Dart gRPC Client "),n("a",{class:"header-anchor",href:"#generate-protoc-dart-grpc-client","aria-hidden":"true"},"#")],-1),w=n("p",null,[s("Add protoc generated TodoWorld DTOs and gRPC GrpcServiceClient to "),n("code",null,"lib/"),s(" folder:")],-1),v=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,[s("x proto-dart "),n("a",{href:"https://todoworld.servicestack.net",target:"_blank",rel:"noopener noreferrer"},"https://todoworld.servicestack.net"),s(" -out lib")])])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),m=a("",4),x=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"x mix todoworld-dart -out bin")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),f=n("p",null,"Run example:",-1),y=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"dart run")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),b=n("h3",{id:"dart-protoc-grpc-ssl-example",tabindex:"-1"},[s("Dart protoc gRPC SSL Example "),n("a",{class:"header-anchor",href:"#dart-protoc-grpc-ssl-example","aria-hidden":"true"},"#")],-1),_=n("p",null,"Download TodoWorld SSL Certificate used for its gRPC HTTP/2 Services:",-1),C=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,[s("x get "),n("a",{href:"https://todoworld.servicestack.net/grpc.crt",target:"_blank",rel:"noopener noreferrer"},"https://todoworld.servicestack.net/grpc.crt")])])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),T=a("",3),S=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"x mix todoworld-dart-ssl -out bin")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),D=n("p",null,"Run example:",-1),R=n("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[n("div",{class:"flex-grow bg-gray-800"},[n("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[n("p",null,"dart run")])]),n("div",{class:"flex"},[n("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[n("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),n("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),A=a("",12),M=[c,l,i,r,u,k,d,h,g,w,v,m,x,f,y,b,_,C,T,S,D,R,A];function P(E,j,V,B,$,I){return e(),p("div",null,M)}var H=t(o,[["render",P]]);export{L as __pageData,H as default};