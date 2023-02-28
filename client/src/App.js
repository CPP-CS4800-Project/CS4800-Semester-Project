import React, { useState, useEffect } from "react";

function App() {

const [data, setData] = useState([{}])

useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }
)
  const [phoneNumber, setPhoneNumber] = useState('');
  const [reminderTime, setReminderTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      phone_number: phoneNumber,
      reminder_time: reminderTime,
    };

    fetch('http://localhost:5000/set-reminder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

return (
  
  <form onSubmit={handleSubmit}>
    <label>
      Phone number:
      <input type="text" name="phone_number" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
    </label>
    <br />
    <label>
      Reminder time:
      <input type="datetime-local" value={reminderTime} onChange={(event) => setReminderTime(event.target.value)} />
    </label>
    <br />
    <button type="submit">Set reminder</button>
  </form>
);


  // return (
  //   <div>
  //     {
  //       (typeof data.members == 'undefined') ? (
  //         <p>Loading...</p>
  //       ) : (
  //         data.members.map((member, i) => (
  //           <p key={i}>{member}</p>
  //         ))
  //       )
  //     }
  //   </div>
  // )
}

export default App



