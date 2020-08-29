import React from "react";
import Icon from "../Images/Shopping-Icon.jpg";

const Header = () => {
	return(
		<React.Fragment>
		<table id="header">
			<tr>
				<td>
					<a href="#"><img src={Icon} id="Icon"/></a>
				</td>
				<td>
					<h1 id="head1">Shopping App</h1>
				</td>
				
			</tr>
		</table>
		</React.Fragment>
	)

}

export default Header;