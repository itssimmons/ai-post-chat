import styled from 'styled-components/native'

interface CheckBoxProps {
  value: boolean
  onValueChange: (...data: any[]) => void
  color?: string
  highlight?: string
}

export default ({
  value = false,
  onValueChange,
  color,
  highlight
}: CheckBoxProps) => {
  return (
    <TouchableCircle
      color={color}
      highlight={highlight}
      onPress={onValueChange}
    >
      {value && <CheckDot />}
    </TouchableCircle>
  )
}

const TouchableCircle = styled.TouchableOpacity<{
  color?: string
  highlight?: string
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  min-height: 24px;
  border-radius: ${24 / 2}px;
  border-width: 1px;
  background-color: ${props => props.color ?? '165FFF'};
  border-color: ${props => props.highlight ?? '3C79FF'};
`

const CheckDot = styled.View`
  min-width: 9px;
  min-height: 9px;
  border-radius: ${9 / 2}px;
  background-color: #fcfcfc;
`
