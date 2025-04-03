import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import { groq } from '@ai-sdk/groq';
import { deepseek } from '@ai-sdk/deepseek';
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';

console.log('isTestEnvironment', isTestEnvironment)


export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'chat-model': chatModel,
        'chat-model-reasoning': reasoningModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
      },
    })
  : customProvider({
      languageModels: {
        'chat-model': deepseek('deepseek-chat'),
        'chat-model-reasoning': deepseek('deepseek-reasoner'),
        'title-model': deepseek('deepseek-chat'),
        'artifact-model': deepseek('deepseek-chat'),
      }
    });
