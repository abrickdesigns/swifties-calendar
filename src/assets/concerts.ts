import AustriaFlag from './images/flags/austria.png';
import MexicoFlag from './images/flags/mexico.png';
import ArgentinaFlag from './images/flags/argentina.png'
import BrazilFlag from './images/flags/brazil.png'
import AustraliaFlag from './images/flags/australia.png'
import SingaporeFlag from './images/flags/singapore.png'
import JapanFlag from './images/flags/japan.png'
import FranceFlag from './images/flags/france.png'
import SwedenFlag from './images/flags/sweden.png'
import PortugalFlag from './images/flags/portugal.png'
import SpainFlag from './images/flags/spain.png'
import IrelandFlag from './images/flags/ireland.png'
import NetherlandsFlag from './images/flags/netherlands.png'
import SwitzerlandFlag from './images/flags/switzerland.png'
import ItalyFlag from './images/flags/italy.png'
import GermanyFlag from './images/flags/germany.png'
import PolandFlag from './images/flags/poland.png'
import UKFlag from './images/flags/uk.png'

export interface Concert {
    city: string;
    country: string;
    date: Date;
}

const allConcerts: Record<string, Concert[]> =
{
    'Mexico': [
        {
            country: 'Mexico',
            city: 'Mexico City',
            date: new Date('08/24/2023')
        },
        {
            country: 'Mexico',
            city: 'Mexico City',
            date: new Date('08/25/2023')
        },
        {
            country: 'Mexico',
            city: 'Mexico City',
            date: new Date('08/26/2023')
        },
        {
            country: 'Mexico',
            city: 'Mexico City',
            date: new Date('08/27/2023')
        },
    ],
    'Argentina': [
        {
            country: 'Argentina',
            city: 'Buenos Aires',
            date: new Date('11/09/2023')
        },
        {
            country: 'Argentina',
            city: 'Buenos Aires',
            date: new Date('11/10/2023')
        },
        {
            country: 'Argentina',
            city: 'Buenos Aires',
            date: new Date('11/x1/2023')
        },
        {
            country: 'Argentina',
            city: 'Buenos Aires',
            date: new Date('08/27/2023')
        },
    ],
    'Brazil': [
        {
            country: 'Brazil',
            city: 'Rio de Janeiro',
            date: new Date('11/18/2023')
        },
        {
            country: 'Brazil',
            city: 'Rio de Janeiro',
            date: new Date('11/19/2023')
        },
        {
            country: 'Brazil',
            city: 'São Paulo',
            date: new Date('11/24/2023')
        },
        {
            country: 'Brazil',
            city: 'São Paulo',
            date: new Date('11/25/2023')
        },
        {
            country: 'Brazil',
            city: 'São Paulo',
            date: new Date('11/26/2023')
        },
    ],
    'Japan': [
        {
            country: 'Japan',
            city: 'Tokyo',
            date: new Date('02/07/2024')
        },
        {
            country: 'Japan',
            city: 'Tokyo',
            date: new Date('02/08/2024')
        },
        {
            country: 'Japan',
            city: 'Tokyo',
            date: new Date('02/09/2024')
        },
        {
            country: 'Japan',
            city: 'Tokyo',
            date: new Date('02/10/2024')
        },
    ],
    'Australia': [
        {
            country: 'Australia',
            city: 'Melbourne',
            date: new Date('02/16/2024')
        },
        {
            country: 'Australia',
            city: 'Melbourne',
            date: new Date('02/17/2024')
        },
        {
            country: 'Australia',
            city: 'Sydney',
            date: new Date('02/23/2024')
        },
        {
            country: 'Australia',
            city: 'Sydney',
            date: new Date('02/24/2024')
        },
        {
            country: 'Australia',
            city: 'Sydney',
            date: new Date('02/25/2024')
        },
        {
            country: 'Australia',
            city: 'Sydney',
            date: new Date('02/26/2024')
        },
    ],
    'Singapore': [
        {
            country: 'Singapore',
            city: 'Singapore',
            date: new Date('03/02/2024')
        },
        {
            country: 'Singapore',
            city: 'Singapore',
            date: new Date('03/03/2024')
        },
        {
            country: 'Singapore',
            city: 'Singapore',
            date: new Date('03/04/2024')
        },
        {
            country: 'Singapore',
            city: 'Singapore',
            date: new Date('03/07/2024')
        },
        {
            country: 'Singapore',
            city: 'Singapore',
            date: new Date('03/08/2024')
        },
        {
            country: 'Singapore',
            city: 'Singapore',
            date: new Date('03/09/2024')
        },
    ],
    'France': [
        {
            country: 'France',
            city: 'Paris',
            date: new Date('05/09/2024')
        },
        {
            country: 'France',
            city: 'Paris',
            date: new Date('05/10/2024')
        },
        {
            country: 'France',
            city: 'Paris',
            date: new Date('05/11/2024')
        },
        {
            country: 'France',
            city: 'Paris',
            date: new Date('05/12/2024')
        },
        {
            country: 'France',
            city: 'Lyon',
            date: new Date('06/02/2024')
        },
        {
            country: 'France',
            city: 'Lyon',
            date: new Date('06/03/2024')
        },
    ],
    'Sweden': [
        {
            country: 'Sweden',
            city: 'Stockholm',
            date: new Date('05/17/2024')
        },
        {
            country: 'Sweden',
            city: 'Stockholm',
            date: new Date('05/18/2024')
        },
        {
            country: 'Sweden',
            city: 'Stockholm',
            date: new Date('05/19/2024')
        },
    ],
    'Portugal': [
        {
            country: 'Portugal',
            city: 'Lisbon',
            date: new Date('05/24/2024')
        },
        {
            country: 'Portugal',
            city: 'Lisbon',
            date: new Date('05/25/2024')
        },
    ],
    'Spain': [
        {
            country: 'Spain',
            city: 'Madrid',
            date: new Date('05/30/2024')
        },
    ],
    'United Kingdom': [
        {
            country: 'United Kingdom',
            city: 'Edinburgh',
            date: new Date('06/08/2024')
        },
        {
            country: 'United Kingdom',
            city: 'Edinburgh',
            date: new Date('06/09/2024')
        },
        {
            country: 'United Kingdom',
            city: 'Liverpool',
            date: new Date('06/13/2024')
        },
        {
            country: 'United Kingdom',
            city: 'Liverpool',
            date: new Date('06/14/2024')
        },
        {
            country: 'United Kingdom',
            city: 'Liverpool',
            date: new Date('06/15/2024')
        },
        {
            country: 'United Kingdom',
            city: 'Cardiff',
            date: new Date('06/18/2024')
        },
        {
            country: 'United Kingdom',
            city: 'London',
            date: new Date('06/21/2024')
        },
        {
            country: 'United Kingdom',
            city: 'London',
            date: new Date('06/22/2024')
        },
        {
            country: 'United Kingdom',
            city: 'London',
            date: new Date('06/23/2024')
        },
        {
            country: 'United Kingdom',
            city: 'London',
            date: new Date('08/15/2024')
        },
        {
            country: 'United Kingdom',
            city: 'London',
            date: new Date('08/16/2024')
        },
        {
            country: 'United Kingdom',
            city: 'London',
            date: new Date('08/17/2024')
        },
    ],
    'Ireland': [
        {
            country: 'Ireland',
            city: 'Dublin',
            date: new Date('06/28/2024')
        },
        {
            country: 'Ireland',
            city: 'Dublin',
            date: new Date('06/29/2024')
        },
        {
            country: 'Ireland',
            city: 'Dublin',
            date: new Date('06/30/2024')
        },
    ],
    'Netherlands': [
        {
            country: 'Netherlands',
            city: 'Amsterdam',
            date: new Date('07/04/2024')
        },
        {
            country: 'Netherlands',
            city: 'Amsterdam',
            date: new Date('07/05/2024')
        },
        {
            country: 'Netherlands',
            city: 'Amsterdam',
            date: new Date('07/06/2024')
        },
    ],
    'Switzerland': [
        {
            country: 'Switzerland',
            city: 'Zürich',
            date: new Date('07/09/2024')
        },
        {
            country: 'Switzerland',
            city: 'Zürich',
            date: new Date('07/10/2024')
        },
    ],
    'Italy': [
        {
            country: 'Italy',
            city: 'Milan',
            date: new Date('07/13/2024')
        },
        {
            country: 'Italy',
            city: 'Milan',
            date: new Date('07/14/2024')
        },
    ],
    'Germany': [
        {
            country: 'Germany',
            city: 'Gelsenkirchen',
            date: new Date('07/17/2024')
        },
        {
            country: 'Germany',
            city: 'Gelsenkirchen',
            date: new Date('07/18/2024')
        },
        {
            country: 'Germany',
            city: 'Gelsenkirchen',
            date: new Date('07/19/2024')
        },
        {
            country: 'Germany',
            city: 'Hamburg',
            date: new Date('07/23/2024')
        },
        {
            country: 'Germany',
            city: 'Hamburg',
            date: new Date('07/24/2024')
        },
        {
            country: 'Germany',
            city: 'Munich',
            date: new Date('07/27/2024')
        },
        {
            country: 'Germany',
            city: 'Munich',
            date: new Date('07/28/2024')
        },
    ],
    'Poland': [
        {
            country: 'Poland',
            city: 'Warsaw',
            date: new Date('08/01/2024')
        },
        {
            country: 'Poland',
            city: 'Warsaw',
            date: new Date('08/02/2024')
        },
        {
            country: 'Poland',
            city: 'Warsaw',
            date: new Date('08/03/2024')
        },
    ],
    'Austria': [
        {
            country: 'Austria',
            city: 'Vienna',
            date: new Date('08/08/2024')
        },
        {
            country: 'Austria',
            city: 'Vienna',
            date: new Date('08/09/2024')
        },
        {
            country: 'Austria',
            city: 'Vienna',
            date: new Date('08/10/2024')
        },
    ],
};

export const FLAG_BY_COUNTRY: Record<string, string> = {
    'Austria': AustriaFlag,
    'United Kingdom': UKFlag,
    'Mexico': MexicoFlag,
    'Argentina': ArgentinaFlag,
    'Brazil': BrazilFlag,
    'Australia': AustraliaFlag,
    'Singapore': SingaporeFlag,
    'Japan': JapanFlag,
    'France': FranceFlag,
    'Sweden': SwedenFlag,
    'Portugal': PortugalFlag,
    'Spain': SpainFlag,
    'Ireland':IrelandFlag,
    'Netherlands':NetherlandsFlag,
    'Switzerland':SwitzerlandFlag,
    'Italy':ItalyFlag,
    'Germany':GermanyFlag,
    'Poland':PolandFlag,
}

export default allConcerts;