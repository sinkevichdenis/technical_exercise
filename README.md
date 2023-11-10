## This is a technical task for Scroders.
# Unresolved Issues (for reviewers)
Unfortunately, remains some unresolved or out-of-scope issues in the project.
1) The GitHub API has restriction about a rate limit for un-authenticated apps (authentication is out-of-scope by PO approving), therefore the fetching data can be incorrect and return the error. In this case the app will be operate a mock data.
2) The GitHub API returns not clearly data. The fetch parameter 'Since' allows us to get all data, which was updated(!!) after the above date. It means some merged PR can be updated after closing data, that we see in the result. The resolving this issue has been remained out-of-scope to according unstable data connection. Example:
![Simulator Screenshot - iPhone Xs - 2023-11-09 at 22 46 58](https://github.com/sinkevichdenis/technical_exercise/assets/43539138/0017b685-c185-41be-8f67-572934389d94)


# Getting Started

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
yarn android
```

### For iOS

```bash
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your Index

Now that you have successfully run the app.
