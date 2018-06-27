import React, { Component } from 'react';

// Components
import Hero from '../../components/Hero';
import NavigatorAnchor from '../../components/NavigatorAnchors';

export default class Article extends Component {

	componentWillAppear(done) {
		console.log("About appear");
		done();
	}
	componentWillLeave(done) {
		console.log("About will leave");
		done();
	}
	componentWillEnter(done) {
		console.log("About will enter");
		done();
	}

	render() {

		return (
			
			<section className="article">

				<Hero category={'disease'} title={'Hepatitis B'}/>

				<NavigatorAnchor />

				<div className="wrapper-inner wrapper-inner--article">
					<div className="wrapper-background"></div>

					<section className="section-component">
						<div className="container-fluid">
							<div className="row">


								<div className="col-xs-12 col-md-3">
								</div>

								<div className="col-xs-12 col-md-7 col-md-1 col-md-offset-1">
									<div className="article-component" data-anchor="article-summary">
										<div className="summary">
											<div className="article-release">Last updated 18 Oct 2018</div>

											<div className="article-description">
												<p>
													Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>

			</section>
		);
	}
}