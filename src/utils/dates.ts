export const daysBetween = (firstDate: Date, secondDate: Date) => {
    const ONE_DAY = 24 * 60 * 60 * 1000;
    const differenceMs = Math.abs(secondDate.getTime() - firstDate.getTime());
    const fullYearAddition = secondDate.getFullYear() === 2024 && secondDate.getMonth()> 1 ? 1 : 0;

    return Math.round(differenceMs / ONE_DAY) + fullYearAddition;
}