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



## CODE CHECKING

⚠️ **Important** ⚠️

The project is configure to have code checking and pre commit check.

We using two code checkers

- Eslint
- Prettier

The full list of checking can be read in files: `.eslintrc.js`, `.prettierrc.js`, `prettier.config.js`.

There are things like:

- max number of characters on one line
- width of tabulation
- indentation check
- comma at the end of a line
- imports order
- etc...



To help see the errors in your code, you'll need to install two extensions: `eslint` and `prettier`. You'll then see the error in red in your code.

Important ! You don't need to fix every error manually. Your IDE can do this for you ! You only need to set `Prettier - Code formatter` as your Default Formatter (File > Preferences > Settings > *search for Default Formatter*) in your settings. Then check `Format On Save` in your settings. 

Then most of the error will correct themselves automatically when you save. For the other ones, you can do it manually or try `put you cursor above it (no clicking !) > Quick Fix > Fix all `.



To be sure that no error can be push in the repository, we added `husky`. Which is a tool that will run a scan of your code for every file committed, and check your code with the help of eslint and prettier. If there is an error, it will prevent the commit.



*tl;dr*: if your code is not written in the correct way, you will not be able to push it on the repository



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
