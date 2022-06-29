import { atom } from 'recoil'
import { AtomKeys } from './recoilKeys'

export const lastAnsweredQuestion = atom<Questions.lastAnsweredQuestion | null>(
  {
    key: AtomKeys.lastAnsweredQuestion,
    default: null
  }
)
