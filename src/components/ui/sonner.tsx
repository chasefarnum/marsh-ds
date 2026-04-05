"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { BiCheckCircle, BiInfoCircle, BiError, BiErrorCircle, BiRefresh } from "react-icons/bi"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <BiCheckCircle className="size-5" />
        ),
        info: (
          <BiInfoCircle className="size-5" />
        ),
        warning: (
          <BiError className="size-5" />
        ),
        error: (
          <BiErrorCircle className="size-5" />
        ),
        loading: (
          <BiRefresh className="size-5 animate-spin" />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast gap-3",
          title: "font-semibold",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
