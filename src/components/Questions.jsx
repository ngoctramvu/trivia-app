import React, { useState } from "react";
import Choices from "./Choices";

function Questions(props) {
  const [index, setIndex] = useState(0);

    var questions = [
        {
          "category": "Sport & Leisure",
          "id": "622a1c347cc59eab6f94f891",
          "correctAnswer": "Football",
          "incorrectAnswers": [
            "Hockey",
            "Tennis",
            "Surfing"
          ],
          "question": "With which sport is David Beckham associated?",
          "tags": [
            "people",
            "general_knowledge",
            "sport"
          ],
          "type": "Multiple Choice",
          "difficulty": "easy",
          "regions": []
        },
        {
          "category": "General Knowledge",
          "id": "622a1c367cc59eab6f9503df",
          "correctAnswer": "Ceylon",
          "incorrectAnswers": [
            "Burma",
            "East Pakistan",
            "Persia"
          ],
          "question": "What is the former name of Sri Lanka?",
          "tags": [
            "names",
            "general_knowledge"
          ],
          "type": "Multiple Choice",
          "difficulty": "hard",
          "regions": []
        },
        {
          "category": "Science",
          "id": "6243331bcfaae40c129613bf",
          "correctAnswer": "A Boar",
          "incorrectAnswers": [
            "A Dog",
            "A Tom",
            "A Jack"
          ],
          "question": "What is the word for a male badger?",
          "tags": [
            "names",
            "animals",
            "science"
          ],
          "type": "Multiple Choice",
          "difficulty": "hard",
          "regions": []
        },
        {
          "category": "Science",
          "id": "622a1c3e7cc59eab6f952247",
          "correctAnswer": "The Human Nose",
          "incorrectAnswers": [
            "Rhinoceroses",
            "Kidneys",
            "The Moon"
          ],
          "question": "In what does a rhinologist specialise?",
          "tags": [
            "words",
            "science"
          ],
          "type": "Multiple Choice",
          "difficulty": "medium",
          "regions": []
        },
        {
          "category": "Film & TV",
          "id": "622a1c347cc59eab6f94fa83",
          "correctAnswer": "Christopher Walken",
          "incorrectAnswers": [
            "Bruce Dern",
            "Richard Farnsworth",
            "John Hurt"
          ],
          "question": "Who won the 1978 Academy Award for Best Supporting Actor for playing the role of Nick in The Deer Hunter?",
          "tags": [
            "acting",
            "cult_films",
            "academy_awards",
            "film_and_tv"
          ],
          "type": "Multiple Choice",
          "difficulty": "hard",
          "regions": []
        }
      ]

    return (
        <div >
            <Choices
              key={questions[index]['id']}
              question={questions[index]["question"]}
              correctAnswer={questions[index]['correctAnswer']}
              choices={questions[index]['incorrectAnswers'].concat(questions[index]['correctAnswer'])}/>
        </div>
    );
}

export default Questions;
