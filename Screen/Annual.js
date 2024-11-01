import {Box, Text, ScrollView, Heading, Flex} from 'native-base';
import {Image} from 'react-native';
import React from 'react';

const Annual = () => {
  const ar2022 = [
    require('../Assests/annual22/ar22_1.jpg'),
    require('../Assests/annual22/ar22_2.jpg'),
    require('../Assests/annual22/ar22_3.jpg'),
    require('../Assests/annual22/ar22_4.jpg'),
    require('../Assests/annual22/ar22_5.jpg'),
    require('../Assests/annual22/ar22_6.jpg'),
    require('../Assests/annual22/ar22_7.jpg'),
    require('../Assests/annual22/ar22_8.jpg'),
    require('../Assests/annual22/ar22_9.jpg'),
  ];

  const ar2023 = [
    require('../Assests/annual23/ar23_1.jpg'),
    require('../Assests/annual23/ar23_2.jpg'),
    require('../Assests/annual23/ar23_3.jpg'),
    require('../Assests/annual23/ar23_4.jpg'),
    require('../Assests/annual23/ar23_5.jpg'),
    require('../Assests/annual23/ar23_6.jpg'),
    require('../Assests/annual23/ar23_7.jpg'),
    require('../Assests/annual23/ar23_8.jpg'),
    require('../Assests/annual23/ar23_9.jpg'),
    require('../Assests/annual23/ar23_10.jpg'),
  ];

  return (
    <ScrollView width="100%" height="100%">
      <Image
        alt="Annual Banner"
        source={require('../Assests/annual_banner.png')}
        style={{width: '100%', height: 240, resizeMode: 'stretch'}}
      />

      <Flex py={6} style={{gap: 10}}>
        <Heading py={4} color="#F56A01" fontSize={24} textAlign="center">
          Annual Report 2022 - 2023
        </Heading>
        {ar2022.map((ele, index) => (
          <Image
            key={index}
            style={{resizeMode: 'stretch', width: '100%', height: 700}}
            source={ele}
          />
        ))}
      </Flex>

      <Flex py={6} style={{gap: 10}}>
        <Heading py={4} color="#F56A01" fontSize={24} textAlign="center">
          Annual Report 2023 - 2024
        </Heading>
        {ar2023.map((ele, index) => (
          <Image
            key={index}
            style={{resizeMode: 'stretch', width: '100%', height: 700}}
            source={ele}
          />
        ))}
      </Flex>
    </ScrollView>
  );
};

export default Annual;
