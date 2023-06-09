import { useEffect, useState } from 'react'
import { ToastAndroid } from 'react-native'

import { CHAT_PLACEHOLDERS, CHAT_UUID, FIRST_STEP, SECOND_STEP } from '#/consts'
import djs from '#/helpers/dayjs'
import uuid from '#/helpers/uuid'
import useSession from '#/hooks/useSession'
import ChatAI from '#/services/ai'

export default () => {
  const { session } = useSession()
  const [text, setText] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [step, setStep] = useState(FIRST_STEP)
  const [placeholder, setPlaceholder] = useState(CHAT_PLACEHOLDERS[FIRST_STEP])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setText('')
    setPlaceholder(CHAT_PLACEHOLDERS[step])
  }, [step])

  const resolveStep = (currentStep: number) => {
    if (currentStep === FIRST_STEP) {
      ChatAI.completion(text)
        .then(ai => {
          setIsLoading(true)

          setMessages(msgs => [
            ...msgs,
            {
              _id: uuid(),
              _sid: CHAT_UUID,
              message: ai.choices[0].text.trim(),
              sentAt: djs().valueOf(),
              type: 'txt'
            }
          ])
        })
        .catch(err => console.error(err))
        .finally(() => setIsLoading(false))

      return
    }

    if (currentStep === SECOND_STEP) {
      ChatAI.imagine(text)
        .then(ai => {
          setIsLoading(true)

          setMessages(msgs => [
            ...msgs,
            {
              _id: uuid(),
              _sid: CHAT_UUID,
              message: ai.data[0].url,
              sentAt: djs().valueOf(),
              type: 'img'
            }
          ])
        })
        .catch(err => console.error(err))
        .finally(() => setIsLoading(false))

      return
    }
  }

  const handleSend = () => {
    if (text.length === 0) {
      ToastAndroid.show('Cannot send empty messages', ToastAndroid.SHORT)
      return
    }

    setMessages(msgs => [
      ...msgs,
      {
        _id: uuid(),
        _sid: session._id,
        message: text.trim(),
        sentAt: djs().valueOf(),
        type: 'txt'
      }
    ])

    resolveStep(step)

    setStep(step === FIRST_STEP ? SECOND_STEP : FIRST_STEP)
  }

  const handleInput = (txt: string) => setText(txt)

  return {
    text,
    messages,
    handleSend,
    handleInput,
    placeholder
  }
}
