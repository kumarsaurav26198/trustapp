import React, {useState} from 'react';

import {Box, Flex, Image, Modal, Text} from 'native-base';

import {ScrollView} from 'native-base';
import img1 from '../Assests/Final_Events/1.jpeg';
import img2 from '../Assests/Final_Events/2.jpeg';
import img3 from '../Assests/Final_Events/3.jpeg';
import img4 from '../Assests/Final_Events/4.jpeg';
import img41 from '../Assests/Final_Events/4A.jpeg';
import img42 from '../Assests/Final_Events/4B.jpeg';
import img5 from '../Assests/Final_Events/5.jpeg';
import img6 from '../Assests/Final_Events/6.jpeg';
import img61 from '../Assests/Final_Events/6A.jpeg';
import img62 from '../Assests/Final_Events/6B.jpeg';
import img63 from '../Assests/Final_Events/6C.jpeg';
import img7 from '../Assests/Final_Events/7.jpeg';
import img8 from '../Assests/Final_Events/8.jpeg';
import img9 from '../Assests/Final_Events/9.jpeg';
import img10 from '../Assests/Final_Events/10.jpeg';
import img11 from '../Assests/Final_Events/11.jpeg';
import img111 from '../Assests/Final_Events/11A.jpeg';
import img112 from '../Assests/Final_Events/11B.jpeg';
import img113 from '../Assests/Final_Events/11C.jpeg';
import img12 from '../Assests/Final_Events/12.jpeg';
import img121 from '../Assests/Final_Events/12A.jpeg';
import img122 from '../Assests/Final_Events/12B.jpeg';
import img123 from '../Assests/Final_Events/12C.jpeg';
import img13 from '../Assests/Final_Events/13.jpeg';
import img14 from '../Assests/Final_Events/14.jpeg';
import img15 from '../Assests/Final_Events/15.jpeg';
import img16 from '../Assests/Final_Events/16.jpeg';
import img17 from '../Assests/Final_Events/17.jpeg';
import img171 from '../Assests/Final_Events/17A.jpeg';
import img172 from '../Assests/Final_Events/17B.jpeg';
import img173 from '../Assests/Final_Events/17C.jpeg';
import img174 from '../Assests/Final_Events/17D.jpeg';
import img18 from '../Assests/Final_Events/18.jpeg';
import img19 from '../Assests/Final_Events/19.jpeg';
import img20 from '../Assests/Final_Events/20.jpeg';
import img22 from '../Assests/Final_Events/22.jpeg';
import img23 from '../Assests/Final_Events/23.jpeg';
import img231 from '../Assests/Final_Events/23A.jpeg';
import img24 from '../Assests/Final_Events/24.jpeg';
import img25 from '../Assests/Final_Events/25.jpeg';
import img251 from '../Assests/Final_Events/25A.jpeg';
import img26 from '../Assests/Final_Events/26.jpeg';
import img27 from '../Assests/Final_Events/27.jpeg';
import img28 from '../Assests/Final_Events/28.jpeg';
import ModalImage from './ModalImage';
import {TouchableOpacity} from 'react-native';
const Events = () => {
  const e1 = [
    img1,
    img2,
    img3,
    img4,
    img41,
    img42,
    img5,
    img6,
    img61,
    img62,
    img63,
    img7,
    img8,
    img9,
    img10,
    img11,
    img111,
    img112,
    img113,
  ];

  const e2 = [
    img12,
    img121,
    img122,
    img123,
    img13,
    img14,
    img15,
    img16,
    img17,
    img171,
    img172,
    img173,
    img174,
    img18,
    img19,
    img20,
    img22,
    img23,
    img231,
    img24,
    img25,
    img251,
    img26,
    img27,
    img28,
  ];

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
  const event1 = e1.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 2);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
  const event2 = e2.reduce((resultArray, item, index) => {
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
        source={require('../Assests/Final_Events/event_banner.png')}
        style={{width: '100%', height: 200, resizeMode: 'stretch'}}
        alt="event_banner"
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
            Events{' '}
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
      <Flex alignItems={'center'} >
        <Text fontWeight={'bold'} mb={3}>
        वर्ष 2022-2023
        </Text>
        {event1.map((row, rowIndex) => (
          <Box
            width={'100%'}
            py={2}

            background={'#F0F0F0'}
            key={rowIndex}
            style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
            {row.map((src, index) => (
              <TouchableOpacity
                style={{width: '44%'}}
                onPress={() => openModal(src)}>
                <Box
                  width={'100%'}
                  height={200}
                  style={{elevation: 1}}
                  marginTop={5}
                  padding={'10px'}
                  backgroundColor={'white'}
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
      </Flex>



      <Flex alignItems={'center'} mt={10}>
        <Text fontWeight={'bold'} mb={3}>
        वर्ष 2023-2024
        </Text>
        {event2.map((row, rowIndex) => (
          <Box
          py={2}


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
                  backgroundColor={'white'}
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
      </Flex>
    </ScrollView>
  );
};
export default Events;
