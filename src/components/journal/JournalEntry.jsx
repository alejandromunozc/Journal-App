import React from 'react'

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div className="journal__entry-picture" style={{
        backgroundSize: 'cover',
        backgroundImage: 'url(https://blog.foto24.com/wp-content/uploads/2019/02/6-fotografia-de-Alejandro-Rodriguez-683x1024.jpg)'
      }}>
      </div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Titulo</p>
        <p className="journal__entry-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  )
}
