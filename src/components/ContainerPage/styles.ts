import styled from "styled-components/native" 

type Props = {
    color?: string;
}

export const Container = styled.SafeAreaView<Props>`
    flex: 1;
    background: ${({ theme, color }) => color 
        ? theme.colors[color]
        : theme.colors.white
    };
`