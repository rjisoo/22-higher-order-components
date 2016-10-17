'use strict';

import React from 'react';
import { Link } from 'react-router';
import ArtistFilterForm from '../Form/ArtistFilterForm';

export default function (props) {
  const artists = props.artists;
  
  return (
    <div>
      <h3>Artists</h3>
      <ArtistFilterForm />
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