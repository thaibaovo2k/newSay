import { StyleSheet } from "react-native";
import { RecoilRoot } from "recoil";
import Navigation from "./src/components/navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./src/pages/student/SearchScreen";
import NewsScreen from "./src/pages/student/NewsScreen";
import MiniGameScreen from "./src/pages/student/MiniGameScreen";
import SystemDetails from "./src/pages/mod/SystemDetails";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown:false}}
        >
        <Stack.Screen name="Navigation" component={Navigation}/>
        <Stack.Screen name="SearchScreen" component={SearchScreen}/>
        <Stack.Screen name="NewsScreen" component={NewsScreen}/>
        <Stack.Screen name="MiniGameScreen" component={MiniGameScreen}/>
        <Stack.Screen name="SystemDetails" component={SystemDetails}/>
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;

const styles = StyleSheet.create({});
