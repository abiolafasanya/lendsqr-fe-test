import React, { useEffect, useRef, useState } from 'react';
import styles from './styles/info.module.scss';
import InfoCard from './InfoCard';
import { dot } from '../utils/images';

const Info = () => {
  const infoRef = useRef<HTMLSpanElement>(null);
  const [showInfoCard, setShowInfoCard] = useState(false);

  useEffect(() => {
    function handleEscapeKey(event: any) {
      if (event.keyCode === 27) {
        setShowInfoCard(false);
      }
    }

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);


  return (
    <span
      className={styles.Info}
      onClick={() => setShowInfoCard((bool) => !bool)}
      onKeyDown={() => setShowInfoCard(false)}

    >
      <span>
        <img src={dot} alt="dot" />
      </span>
      {showInfoCard && <InfoCard />}
    </span>
  );
};

export default Info;
