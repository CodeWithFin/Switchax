import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: React.ReactNode
  direction?: "left" | "right"
  pauseOnHover?: boolean
  className?: string
  innerClassName?: string
  speed?: "slow" | "fast" | "normal"
}

export default function Marquee({
  children,
  direction = "left",
  pauseOnHover = false,
  className,
  innerClassName,
  speed = "normal",
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-4",
          speed === "slow" ? "animate-marquee" : speed === "fast" ? "animate-marquee-fast" : "animate-marquee",
          direction === "right" ? "direction-reverse" : "",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          innerClassName
        )}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
