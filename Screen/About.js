import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {Box, Flex, Image, ScrollView, Text, View} from 'native-base';
import { t } from 'i18next';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {width} = Dimensions.get('window');

  const data = [
    {
      id: '1',
      title: `${t('title1')}`,
      images: require('../Assests/About/a1.png'),
      h1: `${t('about1')}`,
    },
    {
      id: '2',
      title: `${t('title2')}`,
      images: require('../Assests/About/a8.png'),
      h1: `${t('about2')}`,
    },
    {
      id: '3',
      title: `${t('title3')}`,
      images: require('../Assests/About/a2.png'),
      h1: `${t('about3')}`,
    },
    {
      id: '4',
      title: `${t('title4')}`,
      images: require('../Assests/About/a9.png'),
      h1: `${t('about4')}`,
    },
    {
      id: '5',
      title: `${t('title5')}`,
      images: require('../Assests/About/a3.png'),
      h1: `${t('about5')}`,
    },
    {
      id: '6',
      title: `${t('title6')}`,
      images: require('../Assests/About/a10.png'),
      h1: `${t('about6')}`,
    },
    {
      id: '7',
      title: `${t('title7')}`,
      images: require('../Assests/About/a4.png'),
      h1: `${t('about7')}`,
    },
    {
      id: '8',
      title: `${t('title8')}`,
      images: require('../Assests/About/a11.png'),
      h1: `${t('about8')}`,
    },
    {
      id: '9',
      title: `${t('title9')}`,
      images: require('../Assests/About/a5.png'),
      h1: `${t('about9')}`,
    },
    {
      id: '10',
      title: `${t('title10')}`,
      images: require('../Assests/About/a12.png'),
      h1: `${t('about10')}`,
    },
    {
      id: '11',
      title: `${t('title11')}`,
      images: require('../Assests/About/a6.png'),
      h1: `${t('about11')}`,
    },
    {
      id: '12',
      title: `${t('title12')}`,
      images: require('../Assests/About/a13.png'),
      h1: `${t('about12')}`,
    },
    {
      id: '13',
      title: `${t('title13')}`,
      images: require('../Assests/About/a7.png'),
      h1: `${t('about13')}`,
    },
    {
      id: '14',
      title: `${t('title14')}`,
      images: require('../Assests/About/a14.png'),
      h1: `${t('about14')}`,
    },
    {
      id: '15',
      title: `${t('title15')}`,
      images: require('../Assests/About/a15.png'),
      h1: `${t('about15')}`,
    },
    {
      id: '16',
      title: `${t('title16')}`,
      images: require('../Assests/About/a16.png'),
      h1: `${t('about16')}`,
    },
  ];

  const renderItem = ({item}) => (
    <Flex
      background={'#EFEFEF'}
      width={'100%'}
      height={'auto'}
      style={{gap: 10}}>
      <Text
        color={'#F56A02'}
        fontSize={18}
        fontWeight={'bold'}
        width={'80%'}
        margin={'auto'}
        textAlign={'center'}>
        {item.title}:-
      </Text>

      <Box>
        <Image
          style={{resizeMode: 'contain', width: '100%', height: 180}}
          source={item.images}
          alt={item.id}
        />
      </Box>

      <Flex width="76%" margin={'auto'} style={{gap: 10}}>
        <Text fontSize={14} textAlign={'justify'}>
          {item.h1}
        </Text>
        <Text fontSize={14} textAlign={'justify'}>
          {item.h2}
        </Text>
      </Flex>
    </Flex>
  );

  const renderPagination = () => (
    <View style={styles.pagination}>
      {data.map((_, index) => (
        <View
          key={index}
          style={[
            styles.paginationDot,
            {backgroundColor: index === activeIndex ? 'red' : 'blue'},
          ]}
        />
      ))}
    </View>
  );

  return (
    <ScrollView style={{width: '100%', height: '100%'}}>
      <Box height={'100%'} width="100%" background={'#EFEFEF'}>
        <Image
          alt="banner"
          source={require('../Assests/about_banner.png')}
          style={{
            width: '100%',
            height: 200,
            resizeMode: 'stretch',
            marginBottom: 10,
          }}
        />
        <Carousel
          loop
          width={width}
          height={800}
          autoPlay={true}
          data={data}
          scrollAnimationDuration={4000}
          onPageChange={index => setActiveIndex(index)}
          renderItem={renderItem}
        />
        {renderPagination()}
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    paddingHorizontal: 10, // Ensure there's space for the dots
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
});

export default About;
