import { cn } from "@/lib/utils"
import { BiRefresh } from "react-icons/bi"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <BiRefresh role="status" aria-label="Loading" className={cn("size-5 animate-spin", className)} {...props} />
  )
}

export { Spinner }
