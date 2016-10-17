import React from 'react';
import { connect } from 'react-redux';
// import { addStory } from './action-creators';

class PlaylistForm extends React.Component {

  render () {
    return (
      <form className="form-group" onSubmit={}>
        <label htmlFor="post"></label>
        <input className="form-control" name="post" type="text" onChange={} />
        <button type="submit" className="btn btn-default">Create Playlist</button>
      </form>
    )
  }
}


export default PlaylistForm