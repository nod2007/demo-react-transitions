import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {


	render() {
		const item = this.props.item;
		const hasThumbnail = (item.TileImage !== null) ? true : false;
		const thumbUrl = `${(hasThumbnail) ? item.TileImage.Src : ''}`;

		const styles = {
			backgroundImage: `${hasThumbnail ? `url("${encodeURI(thumbUrl)}")` : ''}`
		};
		
		return (
			<div className="col-xs-7 col-sm-6 col-md-4 col-lg-3">
				<div className={`card card-${item.TitleCategory}`} ref={c => this.cardRef = c} >
					<Link to='/article' className="content" unselectable="on">
						<div className="card-content">
							<div className="card-image" style={styles}></div>
		
							<div className="card-inner">
								<div className="card-category">{item.TitleCategory}</div>
								<div className="card-title">{item.Title}</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
		)
	}


};


export default Card;

