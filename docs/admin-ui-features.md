---
title: Admin UI Features
---

Built into ServiceStack v6+ Apps is the [Admin UI](/admin-ui) providing **Admin** Users a UX Friendly UI to access App features & summary insights from:

<h3 class="text-center font-medium text-4xl text-indigo-800 m-0 py-3">/admin-ui</h3>

Which after authenticating will take you to the Admin UI dashboard showing the authenticated Admin User details and general API stats:

<div class="block p-4 rounded shadow">
    <img src="/images/admin-ui/dashboard.png">
</div>

Further Admin UI functionality can be enabled by adding the necessary dependencies and Admin APIs necessary to implement the Admin UI Features.

### Disabling the Admin UI

If desired, the **/admin-ui** features can be selectively or entirely disabled using the `AdminUi` Enum flags:

```csharp
ConfigurePlugin<UiFeature>(feature => feature.AdminUi = AdminUi.None);
```

## Admin Users

User management functionality for creating & modifying users, assigning Roles & Permissions, locking users or updating their passwords can be enabled by registering `AdminUsersFeature` plugin:

```csharp
Plugins.Add(new AdminUsersFeature());
```

Which enables a familiar UI for searching & managing users:

<div class="block p-4 rounded shadow">
    <a href="/admin-ui-users"><img src="/images/admin-ui/users.png"></a>
</div>

::: info
See [Admin UI User Docs](/admin-ui-users) to learn about Admin User features and available customization options
:::

## Request Logging & Profiling

Enables invaluable observability into your App, from being able to quickly inspect and browse incoming requests, to tracing their behavior:

:::sh
x mix profiling
:::

Which will add the [Modular Startup](/modular-startup) configuration to your Host project that registers both Request Logging & Profiling features when running your App in [DebugMode](/debugging#debugmode) (i.e. Development):

```csharp
[assembly: HostingStartup(typeof(MyApp.ConfigureProfiling))]

namespace MyApp;

public class ConfigureProfiling : IHostingStartup
{
    public void Configure(IWebHostBuilder builder)
    {
        builder.ConfigureAppHost(host => {
            host.Plugins.AddIfDebug(new RequestLogsFeature {
                EnableResponseTracking = true,
            });
            
            host.Plugins.AddIfDebug(new ProfilingFeature {
                IncludeStackTrace = true,
            });
        });
    }
}
```

Which will enable the Request Logging & Profiling UIs:

<div class="block p-4 rounded shadow">
    <a href="/admin-ui-profiling"><img src="/images/admin-ui/admin-ui-logging.png"></a>
</div>

::: info
See [Admin Logging & Profiling UI docs](/admin-ui-profiling) to learn about Admin Profiling feature and available customization options.
:::

## Validation

The Admin Validation feature enables adding dynamically sourced validation rules that can be applied & modified at runtime.

The most popular `IValidationSource` for maintaining dynamic validation rules is `OrmLiteValidationSource` for maintaining them
in the App's registered database's `ValidationRule` RDBMS Table:

```csharp
[assembly: HostingStartup(typeof(MyApp.ConfigureValidation))]

namespace MyApp;

public class ConfigureValidation : IHostingStartup
{
    // Add support for dynamically generated db rules
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices(services => services.AddSingleton<IValidationSource>(c =>
            new OrmLiteValidationSource(c.Resolve<IDbConnectionFactory>(), HostContext.LocalCache)))
        .ConfigureAppHost(appHost => {
            // Create `ValidationRule` table if it doesn't exist in AppHost.Configure() or Modular Startup
            appHost.Resolve<IValidationSource>().InitSchema();
        });
}
```

Which can be quickly added to your project with the [x mix script](/mix-tool) below:

:::sh
x mix validation-source
:::

Which the built-in [Validation Feature](/validation.html#validation-feature) detects to register the `GetValidationRules` and `ModifyValidationRules` APIs used by the Admin Validation Feature:

<div class="block p-4 rounded shadow">
    <a href="/admin-ui-validation"><img src="/images/admin-ui/validation.png"></a>
</div>

::: info
See [Admin UI Validation Docs](/admin-ui-validation) to learn about dynamic DB Validation Rules
:::

## Recommend Admin UI Features

The Admin UI was designed with room to grow. You can let us know what features you would find most valuable on our [GitHub Discussions](https://github.com/ServiceStack/Discuss/discussions/2).
