import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Paragraph } from 'react-native-paper'

const CategoryCard = ({item}) => {
  return (
    <Pressable>
        <Card style={styles.card}>
            <Card.Content>
                <Text>{item.categoryName}</Text>
                <Paragraph>{item.categoryDescription}</Paragraph>
            </Card.Content>
        </Card>
    </Pressable>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
    card:{
        margin:16,
        alignItems:'center',
        backgroundColor:'orange'
    }
})