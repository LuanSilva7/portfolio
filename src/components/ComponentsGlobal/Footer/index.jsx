import { Container, Text } from "./styles"

export default function Footer(){
    const date = new Date()
    return(
        <Container>
            <Text>
                {date.getFullYear()} - Portifólio
            </Text>
        </Container>
    )
}