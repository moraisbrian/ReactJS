import { Route, Routes } from "react-router-dom";
import { About } from "./about/About";
import { Todo } from "./todo/Todo";

export function RouterOutlet() {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/todos" element={<Todo />} />
            <Route path="*" element={<Todo />} />
        </Routes>
    );
}