import { Text, Tooltip } from '@nextui-org/react';
import JSConfetti from 'js-confetti';
import { useEffect, useMemo, useState } from 'react';
import { Concert } from '../assets/concerts';
import { daysBetween } from '../utils/dates';
import { getRecentConcert, saveRecentConcert } from '../utils/storage';
import './App.css';
import ConcertSelectionDialog from './concert-selection-dialog';
import CountryFlagAvatar from './country-flag-avatar';

const App = () => {
  const [selectedConcert, setSelectedConcert] = useState<Concert | null>(null);
  const [showCountrySelectionModal, setShowCountrySelectionModal] = useState(false);
  const [confettiInstance, setConfettiInstance] = useState<JSConfetti>();
  const [daysTransform, setDaysTransform] = useState<string>('scale(1)');
  const [isFirstVisit, setisFirstVisit] = useState(false);
  const [showConfettiTooltip, setShowConfettiTooltip] = useState(false);

  const noConcertSelected = selectedConcert === null;

  const daysUntilConcert = useMemo(() => {
    return daysBetween(new Date(), selectedConcert?.date || new Date())
  }, [selectedConcert]);

  const doConfetti = async () => {
    confettiInstance?.addConfetti({ emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'], emojiSize: 60 });
  }

  const setConfettiSettings = () => {
    const jsConfetti = new JSConfetti();
    setConfettiInstance(jsConfetti);

    const daysDiv = document.getElementsByClassName('days-until');
    if (daysDiv) {
      daysDiv[0].addEventListener("click", function () {
        setDaysTransform("scale(1.2)");
        setTimeout(() => {
          setDaysTransform("scale(1)");
        }, 100)
      });
    }
  };

  const contact = () => {
    window.open('instagram://user?username=amitbrickman');
  }

  const handleFirstVisit = () => {
    setisFirstVisit(true);
    setShowConfettiTooltip(true);
  }

  useEffect(() => {
    const recentConcert = getRecentConcert();
    if (recentConcert) setSelectedConcert(recentConcert);
    else {
      setShowCountrySelectionModal(true);
      handleFirstVisit();
    }

    setConfettiSettings();
  }, []);

  useEffect(() => {
    if (selectedConcert) {
      saveRecentConcert(selectedConcert);
      doConfetti();
    }
  }, [selectedConcert]);

  return (
    <div className="main">
      <div className='credits' onClick={contact}>
        <Text size={14} weight="bold" style={{ whiteSpace: 'pre-wrap' }}>
          fan made  |  @amitbrickman
        </Text>
      </div>
      <div className='country-tag' onClick={() => setShowCountrySelectionModal(true)}>
        {selectedConcert && <CountryFlagAvatar country={selectedConcert?.country || 'Austria'} />}
        <Text size={17} weight="bold">
          {selectedConcert?.city || 'Select your concert'}
        </Text>
      </div>
      <div className='the-eras-tour-title'>THE ERAS TOUR</div>
      <div className='taylor-swift-caption'>Taylor Swift</div>
      <div style={{ position: 'relative', width: '100%', textAlign: 'center' }}>
        <Tooltip
          content={"Tap here for confetti!"}
          color="secondary"
          style={{ width: "100%" }}
          offset={-10}
          visible={isFirstVisit && showConfettiTooltip}
          isDisabled={!isFirstVisit || !showConfettiTooltip}
        >
          <div onClick={() => { doConfetti(); setShowConfettiTooltip(false) }} className='days-until' style={{ transform: daysTransform }}>
            {daysUntilConcert}
          </div>
        </Tooltip>
      </div>


      <div>days to go</div>
      {/* <img className='floating-tay' src={floatingTaylor} /> */}
      <ConcertSelectionDialog
        show={showCountrySelectionModal}
        closable={!noConcertSelected}
        onClose={() => setShowCountrySelectionModal(false)}
        onConcertSelect={(concert) => { setSelectedConcert(concert); setShowCountrySelectionModal(false) }} />
    </div>
  );
}

export default App;
