import {Box, Text} from 'native-base';
import {ImageBackground} from 'react-native';

const Livelihood = () => {
  return (
    <ImageBackground
    alt='service banner'

      source={require('../Assests/service/service_banner.png')}
      style={{width: '100%', height: '100%'}}>
      <Box py={6} px={4}>
        <Text fontSize={20}>
          Livelihood strategies and programs are crafted based on people's
          strengths, aiming to provide a quality life and achieve sustainable
          living standards. These programs focus on empowering individuals,
          making them resilient to challenges, especially during emergencies
          from a social perspective. People learn to manage external impacts
          independently, without relying on outside support. The goal is to
          adopt sustainable livelihood frameworks and positively influence lives
          in a better way.
        </Text>
      </Box>
    </ImageBackground>
  );
};

export default Livelihood;
