import React from 'react'
import { useForm } from 'react-hook-form'
import './../Card.css';

import { useState } from 'react'

const Badje = () => {

    const {
        register,
        handleSubmit,

        reset,
        formState: { errors }
    } = useForm()

    const [visitor, setName] = useState('XXXXXXXXX');
    const [vdate, setDate] = useState('XX.XX.XXXX');


    const onSubmit = (data) => { setName(data.firstName); setDate(data.date) }
    return (
        <div className="row">
            <div className="col-md-6 mx-auto">
                <div className="alert alert-primary mt-3 mb-4" role="alert" >
                    <p>Создать форму заполнения бейджа посетителя мероприятия. После заполнения полей и нажатия кнопки, информация должна появится на бейдже. Реализовать проверки ввода (пустые значения и некорректные даты)</p>
                </div>

                <div className='col-6 card mx-auto'>
                    <div className="cardvisitor mt-3 text-left">Посетитель:</div>
                    <div className="cardinput col-12">{visitor}</div>

                    <div className="row col-12 mt-5">

                        <div>Дата посещения:</div>

                        <div className="cardinput col-md-6 ml-2">{vdate.split('-').reverse().join('.')}</div>

                    </div>

                </div>
                <div className='card-body'>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='col-6 mx-auto'>
                            <div className='form-group'>
                                <label>Посетитель</label>
                                <input
                                    name='firstName'
                                    type='text'
                                    {...register('firstName', {
                                        required: 'Введите имя посетителя'
                                    })}
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''
                                        }`}
                                />
                                <div className='invalid-feedback'>
                                    {errors.firstName?.message}
                                </div>
                            </div>
                        </div>



                        <div className='col-6 mx-auto'>
                            <div className='form-group'>
                                <label>Дата посещения:</label>

                                <input
                                    type='date'
                                    {...register('date', {
                                        required: 'Пожалуйста, введите допустимую дату'
                                    })}
                                    className={`form-control ${errors.date ? 'is-invalid' : ''
                                        }`}
                                />
                                <div className='invalid-feedback'>{errors.date?.message}</div>
                            </div>
                        </div>


                        <button type='submit' className='btn btn-success mr-1'>
                            Подтвердить
                        </button>
                        <button
                            type='button'
                            onClick={() => reset()}
                            className='btn btn-danger ml-1'
                        >
                            Сбросить
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Badje
