import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input type="text" placeholder="Titulo" className="notes__title-input" autoComplete="off" />
        <textarea placeholder="Description" className="notes__textarea"></textarea>
        <div className="notes__image">
          <img src="https://image.freepik.com/vector-gratis/paisaje-tropical-horizontal-selva-rio-reflejo-manglar-salida-sol-contornos-aves_191217-10.jpg" alt="imagen" />
        </div>
      </div>
    </div>
  )
}
