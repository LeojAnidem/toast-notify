# @leoj_anidem/toast-notify

> Toast notifications component for React

## Description

The `@leoj_anidem/toast-notify` package is a toast notifications component developed in React. It provides an easy way to display notification messages in a web application's user interface. The component offers flexibility in customizing the content, notification type, and position on the screen.

Key features:
- Display customizable toast notifications in your web application.
- Configure the content of the toasts, such as text and notification type (success, error, warning, info, etc.).
- Options to adjust the position of the toasts on the screen.
- Support for automatic closing of toasts after a configurable time period.
- Provides a context and provider for easier handling and management of toasts throughout the application.

## Installation

You can install the `@leoj_anidem/toast-notify` package using npm. Run the following command in your project:

```bash
npm install @leoj_anidem/toast-notify
```

## Usage
To use the toast component in your application, import the necessary components from the package and set up the toast context and provider. You can then use the toast component anywhere in your application where you want to display notifications. Make sure to refer to the provided documentation for available configuration and customization options.

Here's a basic example of how to use the toast component:

```jsx
import React from 'react';
import { ToastProvider, ListOfToast } from '@leoj_anidem/toast-notify';

const App = () => {
  return (
    <ToastProvider>
      <div>
        {/* Your application content */}
        <h1>My Application</h1>
        {/* ... */}
        <ListOfToast toastArr={/* your toast */} position={{x: 'CENTER', y: 'CENTER'}} />
      </div>
    </ToastProvider>
  );
};

export default App;

```
For more details on configuring and using the toast component, refer to the full documentation at [link to documentation] (if available).

## Contribution
If you'd like to contribute to this project, you're more than welcome. You can open issues to report bugs, suggest new features, or request improvements. Additionally, you can submit pull requests to propose changes to the code.

## License
This project is licensed under MIT LICENSE. You can find more details in the LICENSE file.
