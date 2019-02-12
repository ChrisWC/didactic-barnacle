import * as spotify from "./spotify.api.js";

/**
 * This acts as the redirect uri for spotify and
 * adds the token data to storage.
 **/
function SpotifyLogin(props) {
  let accessToken;
  let expiresIn;

  accessToken = localStorage.getItem("access_token");
  expiresIn = localStorage.getItem("spotify_expiry");

  let hasTokenExpired = localStorage.getItem("spotify_expiry") <= Date.now();

  if (hasTokenExpired && props.location && props.location.hash) {
    const query = new URLSearchParams(props.location.hash);

    accessToken = query.get("#access_token");
    expiresIn = query.get("expires_in");

    if (accessToken && expiresIn) {
      localStorage.setItem("spotify", accessToken);
      localStorage.setItem("spotify_expiry", Date.now() + expiresIn*1000)
    }
  }
  else if (hasTokenExpired) {
    spotify.loginOrValidate(true /* force it */);
  }

  return null;
}

export default SpotifyLogin;
