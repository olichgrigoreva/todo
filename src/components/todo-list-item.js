import React from 'react';

const items = ['Drink Coffee', 'Build Awesome App'];

const TodoListItem = ( {label, important=false} ) => {
//return <span>{items[0]}</span>;

    const style = {
        color: important ? 'tomato': 'black'
    };

    return <span style={style}>{label}</span>
}

export default TodoListItem;
