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

If everything is set up _correctly_, you should see the app running in your _Android Emulator_ shortly provided you have set up your emulator correctly.

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

## Requirements that are covered

- Layout and UI is made keeping figma prototype as an inspiration
- Movies are displayed sorted in descending order of popularity and meta data info is shown on each card
- Movies are shown grouped year wise and by default list starts from 2012 with 20 movies for each year
- Only single direction scroll to load more movies is working i.e. load movies of next year when user scrolls down until the current year
- API integration is done with APIs from TMDB
- Filtering functionality and UI basis selection of one or more genres is in place. (Using OR logic if multiple genres are selected)
- Have used [restyle](https://github.com/shopify/restyle) by shopify to create theme and UI components
- Used TypeScript
- Implemented in React Native
- Smooth scrolling is working _(But if users scrolls very fast and data for next year is not fetched yet so then user can see a loader at bottom)_

## Requirements that are not covered

- Search movie functionality
- Bi-directional scroll

## Other improvements that can be done in future

- Skeleton loaders can be added
- No data component with image/gif
- Better Error component with image/gif
- Further optimising scrolling by prefetching data for next year
- Setup and run the project for IOS enviornment as well
- Addition of unit, integration and E2E tests
- Addition of CI CD pipelines to improve dev exp and productivity

## Challenges faced in bi directional scroll

- Whenever `onStartReached` callback is called and new data is appened at the start of the list that is brought from the API, list re renders to show the data from very start and in this way `onStartReached` keeps hitting resulting in an infinite loop of calling previous year APIs.
- A similar [issue](https://github.com/facebook/react-native/issues/25239) is open in React native repository as well from quite some time now
- Though I tried some tweaks to make it work but to no avail. Spent some time here but didn't dive deep much due to time constraints and limited bandwidth available.

## Why chose SectionList from React Native

- I know better solutions exist then React Native's FlatList & SectionList. One of the popular and performant library is [FlashList](https://github.com/shopify/flash-list), it also offers SectionList and my initial plan was to use this only.
References to support my take:
[Shopify blog](https://shopify.engineering/instant-performance-upgrade-flatlist-flashlist), [Tweet](https://twitter.com/almouro/status/1542848782693449728?lang=en), [Tweet](https://twitter.com/almouro/status/1704880795972690147?lang=en)
- But didn't go ahead with this as it doesn’t support bi-directional scroll _(It is built on top of [recyclerlistview](https://github.com/Flipkart/recyclerlistview) and that uses quite old version of react native under the hood and this functionality of `onStartReached` came in Virtualised list of React native in `0.72` version recently)_ and I didn't have bandwidth to build custom solution though it didn't work with default React Native implementation as well 🙈
