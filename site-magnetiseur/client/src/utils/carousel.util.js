import { useState, useEffect, useRef } from "react";

export const useCarousel = (temoignages) => {
  const [scrollableMessages, setScrollableMessages] = useState([]);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);
  const [showIcon, setShowIcon] = useState(null);
  const messageRef = useRef([]);

  useEffect(() => {
    const checkOverflow = () => {
      const threshold = 100;
      const scrollableList = temoignages.map((_, index) => {
        const messageElement = messageRef.current[index];
        return messageElement && messageElement.scrollHeight > threshold;
      });
      setScrollableMessages(scrollableList);
    };

    checkOverflow();
  }, [temoignages]);

  const toggleAutoPlay = () => {
    const newAutoPlayStatus = !autoPlayEnabled;
    setAutoPlayEnabled(newAutoPlayStatus);
    setShowIcon(newAutoPlayStatus ? "play" : "pause");
    setTimeout(() => setShowIcon(null), 1000);
  };

  const handlePlay = () => {
    setAutoPlayEnabled(true);
    setShowIcon("play");
    setTimeout(() => setShowIcon(null), 1000);
  };

  const handlePause = () => {
    setAutoPlayEnabled(false);
    setShowIcon("pause");
    setTimeout(() => setShowIcon(null), 1000);
  };

  return {
    messageRef,
    scrollableMessages,
    autoPlayEnabled,
    showIcon,
    toggleAutoPlay,
    handlePlay,
    handlePause
  };
};
