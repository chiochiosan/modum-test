import {useState} from 'react'



function IdendLetters()
{
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

   

function ident(str1, str2){
    
        const letters = str1.split('');
        return [...new Set(letters.filter(s => str2.includes(s)))].length;
    
  }
    
  

return (
<div className="row">
    <div className="col-md-6 mx-auto">
        <div className="alert alert-primary mt-3 mb-4" role="alert" >
        <p>2. Написать код, определяющий количество одинаковых букв в двух словах.</p>
        </div>
    
    <input type="text" className='form-control mt-3 mb-3' value={value1} onChange={(e)=>setValue1(e.target.value)} placeholder='Введите слово 1'/>        
    <input type="text" className='form-control mt-3 mb-3' value={value2} onChange={(e)=>setValue2(e.target.value)} placeholder='Введите слово 2'/>        
    
    <div className="mt-3 mb-5" ><h2>Количество одинаковых букв: {ident(value1, value2)}</h2></div>        

    </div>
    </div>
)

}

export default IdendLetters
