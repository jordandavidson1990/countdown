import React, { Component } from 'react'
import {View, Text, TouchableHighLight} from 'react-native'

class EventForm extends Component{
    handleAddPress = () => {
      
    }
    
    render(){
        return(
                <View>
                    <TouchableHighLight
                    onPress={this.handleAddPress}>
                        <Text>Add</Text>
                    </TouchableHighLight>
                </View>
        )
    }
}
export default EventForm;