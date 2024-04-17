import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import {style} from './Style/style'

export class App extends Component {
  render() {
    return (
      <View style ={style.container}>
        <View style = {style.blockdangnhap}>
            <Text style = {style.Titledangnhap}>Đăng nhập</Text>
            <TextInput value='Tên đăng nhập' style = {style.txtacount}/>
            <TextInput value='Mật khẩu' style ={style.txtacount} />

            <TouchableOpacity style = {style.btn}>
                <Text style = {style.txtdangnhap}>ĐĂNG NHẬP</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default App