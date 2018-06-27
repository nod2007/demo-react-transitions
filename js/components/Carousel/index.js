import React, { Component } from 'react';
import ListCard from '../../components/ListCards';


class Carousel extends Component {

	render () {

		return (
			<div className="scroll-carousel js-scroll-carousel content-offset-end-inner">
				<div className="scroll-carousel-outer js-scrollfix" data-scrollfix-height>
					<div className="scroll-carousel-inner">
		
						<div className="container-fluid">

							<ListCard items={this.props.items} isVisible={this.props.isVisible} />

						</div>
					</div>
				</div>
			</div>

		)
	}

};

export default Carousel;