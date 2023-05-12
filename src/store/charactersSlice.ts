import { PayloadAction, createSlice } from '@reduxjs/toolkit'
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
    setMatchedCharacters: (state, action: PayloadAction<number | string>) => {
      const characterId = action.payload;
      const updatedCharacters = state.characters.map((character) => {
        if (character.id === characterId) {
          return {
            ...character,
            matched: true,
          };
        }
        return character;
      });
      state.characters = updatedCharacters;
    },    
    clearMatchedCharacters: (state) => {
      state.characters.forEach((character) => {
        character.matched = false;
      });
    },
  },
})

export const { setCharacters, clearMatchedCharacters, setMatchedCharacters } = characterSlice.actions
export default characterSlice.reducer
