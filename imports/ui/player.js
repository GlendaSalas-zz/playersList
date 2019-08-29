import React from 'react'
import PropTypes from 'prop-types'
import {Players} from './../api/players'

/** Class TitleBar extends react component */
export default class Player extends React.Component {
	/**
 * @return {string} template component of title bar
 */
	render() {
		return (
			<div>
				<p key={this.props.player._id}>
					{this.props.player.name} Points: {this.props.player.score}
					<button onClick={()=> {
						Players.update({_id: this.props.player._id}, {$inc: {score: -1}})
					}}>-1</button>
					<button onClick={()=> {
						Players.update({_id: this.props.player._id}, {$inc: {score: 1}})
					}}>+1</button>
					<button onClick={()=> {
						Players.remove({_id: this.props.player._id})
					}}>X</button>
				</p>
			</div>
		)
	}
}
Player.defaultProps = {
}
Player.propTypes = {
	player: PropTypes.object.isRequired,
}
