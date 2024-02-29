import Todo from './src/screen/Todo.js';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
    <View >
      <Todo />   
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
