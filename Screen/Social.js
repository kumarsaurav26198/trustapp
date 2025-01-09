import { t } from 'i18next';
import {Box, Text} from 'native-base';
import {ImageBackground} from 'react-native';

const Social = () => {
  return (
    <ImageBackground
      alt="service banner"
      source={require('../Assests/service/service_banner.png')}
      style={{width: '100%', height: '100%'}}>
      <Box py={6} px={4}>
        <Text fontSize={20}>
        {t('services_content5')}
        </Text>
      </Box>
    </ImageBackground>
  );
};

export default Social;
