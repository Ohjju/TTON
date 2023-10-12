import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Todo from "./pages/Todo";
import Board from "./pages/Board";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/calendar" element={<Calendar />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/board" element={<Board />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
