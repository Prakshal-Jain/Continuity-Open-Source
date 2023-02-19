# React Native Progress Bar
A beautifully designed and responsive progress bar made with React Native for iOS and Android mobile and Tablet components.

<div style="display: flex; gap: 1rem; flex-direction: column; flex-wrap: wrap; justify-content: center;">
    <div>
        <h3>Dark Theme</h3>
        <div>
            <code>
                colorScheme="dark"
            </code>
        </div>
        <img src="https://i.ibb.co/Sr9T8Dh/dark.png" style="width: 10rem; height: auto;" />
    </div>
    <div>
        <h3>Light Theme</h3>
        <div>
            <code>
                colorScheme="light"
            </code>
        </div>
        <img src="https://i.ibb.co/qdN3VZ9/light.png" style="width: 10rem; height: auto;" />
    </div>
</div>

<hr />

## Demo
Try it out here: https://codesandbox.io/s/snowy-wood-yjzovs?file=/src/App.js

<hr />

## Use Cases
You can use this component for multi-step forms, authentication steps, or as a simple loading component.

<hr />

## Getting Started
- Install the component in your react native app:
```
npm install progressbar-react-native --save
```

- Import:
```
import ProgressBar from 'progressbar-react-native';
```

- Use:
```
<ProgressBar stepCount={3} currStep={2} colorScheme="dark" />
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
Welcome to the Open Source project created by the Continuity Browser Team. 

Continuity Browser is designed to provide you with a seamless, secure, and productive browsing experience.

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