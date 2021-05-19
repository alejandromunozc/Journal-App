import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

const dispatch = useDispatch();

const {active: note} = useSelector(state => state.notes);

const [formValues, handleInputChange, reset] = useForm(note);

const {body, title} = formValues;

const activeId = useRef(note.id);

useEffect(() => {
  if(note.id !== activeId.current){
    reset(note);
    activeId.current = note.id;
  }
}, [note, reset]);

useEffect(() => {
  dispatch(activeNote(formValues.id, {...formValues}));
}, [formValues, dispatch])

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input name="title" type="text" placeholder="Titulo" className="notes__title-input" autoComplete="off" value={title} onChange={handleInputChange}/>
        <textarea name="body" placeholder="Description" className="notes__textarea" value={body} onChange={handleInputChange}></textarea>
        {
          (note.url)
          && (
              <div className="notes__image">
                <img src="https://image.freepik.com/vector-gratis/paisaje-tropical-horizontal-selva-rio-reflejo-manglar-salida-sol-contornos-aves_191217-10.jpg" alt="imagen" />
              </div>
              )
        }
      </div>
    </div>
  )
}
