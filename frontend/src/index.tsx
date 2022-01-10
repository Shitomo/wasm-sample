import React, {useState} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Universe} from "wasm-game-of-life";






const pre = document.getElementById("root")!;//TODO Nullableの適切な扱い方を調査
const universe = Universe.new();


const renderLoop = () => {
    //pre.textContent = universe.render();
    universe.tick();
    ReactDOM.render(<App board={universe.render()}/>, document.getElementById("root"));
    requestAnimationFrame(renderLoop);
};
requestAnimationFrame(renderLoop);