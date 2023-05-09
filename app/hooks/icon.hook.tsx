import { AntDesign, Entypo } from '@expo/vector-icons'

export const Icons = {
  MoreIcon: (size: number, color?: string) => <AntDesign name='down' size={size} color={color} />,
  HomeIcon: (size: number, color?: string) => <Entypo name='home' size={size} color={color} />,
  SettingIcon: (size: number, color?: string) => <AntDesign name='setting' size={size} color={color} />
}