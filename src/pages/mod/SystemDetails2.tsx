import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/header/Header";
import SystemItem from "../../components/systemItem/SystemItem";
import LinearGradient from "react-native-linear-gradient";

type Props = {};
const modList1 = [
  "Question 01 I ABCD I 20.08.2023 I Published",
  "Question 01 I ABCD I 20.08.2023 I Published",
  "Question 01 I ABCD I 20.08.2023 I Published",
  "Question 01 I ABCD I 20.08.2023 I Published",
];

const SystemDetails2 = (props: Props) => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get("window").width;
  const handleBack = () => {
    navigation.navigate("NewsPostScreen");
  };
  const handleToNewPost = () => {
    navigation.navigate('NewsPostScreen')
  }
  const handlePressSetting = (value) => {
    if(value == 'post') {
        navigation.navigate('CreateQuizScreem')
    }
    else if (value == 'edit') {
        navigation.navigate('CreateQuizScreem')
    }
  }
  return (
    <ScrollView style={{ backgroundColor: "#142144" }}>
      <Header title="Post" type="back" onBack={handleBack} searchBtn="hide" mode="dark"/>
        <View style={{margin:8,marginLeft:24,gap:8}}>
            <Text style={styles.textTitle}>Post 001 I 20.08.2023</Text>
            <Text style={styles.textTitle}>Style: Story</Text>
            <Text style={styles.textTitle}>Tone: Ghost, Fun</Text>
        </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          fontWeight: "700",
          color: "#142144",
        }}
      >
        Title I Create date I Status
      </Text>
      <View
        style={{
          marginLeft: 16,
          marginRight: 16,
          marginBottom: 220,
          padding: 16,
          borderRadius: 20,
          backgroundColor: "#FFFFFF",
          height:400
        }}
      >
        <Text style={{fontWeight:'700',color:'#142144',textAlign:'center',marginBottom:16}}>Name  I Level  I  Create date  I  Status   </Text>
        <View style={{ gap: 8, marginBottom: 0 }}>
          {modList1?.map((value, index) => (
            <SystemItem
              key={value + index}
              total={modList1?.length}
              index={index}
              value={value}
              text="disable"
              settingBtn="show"
              marginBottom={0}
              bottom={-100}
              listBtn={['edit','post','deleteIcon']}
              onPressSetting={handlePressSetting}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "#8B8681",
    // letterSpacing: 1,
    fontWeight: "100",
  },
  text_underline: {
    fontSize: 14,
    color: "#7142F8",
    textDecorationLine: "underline",
  },
  image: {
    width: 32,
    height: 32,
  },
  textTitle: {
    color:'#FFFFFF',
    fontWeight:'700'
  }
});

export default SystemDetails2;
