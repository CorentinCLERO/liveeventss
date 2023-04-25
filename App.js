import { Image, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dimensions } from 'react-native';
import Accueil from './components/Accueil';
import Programmation from './components/Programmation';
import Carte from './components/Carte';
import Billeterie from './components/Billeterie';

const screenWidth = Dimensions.get('window').width;
const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Acceuil"
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
        }}
      >
        <Drawer.Screen name="Accueil" component={Accueil} />
        <Drawer.Screen name="Programmation" component={Programmation} />
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
    width: 40,
    height: 40,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  headerImageLeft: {
    flexDirection: 'row'
  },
  headerImageLeftNotif: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    alignItems: 'center',
    marginRight: 15
  },
  headerImageLeftDrapeau: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    alignItems: 'center',
    marginTop: 'auto'
  }
});