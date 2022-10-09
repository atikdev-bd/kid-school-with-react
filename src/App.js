
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Header/Home/Home';
import About from './components/Header/About/About'

function App() {
  const router = createBrowserRouter([
  {
    path : '/', element : <Main></Main>, children :[
      {
        path : 'home', element : <Home></Home>
      },
      {
        path : '/' , element : <Home></Home>
      },
      {
        path : 'about' , element : <About></About>
      }
      
    ]
  }
  ])
  return (
    <div className="App">
     <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
