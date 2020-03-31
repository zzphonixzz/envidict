import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { View, List } from 'native-base'

import { Typography, Colors } from '../../../styles'
import ListItemCourses from './ListItemCourses'

const dataArr = [
  {
    id: 1,
    avatar: 'https://reactjs.org/logo-og.png',
    title: 'OOAD',
    subTitle: '50 cau hoi vi sao',
  },
]
const Courses = (props) => {
  const { coursesName, onGoToMainLearning } = props
  return (
    <View>
      <Text style={styles.coursesName}>{coursesName}</Text>
      <List>
        <ListItemCourses
          image="https://reactjs.org/logo-og.png"
          title="600 Từ vựng TOEIC"
          subTitle="Số bài học: 50"
          onGoToMainLearning={onGoToMainLearning}
        />
        <ListItemCourses
          image="https://reactjs.org/logo-og.png"
          title="OOAD"
          subTitle="50 cau hoi"
          onGoToMainLearning={onGoToMainLearning}
        />
        <ListItemCourses
          image="https://reactjs.org/logo-og.png"
          title="OOAD"
          subTitle="50 cau hoi"
          onGoToMainLearning={onGoToMainLearning}
        />
      </List>
    </View>
  )
}
const styles = StyleSheet.create({
  coursesName: {
    fontSize: Typography.FONT_SIZE_18,
    paddingLeft: 8,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.SECONDARY_LIGHTEST,
    borderBottomColor: Colors.SECONDARY_LIGHT,
    borderBottomWidth: 0.7,
  },
})
export default Courses