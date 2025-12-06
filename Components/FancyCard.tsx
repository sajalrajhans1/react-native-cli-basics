import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image 
        source =  {{uri: 'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?q=80&w=1106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}

        style = {styles.cardImage}
        />
        <View style = {styles.cardBody}>
            <Text style = {styles.cardTitle}>Taj Mahal</Text>
            <Text style = {styles.cardLabel}>Agra, India</Text>
            <Text style = {styles.cardDescription}>The Taj Mahal is a white marble mausoleum renowned for its perfect symmetry and timeless architectural beauty.</Text>
            <Text style = {styles.cardFooter}>12 minutes away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
    color: '#ffffffff',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
    card: {
        width: 320,
        height: 320,
        borderRadius: 8,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    elevatedCard: {
        backgroundColor: '#ffffffff',
        elevation: 4,
        shadowOffset: { width: 1, height: 1 },
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardBody: {
        flex: 1,
        flexGrow : 1,  
        paddingHorizontal: 12,
    },
    cardTitle: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    cardLabel: {
        fontSize: 14,
        alignSelf: 'center',
        marginBottom: 8,
        fontWeight: '600',
    },
    cardDescription: {
        fontSize: 12,
        alignSelf: 'center',
        textAlign: 'center',
        marginBottom: 8,
    },
    cardFooter: {
        fontSize: 10,
        alignSelf: 'flex-end',
        marginBottom: 8,
        fontWeight: '500',
    },
})