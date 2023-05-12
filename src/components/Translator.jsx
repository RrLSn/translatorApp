import React from 'react'
import { useState } from 'react'
import Languages from './Languages'

const Translator = () => {

    const [inputText, setInputText] = useState('')
    const [outputText, setOutputText] = useState('')

    const url = 'https://google-translator9.p.rapidapi.com/v2'

    
    const translateClick = () =>{
        // e.preventDefault()
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '92a22776b5msh423d8dbc585bf21p1fd0c4jsn109e0f8add59',
                'X-RapidAPI-Host': 'google-translator9.p.rapidapi.com'
            },
            body: {
                q: 'The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the three pyramids in the Giza pyramid complex.',
                source: 'en',
                target: 'ar',
                format: 'text'
            }
        };
        // fetch(url,options)
        // .then((res) => res.json())
        // .then((data) => console.log(data.text))
        // .catch((err) => console.log(err))
       
        
        // const options = {
        // method: 'POST',
        // headers: {
        //     'content-type': 'application/json',
        //     'X-RapidAPI-Key': 'e3edb7f51amshef58cd9a59107bcp1b3fd0jsna96710f87208',
        //     'X-RapidAPI-Host': 'google-translator9.p.rapidapi.com'
        // },
        // body: {
        //     q: 'The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the three pyramids in the Giza pyramid complex.',
        //     source: 'en',
        //     target: 'zh-CN',
        //     format: 'text'
        // }
        // };

        // try {
        //     const response = await fetch(url, options);
        //     const result = await response.text();
        //     console.log(result);
        // } catch (error) {
        //     // console.error(error);
        // }
    }

  return (
    <div>
        <main>
            <div className="inputTextContainer containers">
                <form className='btn'>
                <button onClick={translateClick} className='translateBtn'>Translate</button>
                </form>
                <div action="">
                    <textarea 
                    placeholder='Enter Text (any Language)' className='resize-none p-[1rem]'
                    onChange={(e) => setInputText(e.target.value)}></textarea>
                </div>
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