import { Characters } from '../types/Characters'

export const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 42) + 1
  return randomNumber
}

export const sortCharactersById = (characters: Characters[]) => {
  return [...characters].sort((a, b) => Number(a.id) - Number(b.id));
};

