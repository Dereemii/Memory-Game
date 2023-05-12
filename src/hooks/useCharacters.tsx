import { useEffect, useMemo } from 'react'
import { useQuery } from '@apollo/client'
import { duplicateCharacters, generateRandomNumber } from '../utils/utils';
import { GET_CHARACTERS } from '../graphql/queries';

import { useDispatch } from 'react-redux';
import { setCharacters } from '../store/CharactersSlice';
import { nanoid } from 'nanoid';

export const useFetchCharacters = () => {
  const page = useMemo(() => generateRandomNumber(), []);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: Number(page) },
  });

  return {
    loading,
    error,
    data,
  };
};

export const useCharacters = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useFetchCharacters();

  useEffect(() => {
    if (data) {
      const charactersToRender = data?.characters?.results.slice(0, 6)
      const duplicatedCharacters = duplicateCharacters(charactersToRender);
      const duplicatedCharactersWithId = duplicatedCharacters.map(character => ({
        ...character,
        key: nanoid(2),
      }));
      dispatch(setCharacters(duplicatedCharactersWithId));
    }
  }, [data, dispatch]);
  
  return {
    error,
    data,
    loading,
  }
}
