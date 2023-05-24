import htmlImg from "../../assert/tegnologias/html.png"
import cssImg from "../../assert/tegnologias/css.svg"
import javascriptImg from "../../assert/tegnologias/javascript.png"
import reactImg from "../../assert/tegnologias/react.png"
import redux from "../../assert/tegnologias/redux.png"
import postgres from "../../assert/tegnologias/sql.png"
import express from "../../assert/tegnologias/express.png"
import style from './About.module.css';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import GoBackButton from '../GoBackButton/GoBackButton';


const About = () => {
    const techSkills = [
        { tech: 'Html', image: htmlImg }, 
        { tech: 'Css', image: cssImg }, 
        { tech: 'JavaScript', image: javascriptImg }, 
        { tech: 'React', image: reactImg }, 
        { tech: 'Redux', image: redux }, 
        { tech: 'Express', image: express }, 
        { tech: 'Postgres', image: postgres }
    ];
    
    return (
        <div className={style.aboutPadre}>

            <div className={style.buttonBack}>
                <GoBackButton/>
            </div>

            <h2  className={style.about}>Globe Gazers</h2>

            <div  className={style.spanText}>

                <div className={style.divSpan}>
                    <span>
                        Welcome to Glober Gazers, the ultimate destination for exploring information about countries from around the world. Whether you're a passionate traveler, a geography enthusiast, or simply curious about different cultures, Glober Gazers is here to satisfy your wanderlust and provide you with a wealth of country-related insights.
                    </span>
                </div>

                <div className={style.divSpan}>
                    <span>
                        Discover fascinating details about each country, including its capital, region, subregion, area, population, flag, and name. Our extensive database ensures that you have access to up-to-date and accurate information for a comprehensive understanding of any country you're interested in.
                    </span>
                </div>

                <div className={style.divSpan}>
                    <span>
                        But Glober Gazers is more than just a database of facts. It's an interactive platform that allows you to create and plan your own tourist activities. Whether you're dreaming of exploring the historic landmarks of Europe, embarking on a wildlife adventure in Africa, or diving into the rich cultural heritage of Asia, Glober Gazers empowers you to curate personalized travel experiences.
                    </span>
                </div>
                        
                <div className={style.divSpan}>
                    <span>
                        Select your desired countries, add them to your favorites, and tailor your itinerary based on your preferences. Create a bucket list of activities, from visiting iconic landmarks and trying local cuisines to engaging in thrilling outdoor adventures. With Glober Gazers, the world is your oyster, and the possibilities for exploration are endless.
                    </span>
                </div>

                <div className={style.divSpan}>
                    <span>
                        Our user-friendly search and filtering options make it effortless to find countries that match your criteria. Filter by name, population, or region to quickly narrow down your search and discover new destinations that captivate your imagination.
                    </span>
                </div>

                <div className={style.divSpan}>
                    <span>
                        Additionally, Glober Gazers provides in-depth country profiles, offering detailed insights into the history, culture, and attractions of each nation. Delve into captivating narratives, browse stunning photos, and learn about unique traditions that make each country truly special.
                    </span>
                </div>

                <div className={style.divSpan}>
                    <span>
                        Join the Glober Gazers community today and embark on a virtual journey around the globe. Expand your knowledge, fuel your wanderlust, and start planning your next adventure with us. Let Glober Gazers be your trusted companion in exploring the world, one country at a time.
                    </span>
                </div>

            </div>


            <h2 className={style.about}>About me</h2>

                <div className={style.spanText}>

                    <div className={style.divSpan}>
                        <span>Hello! I'm Elías Martínez, a 20-year-old Full-Stack Web Developer based in Buenos Aires, Argentina. I'm passionate about programming and excited to share my individual project with you.</span>
                    </div>

                    <div className={style.divSpan}>
                        <span>In my project, I focused on creating a platform that encompasses all countries around the world. Here, you can create tourist activities in any country, add countries to your favorites, and also add custom activities.</span>
                    </div>

                    <div className={style.divSpan}>
                        <span>This project represents an opportunity to put into practice everything I learned in the Henry bootcamp, using technologies such as React, Redux, PostgreSQL, Node.js, among others. I'm proud to say that this is my first website.</span>
                    </div>

                    <div className={style.divSpan}>
                        <span>I have put effort into designing an intuitive and appealing interface for users to enjoy while using my application. Every feature and functionality has been carefully developed and tested to provide the best possible experience.</span>
                    </div>

                </div>

            <h3 className={style.about}>A webpage created with:</h3>
                <ul className={style.unorderedList}> 
                {techSkills.map(skill => (
                <li className={style.listItem} key={skill}>{skill.tech}<img src={skill.image} alt={skill.tech} /></li>
                    ))}
            </ul>
            
            <h3 className={style.h3About}>My social media</h3>
            <div className={style.redesSociales}>
                    <a href="https://www.github.com/XliazZz" target="_blank" rel="noreferrer">
                        <FaGithub title="GitHub" className={style.icono} />
                    </a>

                    <a href="https://www.instagram.com/eliasx._" target="_blank" rel="noreferrer">
                        <FaInstagram title="Instagram" className={style.icono} />
                    </a>
                    <a href="https://www.linkedin.com/in/elias-martinez-040980246/" target="_blank" rel="noreferrer">
                        <FaLinkedin title="Linkedin" className={style.icono} />
                    </a>
            </div>

        </div>
    );
};

export default About;
