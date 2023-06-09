import styled from 'styled-components/native'

const GlobalLayout = styled.View<{
  paddings?: { top?: number; horizontal?: number }
}>`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.background};
  padding-top: ${props => (props.paddings?.top ? props.paddings.top : 0)}px;
  padding-horizontal: ${props =>
    props.paddings?.horizontal ? props.paddings.horizontal : 0}px;
`

const Title = styled.Text`
  color: ${props => props.theme.colors.text};
  font-weight: 800;
  font-size: 22px;
`

export { Title }
export default GlobalLayout
