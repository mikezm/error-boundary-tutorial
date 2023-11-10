# Exploring Error Boundaries

This TypeScript React application aims to simplify the understanding of error boundaries, emphasizing their use in creating a more resilient application. 

Error boundaries can wrap sections of your component tree, intercepting errors thrown by child components. This enables 
us to manage errors gracefully. If your goal is solely to log errors to a service, a single boundary encompassing the 
entire app may be adequate, as shown below:

```jsx
<ErrorBoundary>
    <EntireApp />
</ErrorBoundary>
```

But we can do better than error logging alone. We can improve fault tolerance and present a better UX to our users 
using the [ErrorBoundary](src/ErrorBoundary.tsx) component and a fallback prop, as shown below:

```jsx
<ErrorBoundary fallback={<p>Oops. It's broken.</p>}>
    <Checkout />
</ErrorBoundary>
```

When incorporating error boundaries, it's crucial to tailor our implementation to our specific use case. Placing a 
sole error boundary around the entire application doesn't enhance fault tolerance; if one section encounters an error, 
it can potentially impact the entire site. Excessive use of React error boundaries should be avoided as it can lead to 
reduced code clarity and increased complexity, diminishing the overall maintainability of the application.

In our scenario we have a product for sale and a section for optional add-on cart items. It's essential to ensure that 
even if the add-ons encounter issues, the main product can still be sold. Let's explore how we can leverage error 
boundaries to achieve this objective.

- [The docs](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary).
- Thanks to Brandon Dail for the post on [fault-tolerance react](https://www.brandondail.com/posts/fault-tolerance-react).

## Getting Started

- Clone the repository.
- `npm install` to install dependencies.
- `npm start` to start the development server at [http://localhost:3000](http://localhost:3000).

## Important Files

- The ErrorBoundary component is [here](src/ErrorBoundary.tsx)
- The Checkout component is [here](src/components/Checkout.tsx)
- The App [here](src/App.tsx)
- The CartItems component is [here](src/components/CartItems.tsx)

## The Error Boundary Component

This component is structured to catch error that occur within child components of the boundary. 
It requires a `fallback` prop that is rendered when an error occurs. 

### Observing the ErrorBoundary in action.

_NOTE: you may need to stop/start the development server to see changes to error handling as the `<ErrorBoundary>`
tags are adjusted._

### Throwing and error

Uncomment the thrown error in the [CartItems](src/components/CartItems.tsx) component on line 47.

## Phase 1 - A boundary around the entire app

As a first pass, go to the [App.tsx](src/App.tsx) and uncomment the `<ErrorBoundary>` component that surrounds the
entire component tree. 

## Phase 2 - A boundary around the checkout component

In [App.tsx](src/App.tsx), comment out the `<ErrorBoundary>` component surrounding the entire tree and uncomment the
`<ErrorBoundary>` that surrounds `<Checkout />` component.

## Phase 3 - A boundary around the CartItems component

Finally, make sure all `<ErrorBoundary>` components are commented out in [App.tsx](src/App.tsx). Then go to the
[Checkout component](src/components/Checkout.tsx) and uncomment the `<ErrorBoundary>` surrounding the 
`<CartItems>` component

