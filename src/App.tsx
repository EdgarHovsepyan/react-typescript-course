import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import TodoPage from './TodoPage';
import UserPage from './components/UserPage';
import UserItemPage from './components/UserItemPage';
import { TodoItemPage } from './components/TodoItemPage';

function App() {
 

  return (
    <div className="App">
      {/* <EventsExample />
      <Card 
        variant={CardVariant.outlined}
        onClick={(num: number) => console.log(num)}
        width='200px'
        height='200px'
      >
        <button>Tap</button>
      </Card> */}

      <Router>
        <div>
          <NavLink to='/users'>Users</NavLink>
          <NavLink to='/todos'>Todos</NavLink>
        </div>
          <Routes>
            <Route path={"/users"} element={<UserPage />} />
            <Route path={"/todos"} element={<TodoPage />} />
            <Route path={"/users/:id"} element={<UserItemPage />} />
            <Route path={"/todos/:id"} element={<TodoItemPage />} />
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
