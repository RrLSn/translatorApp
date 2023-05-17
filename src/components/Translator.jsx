import React from 'react'
import { useState } from 'react'
import Languages from './Languages'
import axios from 'axios'

const Translator = () => {

    const [inputText, setInputText] = useState('')
    const [result, setResult] = useState()
    const [outputText, setOutputText] = useState('')
    const [selectedLang, setSelectedLang] = useState(null)
    const [errMessage, setErrMessage] = useState()

    
    const translateClick = async() =>{
        const encodedParams = new URLSearchParams();
        encodedParams.set('q', `${inputText}`);
        encodedParams.set('target', `${selectedLang}`);
        encodedParams.set('source', 'en');

        const options = {
            method: 'POST',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': '92a22776b5msh423d8dbc585bf21p1fd0c4jsn109e0f8add59',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            data: encodedParams,
        };

        try {
            const response = await axios.request(options);
            console.log(response)
            setResult(response.data);
            setOutputText(result["data"].translations[0].translatedText)
            // console.log(outputText)
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div>
        <main>
            <div className="inputTextContainer containers">
                {/* <form className='btn' onSubmit={() => translateClick()}> */}
                <button onClick={() => translateClick()} className='translateBtn'>Translate</button>
                {/* </form> */}
                <div>
                    <textarea 
                    placeholder='Enter Text (any Language)' className='resize-none p-[1rem]'
                    onChange={(e) => setInputText(e.target.value)}></textarea>
                </div>
            </div>
            <div className="outputTextContainer containers">
                <Languages setSelectedLang={setSelectedLang}/>
                <div className='outputText'>
                    {/* <p>{outputText}</p> */}
                </div>
            </div>
        </main>
    </div>
  )
}

export default Translator