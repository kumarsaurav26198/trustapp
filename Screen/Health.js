import {Box, Text} from 'native-base';
import {ImageBackground} from 'react-native';

const Health = () => {
  return (
    <ImageBackground
    alt='service banner'

      source={require('../Assests/service/service_banner.png')}
      style={{width: '100%', height: '100%'}}>
      <Box py={6} px={4}>
        <Text fontSize={20}>
        Health is a complex interplay of economic, epidemiological, demographic, and institutional factors. This variety in healthcare provision can enhance the government's policy leadership and financial responsibility. Among the private sector contributors, non-governmental organizations (NGOs) are particularly important. Our organization focuses on the role of NGOs in healthcare: their involvement in delivering and financing health services, their strengths and weaknesses, and public policies to improve their effectiveness in the health sector.
        </Text>
      </Box>
    </ImageBackground>
  );
};

export default Health;
