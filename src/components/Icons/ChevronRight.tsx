import type { StyleProp, ViewStyle } from 'react-native'
import { Path, Svg } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

export default (props?: { style: StyleProp<ViewStyle> }) => {
  const { colors } = useTheme()

  return (
    <Svg
      style={props?.style}
      width={7}
      height={11}
      viewBox='0 0 7 11'
      fill='none'
    >
      <Path
        d='M1 10l4.5-4.5L1 1'
        stroke={`${colors.vectors}`}
        strokeWidth={2}
        strokeLinecap='round'
      />
    </Svg>
  )
}
