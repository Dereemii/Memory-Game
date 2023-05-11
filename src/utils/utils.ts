import { Characters } from '../types/Characters'

export const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 42) + 1
  return randomNumber
}

export const sortCharactersById = (characters: Characters[]) => {
  return [...characters].sort((a, b) => Number(a.id) - Number(b.id));
};

export const shuffleCharacters = (characters: Characters[]) => {
  return [...characters].sort(() => Math.random() - 0.5);
}

export const duplicateCharacters = (characters: Characters[]) => {
  return [...characters, ...characters];
}