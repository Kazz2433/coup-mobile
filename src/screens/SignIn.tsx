import React from 'react';
import {Center,Text,Image, Icon} from 'native-base';
import {Fontisto} from '@expo/vector-icons'
import { Button } from '../components/Button';
import {useAuth} from '../hooks/useAuth'

export function SignIn(){
    const {signIn, user} = useAuth()

    return (
          <Center flex={1} bgColor='gray.900' p={7}>
            <Image source={{
              uri:"https://toppng.com/uploads/preview/trophy-11527593161wjmswjufrj.png"
              }}alt="Alternate Text" size="xl" />

              <Button 
                type='SECONDARY'
                title='ENTRAR COM O GOOGLE'
                leftIcon={<Icon as={Fontisto} name='google' color='white' size='md' />}
                mt={12}
                onPress={signIn}
              />

              <Text color='white' textAlign='center' mt={4}>
                Nao utilizamos nenhuma informação além {'\n'} do seu e-mail para criação da conta
              </Text>
          </Center>
      );  
}
