"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { Filter } from "@/types"
import { motion } from "framer-motion"
import Link from "next/link"

interface ActivityItemProps {
  title: string
  href: string
  active: boolean
  layoutId: string
}

export const ActivityItem = ({
  title,
  href,
  active,
  layoutId,
}: ActivityItemProps) => {
  return (
    <div className="relative p-1">
      <Button
        asChild
        size="sm"
        variant={"ghost"}
        className={cn(
          "w-full text-sm hover:bg-transparent",
          active && "text-white hover:text-gray-300",
        )}
      >
        <Link href={href} className="!justify-start">
          {title}
        </Link>
      </Button>
      {active && (
        <motion.div
          className="absolute inset-0 -z-10 h-full w-full rounded-lg bg-primary"
          layoutId={layoutId}
        />
      )}
    </div>
  )
}

export function ActivitiesNavigation({ filter }: { filter: Filter }) {
  return (
    <div className="w-[250px] pt-4">
      <div className="fixed flex w-[250px] flex-col gap-y-2">
        <div className="flex flex-col gap-y-1 p-2">
          <ActivityItem
            title="All"
            href={`/dashboard/activities/all`}
            active={filter === "all"}
            layoutId="1"
          />
          <ActivityItem
            title="Due Today"
            href={`/dashboard/activities/due-today`}
            active={filter === "due-today"}
            layoutId="1"
          />
          <ActivityItem
            title="Past Due"
            href={`/dashboard/activities/past-due`}
            active={filter === "past-due"}
            layoutId="1"
          />
          <ActivityItem
            title="Completed"
            href={`/dashboard/activities/completed`}
            active={filter === "completed"}
            layoutId="1"
          />
          <ActivityItem
            title="Pending"
            href={`/dashboard/activities/pending`}
            active={filter === "pending"}
            layoutId="1"
          />
        </div>
        <Separator className="-z-20" />
        <div className="flex flex-col gap-y-1 p-2">
          <ActivityItem
            title="Applications"
            href={`/dashboard/activities/applications`}
            active={filter === "applications"}
            layoutId="1"
          />
          <ActivityItem
            title="Interviews"
            href={`/dashboard/activities/interviews`}
            active={filter === "interviews"}
            layoutId="1"
          />
          <ActivityItem
            title="Offers"
            href={`/dashboard/activities/offers`}
            active={filter === "offers"}
            layoutId="1"
          />
          <ActivityItem
            title="Networking"
            href={`/dashboard/activities/networking`}
            active={filter === "networking"}
            layoutId="1"
          />
        </div>
      </div>
    </div>
  )
}
