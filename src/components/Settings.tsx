import { useMemo } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import useSession from '#/hooks/useSession'
import Avatar from './Avatar'
import CheckBox from './CheckBox'
import ChevronRight from './Icons/ChevronRight'

const SettingsLayout = styled.View`
  display: flex;
  gap: 12px;
  padding-top: 20px;
`

const SettingBox = ({
  name,
  icon,
  children
}: {
  name?: string
  icon?: JSX.Element
  children: JSX.Element[] | JSX.Element
}) => {
  return (
    <Box>
      <BoxWrapper>
        {icon && icon}
        {name && <BoxTitle>{name}</BoxTitle>}
      </BoxWrapper>
      {children}
    </Box>
  )
}

const SettingList = ({
  children,
  icon,
  name,
  height,
  onPress,
  touchable = false,
  last = false
}: {
  name?: string
  icon?: JSX.Element
  children?: JSX.Element[] | JSX.Element
  touchable?: boolean
  last?: boolean
  height?: number
  onPress?: (...data: any[]) => void
}) => {
  const getTouchable = (child: any) =>
    touchable ? (
      <TouchableOpacity onPress={onPress}>{child}</TouchableOpacity>
    ) : (
      <>{child}</>
    )

  return getTouchable(
    <List isLastOne={last} height={height}>
      {icon && name && (
        <ListWrapper>
          {icon}
          <SettingListText>{name}</SettingListText>
        </ListWrapper>
      )}
      {children}
      {touchable && (
        <ChevronRight style={{ position: 'absolute', right: 20 }} />
      )}
    </List>
  )
}

const AccountPreview = () => {
  const { session } = useSession()

  return (
    <AccountWrapper>
      <Avatar size={70} />
      <NameWrapper>
        <NameText>
          {session.firstName} {session.lastName}
        </NameText>
        <NameSubtitle>Edit your personal info</NameSubtitle>
      </NameWrapper>
    </AccountWrapper>
  )
}

const Colors = ({ contrastColor, onValueChange }: ColorsProps) => {
  const colors = useMemo(
    () => [
      {
        color: '#165FFF',
        highlight: '#3C79FF'
      },
      {
        color: '#F2328D',
        highlight: '#F25AA2'
      },
      {
        color: '#F36D17',
        highlight: '#F08A48'
      },
      {
        color: '#87B00B',
        highlight: '#9CC914'
      }
    ],
    []
  )

  return (
    <ColorWrapper>
      {colors.map((color, k) => (
        <CheckBox
          key={k}
          color={color.color}
          highlight={color.highlight}
          value={color.color === contrastColor}
          onValueChange={() => onValueChange(color.color)}
        />
      ))}
    </ColorWrapper>
  )
}

export {
  SettingsLayout,
  SettingList,
  SettingBox,
  SettingListText,
  AccountPreview,
  Colors
}

const ColorWrapper = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`

const BoxWrapper = styled.View`
  position: absolute;
  top: 10px;
  left: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 5px;
`

const ListWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 10px;
`

const List = styled.View<{ isLastOne?: boolean; height?: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: ${props => props.height ?? 62}px;
  background-color: transparent;
  padding-horizontal: 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${props =>
    props.isLastOne ? 'transparent' : `${props.theme.colors.vectors}`};
`

const SettingListText = styled.Text`
  font-size: ${props => 15 + props.theme.fontSize}px;
  color: ${props => props.theme.colors.text};
  font-weight: 500;
`

const BoxTitle = styled.Text`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => 12 + props.theme.fontSize}px;
  font-weight: 500;
`

const Box = styled.View`
  background-color: ${props => props.theme.colors.card};
  border-radius: 12px;
  padding-top: 26px;
  width: 100%;
`

const NameText = styled.Text`
  font-size: ${props => 16 + props.theme.fontSize}px;
  color: ${props => props.theme.colors.text};
  font-weight: 800;
`

const NameSubtitle = styled.Text`
  font-weight: 500;
  font-size: ${props => 12 + props.theme.fontSize}px;
  color: ${props => props.theme.colors.gray};
`

const AccountWrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 18px;
`

const NameWrapper = styled.View`
  display: flex;
  justify-content: center;
`
