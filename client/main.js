import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'

const players = [{
	_id: 1,
	name: 'Oso',
	score: 10,
}, {
	_id: 2,
	name: 'Jirafa',
	score: 0,
}, {
	_id: 3,
	name: 'Perro',
	score: 20,
}]
const renderPlayer = (listPlayers) => {
	return listPlayers.map((v)=>{
		return <p key={v._id}>{v.name} Points: {v.score}</p>
	})
}
Meteor.startup(()=> {
	const title = 'Account Settings'
	const name = 'Glenda'
	const jsx = (
		<div>
			<h1>{title}</h1>
			<p>Hello {name}</p>
			<p>This is my list of players</p>
			{renderPlayer(players)}
		</div>
	)
	ReactDOM.render(jsx, document.getElementById('app'))
})
