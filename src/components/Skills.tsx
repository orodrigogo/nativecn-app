import { View } from "react-native"

import { SKILLS } from "@/utils/skills"
import { Title } from "@/components/Title"
import { Badge } from "./Badge"

export function Skills() {
  return (
    <View className="w-full">
      <Title>Skills</Title>

      <View className="flex-row w-full flex-wrap gap-3">
        {SKILLS.map((skill) => (
          <Badge key={skill.name} label={skill.name} icon={skill.icon} />
        ))}
      </View>
    </View>
  )
}
