import React from "react";

export default function HoverCounter({ count, incrementCount, theme }) {
    const style =
        theme === "dark"
            ? {
                  backgroundColor: "#000",
                  color: "#fff",
                  padding: "10px",
                  borderRadius: "30px",
                  marginLeft: "20px",
                  textAlign: "center",
              }
            : null;

    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>
                Hover {count} Times
            </h1>
        </div>
    );
}
