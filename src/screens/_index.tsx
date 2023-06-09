import ChatPrompt from '#/components/ChatPrompt'
import GlobalLayout from '#/components/GlobalLayout'
import Header from '#/components/Header'
import MessagesLayout from '#/components/MessagesLayout'
import useChatAI from '#/hooks/useChatAI'

export default function Root() {
  const { messages, text, placeholder, handleInput, handleSend } = useChatAI()

  return (
    <GlobalLayout>
      <Header />
      <MessagesLayout messages={messages} />
      <ChatPrompt
        defaultValue={text}
        onMessageChange={handleInput}
        onSend={handleSend}
        placeholder={placeholder}
      />
    </GlobalLayout>
  )
}
