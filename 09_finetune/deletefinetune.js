import { openai } from './api.js'

const deleteFineTune = async() => {
  try {
    const response = await openai.deleteModel('davinci:ft-supercontent-ai-2023-08-11-00-46-42')
    console.log('response: ', response)
  } catch (err) {
    console.log('err: ', err)
  }
}

deleteFineTune()