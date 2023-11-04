import React, {FC, useRef, useState, useEffect} from "react";
import { Image, SafeAreaView, SafeAreaViewBase, Text, View,Dimensions  } from "react-native";
import Carousel , {Pagination} from 'react-native-snap-carousel';
import NotiCart from "../notiCart/NotiCart";
interface Props {
    label: string;
    data: Array<{ label: string; value: string }>;
    onSelect: (item: { label: string; value: string }) => void;
  }

const Swiper: FC<Props> = ({data}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const windowWidth = Dimensions.get('window').width;
    const [itemWidth, setItemWidth] = useState(Dimensions.get('window').width );
  const carouselItems = [
    {
      title: 'Item 1',
      text: 'Text 1',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
    {
      title: 'Item 4',
      text: 'Text 4',
    },
  ];
  useEffect(() => {
    const newWidth = windowWidth ;
    setItemWidth(newWidth);
  }, [windowWidth]);

  const carouselRef = useRef(null);

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          borderRadius: 5,
          height: 190,
          marginLeft: 32,
          marginRight: 32
        }}>
        <NotiCart title="NOTE"/>
        <Text style={{ fontSize: 20, marginLeft:8 }}>Hotnew: <Text style={{fontWeight:'900'}}>Lorem Ipsum</Text> is simply dummy text of the printing and</Text>
        <Text style={{marginLeft:16}}>24 August, 2023 </Text>
      </View>
    );
  };
  const pagination = (
    <Pagination
      dotsLength={carouselItems.length}
      activeDotIndex={activeIndex}
      paginationStyle={{postion: 'absolute',}}
      dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: '#142144',
      }}
      inactiveDotStyle={{
        backgroundColor: '#142144',
      }}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  );

  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'column', justifyContent: 'center', height:360}}>
        <Carousel
          layout={'default'}
          layoutCardOffset={18}
          ref={carouselRef}
          data={carouselItems}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
          sliderWidth={windowWidth}
          itemWidth={itemWidth}
          s
        />
        {pagination}
      </View>
    </SafeAreaView>
  );
}

export default Swiper