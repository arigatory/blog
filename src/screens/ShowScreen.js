import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

export default function ShowScreen({ navigation }) {
  const { state } = useContext(Context);
  const blogPost = state.find((post) => post.id === navigation.getParam('id'));
  return (
    <View>
      <Text>ShowScreen</Text>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});
