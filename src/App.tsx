import React from 'react';

interface TitleProps {
  text: string;
}
 

function Title(props: TitleProps) {
  return (
    <h1>{props.text}</h1>
  )
}


function App() {
  return (
    <div className="App">
     <Title text="Titulo 1" />
    </div>
  );
}

export default App;
