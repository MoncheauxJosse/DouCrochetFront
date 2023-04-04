<<<<<<< HEAD
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
-   Css centralized/imported in one file
-   READ_ME files in each folders

---

---

## RUN 



1. The project was build with `yarn` version`1.22.19`, so you need to install it:

   ```CMD
   npm i -g yarn@1.22.19
   ```

2. You need to install all the dependencies of the project:

   ```CMD
   yarn
   ```

3. To run the project:

   ```CMD
   yarn run dev
   ```

   The front will then run in [http://localhost:5173](http://localhost:5173).



## IDE

IDE suggested: `VSCode`

To help you in your development environment of you app, here are some extension to install (in bold are the one highly recommended)



- **Auto Import - ES6, TS, JSX, TSX**: help you to automatically import class in your project
- Auto Rename Tag: rename the closing html tag when you rename the opening one
- Color Highlight: highlight color (html color, rgb, etc) with the color itself.
- ES7+ React/Redux/React-Native snippets: snippet to easily generate body of classes react (try ``rafce` in a new file)
- **ESLint**: code checker
- HTML CSS Support: help autocompletion for your css classes.
- IntelliSense for CSS class names in HTML: same as above (work with bootstrap)
- Material Icon Theme: import some icon for your folder and file, so that your folder architecture is easier to read.
- **Prettier - Code formatter**: code formatter
- **Tailwind CSS IntelliSense**: autocompletion of tailwind classes
- **Tailwind Docs**: see the css of each tailwind classes
- **TODO Highlight**: highlight in yellow `TODO:` comments, and in pink `FIXME` comments





---

---



## BACKEND

The BACKEND requests has already been configurated in `/app/api/backend/api.Backend.js`.

The same with the `Authentication` with `JWT`. As long as the BACKEND create a token jwt with, in claims:

-   `username` (string)
-   `auth` (Array of string for the user's roles)

If the token jwt is different, you'll have to modified two things:

- `/app/redux-store/authenticationSlice`: how you set your data in the store when you sign in

- `/app/service/tokenService`: how you validate the token

  

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
=======
# DouCrochetFront
fait avec React
>>>>>>> 611787960effceae484b7200be2b1bdbc60a3dbb
