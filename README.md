# Moviefix
A movie info mobile app that displays a list of movies from The Movie Database (TMDb) API. The app shows top movies for each year and users can filter by genre, the app also loads top movies from next years as the user scrolls through the list.

## Installation
Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding to run the application.

Preferences used:
- React Native CLI
- Development OS: `macOS`
- Target OS: `Android`
- Package manager: `yarn`

## To run the project locally

### Step 1: Clone the project

- Open terminal on your system and navigate to directory where you want to clone the project
- Run this command
```bash
git clone https://github.com/Ramanpreet6262/Moviefix.git
```

### Step 2: Install dependencies

- Navigate inside the project directory created
```bash
cd Moviefix
```
- And run this command to install the dependencies
```bash
yarn install
```

### Step 3: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

### Step 4: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ app:

```bash
yarn android
```

_Note: Haven't tested for IOS yet so not sure whether it will work there or not_

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ shortly provided you have set up your emulator/simulator correctly.

And if app doesn't run and metro server is showing options to select from like these: _(ideally this should not happen and it will auto run android but just in case)_

```bash
i - run on iOS
a - run on Android
d - open Dev Menu
r - reload app
```

Press `a` to run on Android

### Congratulations! :tada:

You've successfully run the app on your local machine. :partying_face:
