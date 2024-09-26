import React from "react";

export default function Button({ text, classname }) {
  return (
    <>
      <div>
        <button className={`${classname}   `} onclick={onclick}>
          {text}
        </button>
      </div>
    </>
  );
}
