type EventHandler = (...date: any[]) => void

type RootStackParamList = {
  Home: undefined
  Settings: undefined
  FontSize: undefined
  Account: undefined
}

interface Message {
  _id: string
  _sid: string
  message: string
  type: 'img' | 'txt'
  sentAt: number
}

interface CompletionChoices {
  text: string
  index: number
  logprobs: null
  finish_reason: string
}

interface CompletionUsage {
  prompt_tokens: number
  completion_tokens: number
  total_tokens: number
}

interface Completion {
  id: string
  object: string
  created: number
  model: 'text-davinci-003'
  choices: CompletionChoices[]
  usage: CompletionUsage
}

interface Imagine {
  created: number
  data: { url: string }[]
}
