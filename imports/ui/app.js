import React from 'react'
import TitleBar from './titleBar'
import AddPlayer from './addPlayer'
import PlayerList from './playerList'
import PropTypes from 'prop-types'

/** ClassApp extends react component */
export default class App extends React.Component {
	/**
 * @return {string} template component of title bar
 */
	render() {
		return (
			<div>
				<TitleBar title = {this.props.title} />
				<PlayerList players= {this.props.players}/>
				<AddPlayer/>
			</div>
		)
	}
}
App.propTypes = {
	title: PropTypes.string.isRequired,
	players: PropTypes.array.isRequired,
}
