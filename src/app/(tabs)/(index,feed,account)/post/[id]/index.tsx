import { ScreenView } from "@/components/ScreenView"
import { UserItem } from "@/components/UserItem"
import { posts } from "@/data/posts"
import { users } from "@/data/users"
import { useTabSegment } from "@/lib/useTabSegment"

import { Link, useLocalSearchParams } from "expo-router"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"

export default function Screen() {
  const params = useLocalSearchParams<{ id: string }>()
  const post = posts.find((post) => post.id === Number(params.id))
  const user = users.find((user) => user.id === post.userId)
  const tab = useTabSegment()
  return (
    <ScreenView title="Post detail">
      <ScrollView className="flex-1">
        <View className="flex-1 gap-6">
          <View className="flex flex-row items-center justify-between">
            <Text>Name: {post.name}</Text>
            <View className="flex flex-row items-center gap-4">
              <Link href={`/${tab}/post/${post.id}/edit`} asChild>
                <TouchableOpacity>
                  <Text className="underline">Edit</Text>
                </TouchableOpacity>
              </Link>
              <Link href={`/${tab}/post/${post.id}/save`} asChild>
                <TouchableOpacity>
                  <Text className="underline">Save</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
          <View>
            <Text>User</Text>
            <UserItem user={user} />
          </View>
        </View>
      </ScrollView>
    </ScreenView>
  )
}
