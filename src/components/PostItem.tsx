import { type Post } from "@/data/posts"
import { users } from "@/data/users"
import { useTabSegment } from "@/lib/useTabSegment"
import { Link } from "expo-router"
import * as React from "react"
import { Text, TouchableOpacity } from "react-native"

interface Props {
  post: Post
}

export function PostItem(props: Props) {
  const tab = useTabSegment()
  const user = users.find((user) => user.id === props.post.userId)
  return (
    <Link push href={`/${tab}/post/${props.post.id}`} asChild>
      <TouchableOpacity className="flex flex-row items-center justify-between border border-gray-300 p-2">
        <Text>{props.post.name}</Text>
        <Text> {user.username}</Text>
      </TouchableOpacity>
    </Link>
  )
}
