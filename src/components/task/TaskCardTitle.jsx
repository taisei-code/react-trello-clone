import React, { useState } from 'react'

export const TaskCardTitle = () => {

  const [isClick, setIsClick] = useState(false);
  // 入力した値を管理する状態変数
  const [inputCardTitle, setInputCardTitle] = useState("Today");

  // クリックしたらisClickをfalseにする関数
  const handleClick = () => {
    setIsClick(true);
  }

  // 入力された値が変更する度にinputCardTitleを更新する関数
  const handleChange = (e) => {
    // 入力している情報を更新
    setInputCardTitle(e.target.value);
  }

  // Enterを押したときにタイトルを更新
  const handleSubmit = (e) => {
    e.preventDefault();
    // 更新が完了したらinputの状態を終わりにする
    setIsClick(false);
  }

  const handleBlur = () => {
      setIsClick(false);
  }

  return (
    <div onClick={handleClick} className='taskCardTitleInputArea'>
      {/* isClickがtrueなら「?」の後「form」、falseなら「:」の後「h3] */}
      {isClick ? (
        <form onSubmit={handleSubmit} >
          <input
            className='taskCardTitleInput'
            autoFocus
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputCardTitle}
            maxLength="10"
          />
        </form>
      ) : (
          <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
}
