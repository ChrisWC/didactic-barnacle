import * as spotify from '../spotify.api.js';

export const REQUEST_FAVORITE_TRACKS = "REQUEST_FAVORITE_TRACKS";
export const RECEIVE_FAVORITE_TRACKS = "RECEIVE_FAVORITE_TRACKS";
export const RECEIVE_MORE_FAVORITE_TRACKS = "RECEIVE_MORE_FAVORITE_TRACKS";

export function requestFavoriteTracks() {
  return {
    type: REQUEST_FAVORITE_TRACKS
  };
}

export function receiveFavoriteTracks(json) {
  return {
    type: RECEIVE_FAVORITE_TRACKS,
    // items here consist of an added date and track, but we just want the track for now
    tracks: json.items? json.items.map((val) => val.track):[],
    next: json.next,
  };
}

export function receiveMoreFavoriteTracks(json) {
  return {
    type: RECEIVE_MORE_FAVORITE_TRACKS,
    // items here consist of an added date and track, but we just want the track for now
    tracks: json.items? json.items.map((val) => val.track):[],
    next: json.next,
  };
}
export function getFavoriteTracks() {
  return function(dispatch) {
    dispatch(requestFavoriteTracks);

    return spotify.getFavoriteTracks({})
      .then(
        response => response.json(),
        error => console.log('An error occured', error)
      )
      .then(json => dispatch(receiveFavoriteTracks(json)))
  };
}

export function getMoreFavoriteTracks(nextUrl) {
  return function(dispatch) {
    dispatch(requestFavoriteTracks);

    return spotify.getFavoriteTracks({url: nextUrl})
      .then(
        response => response.json(),
        error => console.log('An error occured', error)
      )
      .then(json => dispatch(receiveMoreFavoriteTracks(json)))
  };
}
