import React from 'react'
import PropTypes from 'prop-types'

/** Class TitleBar extends react component */
export default class TitleBar extends React.Component {
	/**
 * @return {string} render subtitle
 */
	renderSubtitle() {
		if (this.props.author) return <h2>Created by {this.props.author}</h2>
	}
	/**
 * @return {string} template component of title bar
 */
	render() {
		return (
			<div className="title-bar">
				<div className="wrapper">
					<h1>{this.props.title}</h1>
					{this.renderSubtitle()}
				</div>
			</div>
		)
	}
}
TitleBar.defaultProps = {
	title: 'Default title',
}
TitleBar.propTypes = {
	title: PropTypes.string.isRequired,
}
