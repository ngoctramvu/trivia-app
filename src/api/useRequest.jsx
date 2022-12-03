import axios from "axios";
import React from "react";

const BASE_URL = "https://the-trivia-api.com/api/questions"

function useRequest(params) {
    const [questions, setQuestions] = React.useState([])

    async function handleRequest() {
        var param1 = params[0] ? `&difficulty=${params[0]}` : ''
        var param2 = params[1] ? `&categories=${params[1]}` : ''
        var param3 = params[2] ? `&region=${params[2]}` : ''

        var URL = `${BASE_URL}?limit=10${param1}${param2}${param3}`
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