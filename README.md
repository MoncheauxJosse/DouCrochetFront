# Template React Project

This project is a template of React Project.

It has:

- Vite build tool
- eslint / Prettier config
- Tailwind
- an Architecture
- Routing
- Login
  - View / Component
  - Token JWT
  - Token store in Local storage
- Redux (to store the connection)
- Check Token is valid
- Some functional components
- Connected to an Api back End (with URL in environment variable) and automatically handle the Token
- Scss centralized/imported in one file
- READ_ME files in each folders


---
---

## Known Bugs

### JIT


~~*le mode [JIT](https://tailwindcss.com/docs/just-in-time-mode) est activé dans tailwind.config.
Celui-ci est toujours en preview, donc peut bugguer un peu. Un des bugs étant qu'il ne prend pas bien en compte l'utilisation de certains className de tailwindd quand on les utilise.
Ex: bg-red-500, et pourtant le background reste blanc.
Si ça arrive, il faut aller dans le fichier tailwind.config, fait une modification (par exemple un retour à la ligne) et enregistrer pour relancer tailwind comme il faut.
Si le pb persiste et devient chiant, il faut simplement supprimer la ligne dans ce même fichier pour ne plus avoir JIT.*~~

**Résolu grace à Vite**


---
---

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

