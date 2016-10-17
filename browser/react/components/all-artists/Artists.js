'use strict';

import React from 'react';
import { Link } from 'react-router';
import CreatePlaylistForm from '../playlist/CreatePlaylistForm';

export default function (props) {
  const artists = props.artists;
  return (
    <div>
      <h3>Artists</h3>
      <CreatePlaylistForm />
        <div className="list-group">
          {
            artists.map(artist => (
              <div className="list-group-item" key={ artist.id }>
                <Link to={`/artists/${artist.id}`}>
                  { artist.name }
                </Link>
              </div>
            ))
          }
        </div>
    </div>
  );
}
