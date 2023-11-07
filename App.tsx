import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { RecoilRoot } from "recoil";
import Navigation from "./src/components/navigation/Navigation";
import CreateQuizScreen from "./src/pages/mod/CreateQuizScreen";
import EditPostScreen from "./src/pages/mod/EditPostScreen";
import MiniGameScreenMod from "./src/pages/mod/MiniGameScreenMod";
import NewGameScreen from "./src/pages/mod/NewGameScreen";
import NewsPostScreen from "./src/pages/mod/NewsPostScreen";
import SystemDetails from "./src/pages/mod/SystemDetails";
import SystemDetails2 from "./src/pages/mod/SystemDetails2";
import MiniGameScreen from "./src/pages/student/MiniGameScreen";
import NewsScreen from "./src/pages/student/NewsScreen";
import SearchScreen from "./src/pages/student/SearchScreen";
import EditMiniGameScreen from "./src/pages/mod/EditMiniGameScreen";
import EditMiniGameScreen2 from "./src/pages/mod/EditMiniGameScreen2";
import EditMiniGameScreen3 from "./src/pages/mod/EditMiniGameScreen3";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Navigation" component={Navigation} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="NewsScreen" component={NewsScreen} />
          <Stack.Screen name="MiniGameScreen" component={MiniGameScreen} />
          <Stack.Screen name="SystemDetails" component={SystemDetails} />
          <Stack.Screen name="SystemDetails2" component={SystemDetails2} />
          <Stack.Screen name="NewsPostScreen" component={NewsPostScreen} />
          <Stack.Screen name="NewGameScreen" component={NewGameScreen} />
          <Stack.Screen name="CreateQuizScreem" component={CreateQuizScreen} />
          <Stack.Screen name="EditPostScreen" component={EditPostScreen} />
          <Stack.Screen name="EditMiniGameScreen" component={EditMiniGameScreen} />
          <Stack.Screen name="EditMiniGameScreen2" component={EditMiniGameScreen2} />
          <Stack.Screen name="EditMiniGameScreen3" component={EditMiniGameScreen3} />
          <Stack.Screen
            name="MiniGameScreenMod"
            component={MiniGameScreenMod}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;

const styles = StyleSheet.create({});
