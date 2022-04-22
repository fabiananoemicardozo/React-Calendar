import { Fragment, FC, useState } from 'react';
import useCalendar, { Column } from '../../hooks/useCalendar';
import UseModal from '../modal/useModal';

const Calendar: FC = () => {

  const { calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth } = useCalendar();

  const [show, setShow] =  useState<boolean>(false)
  
  
  const dateClickHandler = (date: string) => {
    {console.log(date)}
    setShow(true)
  }

  const handleModalClose = () => {
    setShow(false)
  }

 /*  const [event, setEvent] = useState<boolean>(false);

  const isEvent = (date: string) => {
    {console.log(date)}
    setEvent(true)
  }

  const noEvent = () => {
    setEvent(false)
  } */



  return (
    <Fragment>
      <p>Selected Month: {`${monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}</p>
      <table className="table">
        <thead>
          <tr className='dayTr'>
            {daysShort.map(day => (
              <th className='day' key={day}>{day}
              
              </th>
            ))}
          </tr>

        </thead>
        <tbody>
          {
            Object.values(calendarRows).map((cols: Column[]) => {
              return <tr key={cols[0].date}>
                {cols.map(col => (
                  col.date === todayFormatted
                    ? <td key={col.date} className={`${col.classes} today`} onClick={() => dateClickHandler(col.date)}>{col.value}</td>
                    : <td key={col.date} className={`${col.classes} day`}  onClick={() => dateClickHandler(col.date)}>{col.value}</td>
                )) }
               
              </tr>
            })
          }
        </tbody>
      </table>

      <button className="button" onClick={getPrevMonth}>Prev</button>
      <button className="button" onClick={getNextMonth}>Next</button>
      <UseModal 
        show= {show}
        handleClose= {()=> handleModalClose()}
        />
    </Fragment>
  );
}

export default Calendar;