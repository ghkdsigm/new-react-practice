import React, { useState } from 'react';

function Home() {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState('');

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onClick = () => {
    // const newList = names.concat({id:nextId, text:inputText})
    const newList = [...names, { id: names.length + 1, text: inputText }];
    setNames(newList);
    //setNextId(names.length + 1);
    console.log(newList);
    setInputText('');
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') onClick();
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((el) => (
    <li key={el.id} onDoubleClick={() => onRemove(el.id)}>
      {el.text}
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange} onKeyPress={onKeyPress} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
}

export default Home;
