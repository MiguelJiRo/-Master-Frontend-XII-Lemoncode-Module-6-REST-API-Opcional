import { Character, graphqlCharacterResponse} from "./character.api-model";
import { gql } from "graphql-request"
import { graphQLClient } from "core/api/graphql.client"; 

const url = `/api/character`;

export const getCharacter = async (id: string): Promise<Character> => {

  const query = gql `query {
    character(id:${id}){
      name,
      status,
      species,
      type,
      gender,
      location {name}
    }
  }`;
  const character = await graphQLClient.request<graphqlCharacterResponse>(query);
  console.log('character',character.character);
  return character.character;
}

export const saveCharacter = async (character: Character): Promise<boolean> => {
  alert('se ha deshabilitado esta opción para el ejercicio opcional');
  return true;
  // if(character.id) {
  //   return  await fetch(`${url}/${character.id}`, {
  //     method: 'PUT', 
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(character),
  //   }).then((response) => {
  //     return response.ok;
  //   }).catch((error) => {
  //     return false;
  //   });
  // }
  // else {
  //   return await fetch(url, {
  //     method: 'POST', 
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(character),
  //   }).then((response) => {
  //     return response.ok;
  //   }).catch((error) => {
  //     console.error("Error doing POST fetch: ", error);
  //     return false;
  //   });
  // }
}

export const deleteCharacter = async (id: number): Promise<boolean> => {
  alert('se ha deshabilitado esta opción para el ejercicio opcional');
  return true;
  // const response = await fetch(`${url}/${id}`, {
  //   method: 'DELETE',
  // })

  // return response.ok ? true : false;
}