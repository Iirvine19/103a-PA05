import React, { useState, useEffect } from "react";
import { Button, Text, FlatList,TextInput, View} from 'react-native';

const MarketSummery = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getRepos = async () => {
        try {
         const response = await fetch('https://nova.bitcambio.com.br/api/v3/public/getmarketsummaries');
         const json = await response.json();
         //change here to get diffrent keys in the list
         setData(json.result);
       } catch (error) {
         console.error(error);
       } finally {
         setLoading(false);
       }
     }

    useEffect(() => {getRepos()}, []);

    return (
        <View>
           <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <Text style={{textAlign: 'center'}}>Full name: {item.MarketAssetName}, Abriviated: {item.MarketAsset}, Bid cost: {item.Bid}, Time stamp: {item.TimeStamp}, Divident decimal: {item.DividendDecimal}{'\n'}{'\n'}{'\n'}</Text>
                )}
            />
        </View>
    );
}

export default MarketSummery;