import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import React from 'react';

const Developer = () => {
    return (
      <div >
          <View style={styles.container}>
              Hello my name is Daniel im a computer science and applied math major and Brandeis University. My favorite car is Lada here is a picture.
          </View>
          <View>
          <Image
             source={{uri: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Old_and_broken_LADA_2105.jpg"}}
             style={{width: 400, height: 400, marginLeft: 510, marginTop: 50, borderRadius: 400/ 2}}
            />
          </View>
          <View style={styles.container}>
              <br />
              The project that I want to do for this class is a financial planner. The reason that I want to create such an application is becuase 
              I think that looking after the amount of money that people spend is very importnat espacially for University students. The inpiration for such a project
              came from developing IOS apps on Xcode. Here is a link to my IOS apps that I have been doing:
              <br />
              <br />
              <a href="https://github.com/DanMint/IOS-apps">Visit my IOS repo</a>
              <br />
              <br />
          </View>
          <View style={styles.container}>
                Whats your name?
                <br />
                <TextInput style={styles.Input} 
                    defaultValue="Name me!"
                />
                <br />
                <br />
                <br />
          </View>
          <View>
          <Button
                title="Submit your name"
            />
          </View>
      </div>
    );
  }

const styles = StyleSheet.create({
    container: {
        fontSize: 25,
        textAlign: 'center',
        flex: 1,
        marginTop: 50
    },
    Input: {
        height: 50,
        borderColor: '#ADD8E6',
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 25,
    }
});
  
export default Developer;