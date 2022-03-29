import React, { ReactNode } from "react"

import { TextComponent } from "./styles"

const fontSize = {
    small: 12,
    medium: 18,
    large: 20, 
    xlarge: 50
}

interface TextProps {
    children: ReactNode;
    font: keyof typeof fontSize;
    color?: string;
    weight?: string;
}

export function Text({ children, font, color, weight }: TextProps) {
    return <TextComponent 
                fontSize={fontSize[font]}
                color={color}
                weight={weight}
            >
                {children}
            </TextComponent>
}