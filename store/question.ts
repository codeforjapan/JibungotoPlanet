import { atomFamily } from 'recoil'
import { AtomKeys } from './recoilKeys'

export const answersAtom = atomFamily<
  { [key: string]: string | number | boolean },
  Questions.QuestionCategory
>({
  key: AtomKeys.answersAtom,
  default: {}
})
