import React from 'react'
import { useState } from 'react'
import Languages from './Languages'

const Translator = () => {

    const [inputText, setInputText] = useState('')
    const [outputText, setOutputText] = useState('')
    console.log(inputText)

  return (
    <div>
        <main>
            <div className="inputTextContainer containers">
                <div className='btn'>
                <button className='translateBtn'>Translate</button>
                </div>
                <form action="">
                    <textarea 
                    placeholder='Enter Text (any Language)' className='resize-none p-[1rem]'
                    onChange={(e) => setInputText(e.target.value)}></textarea>
                </form>
            </div>
            <div className="outputTextContainer containers">
                <Languages />
                <div className='outputText'>
                    <p>{outputText}</p>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Translator