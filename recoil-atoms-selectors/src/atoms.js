// src/atoms.js

import { atom, selector } from 'recoil';

export const userProfileState = atom({
  key: 'userProfileState',
  default: {
    selectedDress: '',
    selectedBike: '',
    selectedGun: '',
  },
});

export const activeTabState = atom({
  key: 'activeTabState',
  default: 'Dress',
});

export const selectedDressState = selector({
  key: 'selectedDressState',
  get: ({ get }) => {
    const userProfile = get(userProfileState);
    return userProfile.selectedDress;
  },
  set: ({ set }, newValue) => {
    set(userProfileState, (prevProfile) => ({ ...prevProfile, selectedDress: newValue }));
  },
});

export const selectedBikeState = selector({
  key: 'selectedBikeState',
  get: ({ get }) => {
    const userProfile = get(userProfileState);
    return userProfile.selectedBike;
  },
  set: ({ set }, newValue) => {
    set(userProfileState, (prevProfile) => ({ ...prevProfile, selectedBike: newValue }));
  },
});

export const selectedGunState = selector({
  key: 'selectedGunState',
  get: ({ get }) => {
    const userProfile = get(userProfileState);
    return userProfile.selectedGun;
  },
  set: ({ set }, newValue) => {
    set(userProfileState, (prevProfile) => ({ ...prevProfile, selectedGun: newValue }));
  },
});


