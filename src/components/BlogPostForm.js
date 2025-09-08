import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function BlogPostForm({
  onSubmit,
  initialValues = { title: '', content: '' },
}) {
  const [title, setTitle] = useState(initialValues ? initialValues.title : '');
  const [content, setContent] = useState(
    initialValues ? initialValues.content : ''
  );

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput value={title} onChangeText={setTitle} style={styles.input} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        value={content}
        onChangeText={setContent}
        style={styles.input}
      />
      <Button
        title="Save Blog Post"
        onPress={() => {
          onSubmit(title, content);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    margin: 5,
    padding: 5,
    marginBottom: 15,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});
