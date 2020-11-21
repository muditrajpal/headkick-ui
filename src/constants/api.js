import { BASE_URL } from "utils/env";

export const API_URLS = {
  // customer page
  FETCH_ACADEMIES_LIST: BASE_URL + "api/academy/list",
  FETCH_ACADEMIES_NAME_LIST: BASE_URL + "api/academy/nameList",
  FETCH_PLAYERS_LIST:BASE_URL + "api/player/list",
  FETCH_PLAYERS_DETAILS:BASE_URL + "api/player",
  UPLOAD_IMAGE:BASE_URL + "api/upload/image",
  ADD_UPDATE_PLAYER_DETAILS:BASE_URL + "api/player",
  FETCH_TRAINING_LIST:BASE_URL + "api/training/list",
  ADD_UPDATE_TRAINING_DETAILS:BASE_URL + "api/training",
  FETCH_TRAINING_DETAILS:BASE_URL + "api/training",
  FETCH_TEAM_LIST:BASE_URL + "api/team/list",
  FETCH_TEAM_DETAILS:BASE_URL + "api/team",
  FETCH_ACADEMY_DETAILS: BASE_URL + "api/academy",
  FETCH_COUNTRY_LIST:BASE_URL + "api/public/countries",
};
