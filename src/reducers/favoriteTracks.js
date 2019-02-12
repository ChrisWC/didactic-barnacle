import {
  REQUEST_FAVORITE_TRACKS,
  RECEIVE_FAVORITE_TRACKS,
  RECEIVE_MORE_FAVORITE_TRACKS
} from "../actions/favoriteTracks";

const auth = (state = { items: [] }, action) => {
  switch (action.type) {
    case REQUEST_FAVORITE_TRACKS:
      return {
        isFetching: true,
        didInvalidate: false,
        items: state.items
      };
    case RECEIVE_FAVORITE_TRACKS:
      return {
        isFetching: false,
        didInvalidate: false,
        items: action.tracks,
        next: action.next
      };
    case RECEIVE_MORE_FAVORITE_TRACKS:
      return {
        isFetching: false,
        didInvalidate: false,
        items: [...state.items, ...action.tracks],
        next: action.next
      };
    default:
      return state;
  }
}

export default auth;
