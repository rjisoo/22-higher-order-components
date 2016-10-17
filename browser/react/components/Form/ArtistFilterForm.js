import React from 'react';
import { connect } from 'react-redux';
// import { addStory } from './action-creators';

class ArtistFilterForm extends React.Component {



  render () {
    return (
      <form className="form-group" onSubmit={this.props.handleSubmit} >
        <input className="form-control" name="post" type="text" onChange={this.props.handleChange} />
        <button type="submit" className="btn btn-default">Search Artist</button>
      </form>
    )
  }
}

function FormDecorator (InnerComponent) {
	return class StatefulForm extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				input: ''
			}
			this.handleChange = this.handleChange.bind(this);
			this.handleSubmitWithStatefulReactComponent = this.handleSubmitWithStatefulReactComponent.bind(this);
		}

		handleChange(evt) {
			console.log('from handleChange', evt.target.value)
			this.setState({ input: evt.target.value })
		}

		handleSubmitWithStatefulReactComponent (evt) {
			console.log('from handleSubmit', this.state.input)
			evt.preventDefault();
			const formInput = this.state.input;
			this.props.handleSubmit(formInput);
		}

		render() {
			return (
				<InnerComponent handleChange={this.handleChange} handleSubmit={this.handleSubmitWithStatefulReactComponent} />
			)
		}

	}
}

// const mapDispatchToProps = function (dispatch) {
// 	return {
// 		handleSubmit: function( formInput ) {
// 			const 
// 		}
// 	}
// }







export default ArtistFilterForm



// <label htmlFor="post"></label>