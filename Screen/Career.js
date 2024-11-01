import {Box, Text} from 'native-base';
import {ImageBackground} from 'react-native';

const Career = () => {
  return (
    <ImageBackground
    alt='service banner'

      source={require('../Assests/service/service_banner.png')}
      style={{width: '100%', height: '100%'}}>
      <Box py={6} px={4}>
        <Text fontSize={20}>
        People, employees, and career-related services are vital for the success of any charity. In the Human Resources and Personnel department, you'll ensure that the charity cares for its people and their well-being, including training, development, and contractual arrangements. If you enjoy working with people, this is an excellent area for you.
        </Text>
      </Box>
    </ImageBackground>
  );
};

export default Career;
