var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;


function puke (object) {
	return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function Artist (props) {
	return props.isLoading === true
		? <p> LOADING! </p>
		: <p> DONE! </p>
}

Artist.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  artistInfo: PropTypes.array.isRequired,
}

module.exports = Artist;