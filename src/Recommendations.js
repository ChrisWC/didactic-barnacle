import React, { Fragment } from 'react';

import Tile from './components/Tile';
import RecommendationList from './containers/RecommendationList';
import * as spotify from "./spotify.api.js";

function Recommendations(props) {
  spotify.loginOrValidate();

  return (
    <Fragment>
      <section>
        <h1> Recommendations </h1>
        <p> Select tracks in 'Your Music' for recommendations </p>
      </section>
      <RecommendationList ItemComponent={Tile}/>
    </Fragment>
  );
}

export default Recommendations;
