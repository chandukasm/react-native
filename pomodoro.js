import React from 'react';
import {
  View,
  Button,
  Text,
  ScrollView,
  StyleSheet,
  Switch,
} from 'react-native';
import { Constants } from 'expo';

 
class  CountEvenNumbers extends React.Component {

  shouldComponentUpdate(nextProps){
    return !(nextProps.count%2)
  }
  
  render() {
    return (
      <Text style={styles.count}>
        {this.props.count}
      </Text>
      
    );
  }
} 







export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }


  inc = () =>{
    this.setState(prevState =>({
      count : prevState.count+1 ,
    }))
  } 

componentDidMount(){
  setInterval( this.inc,1000)
}
 
handlePress = ()=>{
  this.setState(prevState =>({
    count : 0,
  }))
}


  render() {
    return (
      
      <View style={styles.appContainer}>
        <CountEvenNumbers  count={this.state.count} />

        <Button
         onPress = {this.handlePress}
         title = "stop"
         color = "red"
      />
        </View>
        
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
   justifyContent: 'center',
  },

  count: {
    fontSize: 48,
  },
});
