import React, { useContext, useEffect, useState } from 'react'
import { Alert, BackHandler } from 'react-native'
import ListItemWord from '../components/molecules/favorite/ListItemWord'
import MainLayout from '../components/templates/MainLayout'
import { dictStoreContext } from '../contexts'
import { RoutesConstants } from '../navigations/route-constants'
import { backHandleToExitApp } from '../utils'

const words = ['representative', 'presentation', 'reduction', 'capacity']

const Favorite = ({ navigation }) => {
  const dictStore = useContext(dictStoreContext)
  const [wordDetailsList, setWordDetailsList] = useState([])

  useEffect(() => {
    backHandleToExitApp(Alert, BackHandler)
    let data = []
    words.forEach(async (word) => {
      const result = await dictStore.findWord(word)
      data.push(result)
    })
    setWordDetailsList(data)
  }, [])

  const onGoToWordView = (word) => {
    navigation.navigate(RoutesConstants.WordView, { word: word })
  }

  return (
    <MainLayout voiceButtonIsVisible={true}>
      {wordDetailsList.map((word, i) => (
        <ListItemWord
          key={'word' + i.toString()}
          word={word}
          onGoToWordView={onGoToWordView}
        />
      ))}
    </MainLayout>
  )
}

export default Favorite
