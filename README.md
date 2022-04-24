# BrawlBack Launcher

Template for a Launcher application for the SSBB mod Brawlback. Uses a React frontend located in the ```src``` directory and an Electron main process located in the ```electron``` directory.

## How to use

First install all the packages. You will initially see a warning of 8 vulnerabilities but these are only within the dev dependencies, mainly react-scripts.

```sh
npm install
# To check there are 0 vulnerabilities in prod dependencies
npm audit --prod
```

### React

For seeing/editing the frontend without needing to access the electron main process you can use the normal ```npm run start``` command to use react-scrips start and have auto-refresh.

### Electron

For using the electron main process we have to compile the typescript into javascript and then run it, so load times are lengthier. The command ```npm run electron:start``` will compiles the files into the ```dist```  directory and run both the main (electron) and renderer (react) processes.

Electron also requires a config file with these properties. Create `config.json` file at the root of the project

```json
{
    "PATH_TO_DOLPHIN": <string | path to executable>,
    "PATH_TO_ISO": <string | path to .elf launcher>,
    "AUTO_START_GAME": <bool | controls whether to open dolphin on playbutton>
}
```

## Packages

Apart from the framework packages of  Typescript, React and Electron, this project also uses React-Router-Dom for routing and Material-UI for styling and components.

- Routes can be found in ```src/App.tsx```
- Theming for Material-UI can be found in ```src/theme.ts```.
