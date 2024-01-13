# Chat App Shell

Welcome to the Chat App Shell! This repository provides the base for developing a feature-rich chat application for both Android and iOS platforms.

## Installation

### Prerequisites

Make sure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm (Node Package Manager)](https://www.npmjs.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)

### Clone Repository

```bash
git clone git@github.com:earlbalai/chat-app-shell.git
cd chat-app-shell
```

### Install Dependencies

```bash
npm install
```

## Run on Android

### Prerequisites

- [Android Studio](https://developer.android.com/studio)

### Start the Android Emulator

Launch the Android emulator using Android Studio.

### Run the App

```bash
npx react-native run-android
```

This command will build and run the app on the connected Android emulator.

## Run on iOS

### Prerequisites

- [Xcode](https://developer.apple.com/xcode/)

### Install Pods

```bash
cd ios
pod install
cd ..
```

### Run the App

```bash
npx react-native run-ios
```

This command will build and run the app on the connected iOS simulator.

## License

This project is licensed under the [MIT License](LICENSE).
