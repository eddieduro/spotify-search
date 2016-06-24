var React = require('react');
var Artist = require('../components/Artist');
var spotifyHelper = require('../utils/spotifyHelper');

var ArtistContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function () {
		return {
			isLoading: true,
			artistInfo: []
		}
	},
	componentDidMount: function () {
		var query = this.props.params;
		console.log(query);
		spotifyHelper.getArtistInfo([query.artist]).then(function (artists) {
			console.log(artists)
				this.setState({
					isLoading: false,
					artistInfo: [artists]
				})
		}.bind(this))
	},
	render: function () {
		return(
			<Artist
				isLoading={this.state.isLoading}
				artistInfo={this.state.artistInfo}
			/>
		)
	}
})

module.exports = ArtistContainer;