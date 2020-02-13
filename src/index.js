import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import TodoList from './components/todo-list'

//JSX code here
//const el = <h1> Hello World </h1>; or

//JS native code
//const el = React.createElement('h1', null, 'Hello World!');

const App = () => {
    const isLoggedIn = false; //true
    const loginBox = <span>Log in please</span>;
    const welcomeBox = <span>Welcome Back</span>
    return (
        <div>
            <span>{(new Date()).toString()}</span>
            {loginBox}
            {isLoggedIn ? welcomeBox : loginBox}
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    );
};

/*const el = (
    <div>
        <AppHeader/>
        <SearchPanel />
        <TodoList/>
    </div>
);*/

ReactDOM.render(<App/>, document.getElementById('root'));