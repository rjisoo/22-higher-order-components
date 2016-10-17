'use strict';

import { connect } from 'react-redux';
import Sidebar from '../sidebar/Sidebar';

const mapStateToProps = function(state, ownProps) {
  return {
    playlists: state.playlists
  };
};

// const mapDispatchToProps = function() {
//   return {
//
//   }
// }

export default connect(mapStateToProps)(Sidebar);
