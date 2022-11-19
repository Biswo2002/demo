import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

const BOOK_READ = [
  {
    id: 'BOOK1',
    image: require('./bs5.jpg'),
  },
  {
    id: 'BOOK2',
    image: require('./bs2.jpg'),
  },
  {
    id: 'BOOK3',
    image: require('./bs3.jpg'),
  },
  {
    id: 'BOOK4',
    image: require('./bs1.jpg'),
  },
  {
    id: 'BOOK5',
    image: require('./bs1.jpg'),
  },
];
const BOOK_READ2 = [
  {
    id: 'BOOK1',
    image: require('./bs1.jpg'),
  },
  {
    id: 'BOOK2',
    image: require('./bs3.jpg'),
  },
  {
    id: 'BOOK3',
    image: require('./bs1.jpg'),
  },
  {
    id: 'BOOK4',
    image: require('./1234568.jpg'),
  },
];

const AllBook2 = () => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Headline}>
          <Octicons name="three-bars" size={25} color={'#000'} />
          <Text style={styles.HeadlineBook}>All Books</Text>
          <Ionicons name="md-search-sharp" size={25} color="#000" />
        </View>

        {/* Head Button */}

        <View style={styles.Headbutton}>
          <TouchableOpacity style={styles.TouchHead}>
            <Text style={styles.Ebook}> Ebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Text style={styles.Audiobooks}>Audiobooks</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.FlatList}>
          <FlatList
            horizontal={false}
            data={BOOK_READ}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.BookIMG2}>
                <Image style={styles.f1IMG} source={item?.image} />
              </TouchableOpacity>
            )}
          />
          <FlatList
            horizontal={false}
            data={BOOK_READ2}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.BookIMG2}>
                <Image style={styles.f2IMG} source={item?.image} />
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
      <View style={styles.Button}>
        <Ionicons name="ios-home-outline" size={30} color={'gray'} />
        <MaterialIcons name="location-city" size={30} color={'gray'} />
        <Feather name="mic" size={30} color={'gray'} />
        <Feather name="message-square" size={30} color={'gray'} />
        <Feather name="user" size={30} color={'gray'} />
      </View>
    </SafeAreaView>
  );
};
export default AllBook2;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ffff',
    flex: 1,
  },
  Headline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingVertical: 25,
    paddingHorizontal: 15,
  },
  HeadlineBook: {
    color: '#271944',
    fontSize: 23,
  },
  TouchHead: {
    backgroundColor: '#ffff',
    width: 170,
    height: 55,
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 50,
  },
  Headbutton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f7f7f7',
    width: 380,
    height: 65,
    marginHorizontal: 20,
    alignItems: 'center',
    borderRadius: 10,
    // marginRight: 30,
  },
  Ebook: {
    color: '#271944',
    fontSize: 25,
    marginVertical: 4,
  },
  Audiobooks: {
    color: '#271944',
    fontSize: 22,
    marginRight: 30,
  },
  BookIMG2: {
    flexDirection: 'row',
    marginHorizontal: 5,
    paddingTop: 10,
  },
  f1IMG: {
    width: 200,
    height: 250,
    borderRadius: 20,
  },
  f2IMG: {
    width: 190,
    height: 315,
    borderRadius: 20,
  },
  FlatList: {
    marginVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 3,
  },
  Button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 55,
  },
});
