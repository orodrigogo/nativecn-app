import { type VariantProps, cva } from "class-variance-authority"
import { ImageProps, Text, View, Image } from "react-native"

import { cn } from "../lib/utils"

const badgeVariants = cva(
  "flex flex-row items-center px-4 py-1 text-xs gap-1",
  {
    variants: {
      variant: {
        default: "bg-gray-500 rounded-full",
        secondary: "bg-none border border-gray-500 rounded",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const badgeTextVariants = cva("font-medium text-center text-xs", {
  variants: {
    variant: {
      default: "text-white",
      secondary: "text-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface BadgeProps
  extends React.ComponentPropsWithoutRef<typeof View>,
    VariantProps<typeof badgeVariants> {
  label: string
  labelClasses?: string
  icon: ImageProps
}
function Badge({
  label,
  labelClasses,
  className,
  variant,
  icon,
  ...props
}: BadgeProps) {
  return (
    <View className={cn(badgeVariants({ variant }), className)} {...props}>
      <Image source={icon} className="w-4 h-4" />
      <Text className={cn(badgeTextVariants({ variant }), labelClasses)}>
        {label}
      </Text>
    </View>
  )
}

export { Badge, badgeVariants }
