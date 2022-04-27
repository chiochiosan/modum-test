import { useState } from 'react'

function Payments() {

    const [value, setValue] = useState('');

    function calcPayments(s) {

        //+проверка на пустую строку
        //+проверка на длину имени клиентов
        //+соответствие шаблону
        //+проверка на символы в диапазоне [A-z0-9]
        //+строка начинается с буквы


        const illegalSymbol = RegExp('[^a-z0-9]', 'gm');
        const overTen = RegExp('[a-z]{11,}', 'gm');
        const firstLetters = RegExp('^[a-z]', 'gm');


        if (s.length === 0 || !s.match(/\d+/gi)) return '0'
        if (!firstLetters.exec(s)) return 'Первый символ не верный'
        if (illegalSymbol.exec(s)) return 'Недопустимый символ'
        if (overTen.exec(s)) return 'Наименование клиента больше 10 символов'


        return s.match(/\d+/gi).reduce((s, x) => s + Number(x), 0);


    }



    return (
        <div className="row">
            <div className="col-md-6 mx-auto">
                <div className="alert alert-primary mt-3 mb-4" role="alert" >
                    <p>3. Есть информация по платежам клиента, представленная в виде:
                        <br />« client1amlient2amountount1c2… clientnamountn »,<br />
                        где clienti (наименование i-го клиента)– непустая строка длины не более 10, состоящая из строчных букв латинского алфавита, amounti (наименование i-го платежа)– непустая строка, состоящая из цифр.
                        Написать код, который по виду платежа найдет суммарный платеж.</p>
                </div>

                <input type="text" className='form-control mt-3 mb-3' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Введите строку платежа' />
              
                <div className="mt-3 mb-5" ><h2>Общая сумма:{calcPayments(value)}</h2></div>
            </div>
        </div>
    )

}

export default Payments
