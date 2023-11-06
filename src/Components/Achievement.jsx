import { useState } from "react";

function Achievement({ title, skills, description, isOpen, onAchievementClick }) {
    // const [isOpen, setIsOpen] = useState(false);

    function toggleCard() {
        onAchievementClick();
    }

    return (
        <article className={`card ${isOpen ? 'open' : ''}`} onClick={toggleCard}>
            {/* <img src='http://i.harperapps.com/covers/9780008108298/y450-293.jpg' class='book'> */}
            <div className='info'>
                <div className='title'>{title}</div>
                <div className='description'>{description}</div>
                <div className='skills'>{skills}</div>
                <div className='hidden bottom summary'></div>
            </div>
            <div className='group'>
                <div className='members'>
                    <span className='current'>Accompli <i class="fa-solid fa-medal"></i></span>
                </div>
                <div className='hidden bottom'>
                    <button className='simple'>Lien GitHub <i class="fa-brands fa-github"></i></button>
                </div>
            </div>
        </article>
    );
}

export default Achievement;
