import { authModalState } from '@atoms/authModalAtom';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { auth } from '@firebase/clientApp';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';

export const SignUp = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [inputError, setInputError] = useState('');

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (signUpForm.password !== signUpForm.confirmPassword) {
      setInputError('Passwords do not match');
    }

    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name="email"
        placeholder="email"
        type="email"
        mb={2}
        onChange={onChange}
        value={signUpForm.email}
        fontSize="10pt"
        _placeholder={{ color: 'gray.500' }}
        _hover={{
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        _focus={{
          outline: 'none',
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        bg="gray.50"
      />
      <Input
        required
        name="password"
        placeholder="password"
        type="password"
        onChange={onChange}
        value={signUpForm.password}
        fontSize="10pt"
        mb={2}
        _placeholder={{ color: 'gray.500' }}
        _hover={{
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        _focus={{
          outline: 'none',
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        bg="gray.50"
      />
      <Input
        required
        name="confirmPassword"
        placeholder="confirm password"
        type="confirmPassword"
        onChange={onChange}
        value={signUpForm.confirmPassword}
        fontSize="10pt"
        mb={2}
        _placeholder={{ color: 'gray.500' }}
        _hover={{
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        _focus={{
          outline: 'none',
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        bg="gray.50"
      />
      {(error || inputError) && (
        <Text fontSize="10pt" color="red.500">
          {error?.message || inputError}
        </Text>
      )}
      <Button
        width="100%"
        height="36px"
        my={2}
        type="submit"
        isLoading={loading}
      >
        Sign Up
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Already a redditor?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() => {
            setAuthModalState((prev) => ({
              ...prev,
              view: 'login',
            }));
          }}
        >
          SIGN IN
        </Text>
      </Flex>
    </form>
  );
};
