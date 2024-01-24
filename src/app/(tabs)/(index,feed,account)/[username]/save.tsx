import { useRouter } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"

export default function SavePost() {
  const router = useRouter()
  return (
    <View className="flex-1 gap-4 p-4">
      <Text className="text-3xl">Save User</Text>
      <TouchableOpacity onPress={router.back}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  )
}
