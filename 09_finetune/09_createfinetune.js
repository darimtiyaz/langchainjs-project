import { openai } from './api.js'
import { fileId } from './fileId.js'

const createFineTune = async() => {
  try {
    const response = await openai.createFineTune({
      training_file: fileId,
      model: 'davinci'
    })
    console.log('response: ', response)
  } catch (err) {
    console.log('error: ', err.response.data.error)
  }
}

createFineTune();