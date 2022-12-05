import { Heading, VStack,Image, Text, useToast } from "native-base";
import { useState } from "react";

import { api } from "../services/api";

import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Input } from "../components/Input";


export function New(){
    const [title,setTitle] = useState('')
    const [isLoading,setIsLoading] = useState(false)

    const toast = useToast()

    const handlePoolCreateTrimError= () => {
        if(!title.trim()){
            return toast.show({
                title:'Informe um nome para seu bolão',
                placement:'top',
                bgColor:'red.500'
            })
        }
    }
    async function handlePoolCreate(){
        if(handlePoolCreateTrimError()){
            return 0
        }else{
            try {
                setIsLoading(true)
    
                await api.post('pools',{title: title})
                toast.show({
                    title:'Bolão criado com sucesso!',
                    placement:'top',
                    bgColor:'green.500'
                })
    
                setTitle('')
            }catch(err){
                console.log(err)
                toast.show({
                    title:'Não foi possivel criar o bolao',
                    placement:'top',
                    bgColor:'red.500'
                })
            }finally{
                setIsLoading(false)
            }
        }
        


    }

    return(
        <VStack flex={1} bgColor='gray.900'>
             <Header title="Criar novo Bolão" />
             <VStack mt={8} mx={5} alignItems='center'>
                <Image source={{
                uri:"https://toppng.com/uploads/preview/trophy-11527593161wjmswjufrj.png"
                }}alt="Alternate Text" size="xl" />

                <Heading fontFamily='heading' color='white' fontSize='xl' my={8} textAlign='center' >
                    Crie seu próprio bolão da copa {'\n'}
                    e compartilhe entre amigos
                </Heading>

                <Input 
                    mb={2}
                    placeholder='Qual o nome do seu Bolão'
                    onChangeText={setTitle}
                    value={title}
                />

                <Button 
                    title='CRIAR MEU BOLÃO'
                    onPress={handlePoolCreate}
                    isLoading={isLoading}
                />

                <Text color='gray.200' fontSize='sm' textAlign='center' px={10} mt={4}>
                    Após criar seu bolão, você receberá um código único
                    que podera user para convidar outras pessoas
                </Text>

             </VStack>
         </VStack>
    )
}