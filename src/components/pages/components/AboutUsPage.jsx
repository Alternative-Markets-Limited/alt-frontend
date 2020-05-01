import React from 'react';
import { AboutUs } from '../../aboutUs/components';
import { Helmet } from "react-helmet";
 
export const AboutUsPage = () => 
{
	return(
			<div>
				<Helmet>
					<title>{ "About Us" }</title>
				</Helmet>
				<AboutUs />
			</div>
		);
 }
// <AboutUs />;