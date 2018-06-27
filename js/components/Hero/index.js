import React, { Component } from 'react';


class Hero extends Component {


	render() {
		
		return (
			<div className="hero hero-article">
				<div className="container-fluid">
					<div className="hero-inner">
						<div className="hero-text">
							<div className="hero-category">{this.props.category}</div>
							<h1 className="hero-title">{this.props.title}</h1>
						</div>
					</div>
				</div>
			</div>
		)
	}


};


export default Hero;

