import { Text, TextProps } from "react-native"

export const MyText = ({style, ...props}: TextProps) => {
    return <Text {...props} style={[{fontFamily: "Poppins_500Medium"}, style]} />
}

export const Demo = () => {
    return <MyText>Plop</MyText>
}