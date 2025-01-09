import React from 'react';
import { View, Text, Box, ScrollView, Heading } from 'native-base';
import { Linking } from 'react-native';
import { t } from 'i18next';
const Privacy = () => {
  const Privacy_Policy_collection_items = t('Privacy_Policy_collection_items', {
    returnObjects: true,
  });
  const Privacy_Policy_collection_items2 = t('Privacy_Policy_collection_items2', {
    returnObjects: true,
  });




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
            style={{ cursor: 'pointer' }}>
            {t('Privacy_Policy')}
          </Text>
          <Text fontSize={16} lineHeight="lg" color="gray.600" mb="4">
            {t('Privacy_Policy_heading1')} {''}
            <Text
              style={{ color: 'blue', textDecorationLine: 'underline' }}
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
                  <Text key={index}>
                    • {item} :- {`\n`}
                  </Text>
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
              {t('Privacy_Policy_use_title2')}
            </Heading>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
              {t('Privacy_Policy_collection_content2')}
            </Text>
            {Array.isArray(Privacy_Policy_collection_items2) &&
              Privacy_Policy_collection_items2.map((item, index) => (
                <Text key={index}>
                  • {item} :- {`\n`}
                </Text>
              ))}
          </Box>

          <Box>
            <Heading
              size="md"
              mt="10"
              mb="2"
              color="gray.700"
              fontWeight="bold">
              {t('Privacy_Policy_use_title3')}
            </Heading>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
              {t('Privacy_Policy_collection_content3')}
              {/* Access to personal information is limited to authorized personnel
              within LSSF TRUST. We may share personal information with third
              parties involved in the operation of our Site, such as payment
              processors or email service providers. LSSF TRUST may also
              disclose personal information if required by law or to protect the
              rights and property of LSSF TRUST and its stakeholders. */}
            </Text>
          </Box>

          <Box>
            <Heading
              size="md"
              mt="10"
              mb="2"
              color="gray.700"
              fontWeight="bold">
              {t('Privacy_Policy_use_title4')}
            </Heading>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
              {t('Privacy_Policy_collection_content4')}
              {/* LSSF TRUST uses appropriate security measures to protect your
              personal information. However, we cannot guarantee the absolute
              security of your data. */}
            </Text>
          </Box>

          <Box>
            <Heading
              size="md"
              mt="10"
              mb="2"
              color="gray.700"
              fontWeight="bold">
              {t('Privacy_Policy_use_title5')}
            </Heading>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
              {t('Privacy_Policy_collection_content5')}
              {/* All content on this Site, including graphics, text, logos, and
              software, is the property of LSSF TRUST and protected by copyright
              laws. Unauthorized reproduction or use of the content is
              prohibited. */}
            </Text>
          </Box>

          <Box>
            <Heading
              size="md"
              mt="10"
              mb="2"
              color="gray.700"
              fontWeight="bold">
              {t('Privacy_Policy_use_title6')}
            </Heading>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
              {t('Privacy_Policy_collection_content6')}
              {/* LSSF TRUST does not guarantee the accuracy or completeness of the
              information on the Site. Use of the Site and its content is at
              your own risk. */}
            </Text>
          </Box>

          <Box>
            <Heading
              size="md"
              mt="10"
              mb="2"
              color="gray.700"
              fontWeight="bold">
              {t('Privacy_Policy_use_title7')}
            </Heading>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
              {t('Privacy_Policy_collection_content7')}
              {/* LSSF TRUST reserves the right to update this Privacy Policy at any
              time. Changes will be posted on this page with an updated
              effective date. */}
            </Text>
          </Box>
        </Box>

        <Box p="6" m="3" bg="gray.50" borderRadius="md" shadow={6}>
          <Text
            fontWeight="bold"
            fontSize={20}
            mb={4}
            textAlign={'center'}
            style={{ cursor: 'pointer' }}>
            {t('Term_condi__heading1')}

          </Text>
          <Text fontSize={16} lineHeight="lg" color="gray.600" mb="4">
            {t('Term_condi__heading2')}

            {' '}
            <Text
              style={{ color: 'blue', textDecorationLine: 'underline' }}
              onPress={handlePress}>
              www.lsstrust.org.in
            </Text>{' '}
            {' '}{t('Term_condi__heading3')}

          </Text>

          <Box>
            <Heading
              size="md"
              mt="10"
              mb="2"
              color="gray.700"
              fontWeight="bold">
            {t('Term_condi__collection_title')}
            </Heading>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
            {t('Term_condi__collection_content')}
            
              {/* The content on this Site is for general information and use only.
              It is subject to change without notice. You agree to use the Site
              for lawful purposes only. */}
            </Text>
          </Box>

          <Box>
            <Heading
              size="md"
              mt="10"
              mb="2"
              color="gray.700"
              fontWeight="bold">
              {t('Term_condi__use_title2')}
            </Heading>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
            {t('Term_condi__collection_content2')}
            </Text>
          </Box>

          <Box>
            <Heading
              size="md"
              mt="10"
              mb="2"
              color="gray.700"
              fontWeight="bold">
                {t('Term_condi__use_title3')}
            </Heading>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
            {t('Term_condi__collection_content3')}
              {/* LSSF TRUST does not warrant the accuracy, completeness, or
              suitability of the information on this Site for any particular
              purpose. Your use of the Site is at your own risk. We are not
              liable for any damages arising from your use of the Site. */}
            </Text>
          </Box>

          <Box>
            <Heading
              size="md"
              mt="10"
              mb="2"
              color="gray.700"
              fontWeight="bold">
              {t('Term_condi__use_title4')}
            </Heading>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
            {t('Term_condi__collection_content4')}
            </Text>
          </Box>

          <Box>
            <Heading
              size="md"
              mt="10"
              mb="2"
              color="gray.700"
              fontWeight="bold">
              {t('Term_condi__use_title5')}
            </Heading>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
            {t('Term_condi__collection_content5')}
            </Text>
          </Box>

          <Box>
            <Heading
              size="md"
              mt="10"
              mb="2"
              color="gray.700"
              fontWeight="bold">
               {t('Term_condi__use_title6')}
            </Heading>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
            {t('Term_condi__collection_content6')}
            </Text>
            <Text fontSize="md" lineHeight="lg" color="gray.600" mb="4">
            {t('Term_condi__by')}
            
              {/* By using our Site, you agree to these terms and conditions. If you
              do not agree, please do not use our Site. */}
            </Text>
            <Text fontSize={16} lineHeight="lg" color="gray.600" mb="4">
            {t('Term_condi__by2')}
              For any questions or concerns, please contact us at{' '}
              <Text
                style={{ color: 'blue', textDecorationLine: 'underline' }}
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
