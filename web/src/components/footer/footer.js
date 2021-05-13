import * as React from "react"

const Footer = () => (
	<footer
		style={{
			background: `rebeccapurple`,
		}}
	>
		<div
			style={{
				margin: `0 auto`,
				maxWidth: 960,
				padding: `1.45rem 1.0875rem`,
			}}
		>
			© {new Date().getFullYear()},
			{` `}
			<a href="https://www.gatsbyjs.com">Anna Li Meyer</a>
		</div>
	</footer>
);

export default Footer;
