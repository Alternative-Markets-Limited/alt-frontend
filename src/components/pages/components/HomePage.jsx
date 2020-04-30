import React from 'react';
import { Home } from '../../home/components';
import { Helmet } from "react-helmet";

export const HomePage = () => 

{
	return(
			<div>
				<Helmet>
                  <title>{ "AltDotNg | Home" }</title>
                </Helmet>
                <Home />
			</div>
		)
}
// <Home />;

