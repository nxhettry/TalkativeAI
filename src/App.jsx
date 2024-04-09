import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import Inputbox from "./components/Inputbox";

const App = () => {
  const [question, setQuestion] = useState("");
  const [Answer, setAnswer] = useState("");
  const baseURL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${import.meta.env.VITE_REACT_APP_API_KEY}`;

  const getAnswer = async (aQuestion) => {
    try {
      const response = await axios.post(
        baseURL,
        {
          contents: [
            {
              parts: [
                {
                  text: aQuestion,
                },
              ],
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      let result = response.data.candidates[0].content.parts[0].text
      setAnswer(result);
    } catch (error) {
      console.error(error);
    }
  };

  const getQuestion = async (quest) => {
    setQuestion(quest);
    await getAnswer(quest);
  }

  return (
    <div className='relative h-screen flex flex-col justify-center bg-gradient-to-r from-gray-900 to-gray-500 via-gray-700'>
      <Navbar />
      <Body question={question} reply={Answer} />
      <div className="absolute bottom-0">
        <Inputbox theQuestion={getQuestion} />
        <Footer className="mt-auto" />
      </div>
    </div>
  );
}

export default App;