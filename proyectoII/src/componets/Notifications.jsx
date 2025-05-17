import React from 'react';

export default function Notifications({ notifications }) {
  if (notifications.length === 0) return <p>No hay notificaciones.</p>;

  return (
    <ul>
      {notifications.map((note, index) => (
        <li key={index} style={{background:'#eef', margin:'5px 0', padding:'8px', borderRadius:'4px'}}>
          {note}
        </li>
      ))}
    </ul>
  );
}
