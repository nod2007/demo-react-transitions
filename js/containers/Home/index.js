import React, { Component } from 'react';

// import { Transition } from 'react-transition-group';

// Constants
import constants from '../../constants';

// Components
import Filters from '../../components/Filters';
import Carousel from '../../components/Carousel';

// Utils


export default class Home extends Component {
	constructor(props) {
		super(props);

		this.title = {
			default: 'Or start with one of our topics below',
			results: 'Here your results',
			noResults: 'No results, start with one of our topics below'
		}

		this._initState = {
			data: [], // XHR
			filters: constants.sortingData,
			cards: constants.cardData,
			filteredCards: [],
			isHeroAnimated: false,
			isVisible: false,
			titleCarousel: this.title.default
		}

		this.state = {
			...this._initState
		}

		this.sortedFilters = [];
		this.onFilterChange = this.onFilterChange.bind(this);

	}
	
	componentWillAppear(done) {
		console.log("Homepage appear");
		

		if(!this.props.isLoading) {
			this.setState({
				isVisible: true
			});
		}
		
		done();
	}
	componentWillLeave(done) {
		console.log("Homepage will leave");

		this.setState({
			isVisible: false,
			isHeroAnimated: false
		});
		
		done();
	}
	componentWillEnter(done) {
		console.log("Homepage will enter");
		done();
	}

	componentDidMount(e) {
		this.fetchData();
		this.setState({
			filteredCards: this.state.cards
		});
	}

	componentDidUpdate(prevProps, prevState) {

		//first enter after loader
		if(prevProps.isLoading !== this.props.isLoading) {
			this.setState({
				isVisible: true
			});
		}

	}

	fetchData() {
		//fetch api
	}

	onFilterChange(e) {

		const filter = e;
		let newArray = [];

		this.setState({
			filteredCards: [],
		});

		if(filter.idAge) {
			newArray = this.state.cards.filter((card) => {
				return card.refAge === filter.idAge
			});
		}

		if(filter.idCat) {
			newArray = this.state.cards.filter((card) => {
				return card.refCat === filter.idCat
			});
		}

		const title = 
			newArray.length > 0 ? 
			this.title.results : 
			this.title.noResults;

		this.setState({
			filteredCards: newArray,
			titleCarousel: title
		});

	}

	onFilterEndAnimation(){

		this.setState({
			isHeroAnimated: true
		});
		
	}

	render() {
	
		return (

			<section className="home">

				<Filters
					filters={this.state.filters} isVisible={this.state.isVisible} onFilterChange={ (e) => this.onFilterChange(e) } onFilterEndAnimation={ (e) => this.onFilterEndAnimation(e)} />

				{ this.state.isVisible && 

					<div className="wrapper-inner">
						
						<div className="wrapper-background"></div>
					
						<section className="section-component">
							<div className="filter-results">
								<div className="container-fluid">
									<div className="row">
										<div className="col-xs-12">
											<h4 className={`filter-results-title ${this.state.isHeroAnimated ? 'is-visible': ''}`}>
												{ this.state.titleCarousel }											
											</h4>
										</div>
									</div>
								</div>
								
								{ this.state.filteredCards.length > 0 &&
									<Carousel items={this.state.filteredCards} isVisible={this.state.isHeroAnimated} />
								}

							</div>
						</section>

					</div>
				}
					
			</section>
		);
	}
}