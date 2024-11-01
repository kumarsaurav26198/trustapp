import {Box, Image} from 'native-base';
import {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigation]);
  return (
    <Box
      justifyContent={'center'}
      alignItems={'center'}
      background={"#FFFFFF"}
      height={'100%'}>
      <Image source={require('../Assests/splash.png')} 
    alt='splash'
    />
    </Box>
  );
};

export default Splash;
