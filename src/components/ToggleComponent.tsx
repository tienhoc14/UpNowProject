import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { color } from '../assets/color'
import Animated, { interpolate, useSharedValue, useAnimatedStyle, withSpring, withTiming, useDerivedValue, interpolateColor, Extrapolation } from 'react-native-reanimated'

export default function ToggleComponent() {

    const switchTranslate = useSharedValue(0)
    const animation = useSharedValue(0)

    const [active, setActive] = useState(false)

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

    const progress = useDerivedValue(() => {
        return withTiming(active ? 44 : 0)
    })

    useEffect(() => {
        if (active) {
            switchTranslate.value = 75
        } else {
            switchTranslate.value = 5
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
                        mass: 4,
                        damping: 100,
                        overshootClamping: false,
                    })
                }
            ],
            width: width.value,
            height: height.value,
        }
    })

    const circleStyle = {
        backgroundColor: !active ? color.whiteColor : color.primaryColor,
        borderRadius: 50,
    }

    const onPressToggle = useCallback(
        () => {
            animation.value = withTiming(!active ? 1 : 0, {
                duration: 1000
            })
            setActive(!active)
        },
        [active],
    )

    return (
        <TouchableWithoutFeedback onPress={onPressToggle}>
            <Animated.View style={[styles.container, backgroundColorStyle]}>
                <Animated.View style={[customSpringStyles, circleStyle]} />
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 140,
        height: 60,
        backgroundColor: color.inputPH,
        borderRadius: 30,
        justifyContent: 'center'
    },
})