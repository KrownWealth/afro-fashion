# Afro Fashion

- is an e-commerce application: Africa's original fashion marketplace.
- This app is built on React.js, Bootstrap & custom sass, firebase, Paystack (pending).
- This app runs on npm v18, and is deployed on netlify @https://Afro Fashionng.netlify.app/

## How to Start App

- Make sure you are in the correct working directory - `cd` into the project root folder `Afro-fashion-main/`
- To install the projects required packges and dependencies, run `npm install`
- Once the packages are installed and your package.json file is updated, to start the app, run `npm start`

## Render Structure

- The routing and UX of this app depends on the tree structure and data flow.
- The responsiveness and UI of this app depends on 2 screen sizes-- `lg` (often referred to as _Desktop_ throughout the App) and `sm` (_Mobile_).
- The rendering and component lifecycle of this app also depend on `react` and `react-router-dom.`
- Rewriting "create-react-app" default config, App.js is rendered inside the _index.js_ file like so;

  _import App from './App' ;_

  _ReactDOM.createRoot(document.getElementById('root'))
  .render(
  <React.StrictMode>
  `<BrowserRouter>`
  `<UserProvider>`
  `<CategoriesProvider>`
  `<CartProvider>`
  `<App />`
  `</CartProvider>`
  `</CategoriesProvider>`
  `</UserProvider>`
  `</BrowserRouter>`
  </React.StrictMode>
  );_

- In this application, App.js is nested under CartProvider and uses her context for the UX.
- CartProvider is nested under CategoriesProvider and uses her context for the app data UI.
- CategoriesProvider is nested under UserProvider and uses her context for user-session-log.
- UserProvider is nested under BrowserRouter and uses her memory to navigate the entire app.
- BrowserRouter is rendered by React.StrictMode- StrictMode wraps and sets the component tree.

## Component Structure

The main components of this application can be found under the _src_ directory like so;

- src

  - components

    - > adSection
    - > alertServices
    - > assets
    - > buttons
    - > cartServices

      - > cart-content
      - > cart-dropdown
      - > cart-icon
      - > checkout

    - > collection
    - > directory
    - > products
    - > routes

      - > authentication
      - > category
      - > home
      - > navbar
      - > shop

  - contexts

    - > cart.context
    - > categories.context
    - > users.context

  - utils
    - > config
    - > firebase.utils
    - > writeBatch

- > App
- > App.test
- > index
- > index.scss
- > reportWebVitals
- > setupTests

## assets

The assets used include SVG elements that are integral and unique to the brand or consistency of the application's UI.

## buttons

The buttons hold .jsx and .scss components dynamically used and rendered throughout the application's UI.

## cartServices

The cartServices directory is a parent to cart components and functionality used and rendered throughout the application.

## collection

The collection holds .jsx and .scss components responsible for categorizing data for the application's UI.

## directory

The directory is a single, integral .jsx component responsible for reacting and rendering of the collection components.

## products

The products hold .jsx and .scss components dynamically used and rendered throughout the application's UI.

## routes

The routes directory is a parent to router components and routing functionalities rendered throughout the application.

## cart.context

The cart.context holds the context and providers for cart components and renders throughout the application.

## categories.context

The categories.context holds the context and value provider for data categories and renders throughout the application.

## users.context

The users.context holds the context and providers for user-session-log and renders throughout the application.

## firebase.utils

The firebase.utils hold configurations for firebase, firestore and google providers used as authentication in the application.

# Tech Stack

- React.js
- Node.js
- Bootstrap
- React-Bootstrap
- Firebase/firestore
- Google-Auth
- Materal-UI
- Netlify
- Github
- Jest (_testing_)

# Author: Gideon, I

## Contributors: Adeola, A
