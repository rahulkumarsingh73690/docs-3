---
slug: api-explorer
title: API Explorer
---

API Explorer provides the ability to explore, discover and test your APIs for your ServiceStack application by dynamically generating a UI from your services.
This feature is enabled by default through the `MetadataFeature` or controlled individually through the `UiFeature`. This makes API explorer available in your ServiceStack application at the default `/ui` address.
For example, our Blazor-WASM demo is hosted at [`blazor-wasm-api.jamstacks.net`](https://blazor-wasm-api.jamstacks.net) has API Explorer available at [`blazor-wasm-api.jamstacks.net/ui`](https://blazor-wasm-api.jamstacks.net/ui). 

<iframe class="video-hd" src="https://www.youtube.com/embed/lUDlTMq9DHU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Your service contracts, driven by the structure of your request and response Data Transfer Objects (DTOs), generates the UI and controls in API Explorer so no additional effort is required to get:

- A list of your services
- A form to test your API
- A details page to document your API
- A code page with how to use your API across different languages

<a href="https://blazor-wasm-api.jamstacks.net/ui" class="block my-8 p-4 rounded shadow hover:shadow-lg">
    <img src="/images/apiexplorer/code-to-form.png">
</a>

API Explorer is also aware of registered plugins in your application AppHost, providing additional functionality based on plugins registered such as `AuthFeature` and `AdminUsersFeature`.

<a href="https://blazor-wasm-api.jamstacks.net/ui" class="block my-8 p-4 rounded shadow hover:shadow-lg">
    <img src="/images/apiexplorer/code-to-signin.png">
</a>

::: info
This feature is enabled by default through the `MetadataFeature` or controlled individually through the `UiFeature`. 
Removing either plugin will disable the API Explorer functionality.
:::

## API Tab

After selecting an API to use from the left-hand menu, you will be greeted with a way to test your API and review info about the result.
You can use the dynamically generated `Form` to populate the request. 

<a href="https://blazor-wasm-api.jamstacks.net/ui" class="block my-8 p-4 rounded shadow hover:shadow-lg">
    <img src="/images/apiexplorer/api-form-CreateBooking.png">
</a>

Control types are based on the property types in your DTOs. 

| UI Input                | Data Types |
| ----------------------- | -------- |
| `<select>`              | Enum, Custom Values |
| `<input type=number>`   | Numeric Types |
| `<input type=date>`     | DateTime, DateTimeOffset, DateOnly |
| `<input type=time>`     | TimeSpan, TimeOnly |
| `<input type=checkbox>` | Boolean |
| `<input type=text>`     | default |

Alternatively, you can provide your own JSON using the Form/JSON buttons at the top if you need/want more control of the JSON input.

<a class="block my-8 p-4 rounded shadow hover:shadow-lg">
    <img src="/images/apiexplorer/api-form-CreateBooking-json.png">
</a>

Once you make a request, the response body will be viewable in three different modes, `Pretty`,`Raw` and `Preview` alongside response headers and cookies.
The default `Pretty` is a formatted version of the JSON response. `Raw` shows an unaltered response body and `Preview` converts the JSON into an HTML view for easier viewing.

<a class="block my-8 p-4 rounded shadow hover:shadow-lg">
    <img src="/images/apiexplorer/bookings-query-results-only.png">
</a>

## Details tab

API Explorer also provides a place for users to find out more about your API through documentation generated by metadata about in your API and optionally custom HTML modules to give additional context.

By default, API explorer presents:

- Default HTTP verb used by API Explorer
- Request name
- Response name
- Routes
- Request and Response data structures including dependent types

<a class="block my-8 p-4 rounded shadow hover:shadow-lg">
    <img src="/images/apiexplorer/hello-secure-details-tab.png">
</a>

All this data is inferred from your services, with the ability to present data from additional metadata attributes such as:


| Attribute name          | Description                                                     |
|-------------------------|-----------------------------------------------------------------|
| `[Description]`         | Class and properties text only description.                     |
| `[Notes]`               | Class only text and HTML description.                           |
| `[Tag]`                 | Class only categorization of services, a way to group services. |
| `[Input]`               | Properties only presentation data for input fields.             |

If services require authentication using `Authenticate` or validation checking for role or permission, services will be shown with a padlock (🔒) signifying requiring authentication.

Request and response names are links to show C# generated code representations of your DTOs and dependent types. Text metadata such as `[Description]` will also flow down into the generated code as comments for additional context. 

<a class="block my-8 p-4 rounded shadow hover:shadow-lg">
    <img src="/images/apiexplorer/api-details-QueryBookings-code.png">
</a>

## Code tab

To guide developers trying to use your services, the `Code` tab provides a step-by-step list of instructions based on a language selection.
This is driven by the services that power the [Add ServiceStack Reference](./add-servicestack-reference.md) feature. 

<a class="block my-8 p-4 rounded shadow hover:shadow-lg">
    <img src="/images/apiexplorer/api-code-QueryBookings-python.png">
</a>

This growing list of support languages shows example code using the specific API as well as required ServiceStack client libraries to use, and how to update the DTOs using ServiceStack tooling.

## Works with AutoQuery

Since AutoQuery services are ServiceStack services, code first and generated AutoQuery services are listed in API explorer just like custom services.

For example, if we declare an AutoQuery DB class to query a `Booking` table.

```csharp
public class QueryBookings : QueryDb<Booking> 
{
    public int? Id { get; set; }
}
```

API Explorer to generate and present the following form to perform queries.

<a class="block my-8 p-4 rounded shadow hover:shadow-lg">
    <img src="/images/apiexplorer/find-booking-autoquery-form.png">
</a>

Query properties from `QueryDb<T>` are surfaced via the generated UI fields. Additional properties can be surfaced to make querying easier to use just like is done for any AutoQuery client.

## Further API Explorer Customization

To get more value from using API Explorer UI, the generated API forms and Details tab can be customized further.

### FormLayout

Generated forms default to a two column layout, but this can be controlled using `FormLayout` for a specific operation.
The `appHost.ConfigureOperation<T>` method can be used to change the layout and order of the form used in API Explorer.

For example, a `CreateCustomer` operation by default has the following properties.

```csharp
[Route("/customers", "POST")]
public class CreateCustomers
    : IReturn<IdResponse>, IPost, ICreateDb<Customers>
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Company { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Country { get; set; }
    public string PostalCode { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
    public string Email { get; set; }
    public long? SupportRepId { get; set; }
}
```

And is presented in API Explorer using the following generated form by default.

<a class="block my-8 p-4 rounded shadow hover:shadow-lg">
    <img src="/images/apiexplorer/create-customer-default.png">
</a>

Customizing this layout using `ConfigureOperation`, we can control the placement and other attributed of each `InputInfo`.
When overriding the `FormLayout`, it is in the structure of Rows, then columns in the nested list. So grouping controls like `City`, `State` and `PostalCode` in the same row allows us to control the presentation.

```csharp
appHost.ConfigureOperation<CreateCustomers>(operation =>
{
    operation.FormLayout = new List<List<InputInfo>>
    {
        new()
        {
            Input.For<CreateCustomers>(x => x.FirstName),
            Input.For<CreateCustomers>(x => x.LastName),
        },
        new() { Input.For<CreateCustomers>(x => x.Email) },
        new() { Input.For<CreateCustomers>(x => x.Company) },
        new() { Input.For<CreateCustomers>(x => x.Address) },
        new()
        {
            Input.For<CreateCustomers>(x => x.City),
            Input.For<CreateCustomers>(x => x.State),
            Input.For<CreateCustomers>(x => x.PostalCode)
        },
        new()
        {

            Input.For<CreateCustomers>(x => x.Country)
        },
        new()
        {
            Input.For<CreateCustomers>(x => x.Phone),
            Input.For<CreateCustomers>(x => x.Fax),
        },
        new() { Input.For<CreateCustomers>(x => x.SupportRepId) }
    };
});
```

Gives us the updated layout in API Explorer.

<a class="block my-8 p-4 rounded shadow hover:shadow-lg">
    <img src="/images/apiexplorer/create-customer-custom-layout.png">
</a>

Each input field can be customized with client side visual and behavioural changes by using `InputInfo` when customizing `FormLayout`.

```csharp
new() 
{ 
    Input.For<CreateCustomers>(x => x.Email, info =>
        {
            info.Label = "Personal Email Address";
            info.Placeholder = "me@email.com";
            info.Type = "email";
        }) 
},
```

Now our `label` and `placeholder` changes are visible and trying to submit a value without an `@` we get a client side warning.

<a class="block my-8 p-4 rounded shadow hover:shadow-lg">
    <img src="/images/apiexplorer/create-customer-custom-input.png">
</a>

Values for `InputInfo` are merged with the `[Input]` attribute that can be used on request DTO class properties.
This allows you to keep the default layout while still controlling `Input` options directly on your request DTO class.

```csharp
public class CreateCustomers
        : IReturn<IdResponse>, IPost, ICreateDb<Customers>
{
    [Input(Placeholder = "me@email.com", Type = "email", Label = "Personal Email Address")]
    public string Email { get; set; }
}
```

### Custom HTML Modules for API Details

Another way to customize the Details tab is to provide a custom HTML Module in your project.
This functionality is driven by folder structure and component naming conventions, and utilizes [`PetiteVue`](https://github.com/vuejs/petite-vue) modules to enable progressive enhancement without the need for JavaScript build tools.
For example, our `Blazor-WASM` template provides files in the following structure for overrides.

<ul class="list-none">
    <li>
        <a href="https://github.com/NetCoreTemplates/blazor-wasm/tree/main/MyApp/wwwroot/modules" class="font-medium">/modules</a>
        <ul class="list-none">
            <li>
                <span class="font-medium">/ui</span>
                <ul class="list-none">
                    <li>
                        <span class="font-medium">/docs</span>
                        <ul class="list-none">
                            <li>
                                <a href="https://github.com/NetCoreTemplates/blazor-wasm/blob/main/MyApp/wwwroot/modules/ui/docs/CreateBookingsDocs.html">
                                    CreateBookingsDocs.html
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/NetCoreTemplates/blazor-wasm/blob/main/MyApp/wwwroot/modules/ui/docs/TodosDocs.html">
                                    TodosDocs.html
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <span class="font-medium">/shared</span>
                <ul class="list-none">
                    <li>
                        <a href="https://github.com/NetCoreTemplates/blazor-wasm/blob/main/MyApp/wwwroot/modules/shared/Brand.html">
                            Brand.html
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
</ul>

Looking at an example, the `CreateBooking` request is enhanced because `CreateBookingsDocs.html` declares a `Component` on the root `App` object.
For a component to be detected, the name needs to match the convention of `{Type}Docs`. 

```html
<script>App.components({ CreateBookingDocs: '#create-booking-docs' })</script>
```

The component name then has a value of the element ID of a `<template>` in the same HTML file showing how it will be presented.

```html
<script>App.components({ CreateBookingDocs: '#create-booking-docs' })</script>
<template id="create-booking-docs">
<div class="text-center my-3">
    <div class="flex justify-center">
        <svg>...</svg>
        <h2 class="text-3xl ml-3 mb-3">Create Bookings API</h2>
    </div>
    <div class="text-gray-500 text-lg">
        <p>
            Create a new room Booking for our {{serviceName}} hotels.
        </p>
        <p>
            Here are some 
            <a class="svg-external text-blue-800" target="_blank" 
                href="https://edition.cnn.com/travel/article/scoring-best-hotel-rooms/index.html">
                good tips on making room reservations
            </a>
        </p>
    </div>
</div>
</template>
```

This results in the custom component being used on the `Details` page for the specific API operation.

<a class="block my-8 p-4 rounded shadow hover:shadow-lg">
    <img src="/images/apiexplorer/create-booking-custom-details.png">
</a>

These customizations can also be made dynamic. For example creating a `HTML` file to register multiple components servicing multiple request types.

[QueryTodos](https://blazor-wasm-api.jamstacks.net/ui/QueryTodos?tab=details) is a more advanced example that generates a dynamic UI shared by all TODO APIs:

```html
<script>
(function (){
    let apis = {
        QueryTodos:  'Query Todos, returns all Todos by default',
        CreateTodo:  'Create a Todo',
        UpdateTodo:  'Update a Todo',
        DeleteTodo:  'Delete Todo by Id',
        DeleteTodos: 'Delete multiple Todos by Ids',
    }
    let apiNames = Object.keys(apis)
    function TodosDocs({ op, store, routes, breakpoints }) {
        return {
            $template: '#Todos-docs',
            get op() { return resolve(op) }, 
            routes,
            apis,
            get otherApis() { return apiNames.filter(x => x !== this.op.request.name)
                .reduce((acc,x) => { acc[x] = apis[x]; return acc }, {}) },
        }
    }
    App.components(apiNames.reduce((acc, x) => { acc[x + 'Docs'] = TodosDocs; return acc }, {}))
})() 
</script>
<template id="Todos-docs">
<div class="mx-auto max-w-screen-md text-center py-8">
    <h2 class="text-center text-3xl">{{humanize(op.request.name)}}</h2>
    <p class="text-gray-500 text-lg my-3">{{apis[op.request.name]}}</p>
    <div class="flex justify-center text-left">
        <table>
            <caption class="mt-3 text-lg font-normal">Other Todo APIs</caption>
            <tr v-for="(info,name) in otherApis">
                <th class="text-right font-medium pr-3">
                    <a v-href="{ op:name }" class="text-blue-800">{{humanize(name)}}</a>
                </th>
                <td class="text-gray-500">{{info}}</td>
            </tr>
        </table>
    </div>
</div>
</template>
```

To generate its reactive **Mini Navigation UI** users can use to cycle through **all TODO API docs** with a `v-href="{ op }"` custom directive:

<a href="https://blazor-wasm-api.jamstacks.net/ui/QueryTodos?tab=details" class="block my-8 p-4 rounded shadow hover:shadow-lg">
    <img src="/images/apiexplorer/api-details-docs-Todos.png">
</a>

API Doc HTML components are injected with the following properties:

- `op` - Operation metadata about your API
- [store](https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack/modules/ui/js/stores.js) - API Explorer's Reactive object model
- [routes](https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack/modules/shared/plugins/usePageRoutes.js) - App `usePageRoutes` plugin Reactive store to manage its SPA routing
- [breakpoints](https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack/modules/shared/plugins/useBreakpoints.js) - App `useBreakpoints` plugin Reactive store used that maintains responsive layout breakpoint properties

Components also have access to the entire functionality in the `@servicestack/client` library:

- [index.d.ts](https://github.com/ServiceStack/servicestack-client/blob/master/src/index.d.ts) - TypeScript library declaration
- [index.ts](https://github.com/ServiceStack/servicestack-client/blob/master/src/index.ts) - Source code implementation

You're also not limited with what's in API Explorer, with full access to HTML you can also import and use any `<script>` library features.

The source code for [API Explorer's source code](https://github.com/ServiceStack/ServiceStack/tree/master/src/ServiceStack/modules) modules has other examples of what can be used, eg:

```js
[store,routes,breakpoints].map(Object.keys) // available methods & getters on reactive stores
Object.keys(exports)                        // all imported functionality e.g. @servicestack/client + DTOs
```

### Using `dotnet watch` for Hot Reload

When writing custom API detail components, you can use `dotnet watch` and get hot reload functionality providing an easy to see exactly what you customizations will look like.

<div class="flex justify-center py-8">
    <a href="https://youtu.be/lUDlTMq9DHU?t=521">
        <img src="/images/apiexplorer/api-docs-livereload.gif">
    </a>
</div>

### Overriding defaults

Customization of API Explorer components are also available through the use of your own matching files in `/modules/shared`.

For example, changing the API Explorer title which defaults to your application name is available by adding your own `/modules/shared/Brand.html` file
 which overrides the top-right branding navigation for all API Explorer and Admin UIs:

<div class="flex justify-center py-8">
    <a href="https://blazor-wasm-api.jamstacks.net/ui/">
        <img src="/images/apiexplorer/brand-blazor-wasm.png" style="max-width:850px;border:1px solid rgb(229 231 235);">
    </a>
</div>

Brand and other customizations are also available using the `UiFeature` options directly in your AppHost.
For example, overriding the `BrandIcon`:

```csharp
ConfigurePlugin<UiFeature>(feature => {
    feature.Info.BrandIcon.Uri = "/assets/img/logo.svg";
    feature.Info.BrandIcon.Cls = "inline-block w-8 h-8 mr-2";
});
```

<div class="flex justify-center py-8">
    <a href="https://blazor-wasm-api.jamstacks.net/ui/Register">
        <img src="/images/apiexplorer/brand-vue-ssg.png" style="max-width:850px;border:1px solid rgb(229 231 235);">
    </a>
</div>
