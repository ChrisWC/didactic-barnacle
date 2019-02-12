import { combineReducers } from 'redux';
import favoriteTracks from './favoriteTracks';
import topTracks from './topTracks';
import recommendedTracks from './recommendedTracks';

export default combineReducers({
  topTracks,
  favoriteTracks,
  recommendedTracks
});
