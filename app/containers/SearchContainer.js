var React = require('react');
var Prompt = require('../components/Search');

var SearchContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			artistName: ''
		}
	},
	handleUpdateArtist: function (e) {
		this.setState({
			artistName: e.target.value
		})
	},
	handleSubmiteArtist: function (e) {
		e.preventDefault();
		var artistName = this.state.artistName;
		this.set({
			artistName: ''
		});

		if (this.props.routeParams.artistSearch) {
			this.context.router.push({
				pathname: '/artist',
				query: {
					artist: this.props.routeParams.artist
				}
			})
		}
	}
})