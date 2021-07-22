## Requesting data from APIs

#### Learning Objectives
1. Explain what lifecycle methods are
2. Build a component that makes a request to an API.

### Intro

A coach will demonstrate building a component that requests data from an API.

### Main

##### Instructions
1. Use `create-react-app` to speed development
2. Test-drive using cypress a component that uses the `componentDidMount` lifecycle method to request your own user data from GitHub's API using the `/users` endpoint.
3. Your component should render your name, your avatar, and your github username on the page.

#### Resources
- [React Lifecycle methods](https://reactjs.org/docs/react-component.html)
- [React Lifecycle methods diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [Using the GitHub API](./using-the-github-api.md)

#### Further

1. Extract client logic and move it to a `utils` directory and import it for your component.
2. Unit test the client - and mock it for your component test