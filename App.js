import { Image, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dimensions } from 'react-native';
import Accueil from './components/Accueil';
import Programmation from './components/Programmation';
import Carte from './components/Carte';
import Billeterie from './components/Billeterie';
import { useEffect, useState } from 'react';
import axios from 'axios';

const screenWidth = Dimensions.get('window').width;
const Drawer = createDrawerNavigator();

export default function App() {
  const [posts, setPosts] = useState([]);
  const [artistes, setArtistes] = useState([])
  const [localisations, setLocalisations] = useState([])

  useEffect(() => {
    let postsURL = "http://cchost.freeboxos.fr/LiveEvents/wp-json/wp/v2/posts?_embed&per_page=100"
    axios.get(postsURL).then((res) => {
      setPosts(JSON.parse(res.request._response))
    }).catch((error) => {
      console.log('ceci est une erreur ' + error)
    });
  }, [])

  useEffect(() => {
    const filteredPosts = posts.filter(post => {
      const terms = post._embedded['wp:term'][0];
      if (terms && terms.length > 0) {
        return terms.some(term => term.slug === 'artiste');
      }
      return false;
    });
    setArtistes(filteredPosts);
  }, [posts]);

  useEffect(() => {
    const filteredPosts = posts.filter(post => {
      const terms = post._embedded['wp:term'][0];
      if (terms && terms.length > 0) {
        return terms.some(term => term.slug === 'localisations');
      }
      return false;
    });
    setLocalisations(filteredPosts);
    console.log(localisations)
  }, [posts]);


  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Programmation"
        screenOptions={{
          headerTitle: () => (
            <View style={styles.header}>
              <View style={styles.headerImageLogo}>
                <Image source={require('./icones/concert.png')} style={styles.headerImageLogoAdjust} />
              </View>
              <View style={styles.headerImageLeft}>
                <Image source={require('./icones/notification.png')} style={styles.headerImageLeftNotif} />
                <Image source={require('./icones/france.png')} style={styles.headerImageLeftDrapeau} />
              </View>
            </View>
          ),
          headerStyle: {
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          },
        }}
      >
        <Drawer.Screen name="Accueil" component={Accueil} />
        <Drawer.Screen name="Programmation">
          {(props) => <Programmation {...props} posts={artistes} />}
        </Drawer.Screen>
        <Drawer.Screen name="Carte" component={Carte} />
        <Drawer.Screen name="Billeterie" component={Billeterie} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerImageLogo: {
    flexDirection: 'row',
    marginEnd: 'auto',
    marginStart: 'auto',
    paddingLeft: screenWidth * 0.055
  },
  headerImageLogoAdjust: {
    width: screenWidth * 0.1,
    height: screenWidth * 0.1,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  headerImageLeft: {
    flexDirection: 'row'
  },
  headerImageLeftNotif: {
    width: screenWidth * 0.08,
    height: screenWidth * 0.08,
    resizeMode: 'contain',
    alignItems: 'center',
    marginRight: 15
  },
  headerImageLeftDrapeau: {
    width: screenWidth * 0.06,
    height: screenWidth * 0.06,
    resizeMode: 'contain',
    alignItems: 'center',
    marginTop: 'auto'
  }
});