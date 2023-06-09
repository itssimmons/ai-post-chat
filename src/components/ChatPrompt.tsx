import styled from 'styled-components/native'
import PaperPlane from './Icons/PaperPlane'

export default ({
  onMessageChange,
  onSend,
  placeholder,
  defaultValue
}: ChatPromptProps) => {
  return (
    <Layout>
      <ChatInput
        value={defaultValue}
        placeholder={placeholder}
        onChangeText={onMessageChange}
        placeholderTextColor='#adadad'
      />
      <TouchableSend onPress={onSend}>
        <PaperPlane />
      </TouchableSend>
    </Layout>
  )
}

const Layout = styled.View`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
`

const ChatInput = styled.TextInput`
  border-radius: 12px;
  padding-left: 18px;
  padding-right: 60px;
  color: white;
  width: 100%;
  height: 100%;
  elevation: 5;
  shadow-color: ${props => props.theme.colors.shadow};
  shadow-offset: 0px 20px;
  shadow-opacity: 1;
  shadow-radius: 2px;
  background-color: ${props => props.theme.colors.chat.prompt};
`

const TouchableSend = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 15px;
  width: 46px;
  height: 46px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.primary};
`
