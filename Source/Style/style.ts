import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    backgroundColor: '#3499dc',
    width: '100%',
    height: '100%',
    justifyContent:'center', 
     alignItems:'center'  , 

    
  },
  blockdangnhap :{
    backgroundColor:'white' , 
    width:350 ,
    height:350 ,    
    borderRadius:10,
   padding:25,
  justifyContent:'space-around' ,
  flexDirection:'column'
  
    
  } , 
  Titledangnhap:{
    fontSize:20, 
    fontWeight:'bold' ,
    color:'black' 

  } , 
  btn :{
    backgroundColor:'#3499dc',
    height:50 , 
    alignItems:'center' , 
    justifyContent:'center',
    borderRadius:10
  } , txtdangnhap:{
    color:'white'
  } , 
  txtacount:{
    color:'black' , paddingLeft:20
  }
});
