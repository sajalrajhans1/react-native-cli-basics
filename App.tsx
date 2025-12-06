import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from './Components/FlatCards'
import ElevatedCards from './Components/ElevatedCards'  
import FancyCard from './Components/FancyCard'
import ActionCard from './Components/ActionCard'
import ContactList from './Components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCards/>
      <ElevatedCards/>
      <FancyCard/>
      <ActionCard />
      <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App