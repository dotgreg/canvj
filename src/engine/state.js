let startingTime = Date.now()

export let state = {
  canvas: {},
  app: {},
  startingTime: startingTime,
  currentTime: () => (Date.now() - startingTime) / 1000
}
