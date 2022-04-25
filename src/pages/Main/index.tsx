import { TouchableOpacity } from 'react-native'
import { ContainerPage } from '../../components/ContainerPage'
import { Text } from '../../components/Text'

export function Main({ navigation }) {
    return (
        <ContainerPage>
            <Text 
                font={'xlarge'}
                weight='bold'
            >
                Main
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text font={'medium'}>Click</Text>
            </TouchableOpacity>
        </ContainerPage>
    )
}