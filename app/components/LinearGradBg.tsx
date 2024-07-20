
import { StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const LinearGradBg = () => {
  return (
    <LinearGradient
                colors={['#FFDE4D', '#FFB22C']}
                style={styles.background}
                start={{ x: 0.4, y: 0 }}
                end={{ x: 1, y: 0.5 }}
    />
  )
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    }
})

export default LinearGradBg;