import { forwardRef } from "react"
import { Text, TextInput, View } from "react-native"

import { cn } from "../lib/utils"
import { colors } from "@/styles/colors"

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label?: string
  labelClasses?: string
  inputClasses?: string
}
const Input = forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, label, labelClasses, inputClasses, ...props }, ref) => (
    <View className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <Text
          className={cn("text-white text-base font-bold mb-1", labelClasses)}
        >
          {label}
        </Text>
      )}
      <TextInput
        placeholderTextColor={colors.gray[400]}
        className={cn(
          inputClasses,
          "py-2.5 px-4 rounded-lg text-white bg-gray-600"
        )}
        {...props}
      />
    </View>
  )
)

export { Input }
