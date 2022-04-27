import {useState} from 'react'

function Payments()
{
    
    const [value, setValue] = useState('');

function calcPayments(s){

    //+проверка на пустую строку
    //+проверка на длину имени клиентов
    //+соответствие шаблону
    //+проверка на символы в диапазоне [A-z0-9]
    //+строка начинается с буквы

 
const illegalSymbol = RegExp('[^a-z0-9]','gm');
const overTen = RegExp('[a-z]{11,}','gm');
const firstLetters = RegExp('^[a-z]','gm');


if(s.length===0 || !s.match(/\d+/gi) ) return 'empty'
if(!firstLetters.exec(s)) return 'first symbol wrong'
if(illegalSymbol.exec(s)) return 'illegal symbol'
if(overTen.exec(s)) return 'length of some username is over ten letters'


return s.match(/\d+/gi).reduce( ( s, x )=> s + Number(x), 0 );


  }
    
  

return (
<div>
    <p>3. Есть информация по платежам клиента, представленная в виде:
«client1amlient2amountount1c2… clientnamountn», где clienti (наименование i-го клиента)– непустая строка длины не более 10, состоящая из строчных букв латинского алфавита, amounti (наименование i-го платежа)– непустая строка, состоящая из цифр.
Написать код, который по виду платежа найдет суммарный платеж.</p>
    <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>        
    {/* <button onClick={calcPayments(value)}>Подсчитать</button>
    <p>Total payments:{total}</p>         */}
<p>Total payments:{calcPayments(value)}</p>
    </div>
)

}

export default Payments
