export const SET_SEARCH = "Set Search";

export const CLEAR_SEARCH = "Clear Search";

export function setSearch(gifs) {
  return { type: SET_SEARCH, gifs };
}

export function clearSearch() {
  return { type: CLEAR_SEARCH };
}
