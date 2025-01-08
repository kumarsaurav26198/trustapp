import React from 'react';
import {View, Text, Box, ScrollView, Heading} from 'native-base';
import {Linking} from 'react-native';
import { t } from 'i18next';
const Privacy = () => {
  const Privacy_Policy_collection_items = t('Privacy_Policy_collection_items', { returnObjects: true });

  console.log(Privacy_Policy_collection_items); 

  console.log(Privacy_Policy_collection_items)
  const handlePress = () => {
    Linking.openURL('https://lsstrust.org.in/');
  };
  return (
    <ScrollView>
      <View>
        <Box p="6" m="3" bg="gray.50" borderRadius="md" shadow={6}>
          <Text
            fontWeight="bold"
            fontSize={20}
            mb={4}
            textAlign={'center'}
            style={{cursor: 'pointer'}}>
            {t('Privacy_Policy')}
          </Text>
          <Text fontSize={16} lineHeight="lg" color="gray.600" mb="4">
          {t('Privacy_Policy_heading1')} { ''}
            <Text
              style={{color: 'blue', textDecorationLine: 'underline'}}
              onPress={handlePress}>
              www.lsstrust.org.in
            </Text>{' '}
            {t('Privacy_Policy_heading2')}
          </Text>

          <Box>
            <Heading
              size="md"
              mt="10"
              mb="2"
              color="gray.700"
              fontWeight="bold">
          {t('Privacy_Policy_collection_title')}
            </Heading>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
            {t('Privacy_Policy_collection_content')}
            </Text>
            <Text>
            {Array.isArray(Privacy_Policy_collection_items) &&
              Privacy_Policy_collection_items.map((item, index) => (
                <Text key={index}>• {item} :- {`\n`}</Text>
              ))}
              {/* <Text>• </Text>Name{'\n'}
              <Text>• </Text>Age{'\n'}
              <Text>• </Text>Occupation{'\n'}
              <Text>• </Text>Email and postal address{'\n'}
              <Text>• </Text>Telephone number{'\n'}
              <Text>• </Text>Payment processing details{'\n'}
              <Text>• </Text>Limited personal details{'\n'}
              <Text>• </Text>Any other data the website may require */}
            </Text>
          </Box>

          <Box>
            <Heading
              size="md"
              mt="10"
              mb="2"
              color="gray.700"
              fontWeight="bold">
              2. Use of Personal Information
            </Heading>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
              LSSF TRUST uses personal information for the following purposes:
            </Text>
            <Text>
              <Text>• </Text>Sending newsletters, updates, and promotional
              materials related to our activities.{'\n'}
              <Text>• </Text>Processing donations and providing receipts.{'\n'}
              <Text>• </Text>Maintaining an internal confidential database of
              all personal information collected from visitors to the Site.
              {'\n'}
              <Text>• </Text>Evaluating and administering the Site's activities,
              responding to concerns, and assessing visitor trends.
            </Text>
          </Box>

          <Box>
            <Heading
              size="md"
              mt="10"
              mb="2"
              color="gray.700"
              fontWeight="bold">
              3. Disclosure of Personal Information
            </Heading>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
              Access to personal information is limited to authorized personnel
              within LSSF TRUST. We may share personal information with third
              parties involved in the operation of our Site, such as payment
              processors or email service providers. LSSF TRUST may also
              disclose personal information if required by law or to protect the
              rights and property of LSSF TRUST and its stakeholders.
            </Text>
          </Box>

          <Box>
            <Heading
              size="md"
              mt="10"
              mb="2"
              color="gray.700"
              fontWeight="bold">
              4. Security
            </Heading>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
              LSSF TRUST uses appropriate security measures to protect your
              personal information. However, we cannot guarantee the absolute
              security of your data.
            </Text>
          </Box>

          <Box>
            <Heading
              size="md"
              mt="10"
              mb="2"
              color="gray.700"
              fontWeight="bold">
              5. Copyright Protection
            </Heading>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
              All content on this Site, including graphics, text, logos, and
              software, is the property of LSSF TRUST and protected by copyright
              laws. Unauthorized reproduction or use of the content is
              prohibited.
            </Text>
          </Box>

          <Box>
            <Heading
              size="md"
              mt="10"
              mb="2"
              color="gray.700"
              fontWeight="bold">
              6. Disclaimer
            </Heading>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
              LSSF TRUST does not guarantee the accuracy or completeness of the
              information on the Site. Use of the Site and its content is at
              your own risk.
            </Text>
          </Box>

          <Box>
            <Heading
              size="md"
              mt="10"
              mb="2"
              color="gray.700"
              fontWeight="bold">
              7. Changes to this Privacy Policy
            </Heading>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
              LSSF TRUST reserves the right to update this Privacy Policy at any
              time. Changes will be posted on this page with an updated
              effective date.
            </Text>
          </Box>
        </Box>

        <Box p="6" m="3" bg="gray.50" borderRadius="md" shadow={6}>
          <Text
            fontWeight="bold"
            fontSize={20}
            mb={4}
            textAlign={'center'}
            style={{cursor: 'pointer'}}>
            Terms & Conditions
          </Text>
          <Text fontSize={16} lineHeight="lg" color="gray.600" mb="4">
            Welcome to{' '}
            <Text
              style={{color: 'blue', textDecorationLine: 'underline'}}
              onPress={handlePress}>
              www.lsstrust.org.in
            </Text>{' '}
            By using our website, you agree to comply with and be bound by the
            following terms and conditions:
          </Text>

          <Box>
            <Heading
              size="md"
              mt="10"
              mb="2"
              color="gray.700"
              fontWeight="bold">
              1. Use of the Website
            </Heading>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
              The content on this Site is for general information and use only.
              It is subject to change without notice. You agree to use the Site
              for lawful purposes only.
            </Text>
          </Box>

          <Box>
            <Heading
              size="md"
              mt="10"
              mb="2"
              color="gray.700"
              fontWeight="bold">
              2. Intellectual Property
            </Heading>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
              All materials on this Site, including text, images, and software,
              are the property of LSSF TRUST. Unauthorized use or reproduction
              is prohibited.
            </Text>
          </Box>

          <Box>
            <Heading
              size="md"
              mt="10"
              mb="2"
              color="gray.700"
              fontWeight="bold">
              3. Limitation of Liability
            </Heading>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
              LSSF TRUST does not warrant the accuracy, completeness, or
              suitability of the information on this Site for any particular
              purpose. Your use of the Site is at your own risk. We are not
              liable for any damages arising from your use of the Site.
            </Text>
          </Box>

          <Box>
            <Heading
              size="md"
              mt="10"
              mb="2"
              color="gray.700"
              fontWeight="bold">
              4. External Links
            </Heading>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
              The Site may contain links to other websites. LSSF TRUST is not
              responsible for the content or privacy practices of these external
              sites.
            </Text>
          </Box>

          <Box>
            <Heading
              size="md"
              mt="10"
              mb="2"
              color="gray.700"
              fontWeight="bold">
              5. Governing Law
            </Heading>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
              These terms and conditions are governed by the laws of India. Any
              disputes arising from the use of the Site will be subject to the
              jurisdiction of the courts in India.
            </Text>
          </Box>

          <Box>
            <Heading
              size="md"
              mt="10"
              mb="2"
              color="gray.700"
              fontWeight="bold">
              6. Changes to Terms & Conditions
            </Heading>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
              LSSF TRUST reserves the right to modify these terms and conditions
              at any time. Changes will be posted on this page with an updated
              effective date.
            </Text>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
              By using our Site, you agree to these terms and conditions. If you
              do not agree, please do not use our Site.
            </Text>
            <Text fontSize={16} lineHeight="lg" color="gray.600" mb="4">
              For any questions or concerns, please contact us at{' '}
              <Text
                style={{color: 'blue', textDecorationLine: 'underline'}}
                onPress={handlePress}>
                www.lsstrust.org.in
              </Text>{' '}
            </Text>
          </Box>
        </Box>
      </View>
    </ScrollView>
  );
};

export default Privacy;
