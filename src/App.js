
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Header/Home/Home';

function App() {
  const router = createBrowserRouter([
  {
    path : '/', element : <Main></Main>, children :[
      {
        path : 'home', element : <Home></Home>
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
