import { Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '@firebase/clientApp';

export const OAuthButtons = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <Flex direction="column" w="100%" mb={4}>
      <Button variant="oauth" mb={2} onClick={() => signInWithGoogle()}>
        <Image src="/images/googlelogo.png" height="20px" alt="logo" mr={4} />
        Continue with Google
      </Button>
      <Button variant="oauth">Some Other Provider</Button>
    </Flex>
  );
};
