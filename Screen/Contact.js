import React, {useState} from 'react';
import {
  Box,
  Heading,
  Center,
  VStack,
  FormControl,
  Input,
  Button,
  TextArea,
  ScrollView,
  Flex,
  Text,
} from 'native-base';
import Mail from 'react-native-vector-icons/Entypo';
import Phone from 'react-native-vector-icons/FontAwesome';
import Youtube from 'react-native-vector-icons/Entypo';
import Instagram from 'react-native-vector-icons/Entypo';
import Facebook from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import {TouchableOpacity} from 'react-native';

const Contact = () => {
  const [formData, setFormData] = useState({
    first: '',
    last: '',
    phone: '',
    email: '',
    description: '',
  });

  const handleChange = (name, value) => {
    setFormData(prevState => ({...prevState, [name]: value}));
  };

  const handleSubmit = async () => {
    console.log('Form Data:', formData);

    const showToast1 = () => {
      Toast.show({
        type: 'success',
        text1: 'Successfull',
        text2: 'Your contact form has been submitted successfully',
        autoHide: true,
        visibilityTime: 3000,
      });
    };

    const showToast2 = () => {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'There was an issue submitting your form. Please try again',

        autoHide: true,
        visibilityTime: 3000,
      });
    };

    try {
      const response = await axios.post(
        'http://api.lsstrust.org.in/api/contact',
        formData,
      );

      console.log('Response:', response);

      if (response.status === 200) {
        showToast1();
        setFormData({
          first: '',
          last: '',
          phone: '',
          email: '',
          description: '',
        });
      } else {
        showToast2();
      }
    } catch (error) {
      showToast2();
      console.error('Error:', error);
    }
  };

  return (
    <ScrollView width="100%" height="100%" bg="#F5F5F5" pb={1}>
      <Box
        mt={5}
        marginX={5}
        safeArea
        w="90%"
        py="8"
        px="5"
        bg="#FFFFFF"
        borderRadius="lg"
        shadow={2}>
        <Heading
          size="lg"
          color="#F56A02"
          fontWeight="bold"
          textAlign="center"
          mb="6">
          Contact Us
        </Heading>
        <VStack space={4}>
          <FormControl>
            <FormControl.Label
              _text={{color: '#F56A02', fontSize: 'lg', fontWeight: 'medium'}}>
              First Name
            </FormControl.Label>
            <Input
              placeholder="First Name"
              variant="filled"
              bg="#F5F5F5"
              _focus={{borderColor: '#F56A02'}}
              borderColor="#E0E0E0"
              value={formData.first}
              onChangeText={value => handleChange('first', value)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{color: '#F56A02', fontSize: 'lg', fontWeight: 'medium'}}>
              Last Name
            </FormControl.Label>
            <Input
              placeholder="Last Name"
              variant="filled"
              bg="#F5F5F5"
              _focus={{borderColor: '#F56A02'}}
              borderColor="#E0E0E0"
              value={formData.last}
              onChangeText={value => handleChange('last', value)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{color: '#F56A02', fontSize: 'lg', fontWeight: 'medium'}}>
              Mobile No.
            </FormControl.Label>
            <Input
              placeholder="Mobile No."
              variant="filled"
              bg="#F5F5F5"
              _focus={{borderColor: '#F56A02'}}
              borderColor="#E0E0E0"
              value={formData.phone}
              onChangeText={value => handleChange('phone', value)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{color: '#F56A02', fontSize: 'lg', fontWeight: 'medium'}}>
              Email
            </FormControl.Label>
            <Input
              placeholder="Email"
              variant="filled"
              bg="#F5F5F5"
              _focus={{borderColor: '#F56A02'}}
              borderColor="#E0E0E0"
              value={formData.email}
              onChangeText={value => handleChange('email', value)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{color: '#F56A02', fontSize: 'lg', fontWeight: 'medium'}}>
              Description
            </FormControl.Label>
            <TextArea
              h={24}
              placeholder="Description..."
              variant="filled"
              bg="#F5F5F5"
              _focus={{borderColor: '#F56A02'}}
              borderColor="#E0E0E0"
              value={formData.description}
              onChangeText={value => handleChange('description', value)}
            />
          </FormControl>
          <Button
            borderRadius="full"
            width="50%"
            alignSelf="center"
            mt="6"
            bg="#F56A02"
            _text={{color: 'white', fontSize: 18, fontWeight: 'bold'}}
            _pressed={{bg: '#FF4D4D'}}
            onPress={handleSubmit}>
            Submit
          </Button>
        </VStack>

        <Box >
          <Flex
            width="100%"
            mt={16}
            flexDirection="column"
            >
            <Flex flexDirection="row" alignItems="center" style={{gap: 8}}>
              <Mail name="mail-with-circle" size={24} color="#F56A02" />
              <Text color="#333333" fontSize="sm" fontWeight="medium">
              lssftrust@gmail.com
              </Text>
            </Flex>

            <Flex flexDirection="row" alignItems="center" style={{gap: 8}}>
              <Phone name="phone-square" size={24} color="#F56A02" />
              <Text color="#333333" fontSize="sm" fontWeight="medium">
                +91-9319965799
              </Text>
            </Flex>
          </Flex>
          <Flex direction="row" alignItems={"center"} style={{gap: 20}} mt={4}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.facebook.com/lssftrust')
              }>
              <Facebook name="facebook-with-circle" size={26} color="#3b5998" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'https://youtube.com/@lssftrust?si=-PjIzvdWyBxeFU6_',
                )
              }>
              <Youtube name="youtube-with-circle" size={26} color="#FF0000" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.instagram.com/lssf_trust/?hl=en')
              }>
              <Instagram
                name="instagram-with-circle"
                size={26}
                color="#FF0000"
              />
            </TouchableOpacity>
          </Flex>
        </Box>
      </Box>

      <Toast />
    </ScrollView>
  );
};

export default Contact;
