import React from 'react';
import { Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
// Utils
import { TransitionSwitch } from "./../util/transition-switch";
// Animations
import * as animations from './animations';
// Array routes
import routes from './routes';


export default (props) => {
	return (
		<TransitionGroup>

			<Transition
				key={props.location.pathname}
				timeout={500}
				mountOnEnter={true}
				unmountOnExit={true}
				onEnter={ node => {
					animations.enterAnimation(node);
				}}
				onExit={node => {
					animations.leaveAnimation(node);
				}}>

				<TransitionSwitch parallels>
					{routes.map((r, i) => (
						<Route
							key={i}
							exact={r.exact}
							path={r.path}
							render={() => <r.component {...props} /> }
						/>
					))}
				</TransitionSwitch>

			</Transition>
		</TransitionGroup>
	)
};