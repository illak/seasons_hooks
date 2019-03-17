import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

const App = () => {
	const [lat, errorMessage] = useLocation();

	const renderContent = errorMessage ? (
		<div>Error: {errorMessage}</div>
	) : lat ? (
		<SeasonDisplay lat={lat} />
	) : (
		<Spinner message='Please accept location request' />
	);

	return <div className='border red'>{renderContent}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
