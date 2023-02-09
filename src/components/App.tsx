/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {FlatList, View, StyleSheet, Text, Linking} from 'react-native';
import {Button, Card, Title, Paragraph, Appbar} from 'react-native-paper';
// import AppStyles from '../styles/AppStyles';
import courses from '../data/courses.json';

const handleClick = (link: string) => {
  Linking.canOpenURL(link).then(supported => {
    if (supported) {
      Linking.openURL(link);
    } else {
      console.log('Unable to open URL:' + link);
    }
  });
};

const App = () => (
  <View>
    <Appbar style={styles.bar}>
      <Appbar.Content title="Courses" />
    </Appbar>
    <FlatList
      data={courses}
      renderItem={({item}) => (
        <Card>
          <Card.Cover source={{uri: item.image}} />
          <Card.Content>
            <Title>{item.title}</Title>
            <Paragraph>{item.description}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => console.log('boop')}>boop</Button>
            <Button onPress={() => handleClick(item.link)}>{item.title}</Button>
          </Card.Actions>
        </Card>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  bar: {
    marginTop: 48,
  },
});

export default App;
