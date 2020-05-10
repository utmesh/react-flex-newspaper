import React from 'react';
import './Styles/newsPaper.css';
import PropTypes from 'prop-types';


export default function NewsPaper(props) {
    return (<>
        <h1>The News Times</h1>
        <section className='row'>
            <article className='story quarter'>
                <h2 className='storyTitle'>Student Learns CSS</h2>
                <p className='storyText'>{props.info}</p>
            </article>
            <article className='story Half'>
                <h2 className='storyTitle'>BREAKING: Puppies Are Adorable
</h2>
                <img src={props.puppy} alt='adorable dog'></img>
                <p className='storyText'>{props.info1}</p>
            </article>
            <article className='story quarter'>
                <h2 className='storyTitle'>CSS Is Apparently a Thing</h2>
                <p className='storyText'>{props.info}</p>
            </article>
        </section>
        <section className='row'>
            <article className='story quarter'>
                <h2 className='storyTitle'>Boys like turtles</h2>
                <p className='storyText'>{props.info}</p>
            </article>
            <ul className='navList'>
                <li className='navItem'>
                    <a href= '#'>Politics</a></li>
                <li className='navItem'>
                    <a href= '#'>Technology</a></li>
                <li className='navItem'>
                    <a href= '#'>Local</a></li>
                <li className='navItem'>
                    <a href= '#'>Opinion</a></li>
                <li className='navItem'>
                    <a href= '#'>Sports</a></li>
            </ul>
        </section>

    </>
    )

}

NewsPaper.propTypes = {
    info: PropTypes.string,
    puppy: PropTypes.string,
    info1: PropTypes.string
}