import styled from "styled-components/native" 

type Props = {
    fontSize: number;

}

export const TextComponent = styled.Text<Props>`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 16px;
`