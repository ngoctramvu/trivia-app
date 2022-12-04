import axios from "axios";
import React from "react";

const BASE_URL = "https://the-trivia-api.com/api/questions"

function useRequest(params) {
    const [questions, setQuestions] = React.useState([])

    async function handleRequest() {
        var param1 = params[1] ? `&difficulty=${params[1]}` : ''
        var param2 = params[2] ? `&categories=${params[2]}` : ''
        var param3 = params[3] ? `&region=${params[3]}` : ''

        var URL = `${BASE_URL}?limit=${params[0]}${param1}${param2}${param3}`
        const {data} = await axios.get(URL)
        return data
    }

    React.useEffect(() => { 
        handleRequest().then((data) => {
            setQuestions(data)
        })
    }, []);

    return questions
}

export default useRequest