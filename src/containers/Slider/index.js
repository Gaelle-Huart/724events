import React, { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

/* Changements :
 * @import React pour utiliser .Fragment
 * @const nextCard ajout de -1 dans setIndex, l'index 1 = 0
 * @function displayMonth ajoutée pour gérer l'affichage des mois
 * @key ajout de keys pour les divs conteneur
 * @alt ajout d'alts pour les divs conteneur
 * @input ajout de key et alt, correction du checked ("idx" est devenu "index")
 */

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
  );
  useEffect(() => {
    const nextCard = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex < byDateDesc.length -1 ? prevIndex +1 : 0
      );
    }, 5000);
    return () => clearInterval(nextCard);
  }, [byDateDesc]);
  function displayMonth(date) {
    const d = new Date(date)
    const monthDate = getMonth(d)
    return monthDate
  };
  return (
    <div key="0" alt="0" className="SlideCardList">
      {byDateDesc?.map((focus, idx) => (
        // React.Fragment permet de grouper plusieurs éléments sans créer de div supplémentaire
        <React.Fragment key={focus.id}>
          <div
            key={`${focus.id} SlideCard`}
            alt={`${focus.id} SlideCard`}
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={focus.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{focus.title}</h3>
                <p>{focus.description}</p>
                <div>{displayMonth(focus.date)}</div>
              </div>
            </div>
          </div>
          <div 
            key={`${focus.id} pagination`}
            alt={`${focus.id} pagination`}
            className="SlideCard__paginationContainer"
          >
            <div className="SlideCard__pagination">
              {byDateDesc.map((focusRadio, radioIdx) => (
                <input
                  key={focusRadio.id}
                  alt={focusRadio.id}
                  type="radio"
                  name="radio-button"
                  checked={index === radioIdx}
                />
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Slider;
