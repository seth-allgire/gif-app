export const initialState = {
  favorites: [],
  user: "",
  search: [],
};

export const ADD_FAVORITE = "Add Favorite";
export const DELETE_FAVORITE = "Delete Favorite";
export const CLEAR_FAVORITES = "Clear Favorites";
export const SET_USER = "Set User";
export const CLEAR_USER = "Clear User";
export const SET_SEARCH = "Set Search";
export const CLEAR_SEARCH = "Clear Search";

export function rootReducer(state, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.gif] };
    case DELETE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((val) => val.id !== action.id),
      };
    case CLEAR_FAVORITES:
      return { ...state, favorites: [] };
    case SET_USER:
      return { ...state, user: action.user };
    case CLEAR_USER:
      return { ...state, user: "" };
    case SET_SEARCH:
      return { ...state, search: action.search };
    case CLEAR_SEARCH:
      return { ...state, search: [] };
    default:
      return state;
  }
}
