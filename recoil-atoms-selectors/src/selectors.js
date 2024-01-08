// src/selectors.js
import { selector } from 'recoil';
import { workoutsState, progressState } from './atoms';

export const totalWorkoutsSelector = selector({
  key: 'totalWorkoutsSelector',
  get: ({ get }) => {
    const workouts = get(workoutsState);
    return workouts.length;
  },
});

export const progressPercentageSelector = selector({
  key: 'progressPercentageSelector',
  get: ({ get }) => {
    const totalWorkouts = get(totalWorkoutsSelector);
    const progress = get(progressState);

    return totalWorkouts === 0 ? 0 : (progress / totalWorkouts) * 100;
  },
});
