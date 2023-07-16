import { FLAG_BY_COUNTRY } from "../../assets/concerts";
import './style.css';

interface CountryFlagAvatarProps {
    country: string;
}

const CountryFlagAvatar: React.FC<CountryFlagAvatarProps> = ({ country }) => {
    return (
        <img
            className="country-flag"
            src={FLAG_BY_COUNTRY[country] ?? ''}
            alt={`${country}-flag`}
        />
    );
};

export default CountryFlagAvatar;
