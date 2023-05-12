import { createSlice } from '@reduxjs/toolkit'
import { Characters } from '../types/Characters'

type CharactersState = {
  characters: Characters[]
}

const initialState: CharactersState = {
  characters: [],
}

const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters(state, action) {
      state.characters = action.payload
    },
  },
})

export const { setCharacters } = characterSlice.actions
export default characterSlice.reducer
