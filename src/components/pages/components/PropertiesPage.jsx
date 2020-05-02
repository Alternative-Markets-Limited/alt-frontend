import React from 'react';
import { Properties } from '../../properties/components';
import { Helmet } from "react-helmet";

export const PropertiesPage = () =>
{
	return(
		<div>
			<Helmet>
				<title>{"Alt | Properties"}</title>
			</Helmet>
			<Properties />
		</div>
	);
}
