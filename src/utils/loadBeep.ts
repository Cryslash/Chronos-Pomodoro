import bellFinish from '../assets/audios/bell-finish.mp3';

export function loadBeep() {
  const audio = new Audio(bellFinish);
  audio.load();

  return () => {
    audio.currentTime = 0;
    audio.play().catch(error => console.log('Erro ao reproduzir áudio', error));
  };
}
