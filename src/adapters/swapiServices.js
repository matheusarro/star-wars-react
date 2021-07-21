import { apiGetPeople, apiGetSpecificPlanet } from "./swapiAdapters";

/* coleta dados para a página PEOPLE */
export const fetchPeoplePage = async (page = 1) => {
  const people = await apiGetPeople(page);

  /* coleta informações específicas dos personagens */
  const characters = people.results.map((character) => {
    const id = character.url.split('/');
    const charId = id[5];

    const world = character.homeworld.split('/');
    const worldId = !!world[5] ? world[5] : 'DESCONHECIDO';

    return ({
      id: charId,
      name: character.name.toUpperCase(),
      birth_year: character.birth_year === 'unknown' ? 'DESCONHECIDO' : character.birth_year.toUpperCase(),
      homeworld_id: worldId,
      homeworld: ''
    });
  });

  /* coleta mundo de cada personagem (consultas individuais na API) */
  // for (const char of characters) {
  //   const worldInfo = await apiGetSpecificPlanet(char.homeworld_id);
  //   char.homeworld = worldInfo.name.toUpperCase();
  // }

  /* filtra mundos únicos na lista de personagens coletada */
  const worldsList = characters.map( char => char.homeworld_id);
  const filteredworldsList = worldsList.filter( (world, index) => worldsList.indexOf(world) === index);

  /* coleta dados dos mundos */
  let filteredWorldsInfo = [];
  for (const world of filteredworldsList) {
    const worldInfo = await apiGetSpecificPlanet(world);
    filteredWorldsInfo.push({name: worldInfo.name, id: worldInfo.url.split('/')[5]});
  }

  /* atribui nome do mundo ao homeworld do personagem */
  for (const char of characters) {
    for (const world of filteredWorldsInfo) {
      if (char.homeworld_id === world.id) {
        char.homeworld = world.name.toUpperCase();
      }
    }
  }

  return ({
    next: people.next,
    results: characters
  });
};