import React, {useState} from 'react';
import {FlatList, ScrollView, TouchableWithoutFeedback} from 'react-native';
import {Box, Flex, Image, Text, View} from 'native-base';
import { t } from 'i18next';

const Services = ({navigation}) => {
  const [columns, setColumns] = useState(2);

  const data = [
    {
      id: '1',
      img: require('../Assests/service/s1.png'),
     title: `${t('services_title1')}`,
      colors: '#FFB573',
      link: 'education',
    },
    {
      id: '2',
      img: require('../Assests/service/s2.png'),
      title: `${t('services_title2')}`,
      colors: '#F29AC0',
      link: 'woman',
    },
    {
      id: '3',
      img: require('../Assests/service/s3.png'),
      title: `${t('services_title3')}`,
      colors: '#9DDAEC',
      link: 'live',
    },
    {
      id: '4',
      img: require('../Assests/service/s4.png'),
      title: `${t('services_title4')}`,
      colors: '#778CA3',
      link: 'health',
    },
    {
      id: '5',
      img: require('../Assests/service/s5.png'),
      title: `${t('services_title5')}`,
      colors: '#099F85',
      link: 'social',
    },
    {
      id: '6',
      img: require('../Assests/service/s6.png'),
      title: `${t('services_title6')}`,
      colors: '#D1D8E0',
      link: 'careers',
    },
    {
      id: '7',
      img: require('../Assests/service/s7.png'),
      title: `${t('services_title7')}`,
      colors: '#BFC7F3',
      link: 'aid',
    },
    {
      id: '8',
      img: require('../Assests/service/s8.png'),
      title: `${t('services_title8')}`,
      colors: '#B0DDD6',
      link: 'agriculture',
    },
  ];

  const renderItem = ({item}) => {
    const handlePress = () => {
      navigation.navigate(item.link);
      console.log('ok');
    };
    return (
      <TouchableWithoutFeedback onPress={handlePress}>
        <Flex
          borderRadius={'lg'}
          background={item.colors}
          alignItems={'center'}
          py={10}
          px={2}
          style={{gap: 10}}
          width={'45%'}>
          <Box key={item.id}>
            <Image source={item.img} alt={item.id} />
          </Box>
          <Text
            width={'80%'}
            textAlign={'center'}
            color={'#FFFFFF'}
            fontSize={16}
            fontWeight={600}>
            {item.title}
          </Text>
        </Flex>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <ScrollView style={{backgroundColor: 'gray', paddingVertical: 20,paddingBottom:40}}>
      <FlatList
        key={columns}
        data={data}
        width={'94%'}
        height={'auto'}
        margin={'auto'}
        numColumns={columns}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: 20,
        }}
      />
      <View style={{height:20}}/> 

    </ScrollView>
  );
};

export default Services;
