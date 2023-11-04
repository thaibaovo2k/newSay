import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRecoilState } from "recoil";
import { pageState } from "../../managerState";
import CompactHome from "../../pages/compactHome/CompactHome";
import Home from "../../pages/home/Home";

// Screens

//Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function Navigation({ navigation }: any) {
  const [page, setPage] = useRecoilState(pageState);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === detailsName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "settings" : "settings-outline";
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={detailsName} component={CompactHome} />
        <Tab.Screen name={settingsName} component={CompactHome} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
