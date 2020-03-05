const INIT_STATE = []

export default function todos(state = INIT_STATE, action) {
    switch (action.type) {
        case `ADD_TODO`:
            return [
                ...state,
                { id: Math.random(), task: action.text, checked: false }
            ]

        case `DONE_TODO`:
            let index = state.indexOf(action.todo);
            state.splice(index,1);
            return [
                ...state,
                {id: action.todo.id, task: action.todo.task, checked: true}
            ]
        default: return state;
    }
}