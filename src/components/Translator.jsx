import React from 'react'
import { useState } from 'react'

const Translator = () => {

    const [inputText, setInputText] = useState('')
    const [outputText, setOutputText] = useState('')

  return (
    <div>
        <main>
            <div className="inputTextContainer">
                <button>Translate</button>
                <form action="">
                    <textarea>Enter Text (any Language)</textarea>
                </form>
            </div>
            <div className="outputTextContainer">
                <select name="" id="">
                    <option value="">Lang</option>
                    <option value="">Lang</option>
                    <option value="">Lang</option>
                    <option value="">Lang</option>
                    <option value="">Lang</option>
                    <option value="">Lang</option>
                </select>
                <p></p>
            </div>
        </main>
    </div>
  )
}

export default Translator