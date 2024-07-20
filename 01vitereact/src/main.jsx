import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App !</h1>
//     </div>
//   )
// }

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'http://google.com',
//     target: '_blank'
//   },
//   children: 'click me to visit google'
// }

//Simple React Element Creating
// const anotherElement = (
//   <a href='http://google.com' target='_blank'>Visit Google</a>
// )
const anotherUser = 'Vijay Singh'
//creating ReactElement 
const ReactElement = React.createElement(
  'a',
  {
    href: 'http://google.com', target: '_blank'
  },
  'click me to visit Google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

  ReactElement
)
