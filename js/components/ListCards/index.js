import React, { Component } from 'react';
// import TransitionGroup from 'react-addons-transition-group';

import Card from '../../components/Card';

// Animations
import * as animations from './animations';

class ListCards extends Component {
	
	constructor(props){
		super(props);

		this.state = {
		  items: []
		}

	}

	componentDidMount() {

		this.setState({ items: this.props.items })
		
	}

	componentDidUpdate(prevProps, prevState) {


		if(this.props.isVisible) {
			animations.enterAnimation(this.container.children);
		}

		if (prevProps.items !== this.props.items) {
			
			const els = this.container.children;
			
			animations.leaveAnimation(els).then(()=> {
				this.setState({ items: prevProps.items })
				animations.enterAnimation(els)
			});

		}
	}
		
	render () {

		const cards = this.state.items.map((item, i) => (
			<Card item={item} key={i} ref={c => this.cardRef = c} />
		));

		return (

			<div className={`card-container ${!this.props.isVisible ? 'is-hidden' : ''}`}>
				<div className="row" ref={c => this.container = c}>
					{ cards }
				</div>
			</div>
			
		)
	}

};

export default ListCards;