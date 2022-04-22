import useLocalStorage from "../../hooks/useLocalStorage";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { MultiSelect } from "react-multi-select-component";
import { AddTodo } from "../../types/types";

interface TodoFormProps {
  addTodo: AddTodo;
} 

export default function ModalForm({ addTodo }: TodoFormProps) {

  const [event, setEvent] = useLocalStorage('event');
  const [user, setUser] = useState([]);
  const [description, setDescription] = useState('description');

  const [selected, setSelected] = useState([]);

  const [result, setResult] = useState<boolean>(false); 


  const getData = async () => {
    const response = await fetch('http://gorest.co.in/public/v2/users');
    const data = await response.json();
    const users = data.map((r: { name: any }) => ({ label: r.name, value: r.name }))
    setUser(users);
  }

  useEffect(() => {
    getData();
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEvent(e.target.value);
  }

   const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(event);
    setEvent("");
  }

  const isEvent = (date: string) => {
    {console.log(date)}
    setResult(true)
  }

  const noEvent = () => {
    setResult(false)
  } 

  

  return (
    <div style={{ padding: 30, margin: "auto", maxWidth: 600 }}>
      <div className='containerForm'>
        <h1 className='eventTitle'>Event</h1>


      <form className='formEvent'>
          <input
            className='inputEvent'
            type='text'
            value={event}
            onChange={(e) => setEvent(e.target.value)}
            placeholder='Event' 
          />

          <MultiSelect
            className='inputUser'
            options={user}
            value={selected}
            onChange={setSelected}
            labelledBy='Select'
          />
          <input
            className='inputDescription'
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Description'
          />
          <button
            className='button'
            type='submit'
            value='Save'
            onClick={handleSubmit}
            >
            save
          </button>
        </form>
 
       
      </div>
    </div>
  );
}

