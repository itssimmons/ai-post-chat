import { TouchableOpacity } from 'react-native'
import { Path, Svg } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

export default (props: IconProps) => {
  const { colors } = useTheme()

  return (
    <TouchableOpacity {...props}>
      <Svg width={24} height={24} viewBox='0 0 24 24' fill='none'>
        <Path
          d='M15 5l-6 7 6 7'
          stroke={`${colors.text}`}
          strokeWidth={3}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </Svg>
    </TouchableOpacity>
  )
}
