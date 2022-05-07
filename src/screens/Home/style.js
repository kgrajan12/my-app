import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

const imagePadding = 5;
const containerPadding = 5;
const imageCount = 3;
const imageSize = ((width - containerPadding * 2) / imageCount) - (imagePadding * 2);

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        padding: containerPadding,
        flexWrap: 'wrap',
        width
    },
    image: {
        width: imageSize,
        height: imageSize,
        margin: imagePadding
    }
});

export default style;