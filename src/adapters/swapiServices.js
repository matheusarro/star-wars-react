import { apiGetPeople, apiGetSpecificPlanet } from "./swapiAdapters";

/* coleta dados para a página PEOPLE */
export const fetchPeoplePage = async (page = 1) => {
  const people = await apiGetPeople(page);

  /* coleta informações específicas dos personagens */
  const characters = people.results.map((character) => {
    const id = character.url.split('/');
    const charId = id[5];

    const world = character.homeworld.split('/');
    const worldId = !!world[5] ? world[5] : 'UNKNOWN';

    return ({
      id: charId,
      name: character.name.toUpperCase(),
      birth_year: character.birth_year.toUpperCase(),
      homeworld_id: worldId,
      homeworld: ''
    });
  });

  /* coleta mundo de cada personagem */
  for (const char of characters) {
    const worldInfo = await apiGetSpecificPlanet(char.homeworld_id);
    char.homeworld = worldInfo.name.toUpperCase();
  }

  return ({
    next: people.next,
    results: characters
  });
};