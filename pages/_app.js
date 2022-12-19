import "../styles/globals.css"
import Head from "next/head"
import Header from "../components/Header"

// reducers
// import { Provider } from 'react-redux';
// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import bookmarks from '../reducers/bookmarks';

// import { persistStore, persistReducer } from 'redux-persist';
// import { PersistGate } from 'redux-persist/integration/react';
// import storage from 'redux-persist/lib/storage';

// const reducers = combineReducers({ bookmarks, user, hiddenArticles });
// const persistConfig = { key: 'morningnews', storage };

// const store = configureStore({
//   reducer: persistReducer(persistConfig, reducers),
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
// });

// const persistor = persistStore(store);

function App({ Component, pageProps }) {
	return (
		<div>
			<Head>
				<title>Le mulot</title>
			</Head>
			<Header />
			<Component {...pageProps} />
		</div>
	)
}

export default App
