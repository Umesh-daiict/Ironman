//import { Fragment, useState, useEffect } from 'react';
import React, { Component } from 'react';
import UsersContext from '../store/user-context';
import Ironman from './Ironman';
import classes from './UserFinder.module.css';
import Users from './Users';
class UserFinder extends Component {
	static contextType = UsersContext;
	constructor() {
		super();
		this.state = {
			filteredUsers: [],
			searchTerm: '',
		};
	}
	searchChangeHandler = (event) => {
		this.setState({ searchTerm: event.target.value });
	};
	componentDidMount() {
		this.setState({ filteredUsers: this.context.users });
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchTerm !== this.state.searchTerm) {
			this.setState({
				filteredUsers: this.state.filteredUsers.filter((user) =>
					user.name.includes(this.state.searchTerm)
				),
			});
		}
	}
	render() {
		return (
			<React.Fragment>
				<Ironman>
					<div className={classes.finder}>
						<input
							type='search'
							onChange={this.searchChangeHandler.bind(this)}
						/>
					</div>
					<Users users={this.state.filteredUsers} />
				</Ironman>
			</React.Fragment>
		);
	}
}

/*
const UserFinder = () => {
	const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		setFilteredUsers(
			DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
		);
	}, [searchTerm]);

	const searchChangeHandler = (event) => {
		setSearchTerm(event.target.value);
	};

	return (
		<Fragment>
			<div className={classes.finder}>
				<input type='search' onChange={searchChangeHandler} />
			</div>
			<Users users={filteredUsers} />
		</Fragment>
	);
};
*/
export default UserFinder;
