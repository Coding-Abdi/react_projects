import React from 'react';
import './App.css';
import Joke from './Joke';

function App() {
  return (
    <div>
      <Joke 
          setup="What is the best thing about Switzerland?"
          punchline="I have no idea, but the flag is a big plus."
          ispun={true}
          upvotes={10}
          downvotes={2}
          comments={[{author: "", body: "", title: ""}]}
      />
      <Joke 
          setup="I invented a new word!"
          punchline="Plagiarism!"
          ispun={false}
      />
      <Joke 
          setup="Did you hear about the mathematician who is afraid of negative numbers?"
          punchline="He will stop at nothing to avoid them."
          ispun={true}
      />
      <Joke 
          setup="Why do we tell actors to 'break a leg?'"
          punchline="Because every play has a cast."
          ispun={true}
      />
      <Joke 
          setup="Helvetica and Times New Roman walk into a bar."
          punchline="'Get out of here!' shouts the bartender. 'We don't serve your type.'"
          ispun={true}
      />
    </div>
  );
}

export default App;
