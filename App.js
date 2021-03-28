import React from "react";
import { StyleSheet } from "react-native";
import Main from './components/Main';


function App() {
  return (
    <Main />
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

