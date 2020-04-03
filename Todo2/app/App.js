import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Heading from './Heading';
import Input from './Input';
import Button from './Button';

let todoIndex = 0

class App extends Component {
  constructor () {
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
    this.submitTodo = this.submitTodo.bind(this)
  }

  inputChange(inputValue) {
    console.log(' Input Value : ', inputValue)
    this.setState({ inputValue })
  }

  submitTodo () {
    if (this.state.inputValue.match(/^\s*$/)) {
      return
    }
    const todo = {
     title: this.state.inputValue,
     todoIndex,
     complete: false
    }
    todoIndex++
    const todos = [...this.state.todos, todo]
    this.setState({ todos, inputValue: ''}, () => {
      console.log( 'State: ', this.state)
    })
  }

  render() {

    const { inputValue } = this.state
    
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}
          keyboardShouldPersistTaps='always'>
            <Heading />
            <Input
              inputValue={inputValue}
              inputChange={(text) => this.inputChange(text)} />
            <Button submitTodo={this.submitTodo}/>
        </ScrollView>
      </View>
    )
  }
}

const styles= StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
})
export default App;