import { TouchableOpacity } from 'react-native'
import { Text } from '../../components/Text'

import { 
    Container,
} from './styles'

export function Main({ navigation }) {
    return (
        <Container>
            <Text 
                font={'xlarge'}
                weight='bold'
            >
                Main
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text font={'medium'}>Click</Text>
            </TouchableOpacity>
        </Container>
    )
}