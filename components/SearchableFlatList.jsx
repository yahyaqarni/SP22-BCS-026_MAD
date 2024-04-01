import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import QuranData from '../QuranData';


const SearchableFlatList = ({ data }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (text) => {
    const filtered = data.filter((item) =>
      item.english.toLowerCase().includes(text.toLowerCase()) ||
      item.arabic.includes(text)
    );
    setSearchText(text);
    setFilteredData(filtered);
  };


  const handlePress = (index) => {
    const surahDetail = QuranData.surahDetails[index];
    const { ayahs, rukus, revelationType } = surahDetail;
    Alert.alert(
      'Surah Description',
      `Ayahs: ${ayahs}\nRukus: ${rukus}\nRevelation Type: ${revelationType}`,
    );
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => handlePress(index)} style={styles.item}>
      <Text style={styles.englishName}>{item.english}</Text>
      <Text style={styles.arabicName}>{item.arabic}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Surahs..."
        onChangeText={handleSearch}
        value={searchText}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10 
  },
  item: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 15,
    backgroundColor: '#9D76C1',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  englishName: {
    color: '#5B0888',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 5,
  },
  arabicName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SearchableFlatList;
