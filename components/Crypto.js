import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import Assets from './Assets';
import Markets from './Markets';
import MarketSummery from './MarketSummery';

export default function App() {
  return (
    <View>

      <h1 style={{textAlign: 'center', fontWeight: 'bold',backgroundColor: 'yellow',}}>Here I will display current crypto currencies</h1>

      <br />
      <br />
      <br />
      <br />

      <h2 style={{textAlign: 'center', fontWeight: 'bold',backgroundColor: 'green',}}>Assets</h2>

      <br />
      <br />

      <Assets />

      <br />
      <br />
      <br />

      <h2 style={{textAlign: 'center', fontWeight: 'bold',backgroundColor: '#add8e6',}}>Markets</h2>

      <br />
      <br />

      <Markets />

      <br />
      <br />
      <br />

      <h2 style={{textAlign: 'center', fontWeight: 'bold',backgroundColor: '#f0d0f1',}}>Market History</h2>

      <br />
      <br />

      <MarketSummery />

    </View>
  );
}