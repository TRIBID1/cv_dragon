import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import CustomDrawerContent from "@/components/CustomDrawerContent";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const Drawerlayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }} >
      <Drawer drawerContent={CustomDrawerContent}>
        <Drawer.Screen
          name="mytask"
          options={{
            drawerLabel: "MyTask",
            title: "MyTask",
            drawerIcon: ({ color, size }) => (
              <FontAwesome5 name="tasks" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="mycommunity"
          options={{
            drawerLabel: "My Community",
            title: "My Community",
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-group-outline"
                size={24}
                color="black"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="leaderboard"
          options={{
            drawerLabel: "Leaderboard",
            title: "Leaderboard",
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="leaderboard" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="chats"
          options={{
            drawerLabel: "Chats",
            title: "Chats",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="chatbox-outline" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="courses"
          options={{
            drawerLabel: "Courses",
            title: "Courses",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="school-outline" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="knowledge"
          options={{
            drawerLabel: "Knowledge",
            title: "Knowledge",
            drawerIcon: ({ color, size }) => (
              <FontAwesome5 name="book" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="polls"
          options={{
            drawerLabel: "Polls",
            title: "Polls",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="stats-chart-outline" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="contributions"
          options={{
            drawerLabel: "Contributions",
            title: "Contributions",
            drawerIcon: ({ color, size }) => (
              <FontAwesome5 name="hand-holding-heart" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="quizzes"
          options={{
            drawerLabel: "Quizzes",
            title: "Quizzes",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="power" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="updates"
          options={{
            drawerLabel: "Updates",
            title: "Updates",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="notifications-outline" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="downloads"
          options={{
            drawerLabel: "Downloads",
            title: "Downloads",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="download-outline" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="news"
          options={{
            drawerLabel: "News",
            title: "News",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="newspaper-outline" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="faqs"
          options={{
            drawerLabel: "FAQ's",
            title: "FAQ's",
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="frequently-asked-questions"
                size={24}
                color="black"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: "Settings",
            title: "Settings",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "",
            title: "",
            
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default Drawerlayout;


// import { View, Text } from 'react-native'
// import React from 'react'
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { Drawer } from 'expo-router/drawer';
// import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
// import AntDesign from '@expo/vector-icons/AntDesign';
// import CustomDrawerContent from '@/components/CustomDrawerContent';
// import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import Ionicons from '@expo/vector-icons/Ionicons';

// const Drawerlayout = () => {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <Drawer drawerContent={CustomDrawerContent}>
//       <Drawer.Screen
//           name="index" // This is the name of the page and must match the url from root
//           options={{
//             drawerLabel: 'Index',
//             title: 'Index',
//             drawerIcon: ({ color, size }) => (
//                 <FontAwesome5 name="tasks" size={24} color="black" className="mx-4" />
//             )
//           }}
//         />
//       <Drawer.Screen
//           name="home" // This is the name of the page and must match the url from root
//           options={{
//             drawerLabel: 'Home',
//             title: 'Home',
//             drawerIcon: ({ color, size }) => (
//                 <AntDesign name="home" size={24} color="black" className="mx-4"/>
//             )
//           }}
//         />
//       <Drawer.Screen
//           name="profile" // This is the name of the page and must match the url from root
//           options={{
//             drawerLabel: 'Profile',
//             title: 'Profile',
//             drawerIcon: ({ color, size }) => (
//                 <AntDesign name="profile" size={24} color="black" className="mx-4" />
//             )
//           }}
//         />
//         <Drawer.Screen
//           name="mytask" // This is the name of the page and must match the url from root
//           options={{
//             drawerLabel: 'My Task',
//             title: 'My Task',
//             drawerIcon: ({ color, size }) => (
//                 <AntDesign name="profile" size={24} color="black" className="mx-4" />
//             )
//           }}
//         />
//         <Drawer.Screen
//           name="mycommunity" // This is the name of the page and must match the url from root
//           options={{
//             drawerLabel: 'My Community',
//             title: 'My Community',
//             drawerIcon: ({ color, size }) => (
//               <MaterialCommunityIcons name="google-circles-communities" size={24} color="black" className='mx-4' />
//             )
//           }}
//         />
//         <Drawer.Screen
//           name="leaderboard" // This is the name of the page and must match the url from root
//           options={{
//             drawerLabel: 'Leaderboard',
//             title: 'Leaderboard',
//             drawerIcon: ({ color, size }) => (
//               <MaterialIcons name="leaderboard" size={24} color="black" className='mx-4' />
//             )
//           }}
//         />
//         <Drawer.Screen
//           name="chats" // This is the name of the page and must match the url from root
//           options={{
//             drawerLabel: 'Chats',
//             title: 'Chats',
//             drawerIcon: ({ color, size }) => (
//               <Ionicons name="chatbox-ellipses-outline" size={24} color="black" className='mx-4' />
//             )
//           }}
//         />
//         <Drawer.Screen
//           name="courses" // This is the name of the page and must match the url from root
//           options={{
//             drawerLabel: 'courses',
//             title: 'courses',
//             drawerIcon: ({ color, size }) => (
//               <Ionicons name="chatbox-ellipses-outline" size={24} color="black" className='mx-4' />
//             )
//           }}
//         />
//       </Drawer>
//     </GestureHandlerRootView>
//   )
// }

// export default Drawerlayout