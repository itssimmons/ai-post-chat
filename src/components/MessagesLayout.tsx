import { useMemo } from 'react'
import styled from 'styled-components/native'

import djs from '#/helpers/dayjs'
import useSession from '#/hooks/useSession'
import sort from '#/helpers/sort'

export default ({ messages }: MessageLayoutProps) => {
  return (
    <ScrolleableLayout
      contentContainerStyle={{
        rowGap: 10,
        flexDirection: 'column-reverse',
        flexGrow: 1,
        paddingTop: 90
      }}
    >
      {sort(messages).map((message, k) => (
        <Message key={k} {...message} />
      ))}
    </ScrolleableLayout>
  )
}

const Message = ({ _sid, message, sentAt, type }: MessageProps) => {
  const { session } = useSession()
  const isSentByMe = useMemo(() => session._id === _sid, [_sid])

  const formattedTimestamp = djs(sentAt).format('HH:mm')

  return (
    <MessageContainer>
      <MessageLayout isSentByMe={isSentByMe} type={type}>
        {type === 'img' && (
          <MessageImg source={{ uri: message, width: 240, height: 300 }} />
        )}
        {type === 'txt' && (
          <MessageTxt isSentByMe={isSentByMe}>{message}</MessageTxt>
        )}

        <MessageTime isSentByMe={isSentByMe} isImage={type === 'img'}>
          {formattedTimestamp}
        </MessageTime>
      </MessageLayout>
    </MessageContainer>
  )
}

const ScrolleableLayout = styled.ScrollView`
  margin-bottom: 80px;
  width: 100%;
  height: 100%;
  z-index: -1;
`

const MessageContainer = styled.View`
  width: 100%;
  padding-left: 8px;
  padding-right: 8px;
`

const MessageLayout = styled.View<{
  isSentByMe: boolean
  type: Message['type']
}>`
  display: flex;
  flex-direction: row;
  max-width: 95%;
  border-radius: 12px;
  padding: ${props => (props.type === 'img' ? 4 : 10)}px;
  margin-left: ${props => (props.isSentByMe ? 'auto' : '0px')};
  margin-right: ${props => (props.isSentByMe ? '0px' : 'auto')};
  border-bottom-right-radius: ${props => (props.isSentByMe ? 3 : 12)}px;
  border-bottom-left-radius: ${props => (props.isSentByMe ? 12 : 3)}px;
  background-color: ${props =>
    props.isSentByMe
      ? props.theme.colors.chat.layout.session
      : props.theme.colors.chat.layout.server};
`

const MessageImg = styled.Image`
  border-radius: 8px;
`

const MessageTxt = styled.Text<{ isSentByMe: boolean }>`
  font-size: ${props => 14 + props.theme.fontSize}px;
  font-weight: 500;
  margin-right: ${props => 34 + props.theme.fontSize}px;
  color: ${props =>
    props.isSentByMe
      ? props.theme.colors.chat.message.session
      : props.theme.colors.chat.message.server};
`

const MessageTime = styled.Text<{ isSentByMe: boolean; isImage?: boolean }>`
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: ${props => 10 + props.theme.fontSize}px;
  font-weight: 400;
  margin-top: auto;
  margin-bottom: -1px;
  margin-left: auto;
  margin-right: 0px;
  color: ${props =>
    props.isSentByMe
      ? props.theme.colors.chat.time.session
      : props.theme.colors.chat.time.server};
  text-shadow-color: ${props => (props.isImage ? '#000000fe' : 'transparent')};
  text-shadow-offset: 0px 0px;
  text-shadow-radius: 5px;
`
