import React, { useState } from "react";

const UserArticle = (props) => {
  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </article>
  );
};

export default UserArticle;
