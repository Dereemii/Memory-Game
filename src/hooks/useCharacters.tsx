import { useMemo } from 'react'
import { useQuery } from '@apollo/client'
import { generateRandomNumber } from '../utils/utils';
import { GET_CHARACTERS } from '../graphql/queries';

export const useCharacters = () => {
  const page = useMemo(() => generateRandomNumber(), []);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: Number(page) },
  });
  
  return {
    error,
    data,
    loading,
  }
}
