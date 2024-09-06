import { GestureHandlerRootView } from "react-native-gesture-handler"

import { Home } from "./src/app/home"

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Home />
    </GestureHandlerRootView>
  )
}
