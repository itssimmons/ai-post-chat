import { useCallback, useEffect, useRef, useState } from 'react'
import { Animated } from 'react-native'
import styled from 'styled-components/native'

enum InputTextAnimatePosition {
  TOP = -8,
  INSIDE = 10
}

export default {
  Submit({ label, onPress }: { label: string; onPress: EventHandler }) {
    return (
      <ButtonSubmit onPress={onPress}>
        <ButtonSubmitLabel>{label}</ButtonSubmitLabel>
      </ButtonSubmit>
    )
  },
  Text({
    label,
    limit,
    height = 50,
    type = 'text',
    value = '',
    onChange
  }: {
    label: string
    value?: string
    height?: number
    type?: 'textarea' | 'text'
    limit?: number
    onChange?: EventHandler
  }) {
    const [characterCount, setCharacterCount] = useState(0)
    const { current: position } = useRef(
      new Animated.Value(InputTextAnimatePosition.INSIDE)
    )

    const animate = useCallback(
      ({ toValue, duration = 100 }: { toValue: number; duration?: number }) =>
        Animated.timing(position, {
          toValue,
          duration,
          useNativeDriver: false
        }).start(),
      [position]
    )

    useEffect(() => {
      const isEmpty = value.length === 0
      if (!isEmpty)
        animate({ toValue: InputTextAnimatePosition.TOP, duration: 0 })
    }, [value])

    useEffect(() => setCharacterCount(value.length), [value])

    const onFocus = () => animate({ toValue: InputTextAnimatePosition.TOP })

    const onBlur = () => {
      if (value.length !== 0) return
      animate({ toValue: InputTextAnimatePosition.INSIDE })
    }

    return (
      <InputLayout height={height}>
        <InputLabel style={{ top: position }}>{label}</InputLabel>
        <Input
          value={value}
          height={height}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={label}
          onChangeText={onChange}
          placeholderTextColor='#adadad'
          maxLength={limit ? limit : 25}
          textarea={type === 'textarea'}
          multiline={type === 'textarea'}
          numberOfLines={type === 'textarea' ? 4 : 1}
          textAlignVertical={type === 'textarea' ? 'top' : 'center'}
        />
        {limit && (
          <InputLimit>
            {characterCount} / {limit}
          </InputLimit>
        )}
      </InputLayout>
    )
  }
}

/* -- Submit -- */
const ButtonSubmit = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin-top: 20px;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.button.bg};
`

const ButtonSubmitLabel = styled.Text`
  color: ${props => props.theme.colors.button.fg};
  font-size: ${props => 16 + props.theme.fontSize}px;
  font-weight: 500;
`

/* -- Text -- */
const InputLayout = styled.View<{ height: number }>`
  display: flex;
  justify-content: center;
  position: relative;
  height: ${props => props.height + 30}px;
`

const InputLabel = styled(Animated.Text)`
  position: absolute;
  z-index: -1;
  left: 12px;
  font-weight: 500;
  font-size: ${props => 14 + props.theme.fontSize}px;
  color: ${props => props.theme.colors.text};
`

const InputLimit = styled.Text`
  position: absolute;
  right: 12px;
  bottom: -6px;
  font-weight: 400;
  font-size: ${props => 11 + props.theme.fontSize}px;
  color: ${props => props.theme.colors.gray};
`

const Input = styled.TextInput<{ height: number; textarea: boolean }>`
  width: 100%;
  border-radius: 12px;
  padding-horizontal: 20px;
  font-size: ${props => 16 + props.theme.fontSize}px;
  height: ${props => props.height}px;
  padding-top: ${props => (props.textarea ? 12 : 0)}px;
  color: ${props => props.theme.colors.input.fg};
  background-color: ${props => props.theme.colors.input.bg};
`
