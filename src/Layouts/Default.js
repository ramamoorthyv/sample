import React from "react";

export default function DefaultLayout(props) {
  return (
    <div>
      <h1>This is default layout</h1>
      {props.children}
    </div>
  );
}
