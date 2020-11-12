const O = a => OmegaNum(a)

var player = {
  points: O(0),
  click: {
    base: O(1),
    mult: O(1),
    norm: O(0)
  },
  upgrades: [],
  tickStart: Date.now(),
  lastTick: Date.now(),
  timePlayed: 0
}

setInterval(function() {
  var diff = Date.now() - player.lastTick
  player.lastTick = Date.now()
  player.timePlayed = Date.now() - player.tickStart
  //console.log(O(diff / 1e3).plus(player.click.base).sub(1).times(player.click.mult).plus(player.click.norm).toString())
  player.points = player.points.plus(O(diff / 1e3).plus(player.click.base).sub(1).times(player.click.mult).plus(player.click.norm))
  update()
})
