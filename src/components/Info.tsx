import React, { useEffect, useRef, useState } from 'react';
import styles from './styles/info.module.scss';
import InfoCard from './InfoCard';
import { dot } from '../utils/images';

const Info: React.FC<{id: string}>  = ({id}) => {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const [showInfoCard, setShowInfoCard] = useState(false);

  useEffect(() => {
    function handleEscapeKey(event: any) {
      if (event.keyCode === 27) {
        setShowInfoCard(false);
      }
    }

    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event?.target)) {
        setShowInfoCard(false);
      }
    }

    document.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [, wrapperRef]);


  return (
    <span
      className={styles.Info}
      onClick={() => setShowInfoCard((bool) => !bool)}
      onKeyDown={() => setShowInfoCard(false)}
      ref={wrapperRef}
    >
      <span>
        <img src={dot} alt="dot" />
      </span>
      {showInfoCard && <InfoCard id={id} />}
    </span>
  );
};

export default Info;
