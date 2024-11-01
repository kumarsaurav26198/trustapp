import {Box, Text} from 'native-base';
import {ImageBackground} from 'react-native';

const Woman = () => {
  return (
    <ImageBackground
    alt='service banner'

      source={require('../Assests/service/service_banner.png')}
      style={{width: '100%', height: '100%'}}>
      <Box py={6} px={4}>
        <Text fontSize={20}>
          In an age of modernization, development, and change, women, alongside
          other societal groups, have stepped up to endorse new strategies that
          aim to create a robust, self-sufficient society. India's development
          has achieved the second highest ranking, a feat that would have been
          impossible without the contributions of women. However, as this is a
          period of transformation, the status of women in India is also
          evolving. To accelerate the growth of women, every part of society
          must come together to support and uplift them.
        </Text>
      </Box>
    </ImageBackground>
  );
};

export default Woman;
