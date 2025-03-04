export const formatDateToUTC = (date: Date): Date => {
  const parsedDate = new Date(date);
  const zoneDate = new Date(
    parsedDate.getUTCFullYear(),
    parsedDate.getUTCMonth(),
    parsedDate.getUTCDate()
  );

  return zoneDate;
};
