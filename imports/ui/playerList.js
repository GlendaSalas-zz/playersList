import React from 'react'
import Player from './player'
import PropTypes from 'prop-types'

/** Class TPlayerList extends react component */
export default class PlayerList extends React.Component {
	/**
 * @return {string} template component of title bar
 */
	renderPlayer() {
		if (this.props.players.length === 0) {
			return <p>Add your first player to get started.</p>
		} else {
			return this.props.players.map((v)=>{
				return <Player key={v._id} player= {v}/>
			})
		}
	}
	/**
 * @return {string} template component of title bar
 */
	render() {
		return (
			<div>
				{this.renderPlayer()}
			</div>
		)
	}
}
PlayerList.propTypes = {
	players: PropTypes.array.isRequired,
}
