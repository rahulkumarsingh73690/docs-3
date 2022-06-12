---
title: Admin UI Features
---

The [Admin UI](/admin-ui) provides **Admin** Users a UX Friendly UI to access ServiceStack features and summary insights into the APIs hosted by the ServiceStack App, accessible from:

<h3 class="text-center font-medium text-3xl mb-3">/admin-ui</h3>

Which after authenticating will take you to the Admin UI dashboard showing the authenticated Admin User details and general API stats:

<div class="block p-4 rounded shadow">
    <img src="/images/admin-ui/dashboard.png">
</div>

Further Admin UI functionality can be enabled by adding the necessary dependencies and Admin APIs necessary to implement the Admin UI Features.

### Disabling the Admin UI

If desired the **/admin-ui** feature can be selectively or entirely disabled with:

```csharp
ConfigurePlugin<UiFeature>(feature => feature.AdminUi = AdminUi.None);
```

## Validation

The Admin Validation feature enables adding dynamically sourced validation rules that can be applied & modified at runtime.

The most popular `IValidationSource` for maintaining dynamic validation rules is `OrmLiteValidationSource` for maintaining them
in the App's registered database's `ValidationRule` RDBMS Table:

```csharp
services.AddSingleton<IValidationSource>(c => 
    new OrmLiteValidationSource(c.Resolve<IDbConnectionFactory>()));

// Create `ValidationRule` table if it doesn't exist in AppHost.Configure() or Modular Startup
appHost.Resolve<IValidationSource>().InitSchema();
```

Which the built-in [Validation Feature](/validation.html#validation-feature) detects to register the `GetValidationRules` and `ModifyValidationRules` APIs used by the Admin Validation Feature:

<div class="block p-4 rounded shadow">
    <img src="/images/admin-ui/validation.png">
</div>

## Admin Users

User management functionality for creating & modifying users, adding roles & permissions, locking users or updating their passwords can be enabled by registering `AdminUsersFeature` plugin:

```csharp
Plugins.Add(new AdminUsersFeature());
```

Which enables a familiar UI for searching & managing users:

<div class="block p-4 rounded shadow">
    <img src="/images/admin-ui/users.png">
</div>

::: info
An `IAuthRepository` is required to be a registered dependency to use the `AdminUsersFeature` plugin.
:::

## Recommend Admin UI Features

The Admin UI was designed with room to grow. You can let us know what features you would find most valuable on our [GitHub Discussions](https://github.com/ServiceStack/Discuss/discussions/2).
