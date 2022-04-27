import { useState } from 'react'


function IdendLetters() {
    const [str, setValue] = useState({
        str1:'',
        str2:''
    });
    

    function ident(str) {

        const letters = str.str1.split('');
        return [...new Set(letters.filter(s => str.str2.includes(s)))].length;

    }

function changeStr(chstr){
   
setValue(prev =>{ return {...prev,...chstr}}
    )

}

    return (
        <div className="row">
            <div className="col-md-6 mx-auto">
                <div className="alert alert-primary mt-3 mb-4" role="alert" >
                    <p>2. Написать код, определяющий количество одинаковых букв в двух словах.</p>
                </div>

                <input type="text" className='form-control mt-3 mb-3' value={str.str1} onChange={(e) => changeStr({str1:e.target.value})} placeholder='Введите слово 1' />
                <input type="text" className='form-control mt-3 mb-3' value={str.str2} onChange={(e) => changeStr({str2:e.target.value})} placeholder='Введите слово 2' />

                <div className="mt-3 mb-5" ><h2>Количество одинаковых букв: {ident(str)}</h2></div>

            </div>
        </div>
    )

}

export default IdendLetters
