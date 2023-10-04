import { gql } from 'graphql-request';
import { graphqlCharacterResponse } from './character-collection.api-model';
import { Character} from "pods/character/api";
import { graphQLClient } from 'core/api/graphql.client';

const url = `/api/character`;

export const getCharacterCollection = async (): Promise<Character[]> => {
  const query = gql `query {
    characters(page:1){
      results {
        id,
        name,
        image,
        status,
        species,
        type,
        gender,
        location {name}
      }
    }
  }`;
  const characterPage = await graphQLClient.request<graphqlCharacterResponse>(query);
  return characterPage.characters.results;
}
