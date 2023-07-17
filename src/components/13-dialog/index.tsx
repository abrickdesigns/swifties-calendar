import { Button, Modal, Text } from "@nextui-org/react";
import ThirteenGif from '../../assets/images/13.gif';
import './style.css';

interface ThirteenDialogProps {
    show: boolean;
    onClose: () => void;
}

const ThirteenDialog: React.FC<ThirteenDialogProps> = ({ show, onClose }) => {
    return (
        <Modal
            open={show}
            blur
            onClose={onClose}
            css={{ margin: '0 5vw' }}
        >
            <Modal.Header>
                <Text id="modal-title" size={18}>
                    Tapped exactly 13 times? come on..
                </Text>
            </Modal.Header>
            <Modal.Body>
                <img src={ThirteenGif} alt="13-gif"/>
            </Modal.Body>
            <Modal.Footer>
                <Button auto flat color="secondary" onPress={(e) => onClose()}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ThirteenDialog;
