import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const startGameHandler = (selectedNumber) =>{
    setUserNumber(selectedNumber);
  }
  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if(userNumber){
    content = <GameScreen userChoice ={userNumber} />;
  }

  return (
    
      <View style={styles.screen}>
        <Header title="Guess A Number"/>
        {content}
        <StatusBar style="auto" />
      </View>
      
    
    
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '90%',
    flex: 1,
    marginHorizontal:40,
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 20,
    backgroundColor : "black"
  },
  
});
