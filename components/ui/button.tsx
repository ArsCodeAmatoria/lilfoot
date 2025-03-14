import * as React from "react"
import { cn } from "#/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-gray-900",
          {
            "bg-gray-800 text-gray-50 hover:bg-gray-700": variant === "default",
            "bg-green-600 text-white hover:bg-green-500": variant === "primary",
            "bg-red-600 text-white hover:bg-red-500": variant === "destructive",
            "border border-gray-700 bg-transparent hover:bg-gray-800 hover:text-gray-50": variant === "outline",
            "bg-gray-700 text-gray-50 hover:bg-gray-600": variant === "secondary",
            "hover:bg-gray-800 hover:text-gray-50": variant === "ghost",
            "underline-offset-4 hover:underline text-gray-50": variant === "link",
            "h-10 py-2 px-4": size === "default",
            "h-9 px-3 rounded-md": size === "sm",
            "h-11 px-8 rounded-md": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, type ButtonProps } 