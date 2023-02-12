import { Flex } from '@chakra-ui/react';
import { User } from 'firebase/auth';
import { AuthModal } from '../../Modal/Auth/AuthModal';
import { AuthButtons } from './AuthButtons';
import { Icons } from './Icons';
import { UserMenu } from './UserMenu';

type RightContentProps = {
  user?: User | null;
};

export const RightContent = ({ user }: RightContentProps) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? <Icons /> : <AuthButtons />}
        <UserMenu user={user} />
      </Flex>
    </>
  );
};
