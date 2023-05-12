import { useMemo } from 'react'
import { GET_CHARACTERS } from '../graphql/queries'
import { generateRandomNumber } from '../utils/utils'
import { useQuery } from '@apollo/client'

export const useFetchCharacters = () => {
  const page = useMemo(() => generateRandomNumber(), [])

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: Number(page) },
  })

  return {
    loading,
    error,
    data,
  }
}
