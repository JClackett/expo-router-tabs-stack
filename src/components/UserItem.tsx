import { User } from "@/data/users"
import { useTabSegment } from "@/lib/useTabSegment"
import { Link } from "expo-router"
import * as React from "react"
import { Text, TouchableOpacity } from "react-native"

interface Props {
  user: User
}

export function UserItem(props: Props) {
  const tab = useTabSegment()
  return (
    <Link push href={`/${tab}/${props.user.username}`} asChild>
      <TouchableOpacity className="flex flex-row items-center justify-between border border-gray-300 p-2">
        <Text>{props.user.username}</Text>
      </TouchableOpacity>
    </Link>
  )
}
