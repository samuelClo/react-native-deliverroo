import React from 'react';
import { View, ImageBackground, StyleSheet, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Item, Input } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RESTAURANT = [
  {
    "name": "Mc Donald",
    "url": "https://www.barbanews.com/wp-content/uploads/2020/05/mcdonalds.jpg"
  },
  {
    "name": "Burger King",
    "url": "https://icisete.fr/wp-content/uploads/2019/04/Burger-King-S%C3%A8te-H%C3%A9rault.jpg"
  },
  {
    "name": "Subway",
    "url": "https://media-cdn.tripadvisor.com/media/photo-s/15/f6/0a/71/subway.jpg"
  },
  {
    "name": "Quick",
    "url": "https://www.slate.fr/sites/default/files/styles/1060x523/public/quick.jpg"
  }
]

const ListProduct = () => {
  const renderItem = ({item}) => {
    return (
      <Card  key={item.name}>
        <Body style={styles.card}>
          <ImageBackground source={{uri: item.url}} style={styles.image}>
            <Text style={styles.textColor}>
              {item.name}
            </Text>
          </ImageBackground>
        </Body>
      </Card>
    )
  }

  return (
      <Container>
        <Content style={styles.header}>
          <Item>
            <MaterialIcons name="search" color="black" size={25} />
            <Input placeholder="Search for a restaurant or a dish" />
          </Item>
        </Content>
          <FlatList
            data={RESTAURANT}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.wrapperImage}
            numColumns={2}
            scrollEnabled
            horizontal={false}
          />
      </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 10
  },
  card: {
    width: (windowWidth * 0.48),
    height: (windowHeight * 0.10),
  },
  wrapperImage: {
    justifyContent: "center"
    // flexDirection: 'row',
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    color: '#FFF',
    flex: 1
  },
  textColor: {
    color: '#FFF'
  }
})

export default ListProduct;