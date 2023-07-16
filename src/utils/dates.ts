export const daysBetween = (firstDate: Date, secondDate: Date) => {
    const ONE_DAY = 24 * 60 * 60 * 1000;

    const differenceMs = Math.abs(secondDate.getTime() - firstDate.getTime());

    return Math.round(differenceMs / ONE_DAY);
}