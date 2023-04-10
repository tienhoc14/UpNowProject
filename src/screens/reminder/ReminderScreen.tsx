import React, { useCallback, useState } from 'react'
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { color } from '../../assets/color'
import AppContainer from '../../components/AppContainer'
import AppMenu from '../../components/AppMenu'
import TaskComponent from '../../components/TaskComponent'
import AntDesign from 'react-native-vector-icons/AntDesign'
import AppInput from '../../components/AppInput'
import { addTask } from '../../redux/actions/todoAction'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { newListState, todoListState } from '../../recoil/listState'

const ReminderScreen = () => {

    const [newTask, setNewTask] = useState('')

    // const todoList = useSelector(store => store.tasks.todoList)
    // const dispatch = useDispatch()

    const [todoList, setTodoList] = useRecoilState(todoListState)

    const onAddTask = useCallback(
        () => {
            if (!newTask) {
                Alert.alert('Empty task', 'Enter your task to add')
                return
            }
            // dispatch(addTask(newTask))
            setTodoList((todoList) => [...todoList, { title: newTask }])
            setNewTask('')
        },
        [newTask],
    )

    return (
        <AppContainer>
            <AppMenu />
            <View style={styles.container}>
                <View style={styles.tasksContainer}>
                    <View style={styles.tasksHeader}>
                        <Text style={styles.screenTitle}>TO-DO LIST</Text>
                    </View>

                    <FlatList
                        data={todoList}
                        renderItem={({ item }) =>
                            <TaskComponent taskTitle={item.title} completed={item.completed} />}
                        keyExtractor={item => item.title}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <AppInput
                        placeholder={'Add your task'}
                        value={newTask}
                        onChangeText={setNewTask}
                    />
                    <AntDesign name="pluscircle" size={24} color={color.primaryColor} onPress={onAddTask} style={styles.addIcon} />
                </View>
            </View>
        </AppContainer>
    )
}

export default ReminderScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    tasksHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'space-between'
    },
    screenTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: color.whiteColor,
    },
    tasksContainer: {
        flex: 1,
    },
    inputWrapper: {
        justifyContent: 'center',
        paddingTop: 10,
    },
    addIcon: {
        position: 'absolute',
        right: 20
    }
})