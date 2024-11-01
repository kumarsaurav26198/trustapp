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
          Sociological sciences emphasize their importance in enhancing social
          integration, implementation of the principle of subsidiarity, building
          civil society, social dialogue and participatory democracy. Provision
          of services includes medical, social and psychological services as
          well as, integration activities, care and nursing, material and
          financial support, educational and information services and training.
          Health advocacy is a combination of individual and social actions
          designed to gain political commitment, policy support, social
          acceptance and systems support for a particular health goal or
          program. An important task carried out by NGOs is participation in the
          formation of health policy. The increasing role of NGOs in providing
          social services and the participation in political processes, result
          in the need to confirm the validity and credibility of their
          operation.
        </Text>
      </Box>
    </ImageBackground>
  );
};

export default Social;
