import { Text, Tooltip } from '@nextui-org/react';
import JSConfetti from 'js-confetti';
import { useEffect, useMemo, useState } from 'react';
import { Concert } from '../assets/concerts';
import ShareIcon from '../assets/images/whatsapp-logo.png';
import { daysBetween } from '../utils/dates';
import { getRecentConcert, saveRecentConcert } from '../utils/storage';
import ThirteenDialog from './13-dialog';
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
  const [showThirteenDialog, setShowThirteenDialog] = useState(false);
  const [tapCount, setTapCount] = useState(0);

  const noConcertSelected = selectedConcert === null;

  const daysUntilConcert = useMemo(() => {
    return daysBetween(new Date(), selectedConcert?.date || new Date())
  }, [selectedConcert]);

  const doConfetti = async () => {
    //@ts-ignore
    window.gtag('event', 'do-confetti', {});
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
    //@ts-ignore
    window.gtag('event', 'contact', {});
    window.open('instagram://user?username=amitbrickman');
  }

  const handleFirstVisit = () => {
    setisFirstVisit(true);
    setShowConfettiTooltip(true);
  }

  const share = () => {
    //@ts-ignore
    window.gtag('event', 'share-to-whatsapp', {});
  }

  const shareText = `Are you ready for it? We’ve got ${daysUntilConcert} days left till Taylor Swift concert at ${selectedConcert?.city}. ❤️‍🔥🎤👱🏻‍♀️ https://swiftie.club`

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
      //@ts-ignore
      window.gtag('event', 'concert-choose', {
       ...selectedConcert
      });
      doConfetti();
      setTapCount(0);
    }
  }, [selectedConcert]);

  useEffect(() => {
    if (tapCount === 13) {
      //@ts-ignore
      window.gtag('event', 'open-13-dialog', {});
      setShowThirteenDialog(true)
    }
  }, [tapCount])

  return (
    <div className="main">
      <div className='credits' onClick={contact}>
        <Text size={15} weight="bold" style={{ whiteSpace: 'pre-wrap' }}>
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
          offset={30}
          visible={isFirstVisit && showConfettiTooltip}
          isDisabled={!isFirstVisit || !showConfettiTooltip}
        >
          <div onClick={() => { doConfetti(); setShowConfettiTooltip(false); setTapCount(count => count + 1) }} className='days-until' style={{ transform: daysTransform }}>
            {daysUntilConcert}
          </div>
        </Tooltip>
      </div>
      <Text size={23} weight="bold" color='white' style={{ marginTop: "-15px" }}>
        days to go
      </Text>
      <a href={`https://wa.me/?text=${shareText}`} className='share-button' onClick={share}>
        <img className='share-icon' src={ShareIcon} alt="whatsapp icon" />
        <Text size={16} style={{ color: '#cecece' }}>
          Share
        </Text>
      </a>
      <ConcertSelectionDialog
        show={showCountrySelectionModal}
        closable={!noConcertSelected}
        onClose={() => setShowCountrySelectionModal(false)}
        onConcertSelect={(concert) => { setSelectedConcert(concert); setShowCountrySelectionModal(false) }} />
      <ThirteenDialog show={showThirteenDialog} onClose={() => { setShowThirteenDialog(false) }} />
    </div>
  );
}

export default App;
