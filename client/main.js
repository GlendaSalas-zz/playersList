/* eslint no-unused-vars: ["error", { "const": "local" }]*/
import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'
import {Tracker} from 'meteor/tracker'
import {Players} from './../imports/api/players'
import App from './../imports/ui/app'


Meteor.startup(()=> {
	Tracker.autorun(()=>{
		const players = Players.find({}, {sort: {score: -1}}).fetch()
		const title = 'Score app'
		ReactDOM.render(<App title={title} players={players}/>,
			document.getElementById('app'))
	})
})
