# Task 4
Props and States in React.

Differences between props and state:

1) Components receive data from outside with props, whereas they can create and manage their own data with state
2) Props are used to pass data, whereas state is for managing data
3) Data from props is read-only, and cannot be modified by a component that is receiving it from outside
4) State data can be modified by its own component, but is private (cannot be accessed from outside)
5) Props can only be passed from parent component to child (unidirectional flow)
6) Modifying state should happen with the setState ( ) method
