import { Flex, Icon } from '@chakra-ui/react';
import { BsArrowUpRightCircle, BsChatDots } from 'react-icons/bs';
import { GrAdd } from 'react-icons/gr';
import {
  IoFilterCircleOutline,
  IoNotificationsOutline,
  IoVideocamOutline,
} from 'react-icons/io5';

export const Icons = () => (
  <Flex>
    <Flex display={{ base: 'none', md: 'flex' }}>
      <Flex
        mx={1.5}
        p={1}
        cursor="pointer"
        borderRadius={4}
        _hover={{ bg: 'gray.200' }}
      >
        <Icon as={BsArrowUpRightCircle} fontSize={20} alignSelf="center" />
      </Flex>
      <Flex
        mx={1.5}
        p={1}
        cursor="pointer"
        borderRadius={4}
        _hover={{ bg: 'gray.200' }}
      >
        <Icon as={IoFilterCircleOutline} fontSize={22} alignSelf="center" />
      </Flex>
      <Flex
        mx={1.5}
        p={1}
        cursor="pointer"
        borderRadius={4}
        _hover={{ bg: 'gray.200' }}
      >
        <Icon as={IoVideocamOutline} fontSize={22} alignSelf="center" />
      </Flex>
    </Flex>
    <>
      <Flex
        mx={1.5}
        p={1}
        cursor="pointer"
        borderRadius={4}
        _hover={{ bg: 'gray.200' }}
      >
        <Icon as={BsChatDots} fontSize={20} alignSelf="center" />
      </Flex>
      <Flex
        mx={1.5}
        p={1}
        cursor="pointer"
        borderRadius={4}
        _hover={{ bg: 'gray.200' }}
      >
        <Icon as={IoNotificationsOutline} fontSize={20} alignSelf="center" />
      </Flex>
      <Flex
        display={{ base: 'none', md: 'flex' }}
        mx={1.5}
        p={1}
        cursor="pointer"
        borderRadius={4}
        _hover={{ bg: 'gray.200' }}
      >
        <Icon as={GrAdd} fontSize={20} alignSelf="center" />
      </Flex>
    </>
  </Flex>
);
