import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useValue} from './ValueContext';

import Lol from './addSpend'
import Bio from './Bio'
import Assets from './Assets';
import Markets from './Markets';
import MarketSummery from './MarketSummery';


function DetailsScreen() {
  return (
    <View>
      <Text>At spending logs</Text>
    </View>
  );
}

function SpendingLogs() {
  const {currentValue} = useValue();
  return (
    <View>
      <Text>Spend is: {currentValue.spent}  </Text>
      <Text> sepnded on: {currentValue.spentOn}</Text>
      <Text> description: {currentValue.description}</Text>
    </View>
  );
}

function AddSpend() {
  return (
    <View>
      <Lol />
    </View>
  );
}

function SeeAssets() {
  return (
    <View>
      <h2 style={{textAlign: 'center', fontWeight: 'bold',backgroundColor: 'green',}}>Assets</h2>

      <br />
      <br />

      <Assets />

    </View>
  );
}

function SeeMarkets() {
  return (
    <View>
      <h2 style={{textAlign: 'center', fontWeight: 'bold',backgroundColor: '#add8e6',}}>Markets</h2>

      <br />
      <br />

      <Markets />

    </View>
  );
}

function SeeMarketSummary() {
  return (
    <View>
      <h2 style={{textAlign: 'center', fontWeight: 'bold',backgroundColor: '#f0d0f1',}}>Market History</h2>

        <br />
        <br />

        <MarketSummery />

    </View>
  );
}

// access the profile info from this page ...
function HomeScreen({ navigation }) {
    const {currentValue} = useValue();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Add Spenditure"
        onPress={() => navigation.navigate('Add')}
      />
      <br></br>
      <Button
        title="Go to Logs"
        onPress={() => navigation.navigate('Logs')}
      />
    </View>
  );
}

function CryptoScreen({ navigation }) {
  const {currentValue} = useValue();
return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button
      title="Assets"
      onPress={() => navigation.navigate('Assets')}
    />
    <br></br>
    <Button
      title="Markets"
      onPress={() => navigation.navigate('Markets')}
    />
    <br></br>
    <Button
      title="Markets Summary"
      onPress={() => navigation.navigate('Markets Summary')}
    />
  </View>
);
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Page1" component={HomeScreen} 
         />
      <HomeStack.Screen name="Add" component={AddSpend} 
         />
      <HomeStack.Screen name="Logs" component={SpendingLogs} 
      />
    </HomeStack.Navigator>
  );
}

const CryptoStack = createNativeStackNavigator();

function CryptoStackScreen() {
  return (
    <CryptoStack.Navigator>
      <CryptoStack.Screen name="Crypto Check" component={CryptoScreen} 
         />
      <CryptoStack.Screen name="Assets" component={SeeAssets} 
         />
      <CryptoStack.Screen name="Markets" component={SeeMarkets} 
      />
      <CryptoStack.Screen name="Markets Summary" component={SeeMarketSummary} 
      />
    </CryptoStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} 
      />
      <SettingsStack.Screen name="Details" component={DetailsScreen} 
      />
      
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} 
          options={{
            headerShown: false
        }}/>
      
        <Tab.Screen name="Crypto check" component={CryptoStackScreen} 
        options={{
            headerShown: false
        }}/>
        <Tab.Screen name="Bio" component={Bio} 
        options={{
            headerShown: false
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}