export default function convertHourToMinutes(time: string) {
  // Pegar cada dígito da hora de string pra número

  const [hour, minutes] = time.split(':').map(Number)
  const timeInMinutes = (hour * 60) + minutes;

  return timeInMinutes;
}