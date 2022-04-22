import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Option } from "../../types/types";



interface DropdownItemProps {
  icon?: string
  options: Array<Option >
}

export const Dropdown: React.FC<DropdownItemProps> = ({ icon, options}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div onClick={toggleDropdown}>
      <BsThreeDotsVertical />
      </div>
      {isOpen && <div >
        {options.map((option: Option) => {
          return(
            <button onClick={option.value == "Edit" ? () => setIsOpen(false) : () => option.onClick()} className={`${option.color} buttonCancel`}>
              {option.value}
            </button>
          )
        })}
      </div>}
    </div>
  )
}