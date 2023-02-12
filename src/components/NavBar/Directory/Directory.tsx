import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, Icon, Menu, MenuButton, MenuList, Text } from '@chakra-ui/react';
import { TiHome } from 'react-icons/ti';
import { Communities } from './Communities';

export const Directory = () => {
  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        p="0px 6px"
        borderRadius="4px"
        mr={2}
        ml={{ base: 0, md: 2 }}
        _hover={{ outline: '1px solid', outlineColor: 'gray.200' }}
      >
        <Flex
          align="center"
          justify="space-between"
          width={{ base: 'auto', lg: '200px' }}
        >
          <Flex align="center">
            <Icon
              fontSize={{ base: '20px', md: '24px' }}
              mr={{ base: 1, md: 2 }}
              as={TiHome}
            />
            <Flex display={{ base: 'none', md: 'flex' }}>
              <Text fontWeight={600} fontSize="10pt">
                Home
              </Text>
            </Flex>
          </Flex>
          <ChevronDownIcon color="gray.500" />
        </Flex>
      </MenuButton>
      <MenuList>
        <Communities />
      </MenuList>
    </Menu>
  );
};
