import React from "react";
import "./warning.css";

export default function Warning({name}) {
  return (
    <div className="warning">
      Deleting account cannot be undone <b>{name}</b>! You should confirm your
      password to delete your account.
    </div>
  );
}
