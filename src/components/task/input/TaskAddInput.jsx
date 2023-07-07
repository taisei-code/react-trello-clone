import React from 'react'
import { v4 as uuid } from "uuid";

export const TaskAddInput = ({
  inputText,
  setInputText,
  setTaskList,
  taskList,
}) => {

  const handleSubmit = (e) => {
    const taskId = uuid();
    e.preventDefault();
    if (inputText === '') {
      return;
    }
    // カードを追加する
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task - ${taskId}`,
        text: inputText,
      },
    ]);
    setInputText("");
  }

  // フォームに入力される度にinputTextを更新している
  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className='taskAddInput'
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  )
}
