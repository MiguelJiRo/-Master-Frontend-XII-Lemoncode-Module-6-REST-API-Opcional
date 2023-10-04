export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  location: string;
}

export const createEmptyCharacter = (): Character => ({
  id: 0,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  location: '',
});
