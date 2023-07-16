import { Concert } from "../assets/concerts";

const CONCERT_STORAGE_KEY = 'recent-stored-concert';

export const getRecentConcert = (): Concert | null => {
    const storedConcert = localStorage.getItem(CONCERT_STORAGE_KEY);
    if (storedConcert === null) return null;
    const parsedConcert = JSON.parse(storedConcert);
    parsedConcert.date = new Date(parsedConcert.date);

    return parsedConcert;
}

export const saveRecentConcert = (concert: Concert) => {
    localStorage.setItem(CONCERT_STORAGE_KEY, JSON.stringify(concert));
}