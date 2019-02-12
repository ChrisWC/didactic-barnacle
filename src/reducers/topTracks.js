import {
  REQUEST_TOP_TRACKS,
  RECEIVE_TOP_TRACKS,
  RECEIVE_MORE_TOP_TRACKS
} from "../actions/topTracks";

const auth = (state = { items: [] }, action) => {
  switch (action.type) {
    case REQUEST_TOP_TRACKS:
      return {
        isFetching: true,
        didInvalidate: false,
        items: state.items
      };
    case RECEIVE_TOP_TRACKS:
      return {
        isFetching: false,
        didInvalidate: false,
        items: action.tracks,
        next: action.next
      };
    case RECEIVE_MORE_TOP_TRACKS:
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
