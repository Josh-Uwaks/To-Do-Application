import React,{useState, useEffect} from 'react'

export default function useFetchJoke(){
    const [joke, setJoke] = useState('')
    useEffect(() => {
        getNewJoke();
    },[])
    async function getNewJoke(){
        setJoke('Loading....')
        const res = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                Accept: 'application/json'
            }
        })
        const data = await res.json();
        setJoke(data.joke)
    }
    return [joke, getNewJoke]
}