import React, { useState, useEffect } from 'react';

import { useFonts } from '@use-expo/font'

import { MaterialIcons } from '@expo/vector-icons'

import { AppLoading } from 'expo'

import { Image } from 'react-native'

import * as ImagePicker from 'expo-image-picker'

import Constants from 'expo-constants';

import * as Permissions from 'expo-permissions'

import { useNavigation } from '@react-navigation/native'

import { 
  Container,
  Goback,
  ImagePickerButton,
  ImagePickerText

} from '../../Components/Components';

export default function Editor() {
    const [ image, setImage ] = useState(null)

    const navigation = useNavigation()

    useEffect(() => {
        getPermissionAsync()
    })

    const getPermissionAsync = async () => {
        if ( Constants.platform.android || Constants.platform.ios){
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if ( status !== 'granted' ){
            alert('Sorry, we need camera roll permissions to make this work!')
        }
        }
    }

    const pickImage = async () => {
        try{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            allowsMultipleSelection: true,
            aspect: [ 4, 3 ],
            quality: 1
        })

        if(!result.cancelled){
            setImage(result.uri)
        }

        } catch (err) {
        console.log(err);
        }
    }
  

    let [ fontsLoaded ] = useFonts({
        'MontserratAlternates-Bold': require('../../../assets/Fonts/MontserratAlternates-Bold.ttf'),
        'MontserratAlternates-Regular': require('../../../assets/Fonts/MontserratAlternates-Regular.ttf')
    })


    if(!fontsLoaded){
        return <AppLoading/>
    } else {
        return (
        <Container>
            <Goback
                onPress={() => navigation.goBack()}
            >
                <MaterialIcons name='arrow-back' size={20} color='#138A72'  />
            </Goback>
            
            <ImagePickerButton
                onPress={() => pickImage()}
            >
                <ImagePickerText style={{ fontFamily: 'MontserratAlternates-Bold' }} >Select an image from your gallery</ImagePickerText>
            </ImagePickerButton>
                { image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop: 10 }} />} 

        </Container>
        )
    }
}
