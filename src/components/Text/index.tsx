import React, { ReactNode } from "react"

import { TextComponent } from "./styles"

const fontSize = {
    small: 12,
    medium: 18,
    large: 20, 
}

interface TextProps {
    children: ReactNode;
    font: keyof typeof fontSize;
}

export function Text({ children, font}: TextProps) {
    return <TextComponent 
                fontSize={fontSize[font]}
            >
                {children}
            </TextComponent>
}