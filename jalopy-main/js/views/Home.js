import {showNotification} from "../messaging.js";
import {getUser} from "../auth.js";

const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

export default function Home(props) {
    return `
        <header>
            <h1>Hello Jalopy!</h1>
        </header>
        <main>
            <div>
            <img src="assets/jalopy1.jpeg" alt="jalopy-image">
                <p>
                    Welcome to my Jalopy application!
                </p>    
                <button type="btn" id="img-button">Change Image</button>
            </div>
        </main>
    `;
}

let images = ["assets/jalopy1.jpeg","assets/jalopy2.jpeg","assets/jalopy3.jpeg"]
let currentImage = 0;

function changeImageButton () {
    currentImage += 1;

    //loop back to the first image
    if(currentImage >= images.length) {
        currentImage = 0;
    }
    document.querySelector('img').src = images[currentImage]

}


export function HomeEvents() {
    // TODO: use an enum for message type
    // const authority = getUserRole();
    document.querySelector("#img-button").addEventListener("click", changeImageButton);

}