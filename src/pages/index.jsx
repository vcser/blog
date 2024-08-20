import React from 'react';
import './styles.css'

export default function MyReactPage() {
    return (
        <>
            <nav id="navbar">
                <a href="#hero">About</a>
                <a href="#projects">Projects</a>
                <a href="/blog">Blog</a>
                <a href="#contact">Contact</a>
            </nav>
            <main>
                <section id="welcome-section">
                    <h1>Hello I am Vicente Cser</h1>
                    <p>Student and developer</p>
                </section>
                <section id="projects">
                    <h1>These are my projects</h1>
                    <div id="projects-grid">
                        <a class="project" href="https://www.freecodecamp.org/vicentecser" target="_blank">
                            <img src="https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png" />
                                <h1 class="project-tile">FreeCodeCamp</h1>
                        </a>
                        <a class="project" href="https://vcser.github.io/ZombieTyper/" target="_blank">
                            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
                                <h1 class="project-tile">ZombieTyper</h1>
                        </a>
                        <a class="project" href="https://github.com/vcser/chip-8" target="_blank">
                            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
                                <h1 class="project-tile">CHIP-8</h1>
                        </a>
                        <a class="project" href="https://vcser.github.io/cat-or-baby/" target="_blank">
                            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
                                <h1 class="project-tile">Cat Or Baby</h1>
                        </a>
                        <a class="project" href="https://vcser.itch.io/the-submarine" target="_blank">
                            <img src="https://img.itch.zone/aW1nLzk3OTM3NDMucG5n/315x250%23c/YRB2EW.png" />
                                <h1 class="project-tile">The Submarine</h1>
                        </a>
                    </div>
                    <a id="profile-link" href="https://github.com/vcser" target="_blank">More</a>
                </section>
                <section id="contact">
                    <p>Contact me</p>
                    <div id="contact-list">
                        <a href="https://github.com/vcser"><img class="contact-img" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" /></a>
                        <a href="https://www.linkedin.com/in/vicente-cser/"><img class="contact-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" /></a>
                        <a href="mailto:vicentecser@gmail.com"><img class="contact-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" /></a>
                    </div>
                </section>
            </main>
        </>
    );
}