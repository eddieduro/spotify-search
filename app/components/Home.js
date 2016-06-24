var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
	render: function () {
		return (
			<div className='jumbotron col-sm-12 text-center' style={transparentBg}> 
				<h1>Spotify Search</h1>
				<p className='lead'>Look up your favorite artists</p>
				<Link to='/artistSearch'>
					<button type='button' className='btn btn-large btn-success'> Begin </button>
				</Link>
			</div>
		)
	}
})

module.exports = Home;