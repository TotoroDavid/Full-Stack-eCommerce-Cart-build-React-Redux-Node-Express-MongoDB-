# Full Stack eCommerce Cart build (React, Redux, Node, Express, MongoDB)

I built a full-stack e-commerce cart from scratch using React and Redux for our frontend and Node, Express, and MongoDB for our backend. We will be doing everything on our own from setting up the backend API to styling our components.


////////////////////////

the project is finished but it show me an error but at the moment I cannot to solve it

Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.

7 | import { Provider } from "react-redux";
   8 | import store from "./redux/store";
   9 |
> 10 | ReactDOM.render(
  11 |   <Provider store={store}>
  12 |     <React.StrictMode>
  13 |       <App />


