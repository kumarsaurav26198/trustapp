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
      question: 'How can I donate money online to LSSF TRUST?',
      answer:
        'You can donate to LSSF TRUST by visiting our official website www.lssftrust.org. Simply click on the "Donate Now" button, choose your preferred donation amount, and follow the instructions to complete your donation. We accept various payment methods, including credit/debit cards and online banking.',
    },
    {
      question: 'Which are the best online donation tools for non-profits?',
      answer:
        "For optimal vehicle health, it's recommended to schedule a standard service every 6 months or 10,000 kilometers, whichever comes first. Regular maintenance helps maintain performance, identify potential issues early, and extend the lifespan of your car.",
    },
    {
      question: 'What is the best online fundraising platform for LSSF TRUST?',
      answer:
        'LSSF TRUST uses trusted and secure online fundraising platforms to facilitate donations. While we accept direct donations through our website, we also collaborate with platforms like GiveIndia and GlobalGiving, which are known for their reliability and wide reach. These platforms offer a seamless donation experience and ensure that your contributions reach us safely.',
    },
    {
      question: 'How can I get donations for an NGO like LSSF TRUST?',
      answer: 'To get donations for LSSF TRUST, we:',
      details: [
        'Build a Strong Online Presence: Ensure our website and social media are regularly updated with our activities and impact stories.',
        'Engage with Donors: Communicate regularly with our donors, sharing success stories and updates.',
        'Use Online Fundraising Platforms: Utilize platforms like GiveIndia, GlobalGiving, and others to reach a wider audience.',
        'Host Virtual Events: Organize webinars, online auctions, and virtual meet-and-greets to engage potential donors.',
      ],
    },
    {
      question: 'What is the best online fundraising platform?',
      answer: 'For LSSF TRUST, the best online fundraising platforms include:',
      details: [
        'GiveIndia: A reputable platform that supports various non-profits in India.',
        'GlobalGiving: An international platform that helps NGOs raise funds for specific projects.',
        'Donorbox: A versatile platform that integrates easily with websites and supports recurring donations.',
        'PayPal Giving Fund: Offers a trusted and global platform for receiving donations.',
      ],
    },
    {
      question:
        'What is the best way to accept donations online for LSSF TRUST?',
      answer:
        'The best way to accept donations online is through a secure, user-friendly platform that supports various payment methods. LSSF TRUST uses a combination of direct website donations, secure payment gateways like Razorpay, and trusted fundraising platforms like GiveIndia. This approach ensures flexibility and security for our donors.',
    },
    {
      question: 'Is it safe to donate online to LSSF TRUST?',
      answer:
        'Yes, it is safe to donate online to LSSF TRUST. We use secure payment gateways and adhere to the latest security standards to protect your personal and financial information. Our website and partnered platforms employ SSL encryption and other security measures to ensure your data is safe.',
    },
    {
      question: 'Tips to Help Non-profits Get Donations Online',
      answer:
        'To effectively secure online donations, LSSF TRUST employs the following strategies:',
      details: [
        'Clear and Compelling Message: Clearly articulate our mission and the impact of donations.',
        'User-Friendly Website: Ensure our website is easy to navigate, with visible "Donate Now" buttons.',
        'Multiple Payment Options: Offer various payment methods to cater to different donors.',
        'Regular Updates: Keep donors informed about how their contributions are making a difference.',
        'Engage on Social Media: Use social media platforms to reach a broader audience and encourage donations.',
      ],
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
          LSSF TRUST : Online Donations and Fundraising FAQs
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
