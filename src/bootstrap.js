import * as Font from 'expo-font'
import { DB } from './db'

export async function bootstrap() {
    try {
        await Font.loadAsync({
            'open-sans-regular': require('../assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
            'open-sans-bold': require('../assets/fonts/Open_Sans/OpenSans-Bold.ttf')
        })
        await DB.init()
        console.log('Database started...')
    } catch (error) {
        console.log('Error: ', error)
    }
}