import { config } from "dotenv";
config();

import { Configuration, OpenAIApi } from 'openai'
const openaiApiKey = "--++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++--"
const configuration = new Configuration({
  apiKey: openaiApiKey,
})
export const openai = new OpenAIApi(configuration)