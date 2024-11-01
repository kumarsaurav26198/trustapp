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
    // <View style={styles.container}>
    //   <Header style={styles.header}>
    //     <Body>
    //       <Title>Why Should You Donate to LSSF Trust?</Title>
    //     </Body>
    //   </Header>
    //   <ScrollView style={styles.content}>
    //     <View style={styles.section}>
    //       <Text style={styles.subheading}>1. Education for All</Text>
    //       <Text style={styles.text}>
    //         Education is a powerful tool for breaking the cycle of poverty. At
    //         LSSF Trust, we provide educational resources, scholarships, and
    //         support to underprivileged children, ensuring they have access to
    //         quality education. Your donation can help us create a brighter
    //         future for these young minds, equipping them with the skills and
    //         knowledge they need to succeed.
    //       </Text>
    //     </View>

    //     <Divider style={styles.divider} />

    //     <View style={styles.section}>
    //       <Text style={styles.subheading}>
    //         2. Empowering Farmers with Modern Machinery
    //       </Text>
    //       <Text style={styles.text}>
    //         Farmers are the backbone of our nation, and at LSSF Trust, we strive
    //         to support them with modern agricultural machinery. By providing
    //         tools and equipment, we help farmers increase their productivity and
    //         income, leading to improved livelihoods and food security. Your
    //         donation can make a difference in the lives of countless farmers,
    //         helping them achieve sustainable growth.
    //       </Text>
    //     </View>

    //     <Divider style={styles.divider} />

    //     <View style={styles.section}>
    //       <Text style={styles.subheading}>
    //         3. Women's Empowerment Through Skill Development
    //       </Text>
    //       <Text style={styles.text}>
    //         We believe in empowering women to achieve financial independence and
    //         self-sufficiency. Our programs provide women with training in skills
    //         like sewing and tailoring, allowing them to earn a livelihood and
    //         support their families. Additionally, we distribute blankets in
    //         villages to ensure warmth and comfort for all. Your contribution can
    //         help us continue to uplift and empower women in our communities.
    //       </Text>
    //     </View>

    //     <Divider style={styles.divider} />

    //     <View style={styles.section}>
    //       <Text style={styles.subheading}>
    //         4. Encouraging Sports and Fitness
    //       </Text>
    //       <Text style={styles.text}>
    //         At LSSF Trust, we organize running championships and provide cash
    //         prizes to encourage physical fitness and sportsmanship among youth
    //         and adults. These events not only promote a healthy lifestyle but
    //         also foster a sense of community and achievement. Your donation can
    //         support these events and motivate more people to participate in
    //         sports and stay active.
    //       </Text>
    //     </View>

    //     <Divider style={styles.divider} />

    //     <View style={styles.section}>
    //       <Text style={styles.subheading}>
    //         5. Supporting Girls' Marriages and Social Welfare
    //       </Text>
    //       <Text style={styles.text}>
    //         We believe in supporting young women and their families during
    //         important life events. Our programs provide financial assistance for
    //         girls' marriages, helping them start their new journey with dignity
    //         and support. Additionally, we offer various social welfare programs
    //         to assist those in need, ensuring that everyone has access to basic
    //         necessities and opportunities.
    //       </Text>
    //     </View>

    //     <Divider style={styles.divider} />

    //     <View style={styles.section}>
    //       <Text style={styles.subheading}>
    //         6. A Holistic Approach to Community Development
    //       </Text>
    //       <Text style={styles.text}>
    //         LSSF Trust is dedicated to addressing the diverse needs of our
    //         communities through a holistic approach. From providing educational
    //         resources and agricultural support to empowering women and promoting
    //         health and wellness, our initiatives aim to create a positive and
    //         lasting impact.
    //       </Text>
    //     </View>

    //     <View style={styles.buttonContainer}>
    //       <Button
    //         onPress={handleOpen}
    //         style={styles.button}
    //       >
    //         <Text style={styles.buttonText}>Donate Now</Text>
    //       </Button>
    //     </View>
    //   </ScrollView>

    //   <Modal visible={isOpen} transparent={true} animationType="slide">
    //     <View style={styles.modalOverlay}>
    //       <View style={styles.modalContent}>
    //         <View style={styles.modalHeader}>
    //           <Text style={styles.modalHeaderText}>
    //             Thank You For Choosing LSSF Trust
    //           </Text>
    //           <TouchableOpacity
    //             onPress={handleClose}
    //             style={styles.closeButton}>
    //             <Text style={styles.closeButtonText}>X</Text>
    //           </TouchableOpacity>
    //         </View>
    //         <ScrollView contentContainerStyle={styles.modalBody}>
    //           <View style={styles.imageContainer}>
    //             <Image
    //               source={require('../Assests/cheque.png')}
    //               style={styles.image}
    //             />
    //             <Text style={styles.imageText}>Cheque</Text>
    //           </View>

    //           <View style={styles.infoContainer}>
    //             <Text style={styles.infoHeader}>Account Information</Text>
    //             <Divider style={styles.infoDivider} />
    //             <Text style={styles.infoLabel}>Account Holder Name:</Text>
    //             <Text style={styles.infoText}>
    //               LATE SURESH SINGH FOUNDATION
    //             </Text>
    //             <Text style={styles.infoLabel}>Bank Name:</Text>
    //             <Text style={styles.infoText}>BANDHAN BANK</Text>
    //             <Text style={styles.infoLabel}>Account Number:</Text>
    //             <Text style={styles.infoText}>20100028375030</Text>
    //             <Text style={styles.infoLabel}>IFSC Code:</Text>
    //             <Text style={styles.infoText}>BDBL0002525</Text>
    //             <Text style={styles.infoLabel}>Branch:</Text>
    //             <Text style={styles.infoText}>Kamla Nagar Branch</Text>
    //           </View>

    //           <View style={styles.imageContainer}>
    //             <Image
    //               source={require('../Assests/pan.png')}
    //               style={styles.image}
    //             />
    //             <Text style={styles.imageText}>PAN Card</Text>
    //           </View>

    //           <View style={styles.imageContainer}>
    //             <Image
    //               source={require('../Assests/qrcode.png')}
    //               style={styles.image}
    //             />
    //             <Text style={styles.imageText}>QR Code</Text>
    //           </View>
    //         </ScrollView>
    //       </View>
    //     </View>
    //   </Modal>
    // </View>
    <ScrollView width={'100%'} height={'100%'}>
      <Flex py={1}>
        <Text textAlign={'center'} fontSize={20} fontWeight={800} py={2}>
          Why Should You Donate to LSSF Trust?
        </Text>

        <Flex py={4} px={4} style={{gap: 30}}>
          <Flex style={{gap: 4}}>
            <Text fontSize={18} fontWeight={600}>
              1. Education for All
            </Text>
            <Text fontSize={14} fontWeight={400}>
              Education is a powerful tool for breaking the cycle of poverty. At
              LSSF Trust, we provide educational resources, scholarships, and
              support to underprivileged children, ensuring they have access to
              quality education. Your donation can help us create a brighter
              future for these young minds, equipping them with the skills and
              knowledge they need to succeed.
            </Text>
          </Flex>

          <Flex style={{gap: 4}}>
            <Text fontSize={18} fontWeight={600}>
              2. Empowering Farmers with Modern Machinery
            </Text>
            <Text fontSize={14} fontWeight={400}>
              Farmers are the backbone of our nation, and at LSSF Trust, we
              strive to support them with modern agricultural machinery. By
              providing tools and equipment, we help farmers increase their
              productivity and income, leading to improved livelihoods and food
              security. Your donation can make a difference in the lives of
              countless farmers, helping them achieve sustainable growth.
            </Text>
          </Flex>

          <Flex style={{gap: 4}}>
            <Text fontSize={18} fontWeight={600}>
              {' '}
              3. Women's Empowerment Through Skill Development
            </Text>
            <Text fontSize={14} fontWeight={400}>
              We believe in empowering women to achieve financial independence
              and self-sufficiency. Our programs provide women with training in
              skills like sewing and tailoring, allowing them to earn a
              livelihood and support their families. Additionally, we distribute
              blankets in villages to ensure warmth and comfort for all. Your
              contribution can help us continue to uplift and empower women in
              our communities.
            </Text>
          </Flex>

          <Flex style={{gap: 4}}>
            <Text fontSize={18} fontWeight={600}>
              {' '}
              4. Encouraging Sports and Fitness
            </Text>
            <Text fontSize={14} fontWeight={400}>
              At LSSF Trust, we organize running championships and provide cash
              prizes to encourage physical fitness and sportsmanship among youth
              and adults. These events not only promote a healthy lifestyle but
              also foster a sense of community and achievement. Your donation
              can support these events and motivate more people to participate
              in sports and stay active.
            </Text>
          </Flex>

          <Flex style={{gap: 4}}>
            <Text fontSize={18} fontWeight={600}>
              {' '}
              5. Supporting Girls' Marriages and Social Welfare
            </Text>
            <Text fontSize={14} fontWeight={400}>
              We believe in supporting young women and their families during
              important life events. Our programs provide financial assistance
              for girls' marriages, helping them start their new journey with
              dignity and support. Additionally, we offer various social welfare
              programs to assist those in need, ensuring that everyone has
              access to basic necessities and opportunities.
            </Text>
          </Flex>

          <Flex style={{gap: 4}}>
            <Text fontSize={18} fontWeight={600}>
              {' '}
              6. A Holistic Approach to Community Development
            </Text>
            <Text fontSize={14} fontWeight={400}>
              LSSF Trust is dedicated to addressing the diverse needs of our
              communities through a holistic approach. From providing
              educational resources and agricultural support to empowering women
              and promoting health and wellness, our initiatives aim to create a
              positive and lasting impact.
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
                    <HStack justifyContent="space-between" >
                      <Text fontWeight="bold" width={"50%"}>Account Name:</Text>
                      <Text width={"50%"}>LATE SURESH SINGH FOUNDATION</Text>
                    </HStack>
                    <HStack justifyContent="space-between">
                      <Text fontWeight="bold" width={"50%"}>Bank Name:</Text>
                      <Text width={"50%"}>BANDHAN BANK</Text>
                    </HStack>
                    <HStack justifyContent="space-between">
                      <Text fontWeight="bold" width={"50%"}>Account Number:</Text>
                      <Text width={"50%"}>20100028375030</Text>
                    </HStack>
                    <HStack justifyContent="space-between">
                      <Text fontWeight="bold" width={"50%"}>IFSC Code:</Text>
                      <Text width={"50%"}>BDBL0002525</Text>
                    </HStack>
                    <HStack justifyContent="space-between">
                      <Text fontWeight="bold" width={"50%"}>Branch:</Text>
                      <Text width={"50%"}>Kamla Nagar Branch</Text>
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#ffffff',
//   },
//   header: {
//     backgroundColor: '#F56A02',
//     padding: 10,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   content: {
//     flex: 1,
//   },
//   section: {
//     marginBottom: 20,
//   },
//   subheading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   text: {
//     fontSize: 16,
//     color: 'grey',
//     marginTop: 5,
//   },
//   buttonContainer: {
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   button: {
//     backgroundColor: '#F56A02',
//     borderRadius: 50,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontSize: 16,
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: width * 0.9,
//     maxHeight: height * 0.9,
//     backgroundColor: '#ffffff',
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
//   modalHeader: {
//     padding: 20,
//     backgroundColor: '#F56A02',
//     alignItems: 'center',
//     position: 'relative',
//   },
//   modalHeaderText: {
//     fontSize: 20,
//     color: '#ffffff',
//     fontWeight: 'bold',
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 20,
//     right: 20,
//   },
//   closeButtonText: {
//     fontSize: 24,
//     color: '#ffffff',
//   },
//   modalBody: {
//     padding: 20,
//   },
//   imageContainer: {
//     position: 'relative',
//     marginBottom: 20,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     borderRadius: 10,
//   },
//   imageText: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     color: '#ffffff',
//     textAlign: 'center',
//     padding: 10,
//     borderBottomLeftRadius: 10,
//     borderBottomRightRadius: 10,
//   },
//   infoContainer: {
//     marginBottom: 20,
//   },
//   infoHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   infoDivider: {
//     marginVertical: 10,
//   },
//   infoLabel: {
//     fontWeight: 'bold',
//   },
//   infoText: {
//     marginBottom: 5,
//   },
// });

export default Donation;
