import {
  REQUEST_RECOMMENDED_TRACKS,
  RECEIVE_RECOMMENDED_TRACKS,
  RECEIVE_MORE_RECOMMENDED_TRACKS,
  ADD_RECOMMENDATION_TRACK_SEED,
  REMOVE_RECOMMENDATION_TRACK_SEED
} from '../actions/recommendedTracks';

const recommendedTracks = (state = { tracks: [], items: [] }, action) => {
  switch (action.type) {
    case REQUEST_RECOMMENDED_TRACKS:
      return {
        shouldUpdate: false,
        isFetching: true,
        didInvalidate: false,
        tracks: state.tracks,
        items: state.items
      };
    case RECEIVE_RECOMMENDED_TRACKS:
      return {
        shouldUpdate: false,
        isFetching: false,
        didInvalidate: false,
        tracks: state.tracks,
        items: action.tracks
      };
    case RECEIVE_MORE_RECOMMENDED_TRACKS:
      return {
        shouldUpdate: false,
        isFetching: false,
        didInvalidate: false,
        tracks: state.tracks,
        items: [...state.items, ...action.tracks],
        next: action.next
      };
    case ADD_RECOMMENDATION_TRACK_SEED:
      return {
        shouldUpdate: !state.tracks.includes(action.track),
        tracks: [...state.tracks, action.track],
        items: state.items
      }
    case REMOVE_RECOMMENDATION_TRACK_SEED:
      return {
        shouldUpdate: state.tracks.includes(action.track),
        tracks: state.tracks.filter(track => track !== action.track),
        items: state.items
      }
    default:
      return state;
  }
}

export default recommendedTracks;
