import "./styles.css";
import { renderMyWork } from "./dom-handler.js";
import { myWorks } from "./works.js";

const worksContainer = document.querySelector('.works-container')

myWorks.forEach(work => {
  worksContainer.append(renderMyWork(work))
});