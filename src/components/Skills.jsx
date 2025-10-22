import React from "react";

function Skills(){
    return(
        <section id="habilidades" className="section bg-light">
            <div className="container">
                <h2 style={{textAlign: 'center', marginBottom: '40px'}}>Habilidades Técnicas:</h2>
                <h3>Lenguajes de programacion:</h3>
                <ul className="skills-list">
                    <li>Java</li>
                    <li>C#</li>
                    <li>Python</li>
                </ul>

                <h3>Desarrollo web:</h3>
                <ul className="skills-list">
                    <li>HTML5</li>
                    <li>CSS</li>
                </ul>

                <h3>Control de versiones:</h3>
                <ul className="skills-list">
                    <li>GIT</li>
                    <li>Github</li>
                </ul>

                <h3>Bases de datos:</h3>
                <ul className="skills-list">
                    <li>SQL</li>
                    <li>MySQL</li>
                </ul>

                <h3>Sistemas operativos que domino:</h3>
                <ul className="skills-list">
                    <li>Windows</li>
                    <li>Linux</li>
                    <li>Android</li>
                </ul>
            </div>
        </section>
    )
}

export default Skills;