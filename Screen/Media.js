import React, {useState} from 'react';
import c1 from '../Assests/Media/img1.webp';
import c2 from '../Assests/Media/img2.webp';
import c3 from '../Assests/Media/img3.webp';
import c4 from '../Assests/Media/img4.webp';
import c5 from '../Assests/Media/img5.jpeg';
import c6 from '../Assests/Media/img6.jpeg';
import c7 from '../Assests/Media/img7.jpeg';
import c8 from '../Assests/Media/img8.jpeg';

import {Box, Flex, Image, Modal, Text, View} from 'native-base';

import {ScrollView} from 'native-base';
import ModalImage from './ModalImage';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import WebView from 'react-native-webview';
import { t } from 'i18next';

const Media = () => {
  const images = [c1, c2, c3, c4, c5, c6, c7, c8];
  const {width} = Dimensions.get('window');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = image => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalVisible(false);
  };
  const chunkedImages = images.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 2);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  return (
    <ScrollView style={{width: '100%'}} bg={'white'}>
      <Image
        source={require('../Assests/gallery_banner.png')}
        style={{width: '100%', height: 200, resizeMode: 'stretch'}}
        alt="galery_banner"
      />

      <Flex
        pt={4}
        width={'100%'}
        margin={'auto'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Box>
          <Image
            source={require('../Assests/gallery1.png')}
            alt="line"
            style={{resizeMode: 'stretch'}}
          />
        </Box>

        <Flex flexDirection={'row'}>
          <Text
            color={'#F56A02'}
            fontSize={30}
            textAlign={'start'}
            width={'80%'}
            fontWeight={'bold'}>
           {t('Media')}
          </Text>
          <Image
            marginTop={10}
            ml={-24}
            source={require('../Assests/homepage/line.png')}
            alt="line"
            style={{resizeMode: 'stretch'}}
          />
        </Flex>
      </Flex>
      {chunkedImages.map((row, rowIndex) => (
        <Box
          width={'100%'}
          background={'#F0F0F0'}
          key={rowIndex}
          style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
          {row.map((src, index) => (
            <TouchableOpacity
              style={{width: '44%'}}
              key={index}
              onPress={() => openModal(src)}>
              <Box
                width={'100%'}
                height={200}
                style={{elevation: 1}}
                marginTop={5}
                padding={'10px'}
                borderWidth={1}
                borderRadius={'6px'}>
                <Image
                  resizeMode="stretch"
                  key={index}
                  width={'100%'}
                  height={'100%'}
                  source={src}
                  alt={`${index}+1`}
                />
              </Box>
            </TouchableOpacity>
          ))}
          <Modal isOpen={modalVisible} onClose={closeModal}>
            <Modal.Content maxWidth="100%" maxHeight={'60%'}>
              <Modal.CloseButton />
              {selectedImage && (
                <ModalImage image={selectedImage} onClose={closeModal} />
              )}
            </Modal.Content>
          </Modal>
        </Box>
      ))}

      <View style={styles.container}>
        <View style={styles.videoContainer}>
          <WebView
            style={styles.webview}
            source={{
              uri: 'https://www.youtube.com/embed/kCO25UMFgOU?si=MIBf8SiyYLx5OLQg',
            }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  videoContainer: {
    width: '100%',
    maxWidth: 800,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  webview: {
    width: '100%',
    height: 400, // You can adjust the height as needed
  },
});
export default Media;
