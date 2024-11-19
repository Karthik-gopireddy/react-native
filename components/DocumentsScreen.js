

import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const documentsData = [
  {
    id: '1',
    title: 'Lecture Notes - Week 1',
    description: 'Introduction to React Native',
    fileUrl: 'https://example.com/lecture-notes-week-1.pdf',
  },
  {
    id: '2',
    title: 'Lecture Notes - Week 2',
    description: 'Understanding Components and Props',
    fileUrl: 'https://example.com/lecture-notes-week-2.pdf',
  },
  {
    id: '3',
    title: 'Lecture Notes - Week 3',
    description: 'State and Lifecycle in React Native',
    fileUrl: 'https://example.com/lecture-notes-week-3.pdf',
  },
  // Add more documents as needed
];

function DocumentsScreen() {
  // const handleDownload = async (fileUrl, fileName) => {
  //   try {
  //     // Define the download path
  //     const downloadPath = `${RNFS.DocumentDirectoryPath}/${fileName}.pdf`;
  
  //     // Download the file
  //     const downloadResult = await RNFS.downloadFile({
  //       fromUrl: fileUrl,
  //       toFile: downloadPath,
  //     }).promise;
  
  //     if (downloadResult.statusCode === 200) {
  //       console.log(`File downloaded successfully to: ${downloadPath}`);
  //       alert('Download complete');
  //     } else {
  //       console.log('Failed to download file');
  //     }
  //   } catch (error) {
  //     console.error('Download error:', error);
  //     alert('Failed to download file');
  //   }
  // };

  const renderDocumentItem = ({ item }) => (
    <View style={styles.documentCard}>
      <View style={styles.documentInfo}>
        <Text style={styles.documentTitle}>{item.title}</Text>
        <Text style={styles.documentDescription}>{item.description}</Text>
      </View>
      <TouchableOpacity style={styles.downloadButton}>
        <Ionicons name="download-outline" size={24} color="#007AFF" />
        <Text style={styles.downloadText}>Download</Text>
      </TouchableOpacity>
    </View>
  );
  

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Documents</Text>
      <FlatList
        data={documentsData}
        renderItem={renderDocumentItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.documentList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default DocumentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  documentList: {
    paddingBottom: 20,
  },
  documentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  documentInfo: {
    flex: 1,
  },
  documentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  documentDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6F0FF',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  downloadText: {
    color: '#007AFF',
    fontSize: 14,
    marginLeft: 4,
  },
});
