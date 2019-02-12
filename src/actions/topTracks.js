import * as spotify from '../spotify.api.js';

export const REQUEST_TOP_TRACKS = "REQUEST_TOP_TRACKS";
export const RECEIVE_TOP_TRACKS = "RECEIVE_TOP_TRACKS";
export const RECEIVE_MORE_TOP_TRACKS = "RECEIVE_MORE_TOP_TRACKS";

export function requestTopTracks() {
  return {
    type: REQUEST_TOP_TRACKS
  };
}

export function receiveTopTracks(json) {
  return {
    type: RECEIVE_TOP_TRACKS,
    tracks: json.items,
    next: json.next,
  };
}

export function receiveMoreTopTracks(json) {
  return {
    type: RECEIVE_MORE_TOP_TRACKS,
    // items here consist of an added date and track, but we just want the track for now
    tracks: json.items,
    next: json.next,
  };
}

export function getTopTracks() {
  return function(dispatch) {
    dispatch(requestTopTracks);

    return spotify.getTopTracks({})
      .then(
        response => response.json(),
        error => console.log('An error occured', error)
      )
      .then(json => dispatch(receiveTopTracks(json)))
  };
}

export function getMoreTopTracks(nextUrl) {
  return function(dispatch) {
    dispatch(requestTopTracks);

    return spotify.getTopTracks({url: nextUrl})
      .then(
        response => response.json(),
        error => console.log('An error occured', error)
      )
      .then(json => dispatch(receiveMoreTopTracks(json)))
  };
}
