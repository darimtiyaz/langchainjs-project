import { openai } from './api.js'

const listFineTunes = async() => {
  try {
    const response = await openai.listFineTunes()
    console.log('data: ', response.data.data)
  } catch (err) {
    console.log('error:', err)
  }
}

listFineTunes()