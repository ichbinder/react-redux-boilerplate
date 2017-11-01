
/*
let a = ["Hallo", "Welt"];
let b = [];
for(let element of a) {
    b.push(element);
}
b.push("!")

console.log(a === b)



let initialState = [
    {id: 5, title: "Hallo Welt"},
    {id: 10, title: "Hallo Welt 2"}
];

function todos(state = initialState, action) {
    if (action.type == "TODO_ADD") {
        let maxTodoId = 0;
        for(let todo of state) {
            if (todo.id > maxTodoId) {
                maxTodoId = todo.id;
            }
        }
        return [].concat(state, [
            {id: maxTodoId + 1, title: action.title}
        ])
    }
    return state;
}

export default todos;
*/

function todo( state = 0, action ) {
  return state;
}

export default todo;
