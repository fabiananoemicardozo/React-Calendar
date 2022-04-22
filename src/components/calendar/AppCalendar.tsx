import { FC, Fragment } from 'react';
import CardClimate from '../climate/CardClimate';
import Calendar from './Calendar';
import time from "../../assets/time.png";



const AppCalendar: FC = () => {
  return (
    <Fragment>
     
      <section className="headerContainer">
        <div className="bodyContainer">
          <div className="titleContainer">
          <img src={time} alt="calendar" className='logo' />
            <h1 className="titleCalendar">Calendar</h1>   
            <CardClimate/>       
          </div>
        </div>
      </section>   
     <div className='container'>
     <div className="calendarContainer"> 
         <Calendar />
        </div>
     </div>
      

    

    </Fragment>
  );
}

export default AppCalendar;