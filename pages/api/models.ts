import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await openai.listModels();
  res.status(200).json(response.data);
}
