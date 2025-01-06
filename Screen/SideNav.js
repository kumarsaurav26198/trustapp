import React, { useState } from 'react';
import { Flex, Text, VStack, Pressable, ScrollView } from 'native-base';
import Home from 'react-native-vector-icons/Entypo';
import Language from 'react-native-vector-icons/FontAwesome';
import About from 'react-native-vector-icons/AntDesign';
import Annual from 'react-native-vector-icons/MaterialIcons';
import Certificate from 'react-native-vector-icons/MaterialCommunityIcons';
import Gallery from 'react-native-vector-icons/MaterialCommunityIcons';
import Event from 'react-native-vector-icons/MaterialIcons';
import Media from 'react-native-vector-icons/MaterialIcons';
import Service from 'react-native-vector-icons/MaterialIcons';
import Privacy from 'react-native-vector-icons/MaterialIcons';
import FAQ from 'react-native-vector-icons/AntDesign';
import Members from 'react-native-vector-icons/Ionicons';
import Contact from 'react-native-vector-icons/MaterialIcons';
import Provision from 'react-native-vector-icons/MaterialCommunityIcons';
import Donation from 'react-native-vector-icons/FontAwesome5';
import { t } from 'i18next';
const SideNav = ({ navigation }) => {
  const [ selected, setSelected ] = useState('Home');

  const handlePress = screenName => {
    setSelected(screenName);
    navigation.closeDrawer();
    navigation.navigate(screenName);
  };

  return (
    <ScrollView height={"100%"}>
      <Flex flex={1} pb={5} pt={6} px={2} safeArea width={'90%'} margin={'auto'}>
        <VStack space={1}>
          <Pressable onPress={() => handlePress('Home')}>
            {({ isHovered, isPressed }) => {
              return (
                <Flex
                  style={{ gap: 18 }}
                  flexDirection={'row'}
                  padding={3}
                  alignItems={'center'}
                  borderRadius={selected === 'Home' ? 8 : 0}
                  bg={
                    selected === 'Home'
                      ? 'white'
                      : isPressed
                        ? 'coolGray.200'
                        : isHovered
                          ? 'coolGray.100'
                          : 'white'
                  }
                  shadow={selected === 'Home' ? 2 : 0.1}>
                  <Home
                    name="home"
                    size={24}
                    color={selected === 'Home' ? '#F56A02' : 'black'}
                  />
                  <Text
                    fontSize="lg"
                    fontWeight={selected === 'Home' ? 'bold' : 'normal'}
                    color={selected === 'Home' ? '#F56A02' : 'black'}>
                    {t('Home')}
                  </Text>
                </Flex>
              );
            }}
          </Pressable>

          <Pressable onPress={() => handlePress('About')}>
            {({ isHovered, isPressed }) => {
              return (
                <Flex
                  style={{ gap: 18 }}
                  flexDirection={'row'}
                  padding={3}
                  alignItems={'center'}
                  borderRadius={selected === 'About' ? 8 : 0}
                  bg={
                    selected === 'About'
                      ? 'white'
                      : isPressed
                        ? 'coolGray.200'
                        : isHovered
                          ? 'coolGray.100'
                          : 'white'
                  }
                  shadow={selected === 'About' ? 2 : 0.1}>
                  <About
                    name="infocirlce"
                    size={24}
                    color={selected === 'About' ? '#F56A02' : 'black'}
                  />
                  <Text
                    fontSize="lg"
                    fontWeight={selected === 'About' ? 'bold' : 'normal'}
                    color={selected === 'About' ? '#F56A02' : 'black'}>
                    {t('About')}
                  </Text>
                </Flex>
              );
            }}
          </Pressable>
          <Pressable onPress={() => handlePress('language')}>
            {({ isHovered, isPressed }) => {
              return (
                <Flex
                  style={{ gap: 18 }}
                  flexDirection={'row'}
                  padding={3}
                  alignItems={'center'}
                  borderRadius={selected === 'language' ? 8 : 0}
                  bg={
                    selected === 'language'
                      ? 'white'
                      : isPressed
                        ? 'coolGray.200'
                        : isHovered
                          ? 'coolGray.100'
                          : 'white'
                  }
                  shadow={selected === 'language' ? 2 : 0.1}>
                  <Language
                    name="language"
                    size={24}
                    color={selected === 'language' ? '#F56A02' : 'black'}
                  />
                  <Text
                    fontSize="lg"
                    fontWeight={selected === 'language' ? 'bold' : 'normal'}
                    color={selected === 'language' ? '#F56A02' : 'black'}>
                    {t('language')}
                  </Text>
                </Flex>
              );
            }}
          </Pressable>

          <Pressable onPress={() => handlePress('Annual Report')}>
            {({ isHovered, isPressed }) => {
              return (
                <Flex
                  style={{ gap: 18 }}
                  flexDirection={'row'}
                  padding={3}
                  alignItems={'center'}
                  borderRadius={selected === 'Annual Report' ? 8 : 0}
                  bg={
                    selected === 'Annual Report'
                      ? 'white'
                      : isPressed
                        ? 'coolGray.200'
                        : isHovered
                          ? 'coolGray.100'
                          : 'white'
                  }
                  shadow={selected === 'Annual Report' ? 2 : 0.1}>
                  <Annual
                    name="report"
                    size={24}
                    color={selected === 'Annual Report' ? '#F56A02' : 'black'}
                  />
                  <Text
                    fontSize="lg"
                    fontWeight={
                      selected === 'Annual Report' ? 'bold' : 'normal'
                    }
                    color={selected === 'Annual Report' ? '#F56A02' : 'black'}>
                    {t('Annual_Report')}
                  </Text>
                </Flex>
              );
            }}
          </Pressable>

          <Pressable onPress={() => handlePress('Provision')}>
            {({ isHovered, isPressed }) => {
              return (
                <Flex
                  style={{ gap: 18 }}
                  flexDirection={'row'}
                  padding={3}
                  alignItems={'center'}
                  borderRadius={selected === 'Provision' ? 8 : 0}
                  bg={
                    selected === 'Provision'
                      ? 'white'
                      : isPressed
                        ? 'coolGray.200'
                        : isHovered
                          ? 'coolGray.100'
                          : 'white'
                  }
                  shadow={selected === 'Provision' ? 2 : 0.1}>
                  <Provision
                    name="file-certificate"
                    size={24}
                    color={selected === 'Provision' ? '#F56A02' : 'black'}
                  />
                  <Text
                    fontSize="lg"
                    fontWeight={selected === 'Provision' ? 'bold' : 'normal'}
                    color={selected === 'Provision' ? '#F56A02' : 'black'}>
                    80G / 12A
                  </Text>
                </Flex>
              );
            }}
          </Pressable>

          <Pressable onPress={() => handlePress('Member')}>
            {({ isHovered, isPressed }) => {
              return (
                <Flex
                  style={{ gap: 18 }}
                  flexDirection={'row'}
                  padding={3}
                  alignItems={'center'}
                  borderRadius={selected === 'Member' ? 8 : 0}
                  bg={
                    selected === 'Member'
                      ? 'white'
                      : isPressed
                        ? 'coolGray.200'
                        : isHovered
                          ? 'coolGray.100'
                          : 'white'
                  }
                  shadow={selected === 'Member' ? 2 : 0.1}>
                  <Members
                    name="people"
                    size={24}
                    color={selected === 'Member' ? '#F56A02' : 'black'}
                  />
                  <Text
                    fontSize="lg"
                    fontWeight={selected === 'Member' ? 'bold' : 'normal'}
                    color={selected === 'Member' ? '#F56A02' : 'black'}>
                    {t('Members')}
                  </Text>
                </Flex>
              );
            }}
          </Pressable>

          <Pressable onPress={() => handlePress('Donation')}>
            {({ isHovered, isPressed }) => {
              return (
                <Flex
                  style={{ gap: 18 }}
                  flexDirection={'row'}
                  padding={3}
                  alignItems={'center'}
                  borderRadius={selected === 'Donation' ? 8 : 0}
                  bg={
                    selected === 'Donation'
                      ? 'white'
                      : isPressed
                        ? 'coolGray.200'
                        : isHovered
                          ? 'coolGray.100'
                          : 'white'
                  }
                  shadow={selected === 'Donation' ? 2 : 0.1}>
                  <Donation
                    name="donate"
                    size={24}
                    color={selected === 'Donation' ? '#F56A02' : 'black'}
                  />
                  <Text
                    fontSize="lg"
                    fontWeight={selected === 'Donation' ? 'bold' : 'normal'}
                    color={selected === 'Donation' ? '#F56A02' : 'black'}>
                    {t('Donation')}

                  </Text>
                </Flex>
              );
            }}
          </Pressable>

          <Pressable onPress={() => handlePress('Certificate')}>
            {({ isHovered, isPressed }) => {
              return (
                <Flex
                  style={{ gap: 18 }}
                  flexDirection={'row'}
                  padding={3}
                  alignItems={'center'}
                  borderRadius={selected === 'Certificate' ? 8 : 0}
                  bg={
                    selected === 'Certificate'
                      ? 'white'
                      : isPressed
                        ? 'coolGray.200'
                        : isHovered
                          ? 'coolGray.100'
                          : 'white'
                  }
                  shadow={selected === 'Certificate' ? 2 : 0.1}>
                  <Certificate
                    name="certificate"
                    size={24}
                    color={selected === 'Certificate' ? '#F56A02' : 'black'}
                  />
                  <Text
                    fontSize="lg"
                    fontWeight={selected === 'Certificate' ? 'bold' : 'normal'}
                    color={selected === 'Certificate' ? '#F56A02' : 'black'}>
                     {t('Certification')}
                  </Text>
                </Flex>
              );
            }}
          </Pressable>

          <Pressable onPress={() => handlePress('Gallery')}>
            {({ isHovered, isPressed }) => {
              return (
                <Flex
                  style={{ gap: 18 }}
                  flexDirection={'row'}
                  padding={3}
                  alignItems={'center'}
                  borderRadius={selected === 'Gallery' ? 8 : 0}
                  bg={
                    selected === 'Gallery'
                      ? 'white'
                      : isPressed
                        ? 'coolGray.200'
                        : isHovered
                          ? 'coolGray.100'
                          : 'white'
                  }
                  shadow={selected === 'Gallery' ? 2 : 0.1}>
                  <Gallery
                    name="view-gallery"
                    size={24}
                    color={selected === 'Gallery' ? '#F56A02' : 'black'}
                  />
                  <Text
                    fontSize="lg"
                    fontWeight={selected === 'Gallery' ? 'bold' : 'normal'}
                    color={selected === 'Gallery' ? '#F56A02' : 'black'}>
                    {t('Gallery')}
                  </Text>
                </Flex>
              );
            }}
          </Pressable>

          <Pressable onPress={() => handlePress('Events')}>
            {({ isHovered, isPressed }) => {
              return (
                <Flex
                  style={{ gap: 18 }}
                  flexDirection={'row'}
                  padding={3}
                  alignItems={'center'}
                  borderRadius={selected === 'Events' ? 8 : 0}
                  bg={
                    selected === 'Events'
                      ? 'white'
                      : isPressed
                        ? 'coolGray.200'
                        : isHovered
                          ? 'coolGray.100'
                          : 'white'
                  }
                  shadow={selected === 'Events' ? 2 : 0.1}>
                  <Event
                    name="emoji-events"
                    size={24}
                    color={selected === 'Events' ? '#F56A02' : 'black'}
                  />
                  <Text
                    fontSize="lg"
                    fontWeight={selected === 'Events' ? 'bold' : 'normal'}
                    color={selected === 'Events' ? '#F56A02' : 'black'}>
                   {t('Events')}
                  </Text>
                </Flex>
              );
            }}
          </Pressable>
          <Pressable onPress={() => handlePress('Media')}>
            {({ isHovered, isPressed }) => {
              return (
                <Flex
                  style={{ gap: 18 }}
                  flexDirection={'row'}
                  padding={3}
                  alignItems={'center'}
                  borderRadius={selected === 'Media' ? 8 : 0}
                  bg={
                    selected === 'Media'
                      ? 'white'
                      : isPressed
                        ? 'coolGray.200'
                        : isHovered
                          ? 'coolGray.100'
                          : 'white'
                  }
                  shadow={selected === 'Media' ? 2 : 0.1}>
                  <Media
                    name="perm-media"
                    size={24}
                    color={selected === 'Media' ? '#F56A02' : 'black'}
                  />
                  <Text
                    fontSize="lg"
                    fontWeight={selected === 'Media' ? 'bold' : 'normal'}
                    color={selected === 'Media' ? '#F56A02' : 'black'}>
                   {t('Media')}
                  </Text>
                </Flex>
              );
            }}
          </Pressable>

          <Pressable onPress={() => handlePress('Service')}>
            {({ isHovered, isPressed }) => {
              return (
                <Flex
                  style={{ gap: 18 }}
                  flexDirection={'row'}
                  padding={3}
                  alignItems={'center'}
                  borderRadius={selected === 'Service' ? 8 : 0}
                  bg={
                    selected === 'Service'
                      ? 'white'
                      : isPressed
                        ? 'coolGray.200'
                        : isHovered
                          ? 'coolGray.100'
                          : 'white'
                  }
                  shadow={selected === 'Service' ? 2 : 0.1}>
                  <Service
                    name="dashboard-customize"
                    size={24}
                    color={selected === 'Service' ? '#F56A02' : 'black'}
                  />
                  <Text
                    fontSize="lg"
                    fontWeight={selected === 'Service' ? 'bold' : 'normal'}
                    color={selected === 'Service' ? '#F56A02' : 'black'}>
                   {t('Service')}
                  </Text>
                </Flex>
              );
            }}
          </Pressable>

          <Pressable onPress={() => handlePress('privacy')}>
            {({ isHovered, isPressed }) => {
              return (
                <Flex
                  style={{ gap: 18 }}
                  flexDirection={'row'}
                  padding={3}
                  alignItems={'center'}
                  borderRadius={selected === 'privacy' ? 8 : 0}
                  bg={
                    selected === 'privacy'
                      ? 'white'
                      : isPressed
                        ? 'coolGray.200'
                        : isHovered
                          ? 'coolGray.100'
                          : 'white'
                  }
                  shadow={selected === 'privacy' ? 2 : 0.1}>
                  <Privacy
                    name="privacy-tip"
                    size={24}
                    color={selected === 'privacy' ? '#F56A02' : 'black'}
                  />
                  <Text
                    fontSize="lg"
                    fontWeight={selected === 'privacy' ? 'bold' : 'normal'}
                    color={selected === 'privacy' ? '#F56A02' : 'black'}>
                    {t('Privacy_Policy')}
                  </Text>
                </Flex>
              );
            }}
          </Pressable>
          <Pressable onPress={() => handlePress('faq')}>
            {({ isHovered, isPressed }) => {
              return (
                <Flex
                  style={{ gap: 18 }}
                  flexDirection={'row'}
                  padding={3}
                  alignItems={'center'}
                  borderRadius={selected === 'faq' ? 8 : 0}
                  bg={
                    selected === 'faq'
                      ? 'white'
                      : isPressed
                        ? 'coolGray.200'
                        : isHovered
                          ? 'coolGray.100'
                          : 'white'
                  }
                  shadow={selected === 'faq' ? 2 : 0.1}>
                  <FAQ
                    name="questioncircle"
                    size={24}
                    color={selected === 'faq' ? '#F56A02' : 'black'}
                  />
                  <Text
                    fontSize="lg"
                    fontWeight={selected === 'faq' ? 'bold' : 'normal'}
                    color={selected === 'faq' ? '#F56A02' : 'black'}>
                   {t('FAQs')}  
                  </Text>
                </Flex>
              );
            }}
          </Pressable>
          <Pressable onPress={() => handlePress('Contact')}>
            {({ isHovered, isPressed }) => {
              return (
                <Flex
                  style={{ gap: 18 }}
                  flexDirection={'row'}
                  padding={3}
                  alignItems={'center'}
                  borderRadius={selected === 'Contact' ? 8 : 0}
                  bg={
                    selected === 'Contact'
                      ? 'white'
                      : isPressed
                        ? 'coolGray.200'
                        : isHovered
                          ? 'coolGray.100'
                          : 'white'
                  }
                  shadow={selected === 'Contact' ? 2 : 0.1}>
                  <Contact
                    name="quick-contacts-mail"
                    size={24}
                    color={selected === 'Contact' ? '#F56A02' : 'black'}
                  />
                  <Text
                    fontSize="lg"
                    fontWeight={selected === 'Contact' ? 'bold' : 'normal'}
                    color={selected === 'Contact' ? '#F56A02' : 'black'}>
                     {t('Contact_us')} 
                  </Text>
                </Flex>
              );
            }}
          </Pressable>
        </VStack>
      </Flex>
    </ScrollView>
  );
};

export default SideNav;
