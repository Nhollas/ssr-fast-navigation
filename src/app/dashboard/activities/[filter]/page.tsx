import { Activities } from "@/components/Activities"
import { Filter } from "@/types"

const pause = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const dynamic = "force-dynamic"

export default async function Page({
  params: { filter },
}: {
  params: { filter: Filter }
}) {
  await pause(1000)

  return <Activities filter={filter} />
}
