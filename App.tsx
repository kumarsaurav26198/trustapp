import {NavigationContainer} from '@react-navigation/native';
import {
  NativeBaseProvider,
  Box,
  HStack,
  IconButton,
  Image,
  Flex,
} from 'native-base';
import { LogBox, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SideNav from './Screen/SideNav';
import Home from './Screen/Home';
import Certificate from './Screen/Certificate';

import Events from './Screen/Events';
import About from './Screen/About';
import Contact from './Screen/Contact';
import Splash from './Screen/Splash';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Gallery from './Screen/Galary';
import Media from './Screen/Media';
import Annual from './Screen/Annual';
import Services from './Screen/Services';
import Education from './Screen/Education';
import Woman from './Screen/Women';
import Livelihood from './Screen/Livelihood';
import Health from './Screen/Health';
import Career from './Screen/Career';
import Aid from './Screen/Aid';
import Agriculture from './Screen/Agriculture';
import Privacy from './Screen/Privacy';
import Social from './Screen/Social';
import FAQ from './Screen/FAQ';
import Fandq from './Screen/FAQ';
import Members from './Screen/Members';
import Provission from './Screen/80g_12a';
import Donation from './Screen/Donation';

const Drawer = createDrawerNavigator();

const CustomHeader = ({navigation}) => (
  <Flex
    style={{width: '100%'}}
    bg={'#F0F0F0'}
    height={'60px'}
    justifyContent={'space-between'}
    flexDirection={'row'}
    alignItems={'center'}
    px={2}>
    <TouchableWithoutFeedback
      onPress={() => navigation.openDrawer()}
      style={{paddingTop: 10}}>
      <Image
        source={require('./Assests/humb.png')}
        alt="Menu Icon"
        size="40px"
      />
    </TouchableWithoutFeedback>

    <Image source={require('./Assests/logo.png')} alt="Menu Icon" size="48px" />
  </Flex>
);

function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.safeArea}>


      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props => <SideNav {...props} />}
          screenOptions={({navigation, route}) => ({
            header: () => {
              if (route.name !== 'Splash') {
                return <CustomHeader navigation={navigation} />;
              }
              return null;
            },
          })}>
          <Drawer.Screen name="Splash" component={Splash} />
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Certificate" component={Certificate} />
          <Drawer.Screen name="Gallery" component={Gallery} />
          <Drawer.Screen name="Events" component={Events} />
          <Drawer.Screen name="About" component={About} />
          <Drawer.Screen name="Contact" component={Contact} />
          <Drawer.Screen name="Media" component={Media} />
          <Drawer.Screen name="Annual Report" component={Annual} />
          <Drawer.Screen name="Service" component={Services} />
          <Drawer.Screen name="education" component={Education} />
          <Drawer.Screen name="woman" component={Woman} />
          <Drawer.Screen name="live" component={Livelihood} />
          <Drawer.Screen name="health" component={Health} />
          <Drawer.Screen name="careers" component={Career} />
          <Drawer.Screen name="aid" component={Aid} />
          <Drawer.Screen name="agriculture" component={Agriculture} />
          <Drawer.Screen name="social" component={Social} />
          <Drawer.Screen name="privacy" component={Privacy} />
          <Drawer.Screen name="faq" component={Fandq} />
          <Drawer.Screen name="Member" component={Members} />
          <Drawer.Screen name="Provision" component={Provission} />
          <Drawer.Screen name="Donation" component={Donation} />
        </Drawer.Navigator>
      </NavigationContainer>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default App;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1d7ac4',
  },
});
