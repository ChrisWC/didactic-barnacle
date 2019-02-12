import React, { Fragment } from 'react';

import Tile from './components/Tile';
import FavoriteTracksList from './containers/FavoriteTracksList';
import * as spotify from "./spotify.api.js";

function SavedMusic(props) {
  spotify.loginOrValidate();

  return (
    <Fragment>
      <section>
        <h1> Your Saved music </h1>
        <p> Select from your saved (favorited) tracks below and see new recommendations </p>
      </section>
      <FavoriteTracksList ItemComponent={Tile}/>
    </Fragment>
  );
}

export default SavedMusic;
