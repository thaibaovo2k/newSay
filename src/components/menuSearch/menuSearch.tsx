import CheckBox from "expo-checkbox";
import React, { FC, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
interface Props {}
const data = ["Fun", "Romantic", "Ghost", "Talent", "Detective"];
const MenuSearch: FC<Props> = ({}) => {
  const [isSelected, setSelection] = useState(false);
  const [checkboxState, setCheckboxState] = useState(data.map(() => false));
  const handleCheckboxChange = (index) => {
    const newCheckboxState = [...checkboxState];
    newCheckboxState[index] = !newCheckboxState[index];
    setCheckboxState(newCheckboxState);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title</Text>
      <Text style={styles.item}>Categories</Text>
      <View style={styles.doubleItem}>
        <Text
          style={{
            borderBottomColor: "#BDB6AF",
            borderBottomWidth: 2,
            padding: 8,
            fontSize: 16,
            fontWeight: "500",
            color: "#BDB6AF",
          }}
        >
          Health
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "#BDB6AF",
            padding: 8,
          }}
        >
          Education
        </Text>
      </View>
      <Text style={styles.item}>Level</Text>

      <View style={styles.doubleItem}>
        <Text
          style={{
            borderBottomColor: "#BDB6AF",
            borderBottomWidth: 2,
            padding: 8,
            fontSize: 16,
            fontWeight: "500",
            color: "#BDB6AF",
          }}
        >
          E3
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "#BDB6AF",
            padding: 8,
          }}
        >
          E4
        </Text>
      </View>
      <View
        style={{
          margin: 16,
          borderWidth: 2,
          borderRadius: 20,
          borderColor: "#BDB6AF",
          padding: 16,
          paddingLeft: 8,
          gap: 12,
        }}
      >
        {data?.map((item, index) => (
          <View style={{ flexDirection: "row", gap: 4 }} key={index}>
            <CheckBox
              value={checkboxState[index]}
              onValueChange={() => handleCheckboxChange(index)}
              style={{
                borderColor: "#8C9199",
                borderRadius: 4,
                backgroundColor: "#FFF",
              }}
            />
            <Text style={{ color: "#BDB6AF" }}>{item}</Text>
          </View>
        ))}
      </View>
        <View style={{margin: 16,justifyContent:'center',alignItems:'center'}}>
        <Text style={{backgroundColor:'#FFB4AA',padding:16,width:100,textAlign:'center',color:'#FFF',borderRadius:10,fontSize:20,fontWeight:'700'}}>
            Search
        </Text>
        </View>
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

export default MenuSearch;
