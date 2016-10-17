'use strict';

import React from 'react';
import { Link } from 'react-router';

export default function (props) {
  const playlists = props.playlists;
  console.log('PLAYLISTS ', playlists);

  return (
    <sidebar>
      <img src="/juke.svg" className="logo" />
      <section>
        <Link to="/albums" activeClassName="menu-item active" className="menu-item">ALBUMS</Link>
      </section>
      <section>
        <Link to="/artists" activeClassName="menu-item active" className="menu-item">ARTISTS</Link>
      </section>
      <hr/>
      <h3> PLAYLISTS </h3>
      <section>
        <Link to="/artists" activeClassName="menu-item active" className="menu-item">PLAYLIST 1</Link>
      </section>
      <section>
        <Link to="/artists" activeClassName="menu-item active" className="menu-item">PLAYLIST 2</Link>
      </section>
      <section>
        <Link to="/playlist"><button type="button" className="btn btn-secondary"> + PLAYLIST </button></Link>
      </section>
    </sidebar>
  );
}
