import { openai } from './api.js'

const createCompletion = async() => {
  try {
    const response = await openai.createCompletion({
      model: 'davinci',
      prompt: 'What is Lens Protocol',
      max_tokens: 200
    })
    if (response.data) {
      console.log('choices: ', response.data.choices)
    }
  } catch (err) {
    console.log('err: ', err)
  }
}

createCompletion()