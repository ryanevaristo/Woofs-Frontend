import { TouchableOpacity } from 'react-native'
import { ContainerPage } from '../../components/ContainerPage'
import { Text } from '../../components/Text'

export function Login({ navigation  }) {
    return (
        <ContainerPage>
            <Text 
                font={'xlarge'}
                weight='bold'
                
            >
                Woofs
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <Text font={'medium'}>Click</Text>
            </TouchableOpacity>
        </ContainerPage>
    )
}