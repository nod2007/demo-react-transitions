import React, { Component } from 'react';

// Animations
import * as animations from './animations';

class Loader extends Component {
	state = {
		isLeaving: false,
		isLoading: false
	};

	componentDidMount() {
        const {setLoading} = this.props;
		const timeout = 50;

		this.setState({
			isLoading: true
		})

		setTimeout(() => {
			this.setState({
				isLeaving: true
			})

			animations.fadeOut(this.appLoader).then(()=> {
				setLoading(false);
			});
		}, timeout);

	}

	render () {
        let loaderClass = this.state.isLoading ? 'is-loading' : '';
        loaderClass += this.state.isLeaving ? ' is-leaving' : '';

		return (
			<div className={`loader ${loaderClass}`} ref={c => this.appLoader = c}></div>
		)
	}

};

export default Loader;