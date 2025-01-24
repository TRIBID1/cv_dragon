import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import images from '@/constants/images';
import EvilIcons from '@expo/vector-icons/EvilIcons';
interface Props {
    onPress?: () => void;
}
export const FeaturedCard = ({ onPress }:Props) => {
  return (
    <TouchableOpacity onPress={onPress} className='flex flex-col items-start w-80 h-80 relative'>
        <Image source={images.news} className='size-full rounded-2xl'/>
        <View className='flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5'>
            <Image source={images.minute} className=''/>
        </View>
        <View className='flex flex-col items-start absolute bottom-5 inset-x-5'>
            <Text className='text-xl text-white' numberOfLines={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ipsam!
            </Text>
        </View>
    </TouchableOpacity>
  )
}

export const Card1 = ({onPress}:Props) => {
    return (
        <TouchableOpacity onPress={onPress} className='flex flex-col items-start w-80 h-60 relative mt-4 '>
            

            <Image source={images.events} className='size-full rounded-2xl'/>
            <View className='flex flex-row items-center px- py-  absolute top- right-0 '>
                <Image source={images.datetime} className=''/>
            </View>
            <View className='flex flex-row items-center px-5 absolute right-0 mt-40'>
                <Image source={images.registernow} className=''/>
            </View>
            <View className='flex flex-row items-start absolute '>
                <Text className='text-xl text-white' numberOfLines={3}>
                    Terapanth Sthapna Divas
                </Text>
            </View>
        
            
        </TouchableOpacity>
    )
  }
export const Card2 = ({onPress}:Props) => {
    return (
        <TouchableOpacity onPress={onPress} className='flex flex-col items-start w-60 h-80 relative'>
        <Image source={images.news} className='size-full rounded-2xl'/>
        
        <View className='flex flex-col absolute mt-10 inset-x-5'>
            <Text className='text-3xl text-white' numberOfLines={1}>
                Lorem ipsum dolor sit 
            </Text>
            <Text className='text-xl text-white mt-5' numberOfLines={3}>
                Lorem ipsum dolor sit Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. 
            </Text>
            <Text className='text-white text-2xl mt-16'>More info<EvilIcons name="arrow-right" size={36} color="red" /></Text>
        </View>
        
        </TouchableOpacity>
    )
  }
export const Card3 = ({onPress}:Props) => {
    return (
        <TouchableOpacity onPress={onPress} className='flex flex-col items-start w-60 h-80 relative'>
        <Image source={images.birthday} className='size-full rounded-2xl'/>
        
        <View className='flex flex-col absolute bottom-16 inset-x-5 items-center bg-white/100 rounded-xl'>
            
            <Text className='text-black text-2xl items-center '>Vikky Jain</Text>
            <Text>Padadhukari prabhari</Text>
        </View>
        
        </TouchableOpacity>
    )
  }
  
