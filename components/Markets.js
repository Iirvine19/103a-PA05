import React, { useState, useEffect } from "react";
import { Button, Text, FlatList,TextInput, View} from 'react-native';

const Markets = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getRepos = async () => {
        try {
         const response = await fetch('https://nova.bitcambio.com.br/api/v3/public/getmarkets');
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
                    <Text style={{textAlign: 'center'}}>Full name: {item.MarketAssetLong}, Abriviated: {item.MarketAsset}, Minimum trade size: {item.MinTradeSize}{'\n'}{'\n'}{'\n'}</Text>
                )}
            />
        </View>
    );
}

export default Markets;