import React from 'react';

export default function Homepage() {
    return (
        <div>
            <h1>Aetheria.world</h1>
            <br/>
            <h2>Announcing the&nbsp;<span className="green">1.18</span>&nbsp;reset!</h2>
            <br/><br/>
            {/*
            <video width="50%" height="50%" controls className={"center-video"}>
                <source src="https://cdn.badbird5907.net/aetheria/testrender7.mp4" type="video/mp4" />
            </video>
            */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/faSG46va0nk"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen className={"center-video"}/>

            <br/><br/><br/>

            <h1>&#128679; This site is under construction &#128679;</h1>
            <h2>You can find it's source code&nbsp;<a className={"blue"} href="https://github.com/AetherianDevelopers/aetheria-site">here</a>
            </h2>

            {/*
            <div className="">
                <br/>
                <br/>
                <br/>
                <br/>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_7VQkUoIreY"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen className={"ytvid"}/>
            </div>
                    */}
        </div>
    )
}
