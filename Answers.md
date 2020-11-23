1. What problem does the context API help solve?
    Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions are the events that happen in the app based on user input and trigger updates in the state.
    Reducers are functions that take the current state and an action as an argument, and returns a new state.
    store holds the whole state tree in an application. The state is known as a 'single source of thruth' because a store can only change when a action is dispatched on it.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application State = is global and accessible to any component that subscribes to it. should be used if you are doing an API fetch.
    Component State = stored locally in the component and is not accessible from other components unless it is passed through props. Should be used if the state doesn't need to be shared with other components or the state doesn't need to be to be kept after the component unmounts.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
     Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
    My favorite state management system I learned about this week is context API because it seemed easier to understand.
