import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking, ScrollView } from 'react-native';

const partenaires = [
    {
        name: 'Crédit Mutuel',
        link: 'https://www.creditmutuel.fr/fr/groupe/accueil.html',
        image: require('../images/credit-mutuel.jpg'),
    },
    {
        name: 'Renault',
        link: 'https://www.renaultgroup.com/',
        image: require('../images/renault.png'),
    },
    {
        name: 'Suez',
        link: 'https://www.suez.com/fr',
        image: require('../images/suez.png'),
    },
    {
        name: 'Ferrero',
        link: 'https://www.ferrero.fr/',
        image: require('../images/ferrero.jpg'),
    },
    {
        name: "Caisse d'Epargne",
        link: 'https://groupebpce.com/le-groupe/profil ',
        image: require('../images/caisse-d-epargne.png'),
    },
    {
        name: "Sanofi",
        link: 'https://www.sanofi.fr/fr/ ',
        image: require('../images/sanofi.png'),
    },
    {
        name: "CIC",
        link: 'https://www.cic.fr/fr/index.html ',
        image: require('../images/cic.jpg'),
    },
    {
        name: 'DDETS',
        link: 'https://travail-emploi.gouv.fr/',
        image: require('../images/ddets.png'),
    },
    {
        name: 'EDF',
        link: 'https://www.edf.fr/groupe-edf',
        image: require('../images/edf.png'),
    },
    {
        name: 'Orange',
        link: 'https://www.orange-business.com/fr/groupe-orange-operateur-multi-services',
        image: require('../images/orange.jpg'),
    },
    {
        name: 'Cora',
        link: 'https://cora-france.fr/',
        image: require('../images/cora.png'),
    },
    {
        name: 'Groupama',
        link: 'https://www.groupama.fr/',
        image: require('../images/groupama.jpg'),
    },
    {
        name: 'Westfield',
        link: 'https://www.urw.com/fr-fr/groupe',
        image: require('../images/westfield.png'),
    },
    {
        name: 'La Poste',
        link: 'https://www.laposte.fr/',
        image: require('../images/la-poste.png'),
    },
    {
        name: 'Gîtes de France',
        link: 'https://www.gites-de-france.com/fr',
        image: require('../images/gites-de-france.png'),
    },
    {
        name: 'Auchan',
        link: 'https://www.auchan.fr/',
        image: require('../images/auchan.png'),
    },
];

const Partenaires = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Ils nous font confiance</Text>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.partenairesContainer}>
                        {partenaires.map((partenaire, index) => (
                            <TouchableOpacity
                                style={styles.imgContainer}
                                key={index}
                                onPress={() => Linking.openURL(partenaire.link)}>
                                <Image source={partenaire.image} style={styles.image} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
    },
    content: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 60,
        marginTop: 40,
    },
    scrollContainer: {
        alignItems: 'center',
    },
    partenairesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    imgContainer: {
        width: '40%',
        aspectRatio: 1,
        marginVertical: 10,
        backgroundColor: 'pink',
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
    },
});

export default Partenaires;
