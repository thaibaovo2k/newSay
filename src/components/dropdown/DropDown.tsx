import React, { FC, ReactElement, useRef, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
  Image,
} from "react-native";

interface Props {
  label: string;
  data: Array<{ label: string; value: string }>;
  onSelect: (item: { label: string; value: string }) => void;
  mode: string;
}

const Dropdown: FC<Props> = ({ label, data, onSelect, mode }) => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h - 16);
    });
    setVisible(true);
  };

  const onItemPress = (item): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({ item }): ReactElement<any, any> => (
    <TouchableOpacity
      style={mode == "dark" ? styles.itemDark : styles.item}
      onPress={() => onItemPress(item)}
    >
      <Text style={mode == "dark" ? styles.buttonTextDark : styles.buttonText}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.dropdownContent}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };
  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={mode == "dark" ? styles.buttonDark : styles.button}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      <Text style={mode == "dark" ? styles.buttonTextDark : styles.buttonText}>
        {(selected && selected.label) || label}
      </Text>
      {
        mode == 'dark' ?
        <Image source={require("../../assets/images/arrowIconDark.png")} />
        :<Image source={require("../../assets/images/arrowsIcon.png")} />
      }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#142144",
    height: 36,
    width: 100,
    zIndex: 1,
    padding: 6,
    borderRadius: 6,
  },
  buttonDark: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    height: 36,
    width: 100,
    zIndex: 1,
    padding: 6,
    borderRadius: 6,
  },
  buttonText: {
    color: "#FFFFFF",
    flex: 1,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 18,
    letterSpacing: 1,
  },
  buttonTextDark: {
    color: "#BDB6AF",
    flex: 1,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 18,
    letterSpacing: 1,
  },
  icon: {
    // marginRight: 10,
  },
  dropdown: {
    position: "absolute",
    width: 100,
    shadowColor: "#000000",
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
    right: 24,
  },
  overlay: {
    width: "100%",
    height: "100%",
  },
  item: {
    padding: 6,
    backgroundColor: "#142144",
    borderRadius: 6,
    width: "100%",
    marginBottom: 8,
    height: 36,
    alignItems: "center",
  },
  itemDark: {
    padding: 6,
    backgroundColor: "#FFF",
    borderRadius: 6,
    width: "100%",
    marginBottom: 8,
    height: 36,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Dropdown;
