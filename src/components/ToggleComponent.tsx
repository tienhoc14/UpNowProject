import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { color } from '../assets/color'
import Animated, { interpolate, useSharedValue, useAnimatedStyle, withSpring, withTiming, useDerivedValue, interpolateColor, Extrapolation } from 'react-native-reanimated'

export default function ToggleComponent() {

    const switchTranslate = useSharedValue(0)

    const [active, setActive] = useState(false)

    const progress = useDerivedValue(() => {
        return withTiming(active ? 44 : 0)
    })

    useEffect(() => {
        if (active) {
            switchTranslate.value = 44
        } else {
            switchTranslate.value = 4
        }

        return () => { }
    }, [active, switchTranslate])

    const backgroundColorStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            progress.value,
            [0, 44],
            [color.inputBG, color.inputPH],
        );
        return {
            backgroundColor,
        };
    });

    const customSpringStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: withSpring(switchTranslate.value, {
                        mass: 1,
                        damping: 100,
                        overshootClamping: false,
                    })
                }
            ]
        }
    })

    const circleStyle = !active ? {
        backgroundColor: color.whiteColor,
        width: 50,
        height: 50,
        borderRadius: 30,
    } : {
        backgroundColor: color.primaryColor,
        width: 70,
        height: 70,
        borderRadius: 40,
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            setActive(!active)
        }}>
            <Animated.View style={[styles.container, backgroundColorStyle]}>
                <Animated.View style={[customSpringStyles, circleStyle]} />
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 60,
        backgroundColor: color.inputPH,
        borderRadius: 30,
        justifyContent: 'center'
    },
})