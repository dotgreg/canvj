export let center = (element) => {
  element.position.x = (window.innerWidth / 2) - (element.width / 2)
  element.position.y = window.innerHeight / 2 - (element.height / 2)
}
