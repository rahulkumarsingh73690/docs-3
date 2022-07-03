---
slug: autoquery
title: AutoQuery
---

<script setup>
import { Icon } from "@iconify/vue"
</script>

<link rel="stylesheet" href="/css/notitle.css">

<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-20">
    <h1 class="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-6xl">
        <div class="pb-4">
            AutoQuery
            <span class="relative whitespace-nowrap text-blue-600">
                <svg aria-hidden="true" viewBox="0 0 418 42" class="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70" preserveAspectRatio="none"
                    ><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
                <span class="relative">made simple</span>
            </span>
        </div>
        <div>Instant Query & CRUD APIs</div>
    </h1>
    <p class="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        High performance, Industrial strength, effortless, code-first APIs
    </p>
    <div class="mt-36 lg:mt-24">
        <p class="font-display text-base text-slate-900">
            Rapidly develop rich queryable APIs for
        </p>
        <ul class="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0 justify-center">
            <li class="flex" title="PostgreSQL">
                <Icon icon="cib:postgresql" class="w-16 h-16" />
            </li>
            <li class="flex" title="Microsoft SQL Server">
                <Icon icon="simple-icons:microsoftsqlserver" class="w-16 h-16" />
            </li>
            <li class="flex" title="SQLite">
                <Icon icon="simple-icons:sqlite" class="w-16 h-16" />
            </li>
            <li class="flex" title="MySQL">
                <Icon icon="cib:mysql" class="w-16 h-16" />
            </li>
            <li class="flex" title="MariaDB">
                <Icon icon="simple-icons:mariadbfoundation" class="w-16 h-16" />
            </li>
        </ul>
    </div>
</div>

## Fast, typed, code-first Queryable APIs

