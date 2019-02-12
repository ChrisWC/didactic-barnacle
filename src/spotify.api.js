import { spotifyClientId } from './credentials';

const redirect_uri = "http://localhost:3000/spotify/";
const authUrl = "https://accounts.spotify.com/authorize?";
const recommendationsEndpoint = "https://api.spotify.com/v1/recommendations?";
const favoriteTracksEndpoint = "https://api.spotify.com/v1/me/tracks";
const topTracksEndpoint = "https://api.spotify.com/v1/me/top/tracks";

export function getAuthUrl() {
  let searchArgs = new URLSearchParams();

  searchArgs.append("client_id", spotifyClientId);
  searchArgs.append("redirect_uri", redirect_uri);
  searchArgs.append("response_type", "token");
  searchArgs.append("scope", [
    "user-read-private",
    "user-top-read",
    "user-follow-read",
    "user-library-read"
  ].join(","));
  searchArgs.append("show_dialog", true);

  return authUrl + searchArgs.toString();
}
export function getToken() {
  return localStorage.getItem("spotify");
}

function getFromSpotify(url) {
  return fetch(url, {
    method: "get",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + getToken()
    }
  });
}

export function loginOrValidate(force)  {
  if (force || !hasValidCredentials()) {
    window.location.href = getAuthUrl();
  }
}
export function hasValidCredentials() {
  let accessToken = localStorage.getItem("spotify");
  let tokenExpiration = localStorage.getItem("spotify_expiry");

  return accessToken && Date.now() <= tokenExpiration;
}

export function getTopTracks(props) {
  return getFromSpotify(props.url || topTracksEndpoint);
}

export function getFavoriteTracks(props = {}) {
  return getFromSpotify(props.url || favoriteTracksEndpoint);
}

export function getRecommendations(props) {
  const searchArgs = new URLSearchParams();

  props.seedTracks && searchArgs.append("seed_tracks", props.seedTracks.join(","));

  const url = props.url || recommendationsEndpoint + searchArgs.toString();

  return getFromSpotify(url);
}
