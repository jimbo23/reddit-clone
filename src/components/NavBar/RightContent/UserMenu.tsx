import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { signOut, User } from 'firebase/auth';
import { CgProfile } from 'react-icons/cg';
import { FaRedditSquare } from 'react-icons/fa';
import { MdOutlineLogin } from 'react-icons/md';
import { VscAccount } from 'react-icons/vsc';
import { auth } from '@firebase/clientApp';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@atoms/authModalAtom';
import { IoSparkles } from 'react-icons/io5';

type UserMenuProps = {
  user?: User | null;
};

export const UserMenu = ({ user }: UserMenuProps) => {
  const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        p="0px 6px"
        borderRadius="4px"
        _hover={{ outline: '1px solid', outlineColor: 'gray.200' }}
      >
        <Flex align="center">
          {user ? (
            <>
              <Icon as={FaRedditSquare} fontSize={24} mr={1} color="gray.300" />
              <Flex
                direction="column"
                fontSize="8pt"
                mr={8}
                align="flex-start"
                display={{ base: 'none', lg: 'flex' }}
              >
                <Text>{user?.displayName || user.email?.split('@')[0]}</Text>
                <Flex>
                  <Icon as={IoSparkles} color="brand.100" mr={1} />
                  <Text color="gray.400">1 karma</Text>
                </Flex>
              </Flex>
            </>
          ) : (
            <Icon as={VscAccount} fontSize={24} color="gray.400" />
          )}
          <ChevronDownIcon color="gray.500" />
        </Flex>
      </MenuButton>
      {user ? (
        <MenuList>
          <MenuItem
            fontSize="10pt"
            fontWeight={700}
            _hover={{ bg: 'blue.500', color: 'white' }}
          >
            <Flex align="center">
              <Icon as={CgProfile} fontSize={20} mr={2} />
              Profile
            </Flex>
          </MenuItem>
          <MenuDivider />
          <MenuItem
            fontSize="10pt"
            fontWeight={700}
            _hover={{ bg: 'blue.500', color: 'white' }}
            onClick={() => signOut(auth)}
          >
            <Flex align="center">
              <Icon as={MdOutlineLogin} fontSize={20} mr={2} />
              Log Out
            </Flex>
          </MenuItem>
        </MenuList>
      ) : (
        <MenuList>
          <MenuItem
            fontSize="10pt"
            fontWeight={700}
            _hover={{ bg: 'blue.500', color: 'white' }}
            onClick={() => setAuthModalState({ open: true, view: 'login' })}
          >
            <Flex align="center">
              <Icon as={CgProfile} fontSize={20} mr={2} />
              Login / Sign Up
            </Flex>
          </MenuItem>
        </MenuList>
      )}
    </Menu>
  );
};
