import React from "react"

function AudioPlayer(props) {
    return (
        <div>
            <audio
                controls controlsList="nodownload"
                src={props.ljud.fil}>
            </audio>
        </div>
    )
}

export default AudioPlayer