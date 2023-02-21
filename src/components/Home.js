import "../styles/Home.css";
import React from "react";
import Typewriter from "typewriter-effect";

//<h3 className="typer"><Typewriter options={{ strings: ['Student', 'Devloper','Artist'],  autoStart: true, loop: true,  speed:500, }}/></h3>


import Spline from '@splinetool/react-spline';

function Home() {
    return (
  
    <div class="home">
       <div class="outer">
          <div class="top text" > <h3>I'm a </h3></div>
          <div class="top typer"><Typewriter options={{ strings: ['Student', 'Devloper','Artist'],  autoStart: true, loop: true,  speed:500, }}/> </div>
          <div class="below d"></div>
       </div>
  
       <Spline scene="https://prod.spline.design/2PfqUmA-kE-9kORx/scene.splinecode" />
</div>

    );
}

export default Home;