import React from "react";
import { View, StyleSheet, Image } from 'react-native';
import PagerView from 'react-native-pager-view';
import Header from "../../components/Header";

const ViewImage = ({
    navigation,
    route
}) => {
    const { images, index } = route.params;
    return(
        <View style={style.container}>
            <Header
                actionStyle={style.actionStyle}
                style={style.headerStyle}
                titleStyle={style.title}
                navigation={navigation}
                title="Image"
            />
            <PagerView style={style.viewPager} initialPage={index}>
                {images.map((image, key) => (
                    <Image key={key} source={image} resizeMode='contain' />
                ))}
            </PagerView>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111'
    },
    viewPager: {
        flex: 1
    },
    headerStyle: {
        backgroundColor: '#111c',
        elevation: 3,
        position: 'absolute',
        zIndex: 1
    },
    title: {
        color: '#fff'
    },
    actionStyle: {
        color: '#fff'
    }
});

export default ViewImage;