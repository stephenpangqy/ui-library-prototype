# ui-library-prototype
A prototype to see if custom UX components can be created and used as a library


## How to Create

1. Run the following command to initialize
```
npm init -y
npm install react react-dom antd # install necessary dependencies (peer dependencies)
npm install -D typescript tsup @types/react @types/react-dom # dev deps
```

2. Build the library with the following command:
```
npm run build
```

3. Run the following command to pack into a tarball
```
npm pack
```

4. In your App, run the following command to install the TGZ. Adjust path based on where your library is
```
npm install ../../ui-library-prototype/stephen-pang-ui-0.1.0.tgz
```

5. To create a storybook, run the following command:
```
npx storybook@latest init
```
Select Vite if prompted. This will create a directory, ```.storybook/```

6. If storybook does not appear to exist, run ```npm install -D storybook```

7. To start the storybook, run ```npm run storybook```

## Things to Note
1. If you are getting a ```useContext null``` error, this means that the context of the library is not aligned with the context of your app.

Fix: Ensure that your App's ```react``` and ```react-dom``` is the same version as the peer dependency of this library.

2. If you are getting a ```Cannot find module @rollup/rollup-win32-x64-msvc. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.``` when trying to run ```npm run build```

Fix: Do as it says, delete your node_modules and package-lock.json and run the build command again.


UI considerations to note:
1. Since the UI-library is in TypeScript, it can work for both JavaScript and Typescript React projects.
2. For now, it seems that this will only work with frontend projects using React
3. The ```react``` version of your App must peer dependencies and devDependencies for ```react```. May not have to be a specific version, but must be a specific major version (e.g. React v18)