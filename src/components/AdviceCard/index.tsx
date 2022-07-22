import React, { useEffect, useState } from "react";
import "./style.css";
import RandomButton from "../RandomButton/index";
import DividerDesktop from "../DividerDesktop/index";
import DividerMobile from "../DividerMobile/index";
import { handleRandomButton } from "../../../src/services/fetchAdvices";

export default function AdviceCard() {
  const [randomButton, setRandomButton] = useState(false);
  const [info, setInfo] = useState({ advice: "Working on it", id: 0 });

  useEffect(() => {
    handleRandomButton(setRandomButton, setInfo);
  }, []);

  return (
    <>

      <div className='advice-card__container'>
        <div className='advice-card__item'>
          <div className='advice-card__header'>
            <h1 className='advice-card__title' role='advice-number'>
              ADVICE #{info.id}
            </h1>
          </div>
          <div className='advice-card__body'>
            <p className='advice-card__body-text' role='advice'>
              "{info.advice}"
            </p>
          </div>
          <div className='advice-card__separation-line'>
            <DividerDesktop />
            <DividerMobile />
          </div>
          <button
            role='change-advice'
            className='advice-card__random-btn'
            onClick={() => handleRandomButton(setRandomButton, setInfo)}
          >
            <RandomButton className={randomButton ? "active" : ""} />
          </button>
        </div>
      </div>
      <footer className='attribution'>
        Challenge by
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db'
        >
          Frontend Mentor
        </a>
        . Coded by
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/Georgeb779'
        >
          Georgeb779
        </a>
        .
      </footer>
    </>
  );
}
