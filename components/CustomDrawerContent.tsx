import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Image, View, Text, StyleSheet } from 'react-native';


import images from '@/constants/images';

export default function CustomDrawerContent(props: any) {
    const router = useRouter();

    return (
        <View  className="flex-1" >
            <DrawerContentScrollView {...props} scrollEnabled={true}>
                <View style={styles.banner}>
                    <View style={styles.sliderBanner}>
                        <Image
                            style={styles.profileIcon}
                            source={images.profileimage}
                        />
                        <View style={styles.sliderBannerText}>
                            <Text style={styles.text}>Vikki Jain</Text>
                            <Text>Karyasamiti Sadasya</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.routes}>
                    <DrawerItemList {...props}/>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    banner: {
        height: 180,
        borderBottomColor: '#0000001A',
        borderBottomWidth: 1,
    },
    sliderBanner: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    sliderBannerText: {
      flex: 1,
    },
    profileIcon: {
      width: 80, // Use numbers instead of strings with 'px'
      height: 80,   
      marginRight: 20,     
    },
    text: {
      fontFamily: 'Manrope', // Ensure the font is properly linked
      fontSize: 20,
      fontWeight: '700',
      lineHeight: 27.32,
      textAlign: 'left',
    },
    routes: {
        paddingTop: 20,
    }
  });





// import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
// import { useRouter } from "expo-router";
// import { Image, View } from 'react-native';

// import images from '@/constants/images';

// export default function CustomDrawerContent(props: any) {
//     const router = useRouter();

//     return (
//         <View className="flex-1">
//             <DrawerContentScrollView {...props} scrollEnabled={true}>
//                 <View>
//                     <Image
//                         source={images.profileimage}
//                         className="" 
//                     />
//                 </View>
//                 <DrawerItemList {...props}/>
                
//             </DrawerContentScrollView>
//         </View>
//     )
// }
