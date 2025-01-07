import { Box, Image } from 'native-base';

const Splash = ({  }) => {

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
