import { ActivitiesNavigation } from "@/components/ActivitiesNavigation"
import { Filter } from "@/types"

export default async function Layout({
  children,
  params: { filter },
}: {
  children: React.ReactNode
  params: { filter: Filter }
}) {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] grid grid-cols-[250px,1fr]">
      <ActivitiesNavigation filter={filter} />
      <div className="flex flex-col gap-y-6 border-l p-5">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">Activities</h1>
          <p className="text-sm text-gray-500">View and manage activities</p>
        </div>
        {children}
      </div>
    </div>
  )
}
