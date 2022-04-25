import React, { ReactNode } from "react"

import { Container } from "./styles"

interface ContainerPageProps {
    children?: ReactNode;
    color?: string;
}

export function ContainerPage({ children, color }: ContainerPageProps) {
    return <Container color={color} >{ children }</Container>
}