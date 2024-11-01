import React, { useState } from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Box, Flex, Image, Text } from 'native-base';

const CarouselCertificate = () => {
  const { width } = Dimensions.get('window');
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      id: '1',
      images: [
        require('../Assests/Certificates/c1.jpg'),
        require('../Assests/Certificates/c2.jpeg'),
      ],
    },
    {
      id: '2',
      images: [
        require('../Assests/Certificates/c3.jpeg'),
        require('../Assests/Certificates/c4.jpeg'),
      ],
    },
    {
      id: '3',
      images: [
        require('../Assests/Certificates/c5.jpeg'),
        require('../Assests/Certificates/c6.jpeg'),
      ],
    },
    {
      id: '4',
      images: [
        require('../Assests/Certificates/c7.jpeg'),
        require('../Assests/Certificates/c8.jpeg'),
      ],
    },
  ];

  const renderItem = ({ item }) => (
    <Flex
      flexDirection={'row'}
      justifyContent={'space-around'}
      width={'100%'}
      alignItems={'center'}>
      {item.images.map((image, index) => (
        <Box
          key={`${item.id}_${index}`}
          width={width * 0.44}
          shadow={8}
          borderRadius={8}
          backgroundColor="#FFFFFF"
          padding={1.5}>
          <Image
            width="100%"
            height={200}
            source={image}
            resizeMode="cover"
            alt={`${item.id}_${index}`}
          />
        </Box>
      ))}
    </Flex>
  );

  const renderPagination = () => (
    <View style={styles.pagination}>
      {data.map((_, index) => (
        <View
          key={index}
          style={[
            styles.paginationDot,
            { backgroundColor: index === activeIndex ? '#F56A02' : '#CCCCCC' },
          ]}
        />
      ))}
    </View>
  );

  return (
    <Flex background={'#FFFAE1'} flex={1}>
      <Flex
        pt={6}
        pb={6}
        width={'80%'}
        margin={'auto'}
        flexDirection={'row'}
        justifyContent={'center'}>
        <Text
          color={'#F56A02'}
          fontSize={30}
          textAlign={'center'}
          width={'80%'}
          fontWeight={'bold'}>
          Our Certificates
        </Text>
        <Image
          marginTop={10}
          ml={-8}
          source={require('../Assests/homepage/line.png')}
          alt="line"
          style={{ resizeMode: 'stretch' }}
        />
      </Flex>
      <Carousel
        loop
        width={width}
        height={300}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={3000}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      {renderPagination()}
    </Flex>
  );
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
});

export default CarouselCertificate;
