/*
	Copyright (C) 2021 Scott Maday
	
	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.
	
	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.
	
	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap'

import Logo from '../../images/logo.png'

export default class Header extends Component {
	render() {
		return (<header>
			<Navbar bg="dark" variant="dark" className="mb-4">
				<Container>
					<Navbar.Brand href="index.html">
						<img src={Logo} width="30" height="30" className="d-inline-block align-top" /> 2Bored2Wait
					</Navbar.Brand>
				</Container>
			</Navbar>
		</header>)
	}
}

