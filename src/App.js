
import './App.css';
import {Provider} from 'react-redux';
import { store } from './redux/store';
import Header from './views/Header';
import Footer from './views/Footer';
import TodoList from './views/TodoList';
import Add from './views/Add'

function App() {

  return (
    <Provider store={store}>
      <div className="container">
      <div className="todo-app">
        <Header/>  
        <Add/>
        <div className="content">
        <TodoList/>
        </div>
        <Footer/>
      </div>
   </div>

    </Provider>
  );
}

export default App;
