import CheckBox from "expo-checkbox";
import React, { FC, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import HoriCategory from "../horiCategory/HoriCategory";
import { wordData } from "../../api/data";
import HoriCart from "../horiCart/HoriCart";
interface Props {
  status: boolean;
}
const data = ["Fun", "Romantic", "Ghost", "Talent", "Detective"];
const ResultSearch: FC<Props> = ({ status }) => {
  const [isSelected, setSelection] = useState(false);
  const [checkboxState, setCheckboxState] = useState(data.map(() => false));
  const handleCheckboxChange = (index) => {
    const newCheckboxState = [...checkboxState];
    newCheckboxState[index] = !newCheckboxState[index];
    setCheckboxState(newCheckboxState);
  };

  return status ? (
    <View style={styles.container}>
      <Text
        style={{
          padding: 16,
          paddingBottom: 0,
          fontSize: 20,
          fontWeight: "700",
          color: "#FFB4AA",
        }}
      >
        RESULT FOR YOU
      </Text>
      <HoriCart data={wordData?.[0]} />
      <HoriCart data={wordData?.[0]} />
      <HoriCart data={wordData?.[0]} />
      <Text
        style={{
          padding: 16,
          paddingBottom: 0,
          fontSize: 20,
          fontWeight: "700",
          color: "#FFB4AA",
        }}
      >
        RELATIVE NEWS
      </Text>
      <HoriCart data={wordData?.[1]} />
      <HoriCart data={wordData?.[1]} />
      <HoriCart data={wordData?.[1]} />
    </View>
  ) : (
    <View
      style={{
        margin: 32,
        backgroundColor: "#FFF",
        padding: 16,
        alignItems: "center",
        justifyContent: "center",
        borderWidth:3,borderColor:'#DFC8C5',
        borderRadius:30
      }}
    >
      <Text style={{color:'#8B8681',fontSize:20}}>NO RESULT FOR YOU</Text>
      <Image
        source={require("../../assets/images/noResult.png")}
        resizeMode="contain"
        style={{ height: "40%", marginTop: 32 }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFBF5",
    margin: 8,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#BDB6AF",
    marginBottom: 32,
  },
  title: {
    margin: 16,
    borderWidth: 2,
    padding: 8,
    fontSize: 16,
    fontWeight: "700",
    borderRadius: 20,
    borderColor: "#BDB6AF",
    color: "#142144",
    backgroundColor: "#F2D6D6",
  },
  item: {
    borderWidth: 2,
    padding: 8,
    fontSize: 16,
    fontWeight: "500",
    borderRadius: 20,
    margin: 16,
    marginTop: 0,
    marginBottom: 4,
    borderColor: "#BDB6AF",
    color: "#BDB6AF",
  },
  doubleItem: {
    borderWidth: 2,
    fontSize: 16,
    fontWeight: "500",
    borderRadius: 20,
    margin: 16,
    marginTop: 0,
    borderColor: "#BDB6AF",
  },
});

export default ResultSearch;
