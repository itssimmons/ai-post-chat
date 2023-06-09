interface NotifBagdeProps {
  quantity: number
}

interface IconProps {
  onPress?: EventHandler
}

interface ChatPromptProps {
  defaultValue: string
  placeholder: string
  onMessageChange?: EventHandler
  onSend?: EventHandler
}

interface MessageLayoutProps {
  messages: Message[]
}

interface MessageProps extends Message {}

interface ColorsProps {
  contrastColor: string
  onValueChange: EventHandler
}
