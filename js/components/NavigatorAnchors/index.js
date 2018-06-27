import React, { Component } from 'react';


class NavigatorAnchors extends Component {


	render() {
		
		
		return (
			<nav className="navigator-anchors">
				<ul className="navigator-anchors-list">
					<li>
						<a href="#article-summary" className="navigator-anchors-list-item is-active"><span>Summary</span></a>
					</li>
					<li>
						<a href="#article-disease-info" className="navigator-anchors-list-item"><span>Key disease <span className="hidden-mobile">information</span></span></a>
					</li>
					<li>
						<a href="#article-map" className="navigator-anchors-list-item"><span>Map</span></a>
					</li>
					<li>
						<a href="#article-sources" className="navigator-anchors-list-item"><span>Sources & citations</span></a>
					</li>
				</ul>
			</nav>
		)
	}


};


export default NavigatorAnchors;

