# Error Boundaries in React

This is simple typescript react app designed to facilitate learning about error boundaries. Specifically, 
using error boundaries to build a more fault-tolerant app. 

## Available Scripts

### Installing the project

`npm install` will download the necessary dependencies.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Important Files

- The ErrorBoundary component is [here](src/ErrorBoundary.tsx)
- The Checkout component is [here](src/components/Checkout.tsx)
- The App is loaded [here](src/App.tsx)
- The OrderBump component is [here](src/components/Bumps.tsx)

## The Error Boundary Component

This component is structured to catch error that occur within child components of the boundary. 
It requires a `fallback` prop that is rendered when an error occurs. 

## Observing the ErrorBoundary in action.

_NOTE: you may need to stop/start the development server to see changes to error handling as the `<ErrorBoundary>`
tags are adjusted._

### Throwing and error

Uncomment the thrown error in the [OrderBump component](src/components/Bumps.tsx) on line 38.

## 1. A boundary around the entire app

As a first pass, go to the [App.tsx](src/App.tsx) and uncomment the `<ErrorBoundary>` component that surrounds the
entire component tree. 

## 2. A boundary around the checkout component

In [App.tsx](src/App.tsx), comment out the `<ErrorBoundary>` component surrounding the entire tree and uncomment the
`<ErrorBoundary>` that surrounds `<Checkout />` component.

## 3. A boundary around the OrderBump component

Finally, make sure all `<ErrorBoundary>` components are commented out in [App.tsx](src/App.tsx). Then go to the
[Checkout component](src/components/Checkout.tsx) and uncomment the `<ErrorBoundary>` surrounding the 
`<Bumps>` component

