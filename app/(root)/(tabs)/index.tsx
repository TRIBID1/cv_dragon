import { Button, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import 'react-native-gesture-handler';
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Card1, Card2, Card3, FeaturedCard } from "@/components/Cards";
import QuickLinks from "@/components/Quicklinks";
import TaskListStatic from "@/components/Tasks";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import Profile from "@/components/Profile"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export default function Index() {
 const navigation = useNavigation();
 const Stack = createNativeStackNavigator();

    const onToggle = () => {
      navigation.dispatch(DrawerActions.openDrawer());
    }
    
  
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={[]}
        renderItem={({ item }) => <Card1 />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 mt-5"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-">
            <View className="bg-[#f8e8d8] p-4 flex flex-row justify-between items-center">
              <TouchableOpacity>
              <Ionicons name="menu" size={40} color="black" onPress={onToggle} />                
              </TouchableOpacity>
              <Image source={require('@/assets/images/logo.png')} className="w-20 h-20 mt-" />
              <TouchableOpacity>
                <Ionicons name="person-circle" size={40} color="black" />
              </TouchableOpacity>
            </View>
            
            <View className="bg-[#f8e8d8] flex flex-row items-center justify-between px-4 py-2">
              <View className="flex flex-row items-center mt-10">
                <Image source={require('@/assets/images/main.png')} className="w-20 h-20 rounded-full" />
                <View className="ml-4">
                  <Text className="text-xl font-bold text-red-700">विक्की जैन</Text>
                  <Text className="text-sm text-gray-600 flex flex-row items-center">
                    <Ionicons name="briefcase" size={18} color="gray" />
                    कार्यसमिति सदस्य
                  </Text>
                </View>
              </View>
              <View className="flex flex-row items-center bg-white p-2 rounded-full">
                <AntDesign name="pay-circle-o1" size={24} color="red" />
                <Text className="ml-2 text-lg font-bold">4000</Text>
              </View>
            </View>
            {/* <View className="flex flex-row justify-between items-center">
              <View className="flex flex-row items-center">
                <Image source={images.main} className="size-20 rounded-full my-28"/>
                <View className="flex flex-col items-start ml-4 justify-center">
                  <Text className="text-2xl font-bold">Vikki Jain</Text>
                  <Text className="flex flex-row items-start mr-4 "><Ionicons name="folder" size={12} color="blue" className="" />Karyasamiti Sadasya</Text>
                </View>
              </View>
              <Text className="text-2xl font-bold mr-2 "><AntDesign name="pay-circle-o1" size={24} color="black" className="space-x-4 " />4000</Text>
            
            </View> */}
            <View className="flex flex-row items-center justify-between px-5 mt-5 ">
              <Text className="text-xl font-bold"><MaterialCommunityIcons name="flower-tulip" size={18} color="red" />Tasks</Text>
              <TouchableOpacity>
                <Text className="text-xl font-bold text-red-500">view all</Text>
              </TouchableOpacity>

            </View>
            <TaskListStatic />
            <FlatList
              data={[1, 2, 3]}
              renderItem={({ item }) => <FeaturedCard />}
              keyExtractor={(item) => item.toString()}
              horizontal
              bounces={false}
              contentContainerClassName="flex px-5 gap-5 mt-5"
            />
            <View className="flex flex-row items-center justify-between mt-4 px-5">
              <Text className="text-xl font-bold"><MaterialCommunityIcons name="flower-tulip" size={18} color="red" />Events</Text>
              <TouchableOpacity>
                <Text className="text-xl font-bold text-red-500">view all</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={[1, 2, 3]}
              renderItem={({ item }) => <Card1 />}
              keyExtractor={(item) => item.toString()}
              horizontal
              bounces={false}
              contentContainerClassName="flex gap-5 mt-5 px-5"
            />
            <View className="flex flex-row items-center justify-between mt-4 px-5">
              <Text className="text-xl font-bold"><MaterialCommunityIcons name="flower-tulip" size={18} color="red" />Updates</Text>

            </View>
            <FlatList
              data={[1, 2, 3]}
              renderItem={({ item }) => <Card2 />}
              keyExtractor={(item) => item.toString()}
              horizontal
              bounces={false}
              contentContainerClassName="flex gap-5 mt-5 px-5"
            />
            <View className="flex flex-row items-center justify-between mt-4 px-5">
              <Text className="text-xl font-bold"><MaterialCommunityIcons name="flower-tulip" size={18} color="red" />Birthdays</Text>

            </View>
            <FlatList
              data={[1, 2, 3]}
              renderItem={({ item }) => <Card3 />}
              keyExtractor={(item) => item.toString()}
              horizontal
              bounces={false}
              contentContainerClassName="flex gap-5 mt-5 px-5"
            />
            <View className="flex flex-row items-center justify-between mt-4 px-5">
              <Text className="text-xl font-bold"><MaterialCommunityIcons name="flower-tulip" size={18} color="red" />Quick Links</Text>

            </View>
            <QuickLinks />
            
          </View>

        }
      />


    </SafeAreaView>
  );
}
