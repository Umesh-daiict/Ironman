import UserFinder from './components/UserFinder';
import UsersContext from './store/user-context';

const DUMMY_USERS = [
	{ id: 'u1', name: 'Heildall' },
	{ id: 'u2', name: 'loki' },
	{ id: 'u3', name: 'gamora' },
	{ id: 'u4', name: 'vision' },
	{ id: 'u5', name: "T'cjalla" },
	{ id: 'u6', name: 'wanda' },
];

function App() {
	const usersContext = {
		users: DUMMY_USERS,
	};

	return (
		<UsersContext.Provider value={usersContext}>
			<UserFinder />
		</UsersContext.Provider>
	);
}

export default App;
