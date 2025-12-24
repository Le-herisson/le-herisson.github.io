document.addEventListener("contextmenu", (e) => { e.preventDefault(); });

function get_video_id(input, type) {
    try {
        switch (type) {
            case "short":
                return input.match(/https\:\/\/youtu\.be\/([a-zA-Z0-9-_]{11})/)[1];

            case "long":
                return input.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/shorts\/))([a-zA-Z0-9-_]{11})/)[1];

            case "id":
                return input.match(/([a-zA-Z0-9-_]{11})/g)[0];

            default:
                throw new Error("Error Invalid youtube link type!");
        }      
    } catch (e) {
        throw new Error("Error Invalid youtube link!\nErr : " + e);
    }
     
}