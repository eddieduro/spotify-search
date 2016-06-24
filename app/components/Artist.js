var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var ArtistDetails = require('./ArtistDetails');


function puke (object) {
	console.log(object.artistInfo[0][0]);
	return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function Artist (props) {
	return props.isLoading === true
		? <p> LOADING! </p>
		: <div> 
			{puke(props)}
			<ArtistDetails artistInfo={props} />
			</div>

}

Artist.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  artistInfo: PropTypes.array.isRequired,
}

module.exports = Artist;