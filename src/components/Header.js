import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar as SBar } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const { width } = Dimensions.get('screen');

const Action = ({ onPress, icon, style }) => (
    <TouchableNativeFeedback onPress={onPress}>
        <Ionicons name={icon} style={[styles.actionIcon, style]} />
    </TouchableNativeFeedback>
);

const Actions = ({ actions=[], style }) => actions.map((action, key) => <Action {...action} style={style} key={key} />);

const Header = ({
    title='Hello',
    style,
    titleStyle,
    actionStyle,
    actions=[],
    navigation
}) => {
    return(
        <View style={[styles.container, style]}>
            <StatusBar style='auto' />
            {navigation && <Action onPress={() => navigation.goBack()} icon='arrow-back' style={actionStyle} />}
            <Text style={[styles.title, titleStyle]}>{title}</Text>
            <View style={styles.spacer} />
            <Actions actions={actions} style={actionStyle} />
        </View>
    );
}

const headerPadding = 7;
const styles = StyleSheet.create({
    container: {
        width,
        padding: headerPadding,
        paddingTop: SBar.currentHeight + headerPadding,
        flexDirection: 'row',
        elevation: 3,
        alignItems: 'center',
        backgroundColor: '#fa6736'
    },
    title: {
        padding: 5,
        fontSize: 18,
        fontWeight: 'bold'
    },
    spacer: {
        flex: 1
    },
    actionIcon: {
        fontSize: 25,
        padding: 5,
        paddingHorizontal: 10
    }
});

export default Header;