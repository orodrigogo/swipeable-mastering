import { Text, View } from "react-native"

import { styles } from "./styles"

type Props = {
  name: string
  email: string
}
export function Card(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.email}>{props.email}</Text>
    </View>
  )
}
