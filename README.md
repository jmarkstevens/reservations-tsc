# Reservations example app

## Architecture

The primary factor behind the architecture used is seperation of concerns.

All code that makes up the application is in src. One of the most useful results of this is when you need to search globally.

Components is where the majority of the code will reside. Components are not aware of where the data they consume originated.

Containers are involved with queries and preverably mutations as well. Though in this instance I passed the mutation to the component. Normally I would pass a callback and handle the mutation in the container component.

The qraphql folder would be where the static client resides along with the queries, mutations and resolvers. The resolvers are for the local state using the apollo cache.
An example of local state as well as use of the static cache is at https://github.com/jmarkstevens/jms-react-apollo. The static cache allows the use of non component files to handle queries and mutations.

The navigation folder would contain all stack and tab routing setup.

The screens folder contains all of the components called by stack and tab routes.

Thank you
