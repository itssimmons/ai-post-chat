import { TouchableOpacity } from 'react-native'
import { Path, Svg } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

export default (props: IconProps) => {
  const { colors } = useTheme()

  return (
    <TouchableOpacity {...props}>
      <Svg width={24} height={24} viewBox='0 0 24 24' fill='none'>
        <Path
          d='M9.25 14a3 3 0 110 6 3 3 0 010-6zM14.25 4a3 3 0 100 6 3 3 0 000-6zM8.75 6.209a.75.75 0 010 1.5h-7a.75.75 0 010-1.5h7zM14.75 16.209a.75.75 0 000 1.5h7a.75.75 0 000-1.5h-7zM1 16.959a.75.75 0 01.75-.75h2a.75.75 0 010 1.5h-2a.75.75 0 01-.75-.75zM21.75 6.209a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h2z'
          fill={`${colors.text}`}
        />
        <Path
          d='M9.25 14a3 3 0 110 6 3 3 0 010-6zM14.25 4a3 3 0 100 6 3 3 0 000-6zM8.75 6.209a.75.75 0 010 1.5h-7a.75.75 0 010-1.5h7zM14.75 16.209a.75.75 0 000 1.5h7a.75.75 0 000-1.5h-7zM1 16.959a.75.75 0 01.75-.75h2a.75.75 0 010 1.5h-2a.75.75 0 01-.75-.75zM21.75 6.209a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h2z'
          fill={`${colors.text}`}
          strokeWidth={0.8}
          strokeLinecap='round'
        />
      </Svg>
    </TouchableOpacity>
  )
}
