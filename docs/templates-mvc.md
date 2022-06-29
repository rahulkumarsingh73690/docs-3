---
title: MVC Project Templates
---

All ServiceStack Projects can be created from ServiceStack's Start Page:

<h3 class="m-0 py-4 text-4xl text-center"><a href="https://servicestack.net/start">servicestack.net/start</a></h3>

Or using the .NET [x dotnet tool](/dotnet-new):

:::sh
dotnet tool install --global x
:::


## mvc

.NET 6.0 MVC Website with ServiceStack APIs

[![](https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/mvc.png)](https://github.com/NetCoreTemplates/mvc)

:::sh
x new mvc ProjectName
:::

## MVC with Integrated Auth

### mvcauth

.NET 6.0 MVC Website integrated with ServiceStack Auth

[![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/mvcauth.png)](https://github.com/NetCoreTemplates/mvcauth)

:::sh
x new mvcauth ProjectName
:::

::: tip
Learn about [using ServiceStack Auth in MVC](/authentication-identity-servicestack)
:::

### mvcidentity

.NET 6.0 MVC Website integrated with ServiceStack using MVC Identity Auth

[![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/mvcidentity.png)](https://github.com/NetCoreTemplates/mvcidentity)

:::sh
x new mvcidentity ProjectName
:::

::: tip
Learn about [using ASP.NET Identity Auth in ServiceStack](/authentication-identity-aspnet)
:::

### mvcidentityserver

.NET 6.0 MVC Website integrated with ServiceStack using IdentityServer4 Auth

[![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/auth/signin/mvcidentityserver.png)](https://github.com/NetCoreTemplates/mvcidentityserver)

:::sh
x new mvcidentityserver ProjectName
:::

::: tip
Learn about [using IdentityServer4 Auth in ServiceStack](/authentication-identity-aspnet)
:::
