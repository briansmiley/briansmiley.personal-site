import { useSyncExternalStore } from "react"

const subscribe = () => () => {}

/** false during SSR and the first client render, true after hydration. */
export function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )
}
