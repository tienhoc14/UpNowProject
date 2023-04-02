import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Animated, { useSharedValue, interpolate, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated'
import React, { useState } from 'react';
import { color } from '../assets/color';

export const DemoComponent = () => {

    const animation = useSharedValue(0)
    const [active, setActive] = useState(true)

    const width = useDerivedValue(() => {
        return interpolate(animation.value,
            [0, 1],
            [50, 70])
    })

    const height = useDerivedValue(() => {
        return interpolate(animation.value,
            [0, 1],
            [50, 70])
    })

    const animationStyle = useAnimatedStyle(() => {
        return {
            width: width.value,
            height: height.value,
        }
    })

    const startAnimation = () => {
        animation.value = withTiming(active ? 2 : 0, {
            duration: 2000
        })
        setActive(!active)
    }
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={startAnimation}>
                <Animated.View style={[styles.box, animationStyle]} />
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        backgroundColor: color.primaryColor,
        borderRadius: 30
    }
});