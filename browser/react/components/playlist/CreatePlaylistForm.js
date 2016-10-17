import React from 'react';
import { connect } from 'react-redux';
import {createPlaylist} from '../../ducks/playlists';

const CreatePlaylistForm = function ({ handleSubmit }) {
  return (
    <div className="well">
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <fieldset>
          <legend>New Playlist</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input className="form-control" type="text"/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success">Create Playlist</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}


const HigherOrderComponent = function (InnerComponent) {
  return class WrapperComponent extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        playlists: []
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
      evt.preventDefault();
      this.setState({ playlists: evt.target.value });
      this.props.handleSubmit(this.state.playlists)
    }

    render() {
      return (
        <InnerComponent handleSubmit={this.handleSubmit} />
      )
    }

  }
}


const mapDispatchToProps = function(dispatch) {
  return {
    handleSubmit: function(formInput) {
      const newPlaylist = {
        id: formInput,
        playlist: formInput
      }
      dispatch(createPlaylist(newPlaylist));
    }
  }
}

const statefulReduxComponentCreator = connect(null, mapDispatchToProps);

const StatefulForm = HigherOrderComponent(CreatePlaylistForm);
const FormContainer = statefulReduxComponentCreator(StatefulForm);

export default FormContainer;
