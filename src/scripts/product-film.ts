export function bindProductFilm(video: HTMLVideoElement) {
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  video.removeAttribute("autoplay");
  video.pause();
  video.controls = true;
}
