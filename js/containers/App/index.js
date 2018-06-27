import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Routes from './../../router';
import Layout from './../Layout';
import Loader from './../../components/Loader';


export class App extends Component {
	
	constructor(props) {
		super(props);
		
		this.setLoading = this.setLoading.bind(this);
		this.state = {
			isLoading: true,
			isReady: false
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
		  	this.onRouteChanged();
		}
	}

	onRouteChanged() {
		console.log("ROUTE CHANGED");
		// change ready doing the same of loading state
		this.setState({ 
			isReady: false
		});
	}

	setLoading(val) {
        this.setState({
			isLoading: val,
			isReady: true
        });
	}

	render() {
		const location = this.props.location;

		return (
			<React.Fragment>
				{ this.state.isLoading &&
					<Loader setLoading={this.setLoading} /> 
				}
					
				<Layout isLoading={this.state.isLoading}>
					<Routes location={location} isLoading={this.state.isLoading} />
				</Layout>

			</React.Fragment>
		)
	}

}


export default withRouter(App);