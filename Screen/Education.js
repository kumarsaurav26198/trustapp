import {Box, Text} from 'native-base';
import {ImageBackground} from 'react-native';

const Education = () => {
  return (
    <ImageBackground
    alt='service banner'

      source={require('../Assests/service/service_banner.png')}
      style={{width: '100%', height: '100%'}}>
      <Box py={6} px={4}>
        <Text fontSize={20}>
          The Helping Hand Foundation runs a nationwide initiative focused on
          offering fundamental education to children from disadvantaged
          backgrounds. Education acts as a tool and a goal for improving life
          quality. It equips people with the skills needed for earning a living
          and broadens their understanding of various topics—ranging from
          healthcare to proper social conduct and recognizing their rights.
          Consequently, this process aids individuals in becoming more
          responsible and informed citizens.
        </Text>
      </Box>
    </ImageBackground>
  );
};

export default Education;
