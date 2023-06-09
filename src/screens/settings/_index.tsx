import { useNavigation } from '@react-navigation/native'
import { Switch } from 'react-native'
import styled from 'styled-components/native'

import GlobalLayout from '#/components/GlobalLayout'
import { Heading } from '#/components/Header'
import Account from '#/components/Icons/Account'
import ContrastColor from '#/components/Icons/ContrastColor'
import DarkMode from '#/components/Icons/DarkMode'
import FontSize from '#/components/Icons/FontSize'
import Notification, { TinyNotification } from '#/components/Icons/Notification'
import Pallete from '#/components/Icons/Pallete'
import {
  AccountPreview,
  Colors,
  SettingBox,
  SettingList,
  SettingsLayout
} from '#/components/Settings'
import useConfig from '#/hooks/useConfig'

export default function () {
  const navigation = useNavigation<any>()
  const { config, toggleDarkMode, toggleNotification, setContrastColor } =
    useConfig()

  return (
    <GlobalLayout paddings={{ top: 80, horizontal: 8 }}>
      <Heading title='Settings' />

      <SettingsLayout>
        <SettingBox icon={<Account />} name='Account'>
          <SettingList
            onPress={() =>
              navigation.navigate('Settings', { screen: 'Account' })
            }
            height={115}
            touchable
            last
          >
            <AccountPreview />
          </SettingList>
        </SettingBox>

        <SettingBox icon={<TinyNotification />} name='Notifications'>
          <SettingList last icon={<Notification />} name='Notification'>
            <Switch
              trackColor={{ true: `${config.contrastColor}99` }}
              thumbColor={
                config.notifications ? `${config.contrastColor}f1` : '#f4f3f4'
              }
              value={config.notifications}
              onValueChange={() => toggleNotification()}
            />
          </SettingList>
        </SettingBox>

        <SettingBox icon={<Pallete />} name='Appearance'>
          <SettingList icon={<DarkMode />} name='Dark Mode'>
            <Switch
              trackColor={{ true: `${config.contrastColor}99` }}
              thumbColor={
                config.darkMode ? `${config.contrastColor}f1` : '#f4f3f4'
              }
              value={config.darkMode}
              onValueChange={() => toggleDarkMode()}
            />
          </SettingList>

          <SettingList icon={<ContrastColor />} name='Contrast Color'>
            <Colors
              contrastColor={config.contrastColor}
              onValueChange={clr => setContrastColor(clr)}
            />
          </SettingList>

          <SettingList
            onPress={() =>
              navigation.navigate('Settings', { screen: 'FontSize' })
            }
            touchable
            last
            icon={<FontSize />}
            name='Font Size'
          />
        </SettingBox>
      </SettingsLayout>

      <RightsReserverd>&copy; Snapverse 🪐 All rights reserved</RightsReserverd>
    </GlobalLayout>
  )
}

const RightsReserverd = styled.Text`
  position: absolute;
  bottom: 22px;
  width: 100%;
  text-align: center;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.gray};
  font-size: ${props => 12 + props.theme.fontSize}px;
`
