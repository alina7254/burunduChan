import React from "react";

const Post = () => {
  return (
    <div className="bg-base-200 p-2 m-4 w-[25%]">
      <div className="chat chat-bubble flex flex-col ml-8 max-w-prose bg-base-200 relative">
        <div className="chat-header text-xm text-base-content">
          <span className="flex flex-row justify-between">
            Аноним 18/04/2024 Чтв 14:55:29 №123456789
          </span>
        </div>
        <p className="flex flex-col text-secondary bg-base-200 ml-4">
          <button className="btn btn-link text-primary no-underline w-4 ml-6 my-2">
            {">>20224045"}
          </button>
          Что ж
        </p>
        <div className="chat-footer flex justify-start">
          <button className="btn btn-link no-underline">Ответить</button>
        </div>
      </div>
    </div>
  );
};
export default Post;
