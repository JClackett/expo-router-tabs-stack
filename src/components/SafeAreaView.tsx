import * as React from "react"
import { View, ViewProps } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export function SafeAreaView(props: ViewProps) {
  const insets = useSafeAreaInsets()
  return <View style={{ paddingTop: insets.top, flex: 1 }} {...props} />
}
