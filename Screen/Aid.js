import {Box, Text} from 'native-base';
import {ImageBackground} from 'react-native';

const Aid = () => {
  return (
    <ImageBackground
    alt='service banner'
      source={require('../Assests/service/service_banner.png')}
      style={{width: '100%', height: '100%'}}>
      <Box py={6} px={4}>
        <Text fontSize={20}>
        AID TO POOR is a step towards providing legal and social services to the weaker and poorer sections of society. It aims to overcome prevailing conditions by fighting for and providing legal support to uplift these communities. This initiative includes promoting education, imparting knowledge about social grants supported by the government, creating employment opportunities, and offering scholarship facilities. These efforts are aimed at rapidly transforming and eradicating poverty globally.
        </Text>
      </Box>
    </ImageBackground>
  );
};

export default Aid;
