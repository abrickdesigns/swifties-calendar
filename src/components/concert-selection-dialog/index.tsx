import { Button, Modal, Row, Text } from "@nextui-org/react";
import allConcerts, { Concert } from "../../assets/concerts";
import { isInPast } from "../../utils/dates";
import CountryFlagAvatar from "../country-flag-avatar";
import './style.css';

interface ConcertSelectionDialogProps {
    show: boolean;
    closable: boolean;
    onClose: () => void;
    onConcertSelect: (concert: Concert) => void;
}

const ConcertSelectionDialog: React.FC<ConcertSelectionDialogProps> = ({ show, closable, onClose, onConcertSelect }) => {

    const upcomingConcerts =  () => {
        const concerts: Record<string, Concert[]> = {};
        Object.entries(allConcerts).forEach(([country, countryConcerts]) => {
            concerts[country] = countryConcerts.filter(concert => !isInPast(concert.date));
        })
        return concerts;
    }

    return (
        <Modal
            open={show}
            blur
            onClose={onClose}
            preventClose={!closable}
            css={{ margin: '0 5vw' }}
        >
            <Modal.Header>
                <Text id="modal-title" size={18}>
                    {
                        !closable && <Text weight="bold" span style={{ marginRight: '7px' }}>
                            Hey swiftie!
                        </Text>
                    }

                    Choose your concert
                </Text>
            </Modal.Header>
            <Modal.Body>
                {Object.entries(upcomingConcerts()).map(([country, concerts]) => (
                    <div className="country" key={country}>
                        <Text size={16} weight="bold" style={{ marginBottom: '5px' }}>
                            {country}
                        </Text>
                        {
                            concerts.map((concert, index) => (
                                <Button className="concert" flat color="secondary" onPress={() => onConcertSelect(concert)} key={`${country}-${index}`}>
                                    <Row align="center">
                                        <CountryFlagAvatar country={concert.country} />
                                        <Text size={16}>
                                            {concert.city}
                                        </Text>
                                    </Row>
                                    <Text size={14} style={{ opacity: 0.5, justifySelf: 'end' }} weight="medium">
                                        {concert.date.toLocaleDateString()}
                                    </Text>
                                </Button>
                            ))
                        }

                    </div>
                ))}
            </Modal.Body>
            {closable && <Modal.Footer>
                <Button auto flat color="secondary" onPress={(e) => onClose()}>
                    Close
                </Button>
            </Modal.Footer>}

        </Modal>
    );
};

export default ConcertSelectionDialog;
