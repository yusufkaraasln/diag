import React from 'react';

import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Hello Diagno</Text>
          <Text>Hello Dev Branch </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
