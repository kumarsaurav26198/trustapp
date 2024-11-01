import React, {useState} from 'react';
import {Dimensions, View, StyleSheet, ImageBackground} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {Box, Flex, Image, Text} from 'native-base';

const CarouselEvents = () => {
  const {width} = Dimensions.get('window');
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      id: '1',
      images: [
        require('../Assests/Final_Events/1.jpeg'),
        require('../Assests/Final_Events/2.jpeg'),
      ],
    },
    {
      id: '2',
      images: [
        require('../Assests/Final_Events/17B.jpeg'),
        require('../Assests/Final_Events/17A.jpeg'),
      ],
    },
    {
      id: '3',
      images: [
        require('../Assests/Final_Events/18.jpeg'),
        require('../Assests/Final_Events/19.jpeg'),
      ],
    },
    {
      id: '4',
      images: [
        require('../Assests/Final_Events/16.jpeg'),
        require('../Assests/Final_Events/19.jpeg'),
      ],
    },
  ];

  const renderItem = ({item}) => (
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
            {backgroundColor: index === activeIndex ? '#F56A02' : '#CCCCCC'},
          ]}
        />
      ))}
    </View>
  );

  return (
    <ImageBackground
      source={require('../Assests/events.png')}
      alt="eventbg"
      style={{width: '100%', resizeMode: 'stretch'}}>
      <Flex
        pt={16}
        pb={6}
        width={'80%'}
        margin={'auto'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'center'}>
        <Text
          color={'#F56A02'}
          fontSize={30}
          textAlign={'center'}
          width={'80%'}
          fontWeight={'bold'}>
          Event Gallery
        </Text>
        <Image
          marginTop={10}
          ml={-8}
          source={require('../Assests/homepage/line.png')}
          alt="line"
          style={{resizeMode: 'stretch'}}
        />
      </Flex>
      <Carousel
        loop
        width={width}
        height={340}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={3000}
        renderItem={renderItem}
        onSnapToItem={index => setActiveIndex(index)}
      />
      {renderPagination()}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
});

export default CarouselEvents;
