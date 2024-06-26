export const formatTimestampToDateWithHours = (timestamp: number) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "UTC",
  };

  const dateTimeFormat = new Intl.DateTimeFormat("fr-FR", options);
  const date = new Date(timestamp);
  return dateTimeFormat.format(date);
};

export const formatTimestampToDate = (timestamp: number) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "UTC",
  };

  const dateTimeFormat = new Intl.DateTimeFormat("fr-FR", options);
  const date = new Date(timestamp);
  return dateTimeFormat.format(date);
};

export const formatTimestampToHour = (timestamp: number) => {
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  };

  const dateTimeFormat = new Intl.DateTimeFormat("fr-FR", options);
  const date = new Date(timestamp);
  return dateTimeFormat.format(date);
};
