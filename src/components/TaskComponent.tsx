import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import CheckBox from '@react-native-community/checkbox'
import { color } from '../assets/color'
import Octicons from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch } from 'react-redux'
import { TextInput } from 'react-native-gesture-handler'
import { deleteTask, updateTask } from '../redux/actions/todoAction'

export default function TaskComponent({ taskTitle, completed }) {

    const dispatch = useDispatch()

    const [inputVisible, setInputVisible] = useState(false)
    const [newTitle, setNewTitle] = useState()

    const onDeleteTask = useCallback(
        () => {
            dispatch(deleteTask(taskTitle))
        },
        [],
    )

    const onUpdateTask = useCallback(
        () => {
            dispatch(updateTask(taskTitle, newTitle, completed))
            setInputVisible(false)
            setNewTitle()
        },
        [newTitle, inputVisible],
    )

    const onShowInput = useCallback(
        (value: boolean) => {
            setInputVisible(value)
        },
        [inputVisible],
    )

    const onCompleteTask = useCallback(
        (value: boolean) => {
            dispatch(updateTask(taskTitle, taskTitle, value))
        },
        [],
    )

    return (
        <View style={styles.taskWrapper} >
            <CheckBox
                value={completed}
                onValueChange={(newValue) => onCompleteTask(newValue)}
                tintColor={color.whiteColor}
                onTintColor={color.primaryColor}
                onCheckColor={color.primaryColor}
                style={styles.checkbox} />

            {inputVisible ?
                <>
                    <TextInput
                        value={newTitle}
                        onChangeText={setNewTitle}
                        placeholder='Update your task here...'
                        placeholderTextColor={color.inputBG}
                        style={styles.input} />
                    <Ionicons name="close" size={24} color={color.inputBG}
                        onPress={() => {
                            onShowInput(false)
                            setNewTitle()
                        }} />

                    <Ionicons name="checkmark" size={24} color={color.primaryColor}
                        onPress={onUpdateTask} />
                </>
                :
                <>
                    <Text style={[styles.taskTitle, {
                        textDecorationLine: completed ? 'line-through' : 'none',
                    }]}>{taskTitle}</Text>
                    <AntDesign name="edit" size={20} color={color.primaryColor} onPress={() => onShowInput(true)} />
                    <View style={styles.taskAction} >
                        <Octicons name="trash" size={24} color={color.inputBG} onPress={onDeleteTask} />
                    </View>
                </>
            }
        </View >
    )
}

const styles = StyleSheet.create({
    taskWrapper: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 20,
        backgroundColor: color.drawerInactive,
        marginBottom: 20,
        alignItems: 'center'
    },
    taskTitle: {
        fontSize: 16,
        marginLeft: 25,
        marginRight: 5,
        color: color.whiteColor,
    },
    checkbox: {
        width: 20,
        height: 20,
    },
    taskAction: {
        position: 'absolute',
        right: 30
    },
    input: {
        flex: 1,
        left: 20,
        color: color.whiteColor,
        fontSize: 16
    }
})