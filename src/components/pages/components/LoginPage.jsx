import React from 'react';
import { Login } from '../../login/components';
import { Helmet } from "react-helmet";

export const LoginPage = () => 
{
	return(
		<div>
			<Helmet>
				<title>{"Login"}</title>
			</Helmet>
			<Login />
		</div>
	);
}
