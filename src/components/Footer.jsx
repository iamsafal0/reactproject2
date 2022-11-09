import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={4}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Follow Us
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textAlign={['center','left']} textTransform={'uppercase'}>
            Video Point
          </Heading>
          <Text>All rights reserved</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
          <Button variant={'link'} colorScheme={'linkedin'}>
            <a target='blank' href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGvhZ9qUSZT_gAAAYRcDN4QdSzNTen4iggaVF1FbMJwdJVjl9Mzt8xN7fXrxYUTmEQZ-q7_z3dOVIYIcuqLb_h5ui67jP2E8VJbkLOLAHAGEBvY-B_XBA27n4D9h5FiGCf4yV4=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fsafal-vishwakarma-555a08211%2F">
              Linkedin
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
