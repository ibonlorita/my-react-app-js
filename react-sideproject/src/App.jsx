import ConditionalRender from "./components/ConditionalRender";
import ExampleList from "./components/ExampleList";
import Greeting from "./components/Greeting";
import NameInput from "./components/NameInput";
import ProductList from "./components/Products";
import ToDoList from "./components/ToDoList";
import UserCard from "./components/UserCard";
import UserList from "./components/UserList";


function App() {


  return (
    <>
      <Greeting />
      <UserList />
      <UserCard />
      <ProductList />
      <ConditionalRender isLoggedIn={true} username="Lorita" />
      <Counter />
      <NameInput />
      <ToDoList />
      <ExampleList />
    </>
  )
}

export default App
