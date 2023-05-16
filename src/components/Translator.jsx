import React from 'react'
import { useState } from 'react'
import Languages from './Languages'
import axios from 'axios'

const Translator = () => {

    const [inputText, setInputText] = useState('')
    const [result, setResult] = useState()
    const [outputText, setOutputText] = useState('')
    const [selectedItem, setSelectedItem] = useState(null)
    const [errMessage, setErrMessage] = useState()

    
    const translateClick = async() =>{
        const options = {
            method: 'POST',
            url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
            params: {
              'to[0]': `${selectedItem}`,
              'api-version': '3.0',
              profanityAction: 'NoAction',
              textType: 'plain'
            },
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': '92a22776b5msh423d8dbc585bf21p1fd0c4jsn109e0f8add59',
              'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
            },
            data: [
              {
                Text: `${inputText}`
              }
            ]
          };
          
          try {
              const response = await axios.request(options);
              setResult(response.data);
              setOutputText(result[0].translations[0].text)
            //   console.log(outputText)
          } catch (error) {
              setErrMessage(error);
          }
    }

  return (
    <div>
        <main>
            <div className="inputTextContainer containers">
                <form className='btn' onSubmit={() => translateClick()}>
                <button className='translateBtn'>Translate</button>
                </form>
                <div>
                    <textarea 
                    placeholder='Enter Text (any Language)' className='resize-none p-[1rem]'
                    onChange={(e) => setInputText(e.target.value)}></textarea>
                </div>
            </div>
            <div className="outputTextContainer containers">
                <Languages setSelectedItem={setSelectedItem}/>
                <div className='outputText'>
                    <p>{outputText}</p>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Translator