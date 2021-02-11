import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Convert = ({language,text}) => {

    const [translated,setTranslated] = useState('')
    const [debouncedText,setDebouncedText] = useState(text)

    useEffect(() => {
        const timerId = setTimeout(() => { setDebouncedText(text) },500)
        return () => {
            clearTimeout(timerId)
        }
    }, [text]);

    useEffect(() => {

        const doTranslation = async () => {
            const {data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
                    q: debouncedText,
                    target: language.value
                }
            })
            setTranslated(data.data.translations[0].translatedText)
        }

        doTranslation()
    }, [debouncedText,language]);

    return (
        <h1>{translated}</h1>
    )
}

export default Convert