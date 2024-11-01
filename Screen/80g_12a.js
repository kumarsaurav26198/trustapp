import {Box, Heading, Image, ScrollView, Text} from 'native-base';

const Provission = () => {
  return (
    <ScrollView width={'100%'} height={'100%'}>
      <Box py={4}>
        <Heading py={4} color={"#F56A01"} fontSize={24} textAlign={"center"}>80G Certification</Heading>
        <Image
          style={{resizeMode: 'stretch', width: '100%', height: 700}}
          source={require('../Assests/80g12a/80g1.jpg')}
        />
        <Image
          style={{resizeMode: 'stretch', width: '100%', height: 700}}
          source={require('../Assests/80g12a/80g2.jpg')}
        />
      </Box>


      <Box py={4}>
        <Heading py={4} color={"#F56A01"} fontSize={24} textAlign={"center"}>12A Certification</Heading>
        <Image
          style={{resizeMode: 'stretch', width: '100%', height: 700}}
          source={require('../Assests/80g12a/12a1.jpg')}
        />
        <Image
          style={{resizeMode: 'stretch', width: '100%', height: 700}}
          source={require('../Assests/80g12a/12a2.jpg')}
        />
      </Box>
    </ScrollView>
  );
};

export default Provission;
