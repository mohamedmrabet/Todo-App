import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {IconButton} from "react-native-paper";
import Imag from "../components/Imag.js";
import React, { useState } from "react";

const Todo = () => {

const [todo,setTodo] = useState("")
const [todoList ,setTodoList ] = useState([])
// function pour ajouter nouveau task // 
const  handleAdd = () =>{
setTodoList(  [{id:Date.now(),Task:todo},...todoList ])
}
// function bich nfass5ou biha // 
const  removeItem=(id)=>{
  const filtredData= todoList.filter((item) => item.id !== id);
   setTodoList(filtredData )
}
    // local data //
  const renderList = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: "#1e90ff",
          borderRadius: 6,
          paddingHorizontal: 6,
          paddingVertical: 8,
          marginBottom: 10,
          flexDirection:"row",
          alignItems:"center",
          shadowColor:"#000",
          shadowOffset:{width:0,height:2},
          shadowOpacity:0.8,
          shadowRadius:3,
        }}
      >
        <Text style={{color: "white" ,fontSize:20 , fontWeight:"800" , flex:1}}>
          {item.Task}
          </Text>
        <IconButton icon="pencil" iconColor="#fff"/>
        <IconButton icon="trash-can" iconColor="#fff" onPress={()=> removeItem(item.id)}/>
      </View>
    );
  };

  // console.log(todo);
  return (
    <View style={{ marginHorizontal: 16,marginTop:50 }}>
      <Text>Todo Screen</Text>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "#1e90ff",
          borderRadius: 10,
          paddingVertical: 6,
        
        }}
        placeholder="Enter your task"
        value={todo}
                onChangeText={(userText)=>setTodo(userText)}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#000",
          borderRadius: 6,
          marginVertical: 34,
          alignItems: "center",
          paddingVertical: 12,
        }}
        onPress={()=>handleAdd()}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          Add
        </Text>
      </TouchableOpacity>

      <FlatList data={todoList} renderItem={renderList} />
   {
    todoList.length <= 0 && <Imag />
   }
    </View>
  );
};



export default Todo;

const styles = StyleSheet.create({});
