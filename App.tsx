import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './slices';

// import AuthApp from './components/AuthApp';
// import TodoApp from './components/TodoApp';
import PostApp from './components/PostsApp';

const store = configureStore({reducer: rootReducer});

function App() {
  return (
    <Provider store={store}>
      <PostApp />
    </Provider>
  );
}

export default App;
