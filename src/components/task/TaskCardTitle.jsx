import React, { useState } from 'react'

export const TaskCardTitle = () => {

  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Today");

  const handleClick = () => {
    setIsClick(true);
    console.log(isClick);
  }

  const handleChange = (e) => {
    console.log(inputCardTitle);
    // 入力している情報を更新
    setInputCardTitle(e.target.value);
  }

  // Enterを押したときにタイトルを更新
  const handleSubmit = (e) => {
    e.preventDefault();
    // 更新が完了したらinputの状態を終わりにする
    setIsClick(false);
  }

  return (
    <div onClick={handleClick}>
      {isClick ? (
        <form onSubmit={handleSubmit} >
          <input type="text" onChange={handleChange} />
        </form>
      ) : (
          <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
}
