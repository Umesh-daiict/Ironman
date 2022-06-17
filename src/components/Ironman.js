import { Component } from 'react';

class Ironman extends Component {
	constructor() {
		super();
		this.state = {
			snape: false,
		};
	}
	componentDidCatch(thanos) {
		console.log('Thonos has colected all stone', thanos);
		this.setState({ snape: true });
	}
	render() {
		if (this.state.snape) {
			return (
				<div style={{ textAlign: 'center', width: '100%', color: 'red' }}>
					<p>I AM ... IROMMAN</p>
				</div>
			);
		}

		return this.props.children;
	}
}
export default Ironman;
