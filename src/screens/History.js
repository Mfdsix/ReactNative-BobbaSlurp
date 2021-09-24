import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Icon} from 'react-native-elements';
import {histories} from '../sources/Histories';

export default function History({navigation}) {
  function goToHomePage() {
    navigation.navigate('Home');
  }

  return (
    <SafeAreaProvider style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          {/* back */}
          <TouchableOpacity onPress={() => goToHomePage()}>
            <View style={styles.backWrapper}>
              <Icon color="#fff" name="chevron-back-outline" type="ionicon" />
              <Text style={styles.backText}>Back</Text>
            </View>
          </TouchableOpacity>
          {/* header */}
          <View style={headerStyles.container}>
            <Image
              source={require('../assets/logo.png')}
              style={headerStyles.image}
            />
            <Text style={headerStyles.title}>My Slurppp Earning</Text>
            <Text style={headerStyles.earnedText}>6.01421 BC</Text>
            <Text style={headerStyles.address}>
              Address: Wa123AxxxAHJASytqe6645
            </Text>
          </View>
          {/* histories */}
          <View>
            <Text style={historyStyles.title}>Earning Histories</Text>
            {histories.map((history, index) => (
              <View key={index}>
                <View style={historyStyles.contentWrapper}>
                  <Text style={historyStyles.earned}>{history.bobba} BC</Text>
                </View>
                <View style={historyStyles.footerWrapper}>
                  <Text style={historyStyles.date}>{history.date}</Text>
                  <Text style={historyStyles.speed}>{history.speed}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  safeArea: {
    backgroundColor: '#657aff',
  },
  backWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backText: {
    marginLeft: 10,
    color: '#fff',
  },
});

const headerStyles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#fff',
    padding: 30,
    overflow: 'hidden',
    borderRadius: 10,
    elevation: 20,
    shadowColor: '#333',
    borderBottomColor: '#160647',
    borderBottomWidth: 5,
  },
  title: {
    color: '#a6a2be',
    fontSize: 16,
  },
  earnedText: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 28,
    color: '#160647',
  },
  address: {
    fontStyle: 'italic',
    color: '#808080',
    fontSize: 12,
  },
  image: {
    position: 'absolute',
    top: -20,
    right: -20,
    width: 150,
    height: 150,
    resizeMode: 'cover',
    opacity: 0.5,
  },
});

const historyStyles = StyleSheet.create({
  title: {
    marginTop: 30,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentWrapper: {
    marginTop: 20,
    backgroundColor: '#8e9eff',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  earned: {
    fontSize: 28,
    color: '#fff',
  },
  footerWrapper: {
    backgroundColor: '#98a8ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    color: '#fff',
  },
  speed: {
    color: '#fff',
  },
});
