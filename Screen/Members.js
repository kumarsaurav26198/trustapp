import React from 'react';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
} from 'native-base';

const Members = () => {
  const board = [
    {
      id: '1',
      name: 'Kshitij Ranjan',
      title: '(Founder Chairman)',
      img: require('../Assests/Members/b1.jpg'),
    },
  ];

  const advocate = [
    { id: "1", name: "Advocate Naveen Kumar Raheja", title: "(Legal Advisor)", img:require("../Assests/Members/a1.jpeg")  },
  ];

  const activem = [
    {id: '6', name: 'Gautam Kumar'},

    {id: '1', name: 'Subodh Kumar Singh'},
    {id: '2', name: 'Sandeep Kumar'},
    {id: '3', name: 'Mukesh Kumar'},
    {id: '4', name: 'Ashutosh Kumar Gupta'},
    {id: '5', name: 'Harish Kumar'},
  ];

  return (
    <ScrollView style={{width: '100%', height: '100%'}}>
      {/* Board Members Section */}
      <Flex style={{gap: 20}} px={4}>
        <Text
          color={'#F56A02'}
          textAlign={'center'}
          fontWeight={900}
          fontSize={24}>
          Board Member
        </Text>
        {board.map(ele => (
          <Flex
            key={ele.id} // Ensure each item has a unique key
            width={'90%'}
            borderRadius={'xl'}
  
            margin={'auto'}
            borderWidth={1}
            borderColor={'grey'}
            style={{gap: 10}}
            alignItems={'center'}>
            <Box width={'100%'} height={320}>
              <Image
              borderTopRadius={"xl"}
                resizeMode="cover"
                width={'100%'}
                height={'100%'}
                source={ele.img}
                alt={ele.id}
              />
            </Box>
            <Flex alignItems={'center'}>
              <Text fontWeight={700} fontSize={20} color={'#F56A02'}>
                {ele.name}
              </Text>
              <Text fontWeight={600} fontSize={16}>
                {ele.title}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>

      <Flex style={{gap: 20}} px={4} mt={10}>
        <Text
          color={'#F56A02'}
          textAlign={'center'}
          fontWeight={900}
          fontSize={24}>
          Legal Advisor
        </Text>
        {advocate.map(ele => (
          <Flex
            key={ele.id} // Ensure each item has a unique key
            width={'90%'}
            borderRadius={'xl'}
  
            margin={'auto'}
            borderWidth={1}
            borderColor={'grey'}
            style={{gap: 10}}
            alignItems={'center'}>
            <Box width={'100%'} height={320}>
              <Image
              borderTopRadius={"xl"}
                resizeMode="cover"
                width={'100%'}
                height={'100%'}
                source={ele.img}
                alt={ele.id}
              />
            </Box>
            <Flex alignItems={'center'}>
              <Text fontWeight={700} fontSize={20} color={'#F56A02'} textAlign={"center"}>
                {ele.name}
              </Text>
              <Text fontWeight={600} fontSize={16}>
                {ele.title}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>


      {/* Trainee Members Section */}
      {/* <Box mt={20} px={4}>
        <Text
          color={'#F56A02'}
          textAlign={'center'}
          fontWeight={900}
          fontSize={24}
          mb={4}>
                     Legal Advisor

        </Text>
        <VStack space={4}>
          {advocate
            .reduce((rows, item, index) => {
              if (index % 2 === 0) rows.push([]);
              rows[rows.length - 1].push(item);
              return rows;
            }, [])
            .map((row, rowIndex) => (
              <HStack
                key={rowIndex} // Key for each row
                space={4}
                mb={4}
                width="100%"
                justifyContent="center">
                {row.map(ele => (
                  <Box
                    key={ele.id} // Key for each item
                    width="50%"
                    borderRadius="xl"

                    borderWidth={1}
                    borderColor={'grey'}
                    alignItems="center"
                    overflow="hidden">
                    <Image
                      resizeMode="cover"
                      width="100%"
                      height={200}
                      source={ele.img}
                      alt={ele.id}
                    />
                    <VStack alignItems="center" mt={2}>
                      <Text fontWeight={700} fontSize={20} color={'#F56A02'}>
                        {ele.name}
                      </Text>
                      <Text fontWeight={600} fontSize={16}>
                        {ele.title}
                      </Text>
                    </VStack>
                  </Box>
                ))}
              </HStack>
            ))}
        </VStack>
      </Box> */}

      {/* active member */}

      <Flex alignItems={'start'} py={12} px={4}>
        <Heading color={'#F56A02'}>Volunteers</Heading>
        {activem.map(ele => (
          <Text>⦿ {ele.name}</Text>
        ))}
      </Flex>
    </ScrollView>
  );
};

export default Members;
