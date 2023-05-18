import React from 'react'
import { useState } from 'react'
import Languages from './Languages'
import axios from 'axios'

const Translator = () => {

    const [inputText, setInputText] = useState('')
    const [outputText, setOutputText] = useState('')
    const [detectedLang, setDetectedLang] = useState('')
    const [selectedLang, setSelectedLang] = useState('')
    // const [errMessage, setErrMessage] = useState()

    
    const translateClick = async() =>{
        const options = {
            method: 'POST',
            url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
            params: {
              'to[0]': `${selectedLang}`,
              'api-version': '3.0',
              profanityAction: 'NoAction',
              textType: 'plain'
            },
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': '33702c6607mshb7dda5ec3efe52ap1b7002jsn3f8635e7163a',
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
              const result = response.data[0].translations[0].text
              setOutputText(result)
              setDetectedLang(response.data[0].detectedLanguage.language)
            //   console.log(detectedLang)
          } catch (error) {}
    }

  return (
    <div>
        <main>
            <div className="inputTextContainer containers">
                <div className='btn'>
                    {/* <Languages setSelectedLang={setSelectedLang}/> */}
                    <button onClick={() => translateClick()} className='translateBtn'>Translate</button>
                </div>
                <textarea 
                placeholder='Enter text (any language)' className='resize-none p-[1.5rem] text-[1.3rem]'
                onChange={(e) => setInputText(e.target.value)}></textarea>
            </div>
            <div className="outputTextContainer containers">
                <Languages setSelectedLang={setSelectedLang}/>
                <div className='outputText'>
                    {
                    outputText === '' ?
                    <span className='outputPlaceholder'>Select a Language</span>:
                    outputText
                    }
                </div>
            </div>
        </main>
    </div>
  )
}

export default Translator