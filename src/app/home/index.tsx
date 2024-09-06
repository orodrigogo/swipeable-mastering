import { useRef } from "react"
import { FlatList, View } from "react-native"
import Swipeable, {
  SwipeableMethods,
} from "react-native-gesture-handler/ReanimatedSwipeable"

import { Card } from "../../components/card"
import { contacts } from "../../utils/contacts"

import { styles } from "./styles"
import { Option } from "../../components/option"

export function Home() {
  const openSwipeableRef = useRef<SwipeableMethods | null>(null)

  function closePreviousSwipeable(
    direction: "left" | "right",
    open: SwipeableMethods | null
  ) {
    if (direction === "left") {
      console.warn("REMOVER")
    }

    if (openSwipeableRef.current) {
      openSwipeableRef.current.close()
    }

    // Define o Swipeable atual como o aberto
    openSwipeableRef.current = open
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          let current: SwipeableMethods | null = null

          return (
            <Swipeable
              ref={(swipeable) => (current = swipeable)}
              // friction={2}
              // rightThreshold={10}
              // dragOffsetFromRightEdge={100}
              // overshootFriction={8}
              overshootRight={false}
              // onSwipeableOpen={(direction) => console.warn("ABRIU")}
              // onSwipeableClose={(direction) => console.warn("FECHOU")}
              // onSwipeableWillOpen={(direction) => console.warn("VAI ABRIR")}
              // onSwipeableWillClose={(direction) => console.warn("VAI FECHAR")}
              containerStyle={styles.swipeableContainer}
              renderRightActions={() => (
                <View style={styles.rightOptions}>
                  <Option icon="open-in-new" backgroundColor="#00B960" />
                  <Option icon="close" backgroundColor="#3E68D7" />
                </View>
              )}
              renderLeftActions={() => (
                <View style={styles.leftOptions}>
                  <Option icon="delete" backgroundColor="#E83D55" />
                </View>
              )}
              // onSwipeableWillOpen={(direction) => direction === "left" && console.warn("REMOVER!") }
              onSwipeableWillOpen={(direction) =>
                closePreviousSwipeable(direction, current)
              }
              leftThreshold={50}
            >
              <Card name={item.name} email={item.email} />
            </Swipeable>
          )
        }}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
