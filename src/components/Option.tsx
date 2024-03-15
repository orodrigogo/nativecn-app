import { ReactNode } from "react"
import { Text, View, TextProps } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { colors } from "@/styles/colors"

interface OptionProps {
  children: ReactNode
}

interface IconProps {
  icon: keyof typeof MaterialIcons.glyphMap
}

function Option({ children }: OptionProps) {
  return (
    <View className="w-full flex-row items-center gap-2 border-b border-gray-500 py-3">
      {children}
    </View>
  )
}

function Icon({ icon }: IconProps) {
  return <MaterialIcons name={icon} size={20} color={colors.white} />
}

function Title({ ...rest }: TextProps) {
  return <Text className="text-white text-lg flex-1" {...rest} />
}

Option.Title = Title
Option.Icon = Icon

export { Option }
