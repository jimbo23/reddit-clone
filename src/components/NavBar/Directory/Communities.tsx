import { Flex, Icon, MenuItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import { GrAdd } from 'react-icons/gr';
import { CreateCommunityModal } from '../../Modal/CreateCommunity/CreateCommunityModal';

type CommunitiesProps = {};

export const Communities = ({}: CommunitiesProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
      <MenuItem
        w="100%"
        fontSize="10pt"
        _hover={{ backgroundColor: 'gray.100' }}
        onClick={() => setOpen(true)}
      >
        <Flex align="center">
          <Icon as={GrAdd} fontSize={20} mr={2} />
          Create Community
        </Flex>
      </MenuItem>
    </>
  );
};
