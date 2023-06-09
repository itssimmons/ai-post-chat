import { Dimensions, StatusBar } from 'react-native'
import Constants from 'expo-constants'

export const OPENAI_API_TOKEN = Constants.manifest?.extra?.openaiApiKey ?? ''
export const MIDJOURNEY_API_TOKEN =
  Constants.manifest?.extra?.midjourneyApiKey ?? ''

export const STATUS_BAR_HEIGHT = StatusBar?.currentHeight ?? 10
export const VIEWPORT_HEIGHT =
  Dimensions.get('window').height + STATUS_BAR_HEIGHT + 1

export const CHAT_PLACEHOLDERS = [
  "Let's talk about the bio...",
  "Now let's talk about the image"
]

export const CHAT_UUID = '88cdeedd-dbe2-46a6-a6cb-20f95489d679'

export const FIRST_STEP = 0
export const SECOND_STEP = 1

export const IMAGINE_API_CONTEXT =
  'Generate a picture for a social media post based on the given sentence'

export const COMPLETION_API_CONTEXT =
  'Write a biography for a social media post in a few words based on the given sentence (answer in the same language of the sentece) and include treding hashtags related of the sentence at the end of the output'
