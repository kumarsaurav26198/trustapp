import { t } from 'i18next';
import {Box, Flex, ScrollView, Text, View} from 'native-base';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Collapsible from 'react-native-collapsible';
import Plus from 'react-native-vector-icons/Entypo';

const Fandq = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const toggleQuestion = index => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };
  const faqData = [
    {
      question: `${t('question_FAQ1')}`,
      answer: `${t('answer_FAQ1')}`,
    },
    {
      question: `${t('question_FAQ2')}`,
      answer: `${t('answer_FAQ2')}`,
    },
    {
      question: `${t('question_FAQ3')}`,
      answer: `${t('answer_FAQ3')}`,
    },
    {
      question: `${t('question_FAQ4')}`,
      answer: `${t('answer_FAQ4')}`,
      details: t('details_FAQ4', { returnObjects: true }),
      // details: [
      //   'Build a Strong Online Presence: Ensure our website and social media are regularly updated with our activities and impact stories.',
      //   'Engage with Donors: Communicate regularly with our donors, sharing success stories and updates.',
      //   'Use Online Fundraising Platforms: Utilize platforms like GiveIndia, GlobalGiving, and others to reach a wider audience.',
      //   'Host Virtual Events: Organize webinars, online auctions, and virtual meet-and-greets to engage potential donors.',
      // ],
    },
    {
      question: `${t('question_FAQ5')}`,
      answer: `${t('answer_FAQ5')}`,
      details: t('details_FAQ5', { returnObjects: true }),
      // details: [
      //   'GiveIndia: A reputable platform that supports various non-profits in India.',
      //   'GlobalGiving: An international platform that helps NGOs raise funds for specific projects.',
      //   'Donorbox: A versatile platform that integrates easily with websites and supports recurring donations.',
      //   'PayPal Giving Fund: Offers a trusted and global platform for receiving donations.',
      // ],
    },
    {
      question: `${t('question_FAQ6')}`,
      answer: `${t('answer_FAQ6')}`,
    },
    {
      question: `${t('question_FAQ7')}`,
      answer: `${t('answer_FAQ7')}`,
    },
    {
      question: `${t('question_FAQ8')}`,
      answer: `${t('answer_FAQ8')}`,
        details: t('details_FAQ8', { returnObjects: true }),
      // details: [
      //   'Clear and Compelling Message: Clearly articulate our mission and the impact of donations.',
      //   'User-Friendly Website: Ensure our website is easy to navigate, with visible "Donate Now" buttons.',
      //   'Multiple Payment Options: Offer various payment methods to cater to different donors.',
      //   'Regular Updates: Keep donors informed about how their contributions are making a difference.',
      //   'Engage on Social Media: Use social media platforms to reach a broader audience and encourage donations.',
      // ],
    },
  ];

  return (
    <ScrollView width={'100%'} height={'100%'}>
      <Flex width={'100%'} height={'100%'} pb={10} pt={2}>
        <Text
          textAlign={'center'}
          fontSize={20}
          width={'80%'}
          margin={'auto'}
          fontWeight={'bold'}
          color={'#F56A01'}
          mb={3}>
          LSSF TRUST : {t(`heading_FAQ`)}
        </Text>
        {faqData.map((item, index) => (
          <View
            key={index}
            style={{marginTop: 18, width: '90%', margin: 'auto'}}>
            <TouchableOpacity
              onPress={() => toggleQuestion(index)}
              style={{
                borderWidth: 0.7,
                padding: 10,
                borderRadius: 4,
              }}>
              <Flex flexDirection={'row'} justifyContent={'space-between'}>
                <Text style={{fontWeight: 'bold'}} fontSize={10} width={'90%'}>
                  {item.question}
                </Text>
                {activeQuestion === index ? (
                  <Plus name="minus" size={24} color={'#F56A01'} />
                ) : (
                  <Plus name="plus" size={24} color={'#F56A01'} />
                )}
              </Flex>

              {activeQuestion === index && (
                <Collapsible collapsed={false}>
                  <Text>{item.answer}</Text>
                  <Text>{item.a1}</Text>
                  {item.a1 ? (
                    <>
                      <Text>{item.a1}</Text>
                    </>
                  ) : null}
                  {item.details?.map(ele => (
                    <Flex style={{gap: 4}}>
                      <Text>⦿ {ele}</Text>
                    </Flex>
                  ))}
                </Collapsible>
              )}
            </TouchableOpacity>
          </View>
        ))}
      </Flex>
    </ScrollView>
  );
};

export default Fandq;
