import loadHandler from "../handlers/loadHandler.js";

const loadEvent = () => {
    window.addEventListener("load", () => {
        loadHandler('Bruxelles');
    });
};

export default loadEvent;