# Template React Project

This project is a template of React Project.

It has:

-   Vite build tool
-   eslint / Prettier config
-   Tailwind
-   an Architecture
-   Routing
-   Login
    -   View / Component
    -   Token JWT
    -   Token store in Local storage
-   Redux (to store the connection)
-   Check Token is valid
-   Some functional components
-   Connected to an Api back End (with URL in environment variable) and automatically handle the Token
-   Scss centralized/imported in one file
-   READ_ME files in each folders

---

---

## Technos

### - `Yarn`

The project has been build with `yarn` version `1.22.19`. To install it, run the command (on windows):

```CMD
npm i -g yarn@1.22.19
```

---

---

## BACKEND

The BACKEND requests has already been configurated in `/app/api/backend/api.Backend.js`.

The same with the `Authentication` with `JWT`. As long as the BACKEND create a token jwt with, in claims:

-   `username` (string)
-   `auth` (Array of string for the user's roles)

If the token jwt is different, you'll have to modified two things:

-   `/app/shared/redux-store/authenticationSlice`: how you set your data in the store when you sign in
-   `/app/shared/service/tokenService`: how you validate the token

---

---

## Known Bugs

---

---

## Available Scripts

In the project directory, you can run:

### `yarn install`

Install the dependencies of the project

### `yarn run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
