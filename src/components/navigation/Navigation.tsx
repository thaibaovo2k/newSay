import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import HomeScreen from "../../pages/student/HomeScreen";
import { useRecoilValue } from "recoil";
import { modeState } from "../../managerState/modeState";
import HomeScreenMod from "../../pages/mod/HomeScreenMod";
const Tab = createBottomTabNavigator();

type Props = {};

const Navigation = ({}: Props) => {
  const iconList = {
    Home: (
      <View style={styles.focusedIcon}>
        <Image
          style={styles.icon}
          source={require("../../assets/images/homeIconBtnFc.png")}
          resizeMode="contain"
        />
        <Text style={styles.text}>Home</Text>
      </View>
    ),
    HomeFocused: (
      <View style={styles.unfocusedIcon}>
        <Image
          resizeMode="contain"
          style={styles.icon}
          source={require("../../assets/images/homeIconBtn.png")}
        />
        <Text style={styles.textWhite}>Home</Text>
      </View>
    ),
    Solution: (
      <View style={styles.focusedIcon}>
        <Image
          style={styles.icon}
          source={require("../../assets/images/solutionIconFc.png")}
          resizeMode="contain"
        />
        <Text style={styles.text}>Solution</Text>
      </View>
    ),
    SolutionFocused: (
      <View style={styles.unfocusedIcon}>
        <Image
          resizeMode="contain"
          style={styles.icon}
          source={require("../../assets/images/solutionIcon.png")}
        />
        <Text style={styles.textWhite}>Solution</Text>
      </View>
    ),
    World: (
      <View style={styles.focusedIcon}>
        <Image
          style={styles.icon}
          source={require("../../assets/images/worldIconFc.png")}
          resizeMode="contain"
        />
        <Text style={styles.text}>World</Text>
      </View>
    ),
    WorldFocused: (
      <View style={styles.unfocusedIcon}>
        <Image
          resizeMode="contain"
          style={styles.icon}
          source={require("../../assets/images/worldIcon.png")}
        />
        <Text style={styles.textWhite}>World</Text>
      </View>
    ),
    Library: (
      <View style={styles.focusedIcon}>
        <Image
          style={styles.icon}
          source={require("../../assets/images/libraryIconFc.png")}
          resizeMode="contain"
        />
        <Text style={styles.text}>Library</Text>
      </View>
    ),
    LibraryFocused: (
      <View style={styles.unfocusedIcon}>
        <Image
          resizeMode="contain"
          style={styles.icon}
          source={require("../../assets/images/libraryIcon.png")}
        />
        <Text style={styles.textWhite}>Library</Text>
      </View>
    ),
    "My Room": (
      <View style={styles.focusedIcon}>
        <Image
          style={styles.icon}
          source={require("../../assets/images/humanIconFc.png")}
          resizeMode="contain"
        />
        <Text style={styles.text}>My Room</Text>
      </View>
    ),
    "My RoomFocused": (
      <View style={styles.unfocusedIcon}>
        <Image
          resizeMode="contain"
          style={styles.icon}
          source={require("../../assets/images/humanIcon.png")}
        />
        <Text style={styles.textWhite}>My Room</Text>
      </View>
    ),
  };
  const modeUser = useRecoilValue(modeState)
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#142144", padding: 4, height: 60 },
        tabBarIcon: ({ focused }) => {
          return focused
            ? iconList?.[route.name]
            : iconList?.[`${route.name}Focused`];
        },
      })}
    >
      <Tab.Screen name="Home" component={modeUser == 'mod' ? HomeScreenMod :HomeScreen} />
      <Tab.Screen name="Solution" component={HomeScreen} />
      <Tab.Screen name="World" component={HomeScreen} />
      <Tab.Screen name="Library" component={HomeScreen} />
      <Tab.Screen name="My Room" component={HomeScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  focusedIcon: {
    backgroundColor: "#FFF",
    padding: 4,
    paddingLeft: 8,
    paddingRight: 8,
    marginRight: 2,
    alignItems: "center",
    borderRadius: 8,
  },
  unfocusedIcon: {
    backgroundColor: "#142144",
    padding: 4,
    paddingLeft: 8,
    paddingRight: 8,
    marginRight: 2,
    alignItems: "center",
  },
  text: {
    fontSize: 8,
  },
  textWhite: {
    fontSize: 8,
    color: "#FFF",
  },
});

export default Navigation;
