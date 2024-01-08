// src/atoms.js
import { atom, selector } from 'recoil';

export const availableSkillsState = atom({
  key: 'availableSkillsState',
  default: [
    { id: 1, name: 'Fighting', category: 'Physical' },
    { id: 2, name: 'Surfing', category: 'Physical' },
    { id: 3, name: 'Swimming', category: 'Physical' },
    { id: 4, name: 'Coding', category: 'Intellectual' },
    { id: 5, name: 'Writing', category: 'Creative' },
    { id: 6, name: 'Drawing', category: 'Creative' },
    { id: 7, name: 'Networking', category: 'Social' },
    // Add more skills as needed
  ],
});

export const selectedSkillsState = atom({
  key: 'selectedSkillsState',
  default: [],
});

export const userProfileState = atom({
  key: 'userProfileState',
  default: [],
});

export const categorizedSkillsState = selector({
  key: 'categorizedSkillsState',
  get: ({ get }) => {
    const availableSkills = get(availableSkillsState);
    const selectedSkills = get(selectedSkillsState);

    const categorizedSkills = {};
    availableSkills.forEach((skill) => {
      if (!categorizedSkills[skill.category]) {
        categorizedSkills[skill.category] = [];
      }
      categorizedSkills[skill.category].push(skill);
    });

    return categorizedSkills;
  },
});
