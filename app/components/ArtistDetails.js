var React = require('react');
var PropTypes = React.PropTypes;

function ArtistDetails (artist) {
	return (
		<div>
			<li className="list-group-item"> <img src={props.images} className="img-rounded img-responsive"/></li>
		</div>
	)
}

ArtistDetails.propTypes = {
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    blog: PropTypes.string,
    followers: PropTypes.number.isRequired,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    public_repos: PropTypes.number.isRequired,
  })
}

module.exports = ArtistDetails;