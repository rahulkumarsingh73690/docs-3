import{_ as n,c as s,o as r,a as o,b as e,e as t}from"./app.877820b6.js";const R='{"title":"Deploy .NET Core with Docker to EC2 Container Service","description":"","frontmatter":{"slug":"deploy-netcore-docker-aws-ecs","title":"Deploy .NET Core with Docker to EC2 Container Service"},"headers":[{"level":2,"title":"Native Docker Integration in the Cloud","slug":"native-docker-integration-in-the-cloud"},{"level":2,"title":"AWS EC2 Container Service","slug":"aws-ec2-container-service"},{"level":2,"title":"Deploying to AWS Container Service Overview","slug":"deploying-to-aws-container-service-overview"},{"level":3,"title":"Deploying fork of redis-geo .NET Core App","slug":"deploying-fork-of-redis-geo-net-core-app"},{"level":3,"title":"Running build scripts locally","slug":"running-build-scripts-locally"},{"level":3,"title":"Walkthrough Overview","slug":"walkthrough-overview"},{"level":2,"title":"1. Create the ecsInstanceRole Role","slug":"_1-create-the-ecsinstancerole-role"},{"level":2,"title":"2. Create a new IAM User","slug":"_2-create-a-new-iam-user"},{"level":2,"title":"Checkout AWS Container Service","slug":"checkout-aws-container-service"},{"level":2,"title":"3. Launch new EC2 Docker Server Instance","slug":"_3-launch-new-ec2-docker-server-instance"},{"level":2,"title":"Revisit AWS Container Service","slug":"revisit-aws-container-service"},{"level":2,"title":"4. Associating Elastic IP to new EC2 Instance","slug":"_4-associating-elastic-ip-to-new-ec2-instance"},{"level":2,"title":"Assign a Domain Name to your Elastic IP","slug":"assign-a-domain-name-to-your-elastic-ip"},{"level":2,"title":"5. Log into the new EC2 Instance","slug":"_5-log-into-the-new-ec2-instance"},{"level":3,"title":"Enable support for SSL","slug":"enable-support-for-ssl"},{"level":2,"title":"6. Fork redis-geo Demo","slug":"_6-fork-redis-geo-demo"},{"level":3,"title":"Inspect the Build Scripts","slug":"inspect-the-build-scripts"},{"level":3,"title":"ECS task-definition.json","slug":"ecs-task-definition-json"},{"level":2,"title":"Configure support for SSL","slug":"configure-support-for-ssl"},{"level":2,"title":"Create project in Travis-CI","slug":"create-project-in-travis-ci"},{"level":3,"title":"CI Environment Variables","slug":"ci-environment-variables"},{"level":2,"title":"Inspect AWS Container Service","slug":"inspect-aws-container-service"},{"level":3,"title":"View list of running Docker Containers","slug":"view-list-of-running-docker-containers"},{"level":2,"title":"Problems with the task not running","slug":"problems-with-the-task-not-running"},{"level":2,"title":"8. Play your deployed .NET Core Docker App!","slug":"_8-play-your-deployed-net-core-docker-app"},{"level":2,"title":"Things to try","slug":"things-to-try"},{"level":3,"title":"1. Make a change to your App","slug":"_1-make-a-change-to-your-app"},{"level":3,"title":"2. Go through this tutorial again","slug":"_2-go-through-this-tutorial-again"},{"level":3,"title":"3. Copy the build scripts to Dockerize own .NET Core Apps","slug":"_3-copy-the-build-scripts-to-dockerize-own-net-core-apps"},{"level":3,"title":"4. Exec build scripts to Create and Run your Docker App locally","slug":"_4-exec-build-scripts-to-create-and-run-your-docker-app-locally"}],"relativePath":"deploy-netcore-docker-aws-ecs.md"}',a={},i=o("",94),c=e("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[e("div",{class:"flex-grow bg-gray-800"},[e("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[e("p",null,"chmod 400 ~/pem/ecs-demo.pem")])]),e("div",{class:"flex"},[e("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[e("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),e("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),l=e("p",null,[t("Once locked down you can use it to SSH into your instance using the "),e("code",null,"-i"),t(" flag, logging in as the "),e("code",null,"ec2-user"),t(":")],-1),p=e("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[e("div",{class:"flex-grow bg-gray-800"},[e("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[e("p",null,[t("ssh -i ~/pem/ecs-demo.pem "),e("a",{href:"mailto:ec2-user@ecsdemo.netcore.io"},"ec2-user@ecsdemo.netcore.io")])])]),e("div",{class:"flex"},[e("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[e("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),e("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),h=e("p",null,[t("Replace "),e("code",null,"ecsdemo.netcore.io"),t(" with your domain name or Elastic IP. If everything went to plan you should now be logged into your EC2 Instance:")],-1),d=e("p",null,[e("img",{src:"https://docs.servicestack.net/images/aws/ecs/ssh-01.png",alt:""})],-1),u=e("p",null,[t("We're only assigned one task while we're here which is to run an instance of the "),e("code",null,"jwilder/nginx-proxy"),t(" Docker App copying the command below:")],-1),g=e("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[e("div",{class:"flex-grow bg-gray-800"},[e("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[e("p",null,"docker run -d -p 80:80 -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy")])]),e("div",{class:"flex"},[e("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[e("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),e("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),k=o("",7),w=e("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[e("div",{class:"flex-grow bg-gray-800"},[e("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[e("p",null,[t("docker run --detach --name nginx-proxy --publish 80:80 --publish 443:443 "),e("br"),t(" --volume /etc/nginx/certs --volume /etc/nginx/vhost.d --volume /usr/share/nginx/html "),e("br"),t(" --volume /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy")])])]),e("div",{class:"flex"},[e("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[e("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),e("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),m=e("p",null,[t("You'll also need to run the "),e("a",{href:"https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion",target:"_blank",rel:"noopener noreferrer"},"letsencrypt-nginx-proxy-companion"),t(" companion Docker container for "),e("code",null,"nginx-proxy"),t(" with:")],-1),y=e("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[e("div",{class:"flex-grow bg-gray-800"},[e("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[e("p",null,[t("docker run --detach --name nginx-proxy-letsencrypt --volumes-from nginx-proxy "),e("br"),t(" --volume /var/run/docker.sock:/var/run/docker.sock:ro jrcs/letsencrypt-nginx-proxy-companion")])])]),e("div",{class:"flex"},[e("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[e("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),e("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),f=o("",8),v=e("div",{class:"sh-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[e("div",{class:"flex-grow bg-gray-800"},[e("div",{class:"pl-4 py-1 pb-1.5 align-middle whitespace-pre text-base text-gray-100"},[e("p",null,"C:\\src\\redis-geo>code .")])]),e("div",{class:"flex"},[e("div",{class:"bg-green-600 text-white p-1.5 pb-0"},[e("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),e("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),b=o("",66),C=[i,c,l,p,h,d,u,g,k,w,m,y,f,v,b];function S(_,A,E,x,I,T){return r(),s("div",null,C)}var N=n(a,[["render",S]]);export{R as __pageData,N as default};