import React from 'react'
import {Players} from './../api/players'


/** Class AddPlayer extends react component */
export default class AddPlayer extends React.Component {
	/**
  * handler submit
  * @param {string} e event
  */
	handleSubmit(e) {
		e.preventDefault()
		const playerName = e.target.playerName.value
		if (playerName) {
			Players.insert({
				name: playerName,
				score: 0,
			})
		}
	}
	/**
 * @return {string} template component of add player
 */
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" name= "playerName" placeholder="Player name"/>
					<button>Add player</button>
				</form>
			</div>
		)
	}
}
