export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  location: {
    name: string;
    url: string;
  };
}

export interface graphqlCharacterResponse {
  character: Character;
}