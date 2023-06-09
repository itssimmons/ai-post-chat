import { COMPLETION_API_CONTEXT, IMAGINE_API_CONTEXT, OPENAI_API_TOKEN } from '#/consts'

class ChatAI {
  public static async completion(sentence: string): Promise<Completion> {
    const res = await fetch('https://api.openai.com/v1/completions', {
      method: 'post',
      body: JSON.stringify({
        model: 'text-davinci-001',
        prompt: `${COMPLETION_API_CONTEXT} Sentence: ${sentence}`,
        n: 1,
        top_p: 0.5,
        max_tokens: 120,
        temperature: 0.2
      }),
      headers: {
        Authorization: `Bearer ${OPENAI_API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    })

    return res.json()
  }

  public static async imagine(sentence: string): Promise<Imagine> {
    const res = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'post',
      body: JSON.stringify({
        prompt: `${IMAGINE_API_CONTEXT} Sentence: ${sentence}`,
        n: 1,
        size: '512x512',
        response_format: 'url'
      }),
      headers: {
        Authorization: `Bearer ${OPENAI_API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    })

    return res.json()
  }
}

export default ChatAI
