import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';

// Animations
import * as animations from './animations';

class Header extends Component {


	enterAnimation(targets) {
		animations.enterAnimation(targets);
	}

	render () {
		return (

			<Transition
			appear 
			in={!this.props.isLoading}
			timeout={500}
			mountOnEnter={true}
			onEnter={ node => {
				this.enterAnimation(node);
			}}>

			<header className="header">
				
				<div className="header-logo">
					<Link className="header-logo-link" to='/'><span className="header-logo-thumb"></span></Link>
				</div>

				<nav className="header-navigation">
					<ul className="header-navigation-menu">
						<li className="header-navigation-menu-item">
							<Link className="header-navigation-menu-link" to='/article'>
								<span className="header-navigation-label" data-visual-label="Diseases"><span>Diseases</span></span>
								<span className="header-navigation-toggle"><span className="header-navigation-toggle-icon"></span></span>
							</Link>
						</li>
						<li className="header-navigation-menu-item">
							<Link className="header-navigation-menu-link" to='/article' data-id="travel">
								<span className="header-navigation-label" data-visual-label="Travel" ><span>Travel</span></span>
								<span className="header-navigation-toggle"><span className="header-navigation-toggle-icon"></span></span>
							</Link>
						</li>
						<li className="header-navigation-menu-item">
							<Link className="header-navigation-menu-link" to='/article' data-id="adults">
								<span className="header-navigation-label" data-visual-label="Adults" ><span>Adults</span></span>
								<span className="header-navigation-toggle"><span className="header-navigation-toggle-icon"></span></span>
							</Link>
						</li>
						<li className="header-navigation-menu-item">
							<Link className="header-navigation-menu-link" to='/article' data-id="children">
								<span className="header-navigation-label" data-visual-label="Children" ><span>Children</span></span>
								<span className="header-navigation-toggle"><span className="header-navigation-toggle-icon"></span></span>
							</Link>
						</li>
					</ul>
				</nav>

				<div className="header-search">

					<button className="header-search-button header-search-button--open is-visible" aria-label="search">
						<span className="button-search"><span className="icon icon-search"></span></span>
					</button>
					
					<button className="header-search-button header-search-button--close" aria-label="close">
						<span className="button-close"><span className="button-close-icon button-close-icon--dark"></span></span>
					</button>

				</div>

			</header>

			</Transition>
		)
	}
}
	

export default Header;