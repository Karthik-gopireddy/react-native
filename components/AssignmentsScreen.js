import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function AssignmentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Assignments Section</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default AssignmentsScreen;
