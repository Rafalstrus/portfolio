import themeSlice from './themeSlice';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  themeState: themeSlice.reducer
});

export default reducer;