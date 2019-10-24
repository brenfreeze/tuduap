import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from 'react-native'
import Constants from 'expo-constants'
import { Formik } from 'formik'

function App() {
  const [ todo, setTodo ] = useState([])
  
  const onTodoSubmit = (values, actions) => {
    if (values.title && values.body) {
      const newTodo = [
        ...todo,
        values
      ]
  
      setTodo(newTodo)
      actions.resetForm()
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Tuduap
      </Text>
      <Formik
        initialValues={{
          title: '',
          body: '',
        }}
        onSubmit={onTodoSubmit}
      >
        {
          props => (
            <View>
              <TextInput
                style={styles.textInput}
                placeholder="Enter Title"
                onChangeText={props.handleChange('title')}
                value={props.values.title}
              />
              <TextInput
                style={styles.textInput}
                multiline
                numberOfLines={4}
                placeholder="Enter Note Here..."
                onChangeText={props.handleChange('body')}
                value={props.values.body}
              /> 
              <Button
                style={styles.button}
                title="Submit"
                onPress={props.handleSubmit}
              />
            </View>
          )
        }
      </Formik>
      <ScrollView style={styles.scrollView}>
        {
          todo.map((todoItem, index) => (
            <View style={styles.todoItem} key={index}>
              <Text style={styles.text}>
                {index + 1}. { todoItem.title }
              </Text>
              <Text style={styles.textNormal}>
                { todoItem.body }
              </Text>
            </View>
          ))
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    paddingTop: Constants.statusBarHeight + 16,
  },
  text: {
    fontSize: 32,
    marginBottom: 16,
  },
  textNormal: {
    fontSize: 16
  },
  textInput: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#d3d3d3',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 16,
    fontSize: 16
  },
  button: {
    marginBottom: 32
  },
  scrollView: {
    flex: 1,
    display: 'flex',
  },
  todoItem: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#d3d3d3',
    padding: 16,
    marginTop: 8,
    marginBottom: 8,
    display: 'flex',
  }
})

export default App