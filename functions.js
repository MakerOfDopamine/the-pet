const ge = a => document.getElementById(a)

function update() {
  ge("powerlvl").innerHTML = player.points.toFixed(3)
}

function buyUpg1() {
  if (player.points.gt(10) && player.upgrades.includes("u11")) {
    player.points = player.points.minus(10)
    player.click.mult = player.click.mult.times(2)
    player.upgrades.push("u11")
  }
}
