import React, { Component } from 'react';
import Selector from '../../components/Selector';

// Animations
import * as animations from './animations';
import { Transition } from 'react-transition-group';

class Filters extends Component {

	handleOnClick (data) {

		this.props.onFilterChange(data);
	}


	enterAnimation(node) {

		const targets = {
			firstRow: this.firstRow,
			secondRow: this.secondRow,
			secondRow2: this.secondRow2,
			thirdRow: this.thirdRow,
			button: this.button
		}

		animations.enterAnimation(targets).then(()=> {
			this.props.onFilterEndAnimation();
		});

	}

	render() {

		return (
			
			<Transition
			appear 
			in={this.props.isVisible}
			timeout={1000}
			mountOnEnter={true}
			onEnter={ node => {
				this.enterAnimation(node);
			}}>

			<div className="filters filters-home">
				<div className="container-fluid">
					<div className="filters-inner">
						<div className="filters-text">
							<div className="filters-row" ref={c => this.firstRow = c}>
								<span>I need information for</span>
								<Selector filter={this.props.filters[0]} handleSelectorClick={this.handleOnClick.bind(this)} />
							</div>
							
							<div className="filters-row">
								<span ref={c => this.secondRow = c}>
									<span>aged</span>
									<Selector filter={this.props.filters[1]} handleSelectorClick={this.handleOnClick.bind(this)} />
								</span>
								<span ref={c => this.secondRow2 = c}> old, regarding </span>
	
								<div className="selector-block" ref={c => this.thirdRow = c}>
									<Selector filter={this.props.filters[2]} handleSelectorClick={this.handleOnClick.bind(this)} />
								</div>
							</div>

						</div>
						<button className="filters-button button" ref={c => this.button = c}>Go</button>
					</div>
				</div>
	
			</div>
	
			</Transition>
		)
	}
	
};

export default Filters;