import React from 'react';

function Facebook(props) {
	const title = props.title || "Facebook";

	return (
		<svg height="30" width="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M27 30h-6.5c-.3 0-.5-.2-.5-.5v-11c0-.3.2-.5.5-.5h3.2l1.1-3h-4.3c-.3 0-.5-.2-.5-.5V11c0-1.7 1.3-3 3-3h2V5h-2.5C19.3 5 17 7.3 17 10.5v4c0 .3-.2.5-.5.5H13v3h3.5c.3 0 .5.2.5.5v11c0 .3-.2.5-.5.5H3c-1.7 0-3-1.3-3-3V3c0-1.7 1.3-3 3-3h24c1.7 0 3 1.3 3 3v24c0 1.7-1.3 3-3 3zm-6-1h6c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h13V19h-3.5c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5H16v-3.5C16 6.8 18.8 4 22.5 4h3c.3 0 .5.2.5.5v4c0 .3-.2.5-.5.5H23c-1.1 0-2 .9-2 2v3h4.5c.2 0 .3.1.4.2.1.1.1.3.1.5l-1.5 4c-.1.2-.3.3-.5.3h-3v10z"/>
	</g>
</svg>
	);
};

export default Facebook;