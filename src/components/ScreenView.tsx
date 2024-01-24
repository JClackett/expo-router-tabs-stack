import type * as React from "react"
import { Text, TouchableOpacity, View } from "react-native"

import { useRouter } from "expo-router"
import { SafeAreaView } from "@/components/SafeAreaView"

interface Props {
  title?: string
  children?: React.ReactNode
  onBack?: () => void
}

export function ScreenView(props: Props) {
  const router = useRouter()
  return (
    <SafeAreaView>
      <View className="flex-1 px-4">
        <View className="flex flex-row items-center justify-between pb-2">
          <View className="flex flex-row items-center gap-4">
            <TouchableOpacity onPress={props.onBack || router.back} className="rounded border border-gray-400 p-2">
              <Text>{"< "}Back</Text>
            </TouchableOpacity>
            {props.title && <Text className="text-xl">{props.title}</Text>}
          </View>
        </View>
        {props.children}
      </View>
    </SafeAreaView>
  )
}
