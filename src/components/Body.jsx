import React, { useState, useEffect } from 'react';
import Final from './Final';
import Initial from './Initial';

function Body(props) {
  const [conversation, setConversation] = useState([]);

  // This updates the conversation once a new question is asked
  useEffect(() => {
    if (props.question) {
      setConversation(prevConversation => [
        ...prevConversation,
        {
          You: props.question,
          Einstein: "",
        }
      ]);
    }
  }, [props.question]);

  // This fetches the latest answer once it is received from the server
  useEffect(() => {
    if (props.reply) {
      setConversation(prevConversation => [
        ...prevConversation.slice(0, -1),
        {
          You: prevConversation[prevConversation.length - 1].You,
          Einstein: props.reply,
        }
      ]);
    }
  }, [props.reply]);

  return (
    <>
      {props.question || props.reply ? <Final convo={conversation} /> : <Initial />}
    </>
  );
}

export default Body;