import React, {useState} from 'react';

import {Box, Flex, Image, Modal, Text} from 'native-base';

import {ScrollView} from 'native-base';
import img1 from "../Assests/Final_Galley/1.jpg";
import img2 from "../Assests/Final_Galley/2.jpg";
import img3 from "../Assests/Final_Galley/3.jpg";
import img4 from "../Assests/Final_Galley/4.jpg";
import img5 from "../Assests/Final_Galley/5.jpg";
import img6 from "../Assests/Final_Galley/6.jpg";
import img7 from "../Assests/Final_Galley/7.jpg";
import img8 from "../Assests/Final_Galley/8.jpg";
import img9 from "../Assests/Final_Galley/9.jpg";
import img10 from "../Assests/Final_Galley/10.jpg";
import img12 from "../Assests/Final_Galley/12.jpg";
import img13 from "../Assests/Final_Galley/13.jpg";
import img14 from "../Assests/Final_Galley/14.jpg";
import img15 from "../Assests/Final_Galley/15.jpg";
import img16 from "../Assests/Final_Galley/16.jpg";
import img17 from "../Assests/Final_Galley/17.jpg";
import img18 from "../Assests/Final_Galley/18.jpg";
import img19 from "../Assests/Final_Galley/19.jpg";
import img20 from "../Assests/Final_Galley/20.jpg";
import img21 from "../Assests/Final_Galley/21.jpg";
import img22 from "../Assests/Final_Galley/22.jpg";
import img24 from "../Assests/Final_Galley/24.jpg";
import img25 from "../Assests/Final_Galley/25.jpg";
import img26 from "../Assests/Final_Galley/26.jpg";
import img27 from "../Assests/Final_Galley/27.jpg";
import img28 from "../Assests/Final_Galley/28.jpg";
import img29 from "../Assests/Final_Galley/29.jpg";
import img30 from "../Assests/Final_Galley/30.jpg";
import img31 from "../Assests/Final_Galley/31.jpg";
import img32 from "../Assests/Final_Galley/32.jpg";
import img33 from "../Assests/Final_Galley/33.jpg";
import img34 from "../Assests/Final_Galley/34.jpeg";
import img35 from "../Assests/Final_Galley/35.jpeg";
import img36 from "../Assests/Final_Galley/36.jpeg";
import img37 from "../Assests/Final_Galley/37.jpeg";
import img38 from "../Assests/Final_Galley/38.jpeg";
import img39 from "../Assests/Final_Galley/39.jpeg";
import img40 from "../Assests/Final_Galley/40.jpeg";
import ModalImage from './ModalImage';
import {TouchableOpacity} from 'react-native';
const Gallery = () => {
    const gallery = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img12,
        img13,
        img14,
        img15,
        img16,
      ];
    

      const g1 = [
        img17,
        img18,
        img19,
        img20,
        img21,
        img22,
        img24,
        img25,
        img26,
        img27,
        img28,
        img29,
        img30,
        img31,
        img32,
        img33,
        img34,
        img35,
        img36,
        img37,
        img38,
        img39,
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
  const gallery1 = gallery.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 2);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
  const gallery2 = g1.reduce((resultArray, item, index) => {
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
        source={require('../Assests/Final_Galley/gallery_banner.png')}
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

        <Flex flexDirection={'row'}  ml={-8}>
          <Text
          ml={2}
            color={'#F56A02'}
            fontSize={30}
            textAlign={'start'}
            width={'80%'}
            fontWeight={'bold'}>
          Gallery
          </Text>
          <Image
            marginTop={10}
            ml={-32}
            source={require('../Assests/homepage/line.png')}
            alt="line"
            style={{resizeMode: 'stretch'}}
          />
        </Flex>
      </Flex>
      <Flex alignItems={'center'}>
        <Text fontWeight={'bold'} mb={3}>
        वर्ष 2022-2023
        </Text>
        {gallery1.map((row, rowIndex) => (
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



      <Flex alignItems={'center'} mt={10}>
        <Text fontWeight={'bold'} mb={3}>
        वर्ष 2023-2024
        </Text>
        {gallery2.map((row, rowIndex) => (
          <Box
          py={2}


            width={'100%'}
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
    </ScrollView>
  );
};
export default Gallery;
