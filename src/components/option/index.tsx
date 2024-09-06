import {
  ColorValue,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap
  backgroundColor: ColorValue
}

export function Option({ icon, backgroundColor, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      activeOpacity={0.7}
      {...rest}
    >
      <MaterialIcons name={icon} size={24} color="#FFF" />
    </TouchableOpacity>
  )
}
