import axios from 'axios';

const api = axios.create({baseURL: 'https://swapi.dev/api'});

export const apiGetPeople = async (page) => {
  try{
    const people = await api.get(`/people/?page=${page}`);
    
    return people.data;
  } catch (error) {
    console.error(error || 'Erro ao buscar dados dos personagens.');
    return ;
  }
};

export const apiGetSpecificPlanet = async (planetId) => {
  try {
    const planet = await api.get(`/planets/${planetId}`);

    return planet.data;
  } catch (error) {
    console.error(error || 'Erro ao buscar dados do planeta.');
    return ;
  }
}