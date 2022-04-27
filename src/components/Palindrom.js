import {useState} from 'react'



function Palindrom()
{
    const [value, setValue] = useState('');

function gram(s){

     return( s.toLowerCase().split('').reverse().join('')===s.toLowerCase() && s.length);
  }
    
  

return (
<div className="row">
    <div className="col-md-6 mx-auto">
    <div className="alert alert-primary mt-3 mb-4" role="alert" >
    <p>1. Написать код, который определяет является ли переданное слово палиндромом.</p>
    </div>
    <input type="text" className='form-control' value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Введите слово'/>        

    <div className="mt-3 mb-5" ><h2>Палиндром: {gram(value)?<span style={{color:'green'}}>Да</span>:<span style={{color:'red'}}>Нет</span>}</h2></div>

    </div>
</div>
)

}

export default Palindrom
