import App from "./App";

const root = document.getElementById("root");

root.innerHTML = `
<h1> Making my own Webpack </h1>
${App({ myName: "Amish" })}
`;
