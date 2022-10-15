export const dateFormat = (date: Date) => {
  const dateFormatted = Intl
    .DateTimeFormat('pt-br', { day: '2-digit', month: '2-digit', year: '2-digit' })
    .format(new Date(String(date)))
  return dateFormatted;
}