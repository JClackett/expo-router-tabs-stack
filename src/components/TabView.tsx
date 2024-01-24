import * as React from "react"
import { Text, View } from "react-native"
import { SafeAreaView } from "./SafeAreaView"

interface Props {
  title: string
  children?: React.ReactNode
}

export function TabView(props: Props) {
  return (
    <SafeAreaView>
      <View className="flex-1 px-4">
        <Text className="pb-4 text-3xl">{props.title}</Text>
        {props.children}
      </View>
    </SafeAreaView>
  )
}
