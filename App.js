import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen'
import * as Font from 'expo-font';
//This is an utility which is allowed to use font
import {AppLoading} from 'expo';
//This is an component that will basically prolong the default loading screen while the application
//is launching so that a certain task of our choice is done like fetching the fonts is done


const fetchFonts = () =>{
  return Font.loadAsync({
    //The open-sans name will be chosen by ypu
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    /*In NodeJS, require() is a built-in function to include external modules that exist in separate files. 
    require() statement basically reads a JavaScript file, executes it, and then proceeds to return the export object.*/
  })
}
/*loadAsync Asynchronously enumerates the query such that for server queries such as those of DbSet<TEntity>, 
ObjectSet<TEntity> , ObjectQuery<T>, and others the results of the query will be loaded into 
the associated DbContext , ObjectContext or other cache on the client.*/

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded) {
    return <AppLoading 
            startAsync= {fetchFonts} 
            onFinish={setDataLoaded(true)}
            onError = {(err)=>console.log(err)}
    />;
    //This means if the data required is not loaded then AppLoading component will be returned
    //The AppLoading component takes a startAsync prop where we point at the operation we want to start when this is first rendered
    //And onFinish it a function will be passed
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
    
  }

  const startGameHandler = (selectedNumber) =>{
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  }

  const gameOverHandler = (numOfRounds) =>{
    setGuessRounds(numOfRounds);
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if(userNumber && guessRounds<=0){
    content = <GameScreen 
                          userChoice ={userNumber} 
                          onGameOver = {gameOverHandler}
                          />;
  }else if(guessRounds>0){
    content = <GameOverScreen
                roundsNumber = {guessRounds}
                userNumber = {userNumber}
                onRestart = {configureNewGameHandler}
                />;
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
    marginHorizontal: 80,
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 20,
    backgroundColor : "black"
  },
  
});
