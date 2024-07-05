import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View , ImageBackground } from 'react-native';
import { WebView } from 'react-native-webview';
// import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // React.useEffect(() => {
  //   SplashScreen.hide(); // Hide splash screen on initial load
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading &&   <View style={styles.stretch}></View>
      }
      <WebView
        source={{ uri: 'https://www.leaflyweednyc.com/' }}
        // style={styles.webview}
        onLoad={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  loadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  stretch: {
    width: "100%",
    height: "100%",
    resizeMode: 'stretch',
  },
});

export default App;