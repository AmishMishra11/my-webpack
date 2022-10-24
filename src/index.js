import App from "./App";

import Logo from "./logo.png";

const root = document.getElementById("root");

root.innerHTML = `
<img src=${Logo} alt="my-logo" />
<h1> Making my own Webpack </h1>
${App({ myName: "Amish" })}
`;
