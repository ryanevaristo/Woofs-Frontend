import { TouchableOpacity } from 'react-native'
import { Text } from '../../components/Text'

import { 
    Container,
} from './styles'

export function Login({ navigation  }) {
    return (
        <Container>
            <Text 
                font={'xlarge'}
                weight='bold'
            >
                Woofs
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <Text font={'medium'}>Click</Text>
            </TouchableOpacity>
        </Container>
    )
}