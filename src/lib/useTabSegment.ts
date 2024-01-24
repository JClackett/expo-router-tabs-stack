import { useSegments } from "expo-router"

type Group<T extends string> = `(${T})`

type SharedSegment = Group<"index"> | Group<"feed"> | Group<"account">

type Tabs = Group<"tabs">

export type TabSegment = `${Tabs}/${SharedSegment}`

export function useTabSegment() {
  return useSegments().slice(0, 2).join("/") as TabSegment
}
