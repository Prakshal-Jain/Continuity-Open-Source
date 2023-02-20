# React Native Progress Bar
A beautifully designed and responsive inline Alert component made with React Native for iOS and Android mobile and Tablet components.

<hr />

## Demo
Try it out here: 

<hr />

## Why use react-native-alert-component?
Our research study on user experience found that small-screen devices, such as mobile phones, have a confusing layout that becomes even more uncomfortable when alert messages appear on top of an existing page. These alert messages are often not responsive on all screen sizes and types, which can hinder the user experience. For example, when a user enters an invalid email address while trying to log in, they may be repeatedly interrupted by error messages that obstruct the functionality of the app.

To address this issue, we have introduced in-line alert messages that are integrated with the app's layout. These messages can be dismissed by the user and do not interfere with the app's ongoing functionality. The purpose of these messages is to simply remind the user that they entered something incorrectly and provide a way to resolve it, without hindering their ability to use the app.

<hr />

## Getting Started
- Install the component in your react native app:
```
npm install react-native-alert-component --save
```

- Import:
```
import AlertComponent from 'react-native-alert-component';
```

- Use:
```
<AlertComponent />
```


<hr/>

## Properties (Props)
- <b>stepCount</b> (Integer): This property indicates the total number of steps in the progress bar.

- <b>currStep</b> (Integer): This property specifies the current step of the progress bar that will be filled with color.

- <b>colorScheme</b> ('light' | 'dark'): This property sets the color scheme of the progressbar to either light or dark. To get the device's default color scheme, you can use the useColorScheme hook (https://reactnative.dev/docs/usecolorscheme).


<hr />

## Example usage:
```
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import ProgressBar from 'progressbar-react-native';

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: '#000', flex: 1, alignItems: 'center' }}>
      <View style={{ padding: 10 }}>
        <ProgressBar stepCount={3} currStep={2} colorScheme="dark" />
      </View>
      <View style={styles.container}>
        <Text style={{ fontSize: 20, color: '#fff' }}>
          Step 2
        </Text>
      </View>

      <View style={[styles.container, { backgroundColor: '#28282B', padding: 10 }]}>
        <Text style={{ fontSize: 25, color: '#fff' }}>
          progressbar-react-native
        </Text>
      </View>
      <View style={[styles.container, { backgroundColor: '#28282B', padding: 10 }]}>
        <Text style={{ fontSize: 18, color: '#fff' }}>
          Dark Theme
        </Text>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
    alignItems: 'center',
    borderRadius: 10
  },
});
```

## Contributor Details
Our commitment at Continuity Browser is to foster collaboration with the open-source community and provide developers with the tools they need to succeed.

Continuity Browser provides you with a seamless, secure, and productive browsing experience.

You can download the app here:
<b>
https://continuitybrowser.com/#download
</b>

With our app, you can easily <b>sync all your tabs across all your devices in real-time</b>. 

Continuity Browser also prioritizes your privacy and security by providing better privacy reports and prevention measures than mainstream browsers like Google Chrome and Apple Safari.

Furthermore, our app features a <b>built-in ChatGPT</b> in the browser that allows you to get results with the click of a button from Google Search, making your browsing experience even more productive.

You can join our Discord Community at https://discord.gg/TwJ863WJsQ to connect with our open source community, users, developers, and provide feedback to the Continuity Browser Team.

Thank you 🎉
<div>
    <img src="https://continuitybrowser.com/assets/logo-dark.png" style="width: 5rem; height: auto;" />
</div>
Continuity Browser Team ❤️