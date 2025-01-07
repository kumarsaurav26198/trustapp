import {t} from 'i18next';
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Modal,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
const Donation = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ScrollView width={'100%'} height={'100%'}>
      <Flex py={1}>
        <Text textAlign={'center'} fontSize={20} fontWeight={800} py={2}>
          {t('why_Donate')}
        </Text>

        <Flex py={4} px={4} style={{gap: 30}}>
          <Flex style={{gap: 4}}>
            <Text fontSize={18} fontWeight={600}>
              1. {t('h1_Donate')}
            </Text>
            <Text fontSize={14} fontWeight={400}>
              {t('h1_title')}
            </Text>
          </Flex>

          <Flex style={{gap: 4}}>
            <Text fontSize={18} fontWeight={600}>
              2. {t('h2_Donate')}
            </Text>
            <Text fontSize={14} fontWeight={400}>
              {t('h2_title')}
            </Text>
          </Flex>

          <Flex style={{gap: 4}}>
            <Text fontSize={18} fontWeight={600}>
              {' '}
              3.{t('h3_Donate')}
            </Text>
            <Text fontSize={14} fontWeight={400}>
              {t('h3_title')}
            </Text>
          </Flex>

          <Flex style={{gap: 4}}>
            <Text fontSize={18} fontWeight={600}>
              {' '}
              4. {t('h4_Donate')}
            </Text>
            <Text fontSize={14} fontWeight={400}>
              {t('h4_title')}
            </Text>
          </Flex>

          <Flex style={{gap: 4}}>
            <Text fontSize={18} fontWeight={600}>
              {' '}
              5. {t('h5_Donate')}
            </Text>
            <Text fontSize={14} fontWeight={400}>
              {t('h5_title')}
            </Text>
          </Flex>

          <Flex style={{gap: 4}}>
            <Text fontSize={18} fontWeight={600}>
              {' '}
              6. {t('h6_Donate')}
            </Text>
            <Text fontSize={14} fontWeight={400}>
              {t('h6_title')}
            </Text>
          </Flex>
        </Flex>

        <Button
          width={'50%'}
          margin={'auto'}
          backgroundColor={'#F56A02'}
          onPress={() => setShowModal(true)}>
          <Text color={'white'} fontWeight={800} fontSize={16}>
            Donate Now
          </Text>
        </Button>
      </Flex>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        _backdrop={{
          _dark: {
            bg: 'coolGray.800',
          },
          bg: 'warmGray.50',
        }}>
        <Modal.Content width="90%" maxWidth="400px" borderRadius="xl">
          <Modal.CloseButton />
          <Modal.Body>
            <VStack space={4} alignItems="center">
              <Text textAlign="center" fontSize="lg" fontWeight="bold" mb={1}>
                Thank You For Choosing LSSF Trust
              </Text>

              <Box width="100%" alignItems="center">
                <Image
                  source={require('../Assests/cheque.png')}
                  alt="cheque"
                  width="100%"
                  resizeMode="contain"
                  mb={4}
                />

                <Box
                  width="100%"
                  p={4}
                  borderRadius="md"
                  bg="coolGray.100"
                  shadow={2}>
                  <Text fontSize="md" fontWeight="bold" mb={2}>
                    Account Information
                  </Text>
                  <VStack space={2} width={'100%'}>
                    <HStack justifyContent="space-between">
                      <Text fontWeight="bold" width={'50%'}>
                        Account Name:
                      </Text>
                      <Text width={'50%'}>LATE SURESH SINGH FOUNDATION</Text>
                    </HStack>
                    <HStack justifyContent="space-between">
                      <Text fontWeight="bold" width={'50%'}>
                        Bank Name:
                      </Text>
                      <Text width={'50%'}>BANDHAN BANK</Text>
                    </HStack>
                    <HStack justifyContent="space-between">
                      <Text fontWeight="bold" width={'50%'}>
                        Account Number:
                      </Text>
                      <Text width={'50%'}>20100028375030</Text>
                    </HStack>
                    <HStack justifyContent="space-between">
                      <Text fontWeight="bold" width={'50%'}>
                        IFSC Code:
                      </Text>
                      <Text width={'50%'}>BDBL0002525</Text>
                    </HStack>
                    <HStack justifyContent="space-between">
                      <Text fontWeight="bold" width={'50%'}>
                        Branch:
                      </Text>
                      <Text width={'50%'}>Kamla Nagar Branch</Text>
                    </HStack>
                  </VStack>
                </Box>

                <Image
                  source={require('../Assests/pan.png')}
                  alt="pan"
                  width="100%"
                  resizeMode="contain"
                  mt={4}
                />
                <Image
                  source={require('../Assests/qrcode.png')}
                  alt="qrcode"
                  width="100%"
                  resizeMode="contain"
                  mt={4}
                />
              </Box>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </ScrollView>
  );
};

export default Donation;
