import React,{useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import {useValue} from './ValueContext';


const addSpend = () => {

  const {currentValue,setCurrentValue} = useValue();
  const [spent,setSpent] = useState("anon");
  const [spentOn,setSpentOn] = useState("anon@anon.com");
  const [description,setDescription] = useState("...");

  return (
    <SafeAreaView>
      <h2>Amount spent</h2>
    
      <TextInput
        style={styles.input}
        onChangeText={newText => setSpent(newText)}
      />

      <h2>Money spent on:</h2>

      <TextInput
        style={styles.input}
        onChangeText={newText => setSpentOn(newText)}
      />

      <h2>Description:</h2>

      <TextInput
        style={styles.input}
        onChangeText={newText => setDescription(newText)}
      />
      
      <br />
      <br />
      <br />
      <br />

      <Button 
          title="save profile info"
          onPress = {() => {
          setCurrentValue({spent, spentOn ,description});
          }}
          />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default addSpend;