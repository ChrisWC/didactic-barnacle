import * as spotify from '../spotify.api.js';

export const REQUEST_RECOMMENDED_TRACKS = "REQUEST_RECOMMENDED_TRACKS";
export const RECEIVE_RECOMMENDED_TRACKS = "RECEIVE_RECOMMENDED_TRACKS";
export const RECEIVE_MORE_RECOMMENDED_TRACKS = "RECEIVE_MORE_RECOMMENDED_TRACKS";
export const ADD_RECOMMENDATION_TRACK_SEED = "ADD_RECOMMENDATION_TRACK_SEED";
export const REMOVE_RECOMMENDATION_TRACK_SEED = "REMOVE_RECOMMENDATION_TRACK_SEED";

export function requestRecommendedTracks() {
  return {
    type: REQUEST_RECOMMENDED_TRACKS
  };
}

export function receiveRecommendedTracks(json) {
  return {
    type: RECEIVE_RECOMMENDED_TRACKS,
    // items here consist of an added date and track, but we just want the track for now
    tracks: json.tracks? json.tracks:[],
    next: json.next,
  };
}

export function receiveMoreRecommendedTracks(json) {
  return {
    type: RECEIVE_MORE_RECOMMENDED_TRACKS,
    // items here consist of an added date and track, but we just want the track for now
    tracks: json.tracks? json.tracks:[],
    next: json.next,
  };
}

export function addRecommendationTrackSeed(trackSeed) {
  return {
    type: ADD_RECOMMENDATION_TRACK_SEED,
    track: trackSeed
  }
}
export function removeRecommendationTrackSeed(trackSeed) {
  return {
    type: REMOVE_RECOMMENDATION_TRACK_SEED,
    track: trackSeed
  }
}
export function getRecommendedTracks(seedTracks) {
  return function(dispatch) {
    dispatch(requestRecommendedTracks);

    return spotify.getRecommendations({seedTracks})
      .then(
        response => response.json(),
        error => console.log('An error occured', error)
      )
      .then(json => dispatch(receiveRecommendedTracks(json)))
  };
}
export function getMoreRecommendedTracks(nextUrl) {
  return function(dispatch) {
    dispatch(requestRecommendedTracks);

    return spotify.getRecommendations({url: nextUrl})
      .then(
        response => response.json(),
        error => console.log('An error occured', error)
      )
      .then(json => dispatch(receiveMoreRecommendedTracks(json)))
  };
}
