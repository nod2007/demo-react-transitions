import React, { Component } from 'react';
import { fromEvent } from 'rxjs';

// Animations
import * as animations from './animations';

class Selector extends Component {

	state = {
		isActive: false,
		value: this.props.filter.label
	};
	
	constructor(props) {
        super(props);

		this.filter = props.filter;
	}

	componentDidMount() {
		const targets = {
			bg: this.bgRef,
			ddlCont: this.ddlContRef,
			ddlItem: this.ddlItemRef
		};

		fromEvent(this.headingRef, 'click')
		.subscribe(() => {
			animations.openSelector(targets);
			this.setState({
                isActive: true
            });
		});

		fromEvent(this.bgRef, 'click')
		.subscribe(() => {
			animations.closeSelector(targets);
			this.setState({
                isActive: false
            });
		});

	}

	handleClickItem(val) {
		const targets = {
			bg: this.bgRef,
			ddlCont: this.ddlContRef,
			ddlItem: this.ddlItemRef
		};
		
		this.setState({
			value : val.label,
			isActive: false
		});

		this.props.handleSelectorClick(val);
		animations.closeSelector(targets);
	}
	
	render() {
		
		const isActiveClass = this.state.isActive ? 'is-active' : '';

        return (
			<div className={`selector js-selector ${isActiveClass}`} role="button" tabIndex="0">
				<div className="selector-bg" ref={c => this.bgRef = c}></div>
				<div className="selector-selected" ref={c => this.headingRef = c}>
					<span className="selector-selected-label" data-value={this.state.value} data-default-text={this.state.value}>{this.state.value}</span>
					<span className="icon icon-dropdown"></span>
				</div>
				<div className="selector-ddl" ref={c => this.ddlContRef = c}>
					<div className="selector-ddl-inner">
						{
							this.filter.items.map((v, i) => {
								return (
									<div className="selector-ddl-item" onClick={()=> this.handleClickItem(v) } key={i} data-value={v.label} role="button" tabIndex={i} ref={c => this.ddlItemRef = c} >{v.label}</div>
								)
							})
						}
					</div>
					<div className="selector-ddl-hidden">
						<select id={`edit-${this.filter.name}`} name={this.filter.name} className="form-select" title={this.filter.title}>
							{
								this.filter.items.map((v, i) => {
									return (
										<option key={i} value={v.label}>{v.label}</option>
									)
								})
							}
						</select>
					</div>
				</div>
			</div>
		)
    }
	
	
};

export default Selector;