import { Image, StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }
  return (
    <View>
      <Text style = {styles.headingText}>Blog Card</Text>
      <View style = {[styles.card, styles.elevatedCard]}>
        <View style = {styles.headingContainer}>
            <Text style={styles.headerText}> What's new in JavaScript 21?</Text>
        </View>
        <Image 
            source={{
                uri: 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg'
            }}  
            style={styles.cardImage}
        />
        <View style = {styles.bodyContainer}>
            <Text numberOfLines={3}>JavaScript 21 introduces several exciting features including pattern matching and improved performance optimizations.
            </Text>
        </View>
        <View style = {styles.footerContainer}>
            <TouchableOpacity
            onPress={() => openWebsite('https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2021-with-examples-3hfm')}>
                <Text style = {styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => openWebsite('https://www.instagram.com/sajalrajhans/')}>
                <Text style = {styles.socialLinks}>Follow Me</Text>
            </TouchableOpacity>
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
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    headingContainer: {
        height: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#000000ff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    cardImage: {
        height: 200,
    },
    bodyContainer: {
        padding: 5,
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    socialLinks: {
        fontSize: 14,
        color: '#1E90FFFF',
        backgroundColor: '#F5F5F5',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 10,
    },
})