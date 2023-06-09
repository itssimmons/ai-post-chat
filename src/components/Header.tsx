import { useNavigation } from '@react-navigation/native'
import { BlurView } from 'expo-blur'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

import { STATUS_BAR_HEIGHT } from '#/consts'
import useConfig from '#/hooks/useConfig'
import useSession from '#/hooks/useSession'
import Avatar from './Avatar'
import Config from './Icons/Config'
import NotifBadge from './NotifBadge'
import GoBack from './Icons/GoBack'
import { Title } from './GlobalLayout'
import { useMemo } from 'react'

const Header = () => {
  const { session } = useSession()
  const { config } = useConfig()
  const navigation = useNavigation<any>()

  return (
    <>
      <StatusBar style={config.darkMode ? 'light' : 'dark'} />
      <BlurView
        intensity={60}
        tint={config.darkMode ? 'dark' : 'light'}
        style={styles.blur}
      >
        <Layout>
          <Greetings>Hey, {session.firstName} 👋</Greetings>
          <Wrapper>
            <NotifBadge quantity={99} />
            <Avatar />
            <Config
              onPress={() =>
                navigation.navigate('Settings', { screen: 'Setting' })
              }
            />
          </Wrapper>
        </Layout>
      </BlurView>
    </>
  )
}

const Heading = ({ title }: { title: string }) => {
  const navigation = useNavigation()
  const percentage = useMemo(() => 100 / 3, [])

  return (
    <HeadingLayout>
      <Filled percentage={percentage} at='flex-start'>
        <GoBack onPress={() => navigation.goBack()} />
      </Filled>
      <Filled percentage={percentage} at='center'>
        <Title>{title}</Title>
      </Filled>
      <Filled percentage={percentage} at='flex-end'></Filled>
    </HeadingLayout>
  )
}

export { Heading }
export default Header

const styles = StyleSheet.create({
  blur: {
    width: '100%',
    height: 80,
    position: 'absolute',
    top: 0,
    zIndex: 9
  }
})

const Greetings = styled.Text`
  color: ${props => props.theme.colors.text};
  font-weight: 800;
  font-size: ${props => 16 + props.theme.fontSize}px;
`

const Wrapper = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`

const Layout = styled.View`
  z-index: 9;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-top: ${STATUS_BAR_HEIGHT + 4}px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: 80px;
`

const Filled = styled.View<{
  percentage: number
  at: 'flex-start' | 'center' | 'flex-end'
}>`
  flex: 1;
  justify-content: center;
  align-items: ${props => props.at};
  width: ${props => props.percentage}%;
  height: 100%;
`

const HeadingLayout = styled.View`
  position: absolute;
  top: 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-top: ${STATUS_BAR_HEIGHT + 4}px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: 80px;
`
