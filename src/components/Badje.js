import React from 'react'
import { useForm, useFormState } from 'react-hook-form'

import {useState} from 'react'
const Badje = () => {
    
  
    const {
    register,
    handleSubmit,

    reset,
    formState: { errors }
  } = useForm()

  const [visitor, setName] = useState('');
  const [vdate, setDate] = useState('');
 // const onSubmit = (data) => alert(JSON.stringify(data))

 



 const onSubmit = (data) =>{ setName(data.firstName); setDate(data.date)}
  return (
    <>
    

    <p>Name:{visitor}</p>
    <p>Date:{vdate}</p>
      <div className='card-body'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Посетитель */}
          <div className='form-row'>
            <div className='form-group col-5'>
              <label>Посетитель</label>
              <input
                name='firstName'
                type='text'
                {...register('firstName', {
                  required: 'Введите имя посетителя'
                })}
                className={`form-control ${
                  errors.firstName ? 'is-invalid' : ''
                }`}
              />
              <div className='invalid-feedback'>
                {errors.firstName?.message}
              </div>
            </div>
          </div>
          {/* /Посетитель */}

          {/* Дата посещения */}
          <div className='form-row'>
            <div className='form-group col-5'>
              <label>Дата посещения:</label>

              <input
                type='date'
                {...register('date', {
                    required: 'Пожалуйста, введите допустимую дату'
                  })}
                  className={`form-control ${
                    errors.date ? 'is-invalid' : ''
                  }`}
              />
              <div className='invalid-feedback'>{errors.date?.message}</div>
            </div>
          </div>
          {/* /Дата посещения */}

          {/* Кнопки */}
          <button type='submit' className='btn btn-secondary'>
            Подтвердить
          </button>
          <button
            type='button'
            onClick={() => reset()}
            className='btn btn-secondary'
          >
            Сбросить
          </button>
          {/* /Кнопки */}
        </form>
      </div>
    </>
  )
}

export default Badje
