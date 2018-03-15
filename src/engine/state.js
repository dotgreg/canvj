let startingTime = Date.now()

export let state = {
  bg: 0x000000,
  // bg: 0x0ff3322,
  canvas: {},
  app: {},
  startingTime: startingTime,
  currentTime: () => (Date.now() - startingTime) / 1000,
  width: window.innerWidth,
  height: window.innerHeight
}
