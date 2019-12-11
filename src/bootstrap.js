import * as Font from 'expo-font'
export async function bootstrap() {
    await Font.loadAsync({
        'open-sans-regular': require('../assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
        'open-sans-bold': require('../assets/fonts/Open_Sans/OpenSans-Bold.ttf')
    })
}