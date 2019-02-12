import React, { Fragment } from 'react';

import Tile from './components/Tile';
import TopTracksList from './containers/TopTracksList';
import * as spotify from "./spotify.api.js";

function TopTracks(props) {
  spotify.loginOrValidate();

  return (
    <Fragment>
    <section>
      <h1> Your Top Tracks </h1>
      <p> Select from your top tracks below and see new recommendations </p>
    </section>
    <TopTracksList ItemComponent={Tile}/>
    </Fragment>
  );
}

export default TopTracks;
