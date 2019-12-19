import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { View, StyleSheet, Image, Button, Alert } from 'react-native'

async function askForPermissions() {
    const { status } = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL
    )
    if (status !== 'granted') {
        console.log(status)
        Alert.alert(
            'Ошибка',
            'Вы не дали прав на создание фото'
        )
        return false
    }
    return true
}

export const PhotoPicker = ({ onPick }) => {
    const [image, setImage] = useState(null)

    const takePhoto = async () => {
        const hasPermissions = await askForPermissions()

        if(!hasPermissions) {
            return false
        }

        const img = await ImagePicker.launchCameraAsync({
            quality: 0.7,
            allowsEditing: false,
            aspect: [16, 9]
        })

        setImage(img.uri)
        onPick(img.uri)
    }
    return (
        <View style={ styles.wrapper }>
            {
                image && <Image style={ styles.image } source={{ uri: image }} />
            }
            <Button
                title='Сделать фото'
                style={ styles.button }
                onPress={ takePhoto }
            />
        </View>
    )
}
const styles = StyleSheet.create({ 
    wrapper: {
        marginBottom: 10
    },
    button: {
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10
    }
})