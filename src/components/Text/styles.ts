import styled from "styled-components/native" 

type Props = {
    fontSize: number;
    color?: string;
    weight?: string;
}

export const TextComponent = styled.Text<Props>`
    color: ${({ theme, color }) => color 
        ? theme.colors[color]
        : theme.colors.green100
    };
    font-family: ${({ theme, weight }) => weight 
        ? theme.fonts[weight]
        : theme.fonts.regular
    };
    font-size: ${({ fontSize }) => fontSize}px;
`