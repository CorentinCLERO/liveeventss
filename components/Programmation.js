import React from 'react';
import { FlatList } from 'react-native';
import { Dimensions } from 'react-native';
import { View, Text, Image, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Programmation = ({ posts }) => {



    return (
        <View>
            <Text>
                Page programmation en travaux
            </Text>
            <View style={styles.topBar}>
                <Image source={require('../icones/rechercher.png')} style={styles.icone} />
                <View style={styles.text}><Text>SAMEDI</Text><Text>10 Juin</Text></View>
                <View style={styles.text}><Text>DIMANCHE</Text><Text>11 Juin</Text></View>
                <Image source={require('../icones/filtre.png')} style={styles.icone} />
            </View>
            <FlatList
                data={posts}
                renderItem={({ item }) => <Text>{item.id} {item.title.rendered} {item._embedded['wp:term'][0][0].slug}</Text>}
                keyExtractor={item => item.id}
                style={styles.list}
            />
        </View>
    );
};

export default Programmation;

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#C0C0C0',
    },
    icone: {
        height: screenWidth * 0.1,
        width: screenWidth * 0.1,
        marginHorizontal: 5,
    },
    text: {
        alignItems: 'center',
    },
    list: {
        marginBottom: 60,
    },
})