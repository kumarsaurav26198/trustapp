import React from 'react';
import {Dimensions, ImageBackground} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {Box, Flex, Image, Text} from 'native-base';

const First = () => {
  const {width} = Dimensions.get('window');

  const data = [
    // {
    //   id: '1',
    //   title: 'दवा वितरण :-',
    //   images: require('../Assests/About/a1.png'),
    //   h1: 'स्वर्गीय सुरेश सिंह फाउंडेशन ट्रस्ट द्वारा आयोजित स्वास्थ्य जांच के दौरान लोगों को डॉक्टर द्वारा लिखित दवाइयां उपलब्ध कराई जाती हैं। यह कार्य ट्रस्ट के मिशन का एक महत्वपूर्ण हिस्सा है।',
    // },
    {
      id: '8',
      title: 'महिलाओं को आत्मनिर्भर बनाने हेतु वित्तीय सहायता :-',
      images: require('../Assests/About/a8.png'),
      h1: 'महिलाओं को अपनी आजीविका हेतु किसी पर निर्भर न रहना पड़े, इसके लिए ट्रस्ट जरूरतमंद महिलाओं को आत्मनिर्भर बनाने हेतु महिला सशक्तिकरण के तहत वित्तीय सहायता प्रदान करता है। इस राशि से वे स्वरोजगार स्थापित कर स्वावलंबी बन सकती हैं। ट्रस्ट समाज के कल्याण, विशेषकर महिलाओं के सम्मान के लिए हमेशा उनके साथ खड़ा रहता है।',
    },

    // {
    //   id: '2',
    //   title: 'छात्र-छात्राओं की दौड़ स्पर्धा :-',
    //   images: require('../Assests/About/a2.png'),
    //   h1: 'ट्रस्ट प्रतिवर्ष 12 से 16 वर्ष आयु के छात्र-छात्राओं का दौड़ स्पर्धा आयोजित करता है। इसकी निगरानी ट्रस्ट के अनुरोध पर पटना एथलेटिक्स संघ द्वारा निष्पक्ष रूप से किया जाता है एवं गणमान्य अतिथियों की उपस्थिति में प्रथम दस छात्र-छात्राओं को प्रोत्साहन राशि, प्रमाण पत्र एवं पदक से सम्मानित किया जाता हैं। यह कार्यक्रम न केवल शारीरिक आरोग्य को बढ़ावा देता है बल्कि अनुशासन जैसे मूल्यवान जीवन कौशल भी सिखाता है।',
    // },

    {
      id: '9',
      title: 'शैक्षिक जागरूकता कार्यक्रम :-',
      images: require('../Assests/About/a9.png'),
      h1: 'ट्रस्ट शिक्षा के महत्व और गरीबी रेखा के नीचे के परिवारों को उपलब्ध अवसरों के बारे में जागरूकता फैलाने हेतु शैक्षिक कार्यक्रम आयोजित करता है तथा साक्षरता, कौशल विकास और कला सीखने को बढ़ावा देने के लिए कार्यक्रम कराया जाता है। यहाँ जरूरतमन्द विद्यार्थियों (कक्षा 10th व 12th) को पंजीकरण हेतु सहायता राशि एवं लेखन सामाग्री वितरित किया जाता है । ',
    },

    // {
    //   id: '3',
    //   title: 'ग्रामीण महिला को आत्मनिर्भर बनाने हेतु सिलाई मशीन से सम्मानित',
    //   images: require('../Assests/About/a3.png'),
    //   h1: 'अति विशिष्ट कार्य को करने हेतु व्यावसायिक प्रशिक्षण आवश्यक है। यह आजीविका के लिए आवश्यक कौशल और ज्ञान से सशक्त बनाता है। निपुण ग्रामीण जरूरतमंद माताओं-बहनों को जीविकोपार्जन एवं स्वावलंबी बनाने हेतु ट्रस्ट द्वारा प्रोत्साहन स्वरूप सिलाई मशीनें भेंट कीं जाती है।',
    // },

    {
      id: '10',
      title: 'ग्रामीण स्कूल में शुद्ध शीतल पेयजल हेतु वाटर कूलर / आर० ओ० :-',
      images: require('../Assests/About/a10.png'),
      h1: 'सामाजिक एवं धर्मार्थ कार्यो में निरंतर सक्रीय रहने वाले ट्रस्ट ने ग्रामीण छात्र-छात्राओं के स्वस्थ काया एवं गर्मी में शीतल जल हेतु ग्रामीण विद्यालय में प्यूरीफायर संयंत्र / आर० ओ० लगाए हैं।',
    },

    // {
    //   id: '4',
    //   title: 'किसान भाइयों के सशक्तिकरण हेतु तकनीकी यंत्र वितरण :-',
    //   images: require('../Assests/About/a4.png'),
    //   h1: 'किसान भाइयों की फसलें कीटों और बीमारियों से प्रभावित न हो, इसके लिए ट्रस्ट ने कीटनाशकों के छिड़काव हेतु बैटरी संचालित आधुनिक कृषि यंत्र वितरित किए हैं। इसके अलावा कृषि से जुड़ी कई जानकारियां भी दी गई हैं। इससे उनकी उपज में उल्लेखनीय वृद्धि दर्ज की गई है, जो समृद्ध समाज में अहम भूमिका निभा रही है।',
    // },

    {
      id: '11',
      title:
        'ग्रामीणों के लिए धार्मिक कार्य सुगम बनाने हेतु बोरवेल पंप की स्थापना :-',
      images: require('../Assests/About/a11.png'),
      h1: 'ट्रस्ट द्वारा ग्रामीणों को स्वच्छ पेयजल की निर्बाध आपूर्ति तथा धार्मिक गतिविधियों कार्य हेतु हो रहे असुविधा के समाधान के लिए बोरवेल लगाए गए हैं। बोरवेल लगने से स्थानीय लोगों, विशेषकर महिलाओं एवं बच्चों को काफी सुविधा मिली है, जिससे उन्हें धार्मिक कार्य (पूजा-पाठ) के लिए अधिक समय मिल रहा है।',
    },

    // {
    //   id: '5',
    //   title: 'कम्बल एवं अंग वस्त्र वितरण :-',
    //   images: require('../Assests/About/a5.png'),
    //   h1: 'ठंड के कारण कठिनाइयों का सामना कर रहे जरूरतमंद लोगों की तत्काल जरूरतों को पूरा करने के लिए ट्रस्ट ने अपनी प्रतिबद्धता दिखाते हुए कंबल वितरित किए। इसी क्रम में ट्रस्ट ने जरूरतमंद महिलाओं को अंग वस्त्र वितरित किए।',
    // },

    {
      id: '12',
      title: 'ऑटो-रिक्शा वितरण :-',
      images: require('../Assests/About/a12.png'),
      h1: 'ट्रस्ट ने शिक्षित बेरोजगार ग्रामीण को व्यावसायिक वाहन (ऑटो रिक्शा) वितरित किए, जिसका उद्देश्य वे आत्मनिर्भर बन अपने स्वजनों का भरण-पोषण कर सकें। ट्रस्ट का यह कार्य आत्मनिर्भर एवं समृद्ध समाज की ओर एक कदम है।',
    },
    // {
    //   id: '6',
    //   title: 'दिव्यांगजन (भाई-बहनों) को तिपहिया साइकिल :-',
    //   images: require('../Assests/About/a6.png'),
    //   h1: 'ग्रामीण क्षेत्रों में दिव्यांगजन (भाई-बहनों) के आवागमन में सुविधा हेतु ट्रस्ट ने उन्हें तिपहिया साइकिल प्रदान कीं, जिससे उनकी गतिशीलता में उल्लेखनीय सुधार हुआ है। ये तिपहिया साइकिल विभिन्न दिव्यांगजनों को ध्यान में रखकर बनाई गई हैं।',
    // },
    {
      id: '13',
      title: 'फॉगिंग मशीन एवं कीटनाशक यंत्र वितरण :-',
      images: require('../Assests/About/a13.png'),
      h1: 'ग्रामीणों को संक्रामक बीमारियों से बचाने हेतु ट्रस्ट ने फॉगिंग मशीन एवं कीटनाशक उपकरण वितरित किए हैं, जिनके माध्यम से समय-समय पर ग्राम में फॉगिंग की जाती है। यह अभियान ग्रामीण क्षेत्रों को स्वच्छ एवं स्वस्थ बनाने में महत्वपूर्ण भूमिका निभा रहा है।',
    },
    // {
    //   id: '7',
    //   title: 'वृक्षारोपण कार्यक्रम :-',
    //   images: require('../Assests/About/a7.png'),
    //   h1: 'धरती पर वृक्ष के बिना मनुष्य, पशु, पक्षी या किसी भी जीव-जंतु के जीवन की कल्पना नहीं की जा सकती। ट्रस्ट वृक्षों के महत्व और पर्यावरण संरक्षण के बारे में जागरूकता फैलाने हेतु वृक्षारोपण कार्यक्रम आयोजित करता है।',
    // },

    {
      id: '14',
      title: 'लैपटॉप (कंप्यूटर) वितरण :-',
      images: require('../Assests/About/a14.png'),
      h1: 'ट्रस्ट द्वारा लैपटॉप (कंप्यूटर) के वितरण से लोगों को आधुनिक तकनीक से जुड़ने में मदद मिली है, जिससे उन्हें शिक्षा, कौशल विकास और आर्थिक अवसरों तक पहुंचने का अवसर मिला है। इस पहल के माध्यम से ट्रस्ट ने डिजिटल समावेशन और सामाजिक-आर्थिक उन्नति को बढ़ावा दिया है।',
    },

    {
      id: '15',
      title:
        'बहनों के विवाहोत्सव पर उनके उज्जवल भविष्य हेतु जरूरत स्वरूप सामग्री भेंट :-',
      images: require('../Assests/About/a15.png'),
      h1: 'ट्रस्ट द्वारा बहन-बेटियों के विवाहोत्सव के शुभ अवसर पर उनके उज्ज्वल भविष्य हेतु आवश्यक सामग्री भेंट की है एवं भविष्य में भी ऐसा किया जाता रहेगा।',
    },

    {
      id: '16',
      title: 'सुगम आवागमन हेतु चौक-चौराहों पर एलईडी लगाया गया :-',
      images: require('../Assests/About/a16.png'),
      h1: 'ट्रस्ट की ओर से रात्रि के समय राहगीरों के आने-जाने वाले मार्ग को सुगम एवं सुरक्षित रखने हेतु चौक-चौराहों पर एलईडी लाइटों की व्यवस्था की गई है।',
    },
  ];

  const renderItem = ({item}) => (
    <Flex
      background={'#EFEFEF'}
      width={'98%'}
      height={'auto'}
      style={{gap: 10}}>
      <Text
        color={'#F56A02'}
        fontSize={18}
        fontWeight={'bold'}
        width={'90%'}
        margin={'auto'}
        textAlign={'center'}>
        {item.title}
      </Text>

      <Box>
        <Image
          style={{resizeMode: 'contain', width: '100%'}}
          source={item.images}
          alt={item.id}
        />
      </Box>

      <Flex width="80%" margin={'auto'} style={{gap: 10}}>
        <Text fontSize={14} textAlign={'justify'}>
          {item.h1}
        </Text>
        <Text fontSize={14} textAlign={'justify'}>
          {item.h2}
        </Text>
      </Flex>
    </Flex>
  );

  return (
    <>
      <Carousel
        loop
        width={width}
        height={400}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={4000}
        renderItem={renderItem}
      />
    </>
  );
};

export default First;
