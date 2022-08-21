import { atom } from 'recoil'
import { AtomKeys } from './recoilKeys'

export const profileAtom = atom<Profile.Profile | null>({
  key: AtomKeys.profileAtom,
  default: null
})

export const sharedProfileAtom = atom<Profile.Profile | null>({
  key: AtomKeys.sharedProfileAtom,
  default: null
})
