# Shared Web Components

This package provides a collection of reusable web components that can be integrated into various web applications, including React and Angular projects.

## Why Use `shared-web-components`?

Using `shared-web-components` allows for a consistent look and feel across different parts of your application or across different applications, while also promoting code reuse and reducing development time.

## Linking the Package for Local Testing

To test `shared-web-components` locally in your application, you can use the `npm link` command. This is useful for developing and testing the package changes in real-time.

1. Navigate to the `shared-web-components` package directory and run:
    ```bash
    npm link
    ```
2. Navigate to your application directory and link the package:
    ```bash
    npm link shared-web-components
    ```

This creates a symbolic link in your application's node_modules directory to the local shared-web-components package, allowing you to test your changes immediately.

## Deploying the Package

To make shared-web-components available for installation via npm, follow these steps:

1. Ensure you are logged in to your npm account: `npm login`
2. Update the package version in package.json according to semantic versioning.
3. Publish the package: `npm publish`

To install shared-web-components into your application, run: `npm install shared-web-components`

This command adds the package to your project's dependencies and allows you to use the web components in your application.

## Using in React

After installing, import shared-web-components at the top of your React component file:

```
import 'shared-web-components';

function MyComponent() {
  return (
    <any-web-component text="Hola!"></any-web-component>
  );
}

export default MyComponent;
```

## Using in Angular

First in `main.ts`:

```
import 'shared-web-components';
```

Then for each component you want to use web components make sure to include `CUSTOM_ELEMENTS_SCHEMA`:

```
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app-my-component.component.html',
  styleUrl: './app-my-component.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'my-title';
}

```

Then, use the web components directly in your Angular component's template:

```
<any-web-component text="Welcome to Angular!"></any-web-component>
```

Ensure you have imported shared-web-components in your `angular.json` or in the global styles/scripts configuration.
