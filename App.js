import { Text, Touchable, TouchableOpacity, View, StyleSheet } from 'react-native';

import QuranData from './QuranData';
import SearchableFlatList from './components/SearchableFlatList';
import { useState } from 'react';



export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleColors = () => {
    setDarkMode(!darkMode);
  };

  return (
    <View style={{ flex: 1, paddingTop: 25, backgroundColor: darkMode ? '#161616' : '#E5CFF7' }}>
      <View style={{flex: 0.15, alignItems:'center', justifyContent:'center'}}>
        <Text style={{  fontSize: 24, fontWeight: 'bold', textAlign: 'center', paddingTop: 15, color: darkMode ? '#ffffff' : '#000000' }}>Welcome to Quran App!</Text>
        <View style={{flexDirection: 'row', gap:10}}>
        <TouchableOpacity onPress={toggleColors} style={styles.darkModeButton}>
          <Text style={{ color: '#ffffff' }}>Dark Mode</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.darkModeButton}>
          <Text style={{ color: '#ffffff' }}>Juzz</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={{flex:0.85}}>
      <SearchableFlatList data={QuranData.surahNames} />
      </View>
    </View>
  );

  
}

const styles = StyleSheet.create({
  darkModeButton: {
    backgroundColor: '#9D76C1',
    padding: 5,
    paddingHorizontal:25,
    borderRadius: 20,
    marginVertical: 10,
  },
});
