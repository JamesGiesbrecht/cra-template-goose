# Create React App Goose Template

A Create React App template with React Router, Material UI, Eslint, Prettier, and Typescript with a basic layout and routes configured.

## Getting Started

Both of the following npx commands are also available locally with this repo with `npm run create:npm` and `npm run create:local` respectively.

#### Install

```bash
npx create-react-app my-app --use-npm --template goose
cd my-app
npm start
```

`npx` command installs the most recent stable version of CRA from npm.

`--template` parameter points to this template, note that `cra-template-` prefix is omitted.

#### Install Locally

```bash
npx create-react-app my-app --use-npm --template file:./cra-template-goose
cd ../my-app
npm start
```

`file` points to the local copy of this template repo

## Routes

Routes can be added to the project in `constants/Routes.ts`.
If a `nav` property is included the route will be automatically added to the drawer navigation.

## Theming

The project is styled with [Material UI](https://material-ui.com/).
The global theme is located in `styles/theme.ts` and can be tweaked to fit your needs or as per [any of the supported methods in Material UI theming customization.](https://material-ui.com/customization/theming/)

**Note:**
The version of [Material UI included with the project is 5.x](https://next.material-ui.com) which is currently in **alpha** and is not intended for production use. Downgrade to Material UI 4.x for critical deployments.
This also means that when using the 5.x configuration make sure to use the next subdomian of the Material UI website for the most accurate documentation. ([next.material-ui.com](https://next.material-ui.com))

## Linting

This project has been configured with a modified version of AirBNB's Eslint config and Prettier. Rules can be tweaked in `eslintrc.js` to fit your specific style.

## Available Scripts

In the project directory, you can run:

### Custom Scripts

#### `npm run lint`

Scans the entire repo with the current config and generates a report in the console.
Pass the --fix flag to the command to fix all auto-fixable problems.

```bash
npm run lint  -- --fix
```

**Note:** The double dashes are intential and required to pass the flag through.

### Default CRA Scripts

#### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
