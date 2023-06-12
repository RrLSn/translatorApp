import React from 'react'
import { useState } from 'react'
import OutputLanguages from './OutputLanguages'
import axios from 'axios'
import {AiOutlineClose} from 'react-icons/ai'
import CopyToClipboard from 'react-copy-to-clipboard'
import InputLanguages from './InputLanguages'

const Translator = () => {

    const [inputText, setInputText] = useState('')
    const [outputText, setOutputText] = useState('')
    const [detectedLang, setDetectedLang] = useState('')
    const [selectedLang, setSelectedLang] = useState('')
    const [copied, setCopied] = useState(false)

    
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
          } catch (error) {}
    }

    const clearInput = () => {
        setInputText('')
        setOutputText('')
    }

  return (
    <div className='lg:w-[100%] lg:h-[30rem] lg:flex justify-between w-[85vw] h-[150vh]'>
        <div className="inputTextContainer containers">
            <div className='btn'>
                {/* <InputLanguages setDetectedLang = {setDetectedLang} detectedLang = {detectedLang}/> */}
                <button onClick={() => translateClick()} className='translateBtn'>Translate</button>
            </div>

            <div className='textarea'>
            <textarea 
            placeholder='Enter text (any language)' className='resize-none lg:p-[1.5rem] p-[1rem] focus:outline-none w-[95%] h-[100%] lg:text-[1.3rem]'
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}></textarea>
            <div className='icons'>
                {
                    inputText !== '' &&
                    <AiOutlineClose
                    className='icon-btn close-btn'
                    onClick={clearInput}
                    />
                }
            <CopyToClipboard text={inputText} onCopy={() => setCopied(true)}>
                <img src="/Media/copyLine.svg" 
                className="w-[2rem] cursor-pointer" />
            </CopyToClipboard>
            </div>
            </div>
        </div>
        
        <div className="outputTextContainer containers">
            <OutputLanguages setSelectedLang={setSelectedLang} />
            <div className='outputText'>
            <CopyToClipboard text={outputText} onCopy={() => setCopied(true)}>
                <div className='flex justify-end'><img src="/Media/copyLine.svg" 
                className="w-[2rem] cursor-pointer" /></div>
            </CopyToClipboard>
                {
                outputText === '' ?
                <span className='outputPlaceholder lg:text-[1.3rem] text-[1rem]'>Select a Language</span>:
                outputText
                }
            </div>
        </div>
    </div>
  )
}

export default Translator