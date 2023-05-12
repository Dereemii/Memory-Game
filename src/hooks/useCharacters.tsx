import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCharacters } from '../store/charactersSlice';
import { nanoid } from 'nanoid';
import { useFetchCharacters } from './useFetchCharacters';
import { duplicateCharacters } from '../utils/utils';

const NUMBER_OF_CHARACTERS_TO_RENDER = 6;

export const useCharacters = () => {
  const dispatch = useDispatch()
  const { loading, error, data } = useFetchCharacters()

  useEffect(() => {
    if (!data) {
      return;
    }

    const charactersToRender = data?.characters?.results.slice(0, NUMBER_OF_CHARACTERS_TO_RENDER);
    const duplicatedCharactersWithId = duplicateCharacters(charactersToRender).map((character) => ({
      ...character,
      key: nanoid(2),
    }));
    dispatch(setCharacters(duplicatedCharactersWithId));
  }, [data, dispatch]);

  return {
    error,
    data,
    loading,
  }
}
