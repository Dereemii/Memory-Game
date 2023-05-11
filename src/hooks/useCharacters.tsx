import { useMemo } from 'react'
import { useQuery, gql } from '@apollo/client'
import { generateRandomNumber } from '../utils/utils';

const GET_CHARACTERS = gql`
  query getCharacters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        status
        species
        image
      }
    }
  }
`

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
