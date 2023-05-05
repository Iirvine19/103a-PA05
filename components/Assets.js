import React, { useState, useEffect } from "react";
import { Button, Text, FlatList,TextInput, View} from 'react-native';

const Assets = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getRepos = async () => {
        try {
         const response = await fetch('https://nova.bitcambio.com.br/api/v3/public/getassets');
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
                    <Text style={{textAlign: 'center'}}>Full name: {item.AssetLong}, Abriviated: {item.Asset}, Prefix: {item.FormatPrefix},Withdrawl tax fee: {item.WithdrawTxFee}{'\n'}{'\n'}{'\n'}</Text>
                )}
            />
        </View>
    );
}

export default Assets;