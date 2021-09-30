import { combineReducers } from "redux";
import userReducer from "./reducers/user.reducer";
import favoritesReducer from "./reducers/favorites.reducer";
import searchReducer from "./reducers/search.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  favorites: favoritesReducer,
  search: searchReducer,
});

export default rootReducer;
