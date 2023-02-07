import { Button, Flex } from '@chakra-ui/react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp';
import { AuthModal } from '../../Modal/Auth/AuthModal';
import { AuthButtons } from './AuthButtons';

type RightContentProps = {
  user: any;
};

export const RightContent = ({ user }: RightContentProps) => {
  const [logout] = useSignOut(auth);

  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? <Button onClick={logout}>Log Out</Button> : <AuthButtons />}
      </Flex>
    </>
  );
};
