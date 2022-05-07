import React from 'react';
import { View, ScrollView, FlatList, Image, Text } from 'react-native';
// import {launchCamera, launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import Header from '../../components/Header';
import { imagePickerActions, screens } from '../../utilities/constants';
import style from './style';
import { getUri, pushUri } from '../../utilities/helpers';
import { TouchableOpacity } from 'react-native-gesture-handler';

const imageContent = (images, navigation) => ({ index, item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(screens.viewImage, {
        images,
        index
    })}>
        <Image key={index} source={{ uri: item.uri }} style={style.image} />
    </TouchableOpacity>
);

export default function Home({ navigation }) {
    const [images, setImages] = React.useState([]);
    React.useEffect(() => {
        getUri().then(setImages);
    }, []);
    return(
        <View style={style.container}>
            <Header
                title='Galery'
                actions={[
                    { icon: 'camera', onPress: () => ImagePicker.launchCameraAsync().then(pushUri).then(setImages)},
                    { icon: 'folder-open', onPress: () => ImagePicker.launchImageLibraryAsync().then(pushUri).then(setImages)}
                ]}
            />
            <FlatList
                style={style.imageContainer}
                data={images}
                renderItem={imageContent(images, navigation)}
                numColumns={3}
            />
        </View>
    );
}