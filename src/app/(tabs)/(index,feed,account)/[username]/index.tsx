import { PostItem } from "@/components/PostItem"
import { ScreenView } from "@/components/ScreenView"
import { posts } from "@/data/posts"
import { users } from "@/data/users"
import { useTabSegment } from "@/lib/useTabSegment"
import { Link, useLocalSearchParams } from "expo-router"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"

export default function Screen() {
  const params = useLocalSearchParams<{ username: string }>()
  const user = users.find((user) => user.username === params.username)
  const userPosts = posts.filter((post) => post.userId === user.id)
  const tab = useTabSegment()
  return (
    <ScreenView title="User profile">
      <ScrollView className="flex-1">
        <View className="flex-1 gap-6">
          <View className="flex flex-row justify-between">
            <View>
              <Text>Name: {user.name}</Text>
              <Text>Username: {user.username}</Text>
            </View>
            <Link push href={`/${tab}/${user.username}/save`} asChild>
              <TouchableOpacity>
                <Text className="underline">Save</Text>
              </TouchableOpacity>
            </Link>
          </View>
          <Link push href={`/${tab}/${user.username}/followers`} asChild>
            <TouchableOpacity>
              <Text className="underline">View followers</Text>
            </TouchableOpacity>
          </Link>
          <View>
            <Text>Posts</Text>
            {userPosts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </View>
        </View>
      </ScrollView>
    </ScreenView>
  )
}
