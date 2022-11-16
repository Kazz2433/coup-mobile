import React from 'react';
import {Center,Text,Image} from 'native-base';
import Logo from '../assets/logo.svg'

export function SignIn(){
    return (
          <Center flex={1} bgColor='gray.900'>
            <Image source={{
              uri:"https://toppng.com/uploads/preview/trophy-11527593161wjmswjufrj.png"
              }}alt="Alternate Text" size="xl" />
          </Center>
      );  
}
