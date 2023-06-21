import Carousel from "react-native-snap-carousel";
import { housesData } from "../Tools/HousesData";
import { Dimensions, Text } from "react-native";
import { Box } from "native-base";
import ImageModal from "react-native-image-modal";

const SLIDER_WIDTH = Dimensions.get('window').width + 30;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const renderItem = ({item}) => {
    return <ImageModal swipeToDismiss={true} resizeMode='center'
        source= {item.url} alt="HOUSE" style={{width: ITEM_WIDTH, height: 200}}/>
}

export function Gallery({index}) {
    return <Box safeAreaTop alignItems="center">
        <Text>{housesData[index].name}</Text>
        <Carousel
        firstItem={0}
        data={housesData[index].data}
        renderItem={renderItem} 
        sliderWidth={SLIDER_WIDTH}
        sliderHeight={200}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        containerCustomStyle={{overflow:'visible'}}
        contentContainerCustomStyle={{overflow:'visible'}}
        />
    </Box>
}