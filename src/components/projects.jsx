import React from "react";

function ProjectCard({ title, description, imageUrl, repoUrl}){
    return(
        <div className="projectCard">
            <img src={imageUrl || '../image/img.webp'} alt={`Vista previa de ${title}`}/>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="projectLinks">
                <a href={repoUrl} target="_blank" rel="noopener noreferrer">Repositorio</a>
            </div>
        </div>
    )
}

function Projects(){
    const misProyectos = [
        {
            title: "Piedra papel o tijera",
            description: "Esta es una app de piedra papel o tijera en python usando framework tkinker",
            repoUrl: "https://github.com/ErikAlvarado/JuegoPiedraPapelTijera.git"
        }
    ];
    return(
        <section id="proyectos" className="section">
            <div className="container">
                <h2>Mis proyectos</h2>
                <div className="projectsGrid">
                    {misProyectos.map((proyecto, index) => (
                        <ProjectCard
                        key={index}
                        title={proyecto.title}
                        description={proyecto.description}
                        repoUrl={proyecto.repoUrl}
                        imageUrl={proyecto.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}


export default Projects;