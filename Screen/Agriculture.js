import {Box, Text} from 'native-base';
import {ImageBackground} from 'react-native';

const Agriculture = () => {
  return (
    <ImageBackground
    alt='service banner'
      source={require('../Assests/service/service_banner.png')}
      style={{width: '100%', height: '100%'}}>
      <Box py={6} px={4}>
        <Text fontSize={20}>
        Understanding the impact of NGOs on agricultural development is crucial, especially considering that violent conflicts, whether civil or military, have severely disrupted agriculture in many parts of Africa and other regions globally. These conflicts have led to inadequate agricultural research capacity due to market inefficiencies and the breakdown of extension services, limiting public access to agricultural resources and reducing the use of farm inputs, which ultimately diminishes agricultural productivity.
        </Text>
      </Box>
    </ImageBackground>
  );
};

export default Agriculture;
