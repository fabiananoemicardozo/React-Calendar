import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AddTodo, EditTodo, RemoveTodo, Todo, ToggleComplete } from "../../types/types";
import { TodoList } from "../evento/TodoList";
import ModalForm from "./ModalForm";

function UseModal({show, handleClose}: any) {

  const [events, setEvents] = useState<Array<Todo>>([]);

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = events.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setEvents(updatedTodos);
  };

  const addTodo: AddTodo = newTodo => {
    if (newTodo !== "") {
      setEvents([...events, { text: newTodo, complete: false }]);
    }
  };
  const removeTodo: RemoveTodo = todoToRemove => {
    let updatedTodos: Array<Todo> = events.filter(todo => todo.text != todoToRemove.text);
    setEvents(updatedTodos);
  }

  const editTodo: EditTodo = todoToEdit => {
    let todoToUpdateIndex: number = events.findIndex(todo => todo.text == todoToEdit.text);
    console.log(todoToUpdateIndex);
  }
  return (    
      <Modal className="modal" show={show} onHide={handleClose}>
        <Modal.Body>
          <ModalForm  addTodo={addTodo}  />
          <TodoList todos={events} toggleComplete={toggleComplete} onRemoveTodo={removeTodo} editTodo={editTodo}/> 
        </Modal.Body>
        <Modal.Footer>
          <Button className="buttonCancel" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default UseModal; 

