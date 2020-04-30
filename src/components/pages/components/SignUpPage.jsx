import React from 'react';
import { SignUp } from '../../signUp/components';
import { Helmet } from "react-helmet";

export const SignUpPage = () => 
{
	return(
		<div>
			<Helmet>
				<title>{""}</title>
			</Helmet>
			<SignUp />
		</div>
		);
}
// <SignUp />;
