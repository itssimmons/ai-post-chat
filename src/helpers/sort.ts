export default (messages: Message[]) =>
  messages.sort((a, b) => b.sentAt - a.sentAt)
