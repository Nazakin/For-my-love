import { useState } from 'react';
import css from './App.module.css'

export const App = () => {
  const [answer, setAnswer] = useState(null)
  const [sadImage, setSadImage] = useState(false)
  const handleAnswer = (e) => {
    setAnswer(e.target.value)
  }
  const handleSubmit = () => {
    if (answer === 'ні' || answer === 'Ні') {
      alert("Чому?")
    } else if (answer === 'так' || answer === 'Так'){
      alert ('І я тебе кохаю, зай)))))')
    } else if (!answer) {
      alert("Може заповниш?)")
    } else {
      alert("У тебе два запропоновані варінати!!! НІ ГРАМОМ БІЛЬШЕ!!")
    }
  }
  return (
    <div className={css.container}>
      <h2>Любиш мене? Так чи ні?</h2>
      <input placeholder='Пиши сюди блін' value={answer} onChange={handleAnswer} className={css.input} />
      <button type='button' onClick={handleSubmit} className={css.button}>ТИЦЬ</button>
    </div>
  );
};