ServiceStack's AutoQuery is a fresh, approach to enable Auto Querying functionality akin to OData's querying support for Web Api, but without its [web service anti-patterns](http://stackoverflow.com/a/9579090/85785), over-architected implementation, large complexity, poor performance, tight-coupling and inhibitive versionability, traits we've strongly recommended against in [Why not OData](/why-not-odata).

## Introducing AutoQuery

The solution to overcome most of OData issues is ultimately quite simple: enhance the ideal API the developer would naturally write and complete their implementation for them! This is the design philosophy behind AutoQuery which utilizes conventions to automate creation of intent-based self-descriptive APIs that are able to specify configurable conventions and leverage extensibility options to maximize the utility of AutoQuery services.

AutoQuerying aims to work like optional typing by making it easy to expose contract-less data services for rapid prototyping, then allowing the API to be gradually formalized by decorating Request DTO's with its supported usage, whilst allowing complete freedom in either utilizing and extending AutoQuery's built-in functionality or replacing it entirely without breaking the Service Contract.

<h3 class="mt-8 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Great alternative to OData, GraphQL or JSON:API</h3>

<div class="flex flex-wrap">
    <div class="w-full sm:w-1/2 px-4">
        <h3 class="mt-8 text-xl font-medium tracking-tight text-gray-900">Connect to anything with data</h3>
        <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Expose data from various data sources including RDBMS, In memory, DynamoDb or even other services through consistent flexible APIs where clients can control the query details.
        </p>
        <h3 class="mt-8 text-xl font-medium tracking-tight text-gray-900">Works with your favorite databases</h3>
        <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            AutoQuery RDBMS works with anything OrmLite can connect to, including:
        </p>
        <ul class="ul-circle mx-auto mt-5 max-w-prose text-xl text-gray-500">
            <li class="mt-2">PostgreSQL</li>
            <li class="mt-2">SQL Server</li>
            <li class="mt-2">SQLite</li>
            <li class="mt-2">MySQL</li>
            <li class="mt-2">MariaDB</li>
            <li class="mt-2">AWS Aurora</li>
        </ul>
    </div>
    <div class="w-full sm:w-1/2 px-4">
        <h3 class="mt-8 text-xl font-medium tracking-tight text-gray-900">Clean REST routes, accessible from everywhere</h3>
        <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Unlike OData and GraphQL, AutoQuery provides clean REST services making them easy to use from standard browsers, avoiding the requirement for complex clients.
        </p>
        <h3 class="mt-8 text-xl font-medium tracking-tight text-gray-900">Unmatched client integration experience</h3>
        <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Add ServiceStack Reference provides best in class client generation in a multitude of languages straight from the server you're integrating with.
        </p>
        <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Instant Client Apps can generate working native client solutions through an easy to use free web tool, only needing a base URL of a ServiceStack service.
        </p>
    </div>
</div>


### AutoQuery Services are ServiceStack Services

An important point worthy of highlighting is that AutoQuery Services are just normal ServiceStack Services, utilizing the same [Request Pipeline](/order-of-operations), which can be mapped to any [user-defined route](/routing), is available in all [registered formats](/formats) and can be [consumed from existing typed Service Clients](/clients-overview). 

In addition to leveraging ServiceStack's existing functionality, maximizing re-use in this way reduces the cognitive overhead required for developers who can re-use their existing knowledge in implementing, customizing, introspecting and consuming ServiceStack services. 

### [AutoQuery RDBMS](/autoquery-rdbms)

Enables the rapid development of high-performance, fully-queryable typed RDBMS data-driven services and [supports most major Relational Databases](./ormlite/#ormlite-rdbms-providers)

### [AutoQuery Data](/autoquery-data) Sources

AutoQuery Data's Open Provider model supports multiple back-end data sources. The 3 data source providers available include:

 - [AutoQuery Memory](/autoquery-memory) - for querying static or dynamic in-memory .NET collections, some example uses include showing querying a flat-file **.csv** file and querying a throttled 3rd Party API with it's built-in configurable caching.
 - [AutoQuery Service](/autoquery-service) - a step higher than `MemorySource` where you can decorate the response of existing Services with AutoQuery's rich querying capabilities.
 - [AutoQuery DynamoDB](/autoquery-dynamodb) - adds rich querying capabilities over an AWS DynamoDB Table, offering a giant leap of productivity than constructing DynamoDB queries manually.

<h2 class="flex border-none text-4xl">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="w-10 h-10 align-middle mr-1 text-blue-500 iconify iconify--ri" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M4 10.4V4a1 1 0 0 1 1-1h5V1h4v2h5a1 1 0 0 1 1 1v6.4l1.086.326a1 1 0 0 1 .682 1.2l-1.516 6.068A4.992 4.992 0 0 1 16 16a4.992 4.992 0 0 1-4 2a4.992 4.992 0 0 1-4-2a4.992 4.992 0 0 1-4.252 1.994l-1.516-6.068a1 1 0 0 1 .682-1.2L4 10.4zm2-.6L12 8l2.754.826l1.809.543L18 9.8V5H6v4.8zM4 20a5.978 5.978 0 0 0 4-1.528A5.978 5.978 0 0 0 12 20a5.978 5.978 0 0 0 4-1.528A5.978 5.978 0 0 0 20 20h2v2h-2a7.963 7.963 0 0 1-4-1.07A7.963 7.963 0 0 1 12 22a7.963 7.963 0 0 1-4-1.07A7.963 7.963 0 0 1 4 22H2v-2h2z"></path></svg>
    <a href="https://www.locode.dev">Locode</a>
</h2>

If you're just getting started AutoQuery we also recommend using the built-in [Locode UI](/locode/) which lets you rapidly develop beautiful database-powered Web Apps, from an Instant UI around existing database-first RDBMS tables, or export into [highly customizable](/locode/declarative) declarative code-first development model with, on top of AutoQuery's industrial strength APIs to enable a rapid end-to-end typed development model for Web, Mobile & Desktop Apps.

<div class="py-8 max-w-7xl mx-auto px-4 sm:px-6">
    <iframe class="video-hd" src="https://www.youtube.com/embed/hkuO_DMFXmc" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Effortless High performance Query & CRUD APIs

To see the rapid development of AutoQuery in action we've created a quick demo showing how to create a simple multi-user Booking System in minutes from an empty [web](https://github.com/NetCoreTemplates/web) project, [mixed in](/mix-tool) with the preferred RDBMS, [Authentication](/auth) and [Validation](/validation).

<div class="py-8 max-w-7xl mx-auto px-4 sm:px-6">
    <iframe class="video-hd" src="https://www.youtube.com/embed/nhc4MZufkcM" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### This step-by-step guide shows how to:

- Start project from empty web template
- Add SQLite support
- Add Authentication support
- Define code-first database model
- Define code-first validation
- Add User Management support
- Add API event audit history support
- Use AutoFilters with AutoQuery services
- Add Excel integration

## Create Typed APIs with minimal code 

Configure AutoQuery with your RDBMS in your AppHost:

```csharp
// Configure your database
container.AddSingleton<IDbConnectionFactory>(c => new OrmLiteConnectionFactory(
    MapProjectPath("~/northwind.sqlite"), SqliteDialect.Provider));

// Add the AutoQuery Plugin
Plugins.Add(new AutoQueryFeature {
    MaxLimit = 1000
});
```

Add your custom DTO with route to register a table to query:

```csharp
[Route("/customers")]
public class QueryCustomers : QueryDb<Customer> {}
```

That's all that's needed! From your contract-first API blueprint ServiceStack implements a fully queryable, type safe API for the Customer table that you can query with ServiceStack's built-in [API Explorer](/api-explorer) and [Locode](/locode/) UIs.

<div class="py-4 w-full text-center">
    <div class="buttons text-center text-2xl my-2">
        <a href="https://servicestack.net/start#Name=MyApp&Mix=autoquery" style="text-decoration:none"
            class="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white hover:text-white shadow-xl px-5 py-2 inline-block text-blue-100 rounded">
            New Project with AutoQuery
        </a>
    </div>
</div>

### Highly customizable & overridable when needed

Example below shows how to return a custom `CustomRockstar` Response calling an overridable AutoQuery implementation which services are free to customize as needed:

```csharp
[Route("/rockstar-albums")]
public class QueryRockstarAlbums
  : QueryDb<Rockstar,CustomRockstar>, IJoin<Rockstar,RockstarAlbum>
{
    public int? Age { get; set; }
    public string RockstarAlbumName { get; set; }
}

// Custom result
public class CustomRockstar
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int? Age { get; set; }

    // Comes from joined table
    public string RockstarAlbumName { get; set; }
}

// Override with custom implementation
public class MyQueryServices : Service
{
    public IAutoQueryDb AutoQuery { get; set; }

    public async Task<object> Any(QueryRockstarAlbums query)
    {
        using var db = AutoQuery.GetDb(query, base.Request);
        var q = AutoQuery.CreateQuery(query, base.Request, db);
        return await AutoQuery.ExecuteAsync(query, q, base.Request, db);
    }
}
```

#### Multiple Customization Options

- [Custom AutoQuery Implementations](/autoquery-rdbms#custom-autoquery-implementations)
- [Return Custom Results](/autoquery-rdbms#returning-custom-results)
- [Join with other table](/autoquery-rdbms#joining-tables)
- [Join multiple tables](/autoquery-rdbms#joining-multiple-tables)
- [Return nested related results](/autoquery-rdbms#returning-nested-related-results)
- [Customizable Operands](/autoquery-rdbms#customizable-operands)
- [Customizable Templates](/autoquery-rdbms#customizable-templates)
- [Formatting Values](/autoquery-rdbms#formatting-values)
- [Query against multiple client values](/autoquery-rdbms#specifying-multi-airity-queries)
- [Change query behavior per field](/autoquery-rdbms#changing-querying-behavior)

## Create APIs for all RDBMS tables with AutoGen

Connect your existing database and configure to use AutoGen to generate typed end to end HTTP services for your database tables:

```csharp
container.AddSingleton<IDbConnectionFactory>(c => new OrmLiteConnectionFactory(
    MapProjectPath("~/northwind.sqlite"), SqliteDialect.Provider));

// Configure AutoQuery to Generate CRUD services
Plugins.Add(new AutoQueryFeature {
    MaxLimit = 1000,
    GenerateCrudServices = new GenerateCrudServices {
        AutoRegister = true
    }
});
```

### AutoGen in Action

[AutoGen](/autoquery-autogen) enables a number of exciting possibilities, predominantly it’s the fastest way to ServiceStack-ify an existing systems RDBMS where it will serve as an invaluable tool for anyone wanting to quickly migrate to ServiceStack and access its functionality ecosystem around ServiceStack Services

<div class="py-8 max-w-7xl mx-auto px-4 sm:px-6">
    <iframe class="video-hd" src="https://www.youtube.com/embed/NaJ7TW-Q_pU" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

AutoGen’s code generation is programmatically customizable where the generated types can be easily augmented with additional declarative attributes to inject your App’s conventions into the auto generated Services & Types to apply custom behavior like Authorization & additional validation rules.

After codifying your system conventions the generated classes can optionally be "ejected" where code-first development can continue as normal.

## Highly versatile ServiceStack APIs

AutoQuery seamlessly integrates with ServiceStack's endpoints, features and tools for maximum reuse and simplified integrations
where it's typed service message contracts are able to drive completely dynamic user interfaces, enabling smart clients to deliver amazing levels of reuse.

Your AutoQuery services can be managed with ServiceStack's built-in dynamic, capability-driven [API Explorer](/api-explorer) and [Locode](/locode/) UI's that are enabled by default, integrating with your existing App.

### Multiple, clean data formats allows for flexible data integrations

As all AutoQuery Services are pure HTTP APIs available in multiple data formats they allow for simple,
rich integrations like being able to use its CSV Format to create live table data sources in Excel or
easily import any query into any data store supporting CSV imports:

![Easy Excel Data Source Integration](/images/autoquery/excel-add-datasource-guide.png)

AutoQuery's usage of simple, user-defined Clean URLs and intuitive implicit query conventions makes it easy for
stakeholders to create custom Queries of their Systems Data that they can link to directly in their Excel worksheets
to generate Live Reports:

![Added Excel Datasource](/images/autoquery/excel-import-data-example-2.png)

<h2 class="mt-20 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl border-none text-center">
    Leverage ServiceStack's ecosystem of features
</h2>

<div class="flex flex-wrap text-xl">
    <div class="w-full sm:w-1/2">
        <ul class="ul-circle">
            <li class="mt-2"><a href="/formats"> JSON, CSV, XML, JSV, ProtoBuf data formats</a></li>
            <li class="mt-2"><a href="/service-reference"> Add ServiceStack Reference</a></li>
            <li class="mt-2"><a href="/grpc">gRPC</a></li>
            <li class="mt-2"><a href="/encrypted-messaging">Encrypted Messaging</a></li>
            <li class="mt-2"><a href="/messaging">Message Queues</a></li>
            <li class="mt-2"><a href="/declarative-validation">Declarative + Fluent Validation</a></li>
            <li class="mt-2"><a href="/authentication-and-authorization">ServiceStack Authentication providers</a></li>
            <li class="mt-2"><a href="/caching">Caching</a></li>
            <li class="mt-2"><a href="https://servicestack.net/features">And much more!</a></li>
        </ul>
    </div>
    <div class="w-full sm:w-1/2">
        <p>
            AutoQuery services are ServiceStack services, so they benefit from the ServiceStack ecosystem of features.
            This makes responding to changing requirements more straight forward as all these features are designed from the ground up to
            work together with clean consistent APIs.
        </p>
        <p>
            ServiceStack Plugins use the same interfaces that your custom plugins can use, giving you the ability to extend and expand
            your service features consistently across AutoQuery or standard ServiceStack services.
        </p>
        <div>
            <h3 class="text-center">Create new App with AutoQuery or AutoGen</h3>
            <div class="flex justify-center">
                <a class="archive-url" href="https://account.servicestack.net/archive/NetCoreTemplates/web?Name=MyApp&amp;Mix=autoquery">
                    <div class="bg-white px-4 py-4 mr-4 mb-4 rounded-lg shadow-lg text-center items-center justify-center hover:shadow-2xl" style="min-width:180px">
                        <div class="text-center font-extrabold flex items-center justify-center bg-white mb-2">
                            <div class="text-6xl text-blue-400 my-3">
                                <Icon icon="la:servicestack" />
                            </div>
                        </div>
                        <div class="text-xl font-medium text-gray-700">Web</div>
                        <div class="flex justify-center h-8">
                            <div class="mr-1"><span class="px-2 h-8 rounded-lg bg-blue-50 text-blue-500 text-sm">autoquery</span></div>
                        </div>
                        <span class="archive-name px-4 pb-2 text-blue-600">MyApp.zip</span>
                    </div>
                </a>
                <a class="archive-url" href="https://account.servicestack.net/archive/NetCoreTemplates/web?Name=MyApp&amp;Mix=autocrudgen">
                    <div class="bg-white px-4 py-4 mr-4 mb-4 rounded-lg shadow-lg text-center items-center justify-center hover:shadow-2xl" style="min-width:180px">
                        <div class="text-center font-extrabold flex items-center justify-center bg-white mb-2">
                            <div class="text-6xl text-blue-400 my-3">
                                <Icon icon="la:servicestack" />
                            </div>
                        </div>
                        <div class="text-xl font-medium text-gray-700">Web</div>
                        <div class="flex justify-center h-8">
                            <div class="mr-1"><span class="px-2 h-8 rounded-lg bg-blue-50 text-blue-500 text-sm">autoquery</span></div>
                            <div class="mr-1"><span class="px-2 h-8 rounded-lg bg-blue-50 text-blue-500 text-sm">autogen</span></div>
                        </div>
                        <span class="archive-name px-4 pb-2 text-blue-600">MyApp.zip</span>
                    </div>
                </a>
            </div>
            <div class="text-gray-400 text-center text-sm">
            or choose custom 
            <a href="https://servicestack.net/start#Name=MyApp&Mix=autoquery">
                Project Template with AutoQuery
            </a>
        </div>
        </div>
    </div>
</div>

<div class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
    <div class="text-center">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block">
                AutoQuery Examples
            </span>
        </h1>
    </div>
</div>

<div class="mt-16 mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
    <div>
        <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Database-first Example Locode App
        </p>
        <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            To demonstrate a database-first development workflow we've enabled 
            <a class="text-indigo-600" href="/autoquery-autogen">AutoGen</a> on the <b>Northwind</b> 
            sample database to generate 
            <a class="text-indigo-600" href="/autoquery-rdbms">AutoQuery</a> &amp; 
            <a class="text-indigo-600" href="/autoquery-crud">CRUD</a> 
            APIs whose capabilities are used to power the custom Northwind Locode App 
        </p>
    </div>
</div>

<div class="bg-white pb-8 pb-12">
  <div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
    <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
      <div>
        <div>
          <img class="h-11 w-auto" src="/images/locode/northwind/logo.svg" alt="Northwind Logo">
        </div>
        <div class="mt-20">
          <div>
            <a href="https://northwind.locode.dev/locode" class="inline-flex space-x-4">
              <span class="rounded bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-600 tracking-wide uppercase"> What's new </span>
              <span class="inline-flex items-center text-sm font-medium text-indigo-600 space-x-1">
              <span>Open Northwind in Locode</span>
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
              </span>
            </a>
          </div>
          <div class="mt-6 sm:max-w-xl">
            <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              Northwind Auto Locode
            </h1>
            <p class="mt-6 text-xl text-gray-500">
              Northwind Auto is a customized database-first Northwind App using
              <a class="text-indigo-600" href="/autoquery-autogen">AutoGen</a> to generate
              <a class="text-indigo-600" href="/autoquery-rdbms">AutoQuery</a> &amp;
              <a class="text-indigo-600" href="/autoquery-crud">CRUD</a> APIs
              in less than <span class="font-semibold text-gray-900">120 Lines of Code</span> in
              <a class="text-indigo-600" href="https://github.com/NetCoreApps/NorthwindAuto/blob/master/Configure.AppHost.cs">Configure.AppHost.cs</a>
            </p>
          </div>
          <div class="mt-6">
            <p class="text-2xl font-medium text-gray-900 mb-3">
              Explore Features
            </p>
            <div class="flex items-center mb-2">
              <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><g fill="none"><path d="M4 5c0-1.007.875-1.755 1.904-2.223C6.978 2.289 8.427 2 10 2s3.022.289 4.096.777C15.125 3.245 16 3.993 16 5v4.758a4.485 4.485 0 0 0-1-.502V6.698a4.92 4.92 0 0 1-.904.525C13.022 7.711 11.573 8 10 8s-3.022-.289-4.096-.777A4.92 4.92 0 0 1 5 6.698V15c0 .374.356.875 1.318 1.313c.916.416 2.218.687 3.682.687c.22 0 .437-.006.65-.018c.447.367.966.65 1.534.822c-.68.127-1.417.196-2.184.196c-1.573 0-3.022-.289-4.096-.777C4.875 16.755 4 16.007 4 15V5zm1 0c0 .374.356.875 1.318 1.313C7.234 6.729 8.536 7 10 7s2.766-.27 3.682-.687C14.644 5.875 15 5.373 15 5c0-.374-.356-.875-1.318-1.313C12.766 3.271 11.464 3 10 3s-2.766.27-3.682.687C5.356 4.125 5 4.627 5 5zm8.5 12c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 13.5 17zm0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5z" fill="currentColor"></path></g></svg>
              <a class="text-xl text-indigo-600" href="https://northwind.locode.dev/locode">Manage database with Locode</a>
            </div>
            <div class="flex items-center mb-2">
              <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 32"><g fill="currentColor"><path d="M27.464 2.314a.501.501 0 0 0-.698-.257L14.86 8.339a.499.499 0 0 0-.233.621l.245.641l-6.873 3.769a.5.5 0 0 0-.222.63l.228.549l-7.299 3.488a.5.5 0 0 0-.246.643l1.498 3.61a.5.5 0 0 0 .629.28l7.625-2.701l.228.549a.5.5 0 0 0 .601.289l7.276-2.097l.218.569a.497.497 0 0 0 .612.299l13-4a.498.498 0 0 0 .317-.663l-5-12.501zM2.7 21.469l-1.134-2.734l6.823-3.261l1.439 3.47L2.7 21.469zm8.491-1.846l-.238-.574l-1.843-4.445l-.238-.573l6.336-3.475l2.374 6.134l.375.981l-6.766 1.952zm8.109-1.238l-.203-.531c-.003-.011-.001-.024-.006-.035l-.618-1.597l-2.754-7.206l11.023-5.815l4.592 11.48L19.3 18.385z"></path><path d="M28.964.314a.5.5 0 0 0-.929.371l6 15a.502.502 0 0 0 .651.279a.501.501 0 0 0 .279-.65l-6.001-15z"></path><path d="M18 21h-3c-1.14 0-2 .86-2 2v1.315l-5.879 6.859a.5.5 0 1 0 .758.651L13.73 25H16v6.5a.5.5 0 0 0 1 0V25h2.27l5.85 6.825a.497.497 0 0 0 .705.054a.5.5 0 0 0 .054-.705L20 24.315v-1.24C20 21.912 19.122 21 18 21zm1 3h-5v-1c0-.589.411-1 1-1h3c.57 0 1 .462 1 1.075V24z"></path></g></svg>
              <a class="text-xl text-indigo-600" href="https://northwind.locode.dev/ui">Explore APIs in API Explorer</a>
            </div>
            <div class="mt-6 flex">
              <div class="rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                <a href="https://github.com/NetCoreApps/NorthwindAuto/archive/refs/heads/master.zip" class="flex hover:no-underline items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                  Download Northwind.zip
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
      <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div class="hidden sm:block">
          <div class="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"></div>
          <svg class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0" width="404" height="392" fill="none" viewBox="0 0 404 392"><defs><pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" /></pattern></defs><rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" /></svg>
        </div>
        <div class="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
          <a href="https://northwind.locode.dev/locode">
            <img class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                 src="/images/locode/northwind/screenshot.png" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
    <div>
        <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Code-first Example Locode App
        </p>
        <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            For greater customizability we've exported AutoGen APIs of the <b>Chinook</b> sample database into typed AutoQuery APIs &amp; Data Models to unlock more flexible code-first declarative &amp; programmatic dev models that includes Custom UI components to showcase potential enhancements in Locode Apps 
        </p>
    </div>
</div>


<div class="bg-white pb-4">
  <div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
    <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
      <div>
        <div>
          <img class="h-11 w-auto" src="/images/locode/chinook/logo.svg" alt="Chinook Logo">
        </div>
        <div class="mt-20">
          <div>
            <a href="https://chinook.locode.dev/locode" class="inline-flex space-x-4">
              <span class="rounded bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-500 tracking-wide uppercase"> What's new </span>
              <span class="inline-flex items-center text-sm font-medium text-rose-500 space-x-1">
              <span>Open Chinook in Locode</span>
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
              </span>
            </a>
          </div>
          <div class="mt-6 sm:max-w-xl">
            <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              Chinook Locode
            </h1>
            <p class="mt-6 text-xl text-gray-500">
              Chinook is a customized <a class="text-rose-500" href="/locode/code-first">Code-First</a> App using
              <a class="text-rose-500" href="/autoquery-autogen">AutoGen</a> to
              <a class="text-rose-500" href="/autoquery-autogen#export-code-first-dtos">export</a>
              Chinook's RDBMS Tables into
              <a class="text-rose-500" href="https://github.com/NetCoreApps/Chinook/blob/main/Chinook.ServiceModel/Types/Models.cs">Models.cs</a>
              generating code-first
              <a class="text-rose-500" href="/autoquery-rdbms">AutoQuery</a> APIs
              &amp; Data Models that's further annotated to create a customized Locode App
            </p>
          </div>
          <div class="mt-6">
            <p class="text-2xl font-medium text-gray-900 mb-3">
              Explore Features
            </p>
            <div class="flex items-center mb-2">
              <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><g fill="none"><path d="M4 5c0-1.007.875-1.755 1.904-2.223C6.978 2.289 8.427 2 10 2s3.022.289 4.096.777C15.125 3.245 16 3.993 16 5v4.758a4.485 4.485 0 0 0-1-.502V6.698a4.92 4.92 0 0 1-.904.525C13.022 7.711 11.573 8 10 8s-3.022-.289-4.096-.777A4.92 4.92 0 0 1 5 6.698V15c0 .374.356.875 1.318 1.313c.916.416 2.218.687 3.682.687c.22 0 .437-.006.65-.018c.447.367.966.65 1.534.822c-.68.127-1.417.196-2.184.196c-1.573 0-3.022-.289-4.096-.777C4.875 16.755 4 16.007 4 15V5zm1 0c0 .374.356.875 1.318 1.313C7.234 6.729 8.536 7 10 7s2.766-.27 3.682-.687C14.644 5.875 15 5.373 15 5c0-.374-.356-.875-1.318-1.313C12.766 3.271 11.464 3 10 3s-2.766.27-3.682.687C5.356 4.125 5 4.627 5 5zm8.5 12c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 13.5 17zm0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5z" fill="currentColor"></path></g></svg>
              <a class="text-xl text-rose-500" href="https://chinook.locode.dev/locode">Manage database with Locode</a>
            </div>
            <div class="flex items-center mb-2">
              <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 32"><g fill="currentColor"><path d="M27.464 2.314a.501.501 0 0 0-.698-.257L14.86 8.339a.499.499 0 0 0-.233.621l.245.641l-6.873 3.769a.5.5 0 0 0-.222.63l.228.549l-7.299 3.488a.5.5 0 0 0-.246.643l1.498 3.61a.5.5 0 0 0 .629.28l7.625-2.701l.228.549a.5.5 0 0 0 .601.289l7.276-2.097l.218.569a.497.497 0 0 0 .612.299l13-4a.498.498 0 0 0 .317-.663l-5-12.501zM2.7 21.469l-1.134-2.734l6.823-3.261l1.439 3.47L2.7 21.469zm8.491-1.846l-.238-.574l-1.843-4.445l-.238-.573l6.336-3.475l2.374 6.134l.375.981l-6.766 1.952zm8.109-1.238l-.203-.531c-.003-.011-.001-.024-.006-.035l-.618-1.597l-2.754-7.206l11.023-5.815l4.592 11.48L19.3 18.385z"></path><path d="M28.964.314a.5.5 0 0 0-.929.371l6 15a.502.502 0 0 0 .651.279a.501.501 0 0 0 .279-.65l-6.001-15z"></path><path d="M18 21h-3c-1.14 0-2 .86-2 2v1.315l-5.879 6.859a.5.5 0 1 0 .758.651L13.73 25H16v6.5a.5.5 0 0 0 1 0V25h2.27l5.85 6.825a.497.497 0 0 0 .705.054a.5.5 0 0 0 .054-.705L20 24.315v-1.24C20 21.912 19.122 21 18 21zm1 3h-5v-1c0-.589.411-1 1-1h3c.57 0 1 .462 1 1.075V24z"></path></g></svg>
              <a class="text-xl text-rose-500" href="https://chinook.locode.dev/ui">Explore APIs in API Explorer</a>
            </div>
            <div class="mt-6 flex">
              <div class="rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                <a href="https://github.com/NetCoreApps/Chinook/archive/refs/heads/main.zip" class="flex hover:no-underline items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                  Download Chinook.zip
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
      <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div class="hidden sm:block">
          <div class="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"></div>
          <svg class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0" width="404" height="392" fill="none" viewBox="0 0 404 392"><defs><pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" /></pattern></defs><rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" /></svg>
        </div>
        <div class="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
          <a href="https://chinook.locode.dev/locode">
            <img class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                 src="/images/locode/chinook/screenshot.png" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
    <div>
        <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Reuse typed APIs in Optimized UIs
        </p>
        <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500"> 
            AutoQuery's declarative dev model lets you focus on your new App's business requirements where its data model, API capabilities, input validation &amp; multi-user Auth restrictions can be defined simply using annotated C# POCOs.<br> This provides immense value at the start of the development cycle where functional prototypes can be quickly iterated to gather business requirements <br><br> Once requirements have been solidified, the typed AutoQuery APIs can easily be reused to develop custom UIs to optimize important workflows. <br><br><a class="text-indigo-600" href="https://github.com/NetCoreApps/TalentBlazor">Talent Blazor</a> is a new App showcasing an example of this where its entire back-office functionality can be managed through Locode whilst an optimized <b>Blazor WASM</b> App is created to optimize its unique workflow requirements which also benefits from the superior productive dev model of its Typed APIs 
        </p>
    </div>
</div>


<div class="bg-white pb-8 pb-12">
  <div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
    <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
      <div>
        <div>
          <img class="h-11 w-auto" src="/images/locode/talent/logo.svg" alt="Northwind Logo">
        </div>
        <div class="mt-20">
          <div>
            <a href="https://talent.locode.dev/locode" class="inline-flex space-x-4">
              <span class="rounded bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-600 tracking-wide uppercase"> What's new </span>
              <span class="inline-flex items-center text-sm font-medium text-purple-600 space-x-1">
              <span>Open Talent Blazor in Locode</span>
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
              </span>
            </a>
          </div>
          <div class="mt-6 sm:max-w-xl">
            <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              Talent Blazor Locode
            </h1>
            <p class="mt-6 text-xl text-gray-500">
              Talent Blazor is a Blazor WASM App built around a HR's unique workflow for processing Job Applications
              from initial Application, through to Phone Screening and Interviews by multiple employees, capturing
              relevant feedback at each application event, with successful Applicants awarded the Job
              <br>
              <br>
              It's co-developed &amp; deployed with a customized Locode App that manages all other CRUD Database Access
            </p>
          </div>
          <div class="mt-6">
            <p class="text-2xl font-medium text-gray-900 mb-3">
              Explore Features
            </p>
            <div class="flex items-center mb-2">
              <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><g fill="none"><path d="M4 5c0-1.007.875-1.755 1.904-2.223C6.978 2.289 8.427 2 10 2s3.022.289 4.096.777C15.125 3.245 16 3.993 16 5v4.758a4.485 4.485 0 0 0-1-.502V6.698a4.92 4.92 0 0 1-.904.525C13.022 7.711 11.573 8 10 8s-3.022-.289-4.096-.777A4.92 4.92 0 0 1 5 6.698V15c0 .374.356.875 1.318 1.313c.916.416 2.218.687 3.682.687c.22 0 .437-.006.65-.018c.447.367.966.65 1.534.822c-.68.127-1.417.196-2.184.196c-1.573 0-3.022-.289-4.096-.777C4.875 16.755 4 16.007 4 15V5zm1 0c0 .374.356.875 1.318 1.313C7.234 6.729 8.536 7 10 7s2.766-.27 3.682-.687C14.644 5.875 15 5.373 15 5c0-.374-.356-.875-1.318-1.313C12.766 3.271 11.464 3 10 3s-2.766.27-3.682.687C5.356 4.125 5 4.627 5 5zm8.5 12c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 13.5 17zm0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5z" fill="currentColor"></path></g></svg>
              <a class="text-xl text-purple-600" href="https://talent.locode.dev/locode">Manage database with Locode</a>
            </div>
            <div class="flex items-center mb-2">
              <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 32"><g fill="currentColor"><path d="M27.464 2.314a.501.501 0 0 0-.698-.257L14.86 8.339a.499.499 0 0 0-.233.621l.245.641l-6.873 3.769a.5.5 0 0 0-.222.63l.228.549l-7.299 3.488a.5.5 0 0 0-.246.643l1.498 3.61a.5.5 0 0 0 .629.28l7.625-2.701l.228.549a.5.5 0 0 0 .601.289l7.276-2.097l.218.569a.497.497 0 0 0 .612.299l13-4a.498.498 0 0 0 .317-.663l-5-12.501zM2.7 21.469l-1.134-2.734l6.823-3.261l1.439 3.47L2.7 21.469zm8.491-1.846l-.238-.574l-1.843-4.445l-.238-.573l6.336-3.475l2.374 6.134l.375.981l-6.766 1.952zm8.109-1.238l-.203-.531c-.003-.011-.001-.024-.006-.035l-.618-1.597l-2.754-7.206l11.023-5.815l4.592 11.48L19.3 18.385z"></path><path d="M28.964.314a.5.5 0 0 0-.929.371l6 15a.502.502 0 0 0 .651.279a.501.501 0 0 0 .279-.65l-6.001-15z"></path><path d="M18 21h-3c-1.14 0-2 .86-2 2v1.315l-5.879 6.859a.5.5 0 1 0 .758.651L13.73 25H16v6.5a.5.5 0 0 0 1 0V25h2.27l5.85 6.825a.497.497 0 0 0 .705.054a.5.5 0 0 0 .054-.705L20 24.315v-1.24C20 21.912 19.122 21 18 21zm1 3h-5v-1c0-.589.411-1 1-1h3c.57 0 1 .462 1 1.075V24z"></path></g></svg>
              <a class="text-xl text-purple-600" href="https://talent.locode.dev/ui">Explore APIs in API Explorer</a>
            </div>
            <div class="flex items-center text-xl mb-2">
              <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87"/><path d="M9 20.027c-3 .973-5.5 0-7-3"/></g></svg>
              Browse
              <a class="px-1 text-purple-600" href="https://github.com/NetCoreApps/TalentBlazor/tree/main/TalentBlazor.Client">Client</a>
              and
              <a class="px-1 text-purple-600" href="https://github.com/NetCoreApps/TalentBlazor/blob/main/TalentBlazor.ServiceInterface/TalentServices.cs">Server</a>
              source code
            </div>
            <div class="mt-6 flex">
              <div class="rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                <a href="https://github.com/NetCoreApps/TalentBlazor/archive/refs/heads/main.zip" class="flex hover:no-underline items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                  Download TalentBlazor.zip
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
      <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div class="hidden sm:block">
          <div class="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"></div>
          <svg class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0" width="404" height="392" fill="none" viewBox="0 0 404 392"><defs><pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" /></pattern></defs><rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" /></svg>
        </div>
        <div class="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
          <a href="https://talent.locode.dev">
            <img class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                 src="/images/locode/talent/screenshot.png" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

### More AutoQuery Source Code Examples

- [NetCoreApps/BookingsCrud](https://github.com/NetCoreApps/BookingsCrud)
- [NetCoreApps/TechStacks](https://github.com/NetCoreApps/TechStacks)
- [NetCoreApps/Northwind](https://github.com/NetCoreApps/Northwind)
- [NetCoreApps/StackApis](https://github.com/NetCoreApps/StackApis)
- [ServiceStackApps/GitHubAutoQuery](https://github.com/ServiceStackApps/GitHubAutoQuery)
