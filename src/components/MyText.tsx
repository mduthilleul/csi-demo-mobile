import { Text, TextProps } from "react-native"

export const MyText = ({style, ...props}: TextProps) => {
    return <Text style={[{fontFamily: "Poppins_500Medium"}, style]} {...props} />
}

export const Demo = () => {
    return <MyText>Plop</MyText>
}