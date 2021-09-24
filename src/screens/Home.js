import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const histories = [
  {
    date: 'Yesterday',
    bobba: 0.0024,
  },
  {
    date: 'Sept 22 2021',
    bobba: 0.002,
  },
  {
    date: 'Sept 21 2021',
    bobba: 0.0019,
  },
  {
    date: 'Sept 20 2021',
    bobba: 0.0022,
  },
];

export default function Home() {
  return (
    <SafeAreaProvider style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          {/* content */}
          <View style={contentStyles.container}>
            <Text style={contentStyles.title}>Slurppping Bobba</Text>
            <Image
              style={contentStyles.image}
              source={require('../assets/logo.png')}
            />
            <Text style={contentStyles.earnedText}>
              You have earned 0.0012 BobbaCoin
            </Text>
            <View style={statisticStyles.container}>
              <View style={[statisticStyles.itemWrapper]}>
                <Text style={statisticStyles.itemTitle}>Speed</Text>
                <Text style={statisticStyles.itemValue}>66 GH/s</Text>
              </View>
              <View
                style={[statisticStyles.itemWrapper, statisticStyles.itemDark]}>
                <Text
                  style={[
                    statisticStyles.itemTitle,
                    statisticStyles.itemDarkText,
                  ]}>
                  Conversion
                </Text>
                <Text
                  style={[
                    statisticStyles.itemValue,
                    statisticStyles.itemDarkText,
                  ]}>
                  18K
                </Text>
              </View>
            </View>
          </View>
          {/* histories */}
          <View style={historyStyles.container}>
            <View style={historyStyles.titleWrapper}>
              <Text style={historyStyles.title}>Histories</Text>
              <TouchableOpacity>
                <Text style={historyStyles.link}>See All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.divider} />
            {histories.map((history, index) => (
              <View key={index}>
                <View>
                  <Text style={historyStyles.earnedDate}>{history.date}</Text>
                  <Text style={historyStyles.earnedText}>{history.bobba}</Text>
                </View>
                <View style={styles.divider} />
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
    backgroundColor: '#ffffff',
  },
  divider: {
    marginVertical: 20,
    height: 1,
    backgroundColor: '#eee',
  },
});

const contentStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#261754',
    textAlign: 'center',
  },
  image: {
    marginTop: 30,
    width: 250,
    height: 250,
    resizeMode: 'cover',
  },
  earnedText: {
    color: '#bab7cd',
  },
});

const historyStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 30,
    marginTop: 50,
    borderRadius: 10,
    elevation: 100,
    shadowColor: '#333',
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    color: '#261754',
  },
  link: {
    color: '#bab7cd',
  },
  earnedDate: {
    fontStyle: 'italic',
  },
  earnedText: {
    textAlign: 'right',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#657aff',
  },
});

const statisticStyles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 40,
  },
  itemWrapper: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    elevation: 20,
    shadowColor: '#333',
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  itemTitle: {},
  itemValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemDark: {
    backgroundColor: '#657aff',
  },
  itemDarkText: {
    color: '#fff',
  },
});
