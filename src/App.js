import React from 'react';
import './App.scss';

import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

import Button from './components/Button';

import SpotifyLogin from './SpotifyLogin';
import SavedMusic from './SavedMusic';
import TopMusic from './TopMusic';
import Recommendations from './Recommendations';

// FIXME it would best to move this elsewhere 1 component : 1 file
const LinkButton = (props) => <Button component={Link} {...props}/>

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <div style={{width:'100%', height:'48px', display:'flex', flexDirection:'row-reverse'}}>
          <LinkButton  to="/">
            Saved
          </LinkButton>
          <LinkButton to="/top">
            Top
          </LinkButton>
          <LinkButton to="/recommendations">
            Recommended
          </LinkButton>
        </div>
        <Route path="/spotify" component={SpotifyLogin}/>
        <Route exact={true} path="/" component={SavedMusic}/>
        <Route exact={true} path="/top" component={TopMusic}/>
        <Route path="/recommendations" component={Recommendations}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
