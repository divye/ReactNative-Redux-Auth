import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  TextInput,
  Text
} from 'react-native';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../actions'

function mapStateToProps(state){
  return {user: state.userReducers.user}
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(Actions, dispatch);
}

var Login = React.createClass ({

  onLoginButtonPress() {
    console.log(this.props.user.password)
    this.props.login({
      username: this.props.user.username,
      password: this.props.user.password
    })
  },
  render() {
        return (
        <View style={styles.container}>
        {
          !this.props.user.loggedIn &&
          <View>
            <Text style={styles.header}>Authentication</Text>
            <TextInput style={styles.input}
            placeholder="Username"
            onChangeText={(text) => {this.props.setUsername(text)}}
            value={this.props.user.username}/>
            <TextInput style={styles.input}
            placeholder="Password"
            secureTextEntry={ true }
            onChangeText={(text) => {this.props.setPassword(text)}}
            value={this.props.user.password}
            />
            <TouchableHighlight onPress={()=>this.onLoginButtonPress()} style={styles.button}>
            <Text style={styles.text}>Sign In</Text>
            </TouchableHighlight>
         </View>
        }
        {
          this.props.user.loggedIn &&
          <View>
          <Text style={styles.header}>Hello!{this.props.user.username}</Text>
          </View>
        }
        </View>
        );
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(Login);
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 25,
        color: 'blue',
        padding: 5,
    },
    input: {
    padding: 4,
    height: 40,
    width: 200,
    borderColor: '#006',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    alignSelf: 'center',
    color: 'blue'
},
    button: {
        height: 40,
        padding: 4,
        margin: 5,
        width: 75,
        borderColor: '#006',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'blue',
        fontSize: 15
    }
})
