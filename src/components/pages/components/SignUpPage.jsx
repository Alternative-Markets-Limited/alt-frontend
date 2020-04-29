import React from 'react';
import { SignUp } from '../../signUp/components';
import { Helmet } from 'react-helmet';

export const SignUpPage = () =>{

	return(
		<div>
			<Helmet>
				<title>{ "Sign Up" }</title>
			</Helmet>
			<SignUp />
		</div>
		);
} 
// <SignUp />;
