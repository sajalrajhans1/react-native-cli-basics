import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';

export default function ContactList() {
  const contacts = [
  {
    uid: 1,
    name: 'Arjun Verma',
    status: 'Just an extra ordinary teacher',
    imageUrl: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=300&q=80',
  },
  {
    uid: 2,
    name: 'John Doe',
    status: 'Learning React Native',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
  },
  {
    uid: 3,
    name: 'Sarah Lee',
    status: 'Frontend Developer',
    imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=300&q=80',
  },
  {
    uid: 4,
    name: 'Akash Sharma',
    status: 'Building cool apps',
    imageUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=300&q=80',
  },
  {
    uid: 5,
    name: 'Emily Clark',
    status: 'UI/UX enthusiast',
    imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80',
  },
];


  return (
    <View>
      <Text style = {styles.headingText}>Contact List</Text>
      <ScrollView style= {styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style = {styles.userCard}>
                <Image
                    source={{uri: imageUrl}}
                    style={styles.userImage}
                />
                <View>
                <Text style = {styles.userName}>{name}</Text>
                <Text style = {styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText: {
        color: '#ffffffff',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4,
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        backgroundColor: '#8D3DAF',
        padding: 6,
        borderRadius: 10,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60/2,
        marginRight: 12,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffffff',
    },
    userStatus: {
        fontSize: 14,
        color: '#ffffff99',
    },
});