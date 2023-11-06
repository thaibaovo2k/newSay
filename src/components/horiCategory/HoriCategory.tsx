import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import Cart from "../cart/Cart";
import HoriCart from "../horiCart/HoriCart";

type Props = {
  title: string;
  data: any;
  btn: boolean;
  mode: string;
};

const HoriCategory = ({ title, data, btn, mode }: Props) => {
  const windowWidth = Dimensions.get("window").width;

  return (
    <View>
      <View
        style={styles.container}
      >
        <Text style={{ fontSize: 24, fontWeight: "900",color: `${(mode == 'dark') ? '#FFF' : ''}` }}>{title}</Text>
        {!title ? (
          <Text></Text>
        ) : (
          <Text
            style={{
              fontSize: 18,
              alignSelf: "flex-end",
              fontWeight: "900",
              color: `${(mode == 'dark') ? '#FFF' : '#FFB4AA'}`
            }}
          >
            View all
          </Text>
        )}
      </View>
      <View style={{ display: "flex", flexDirection: "column", gap: 0 ,height:300}}>
        <HoriCart mode={mode} btn={btn} data={data?.[0]} />
        <HoriCart mode={mode} btn={btn} data={data?.[1]} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 32,
    marginRight: 24,
    marginLeft: 24,
    marginBottom: 8,
  },
});

export default HoriCategory;
