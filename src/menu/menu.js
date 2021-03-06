function startMenu(core) {
  const menu = new Scene()
  const menuBack = setSprite(core, '../image/scene/menu.png', 320, 240)
  const selector = menuSelector(core, {0: '初めから', 1: '続きから', 2: 'ゲームを終了'})
  selector.y = 75
  menu.addChild(menuBack)
  menu.addChild(selector)
  return menu
}

function menuSelector(core, object) {
  const group = new Scene()
  const sprite = new Sprite(320, 160)
  sprite.image = core.assets['../image/texture/message.png']
  sprite.scale(0.3, 0.5)
  group.addChild(sprite)
  for (let k in object) {
    const text = addText(object[k], 10, 54 + 18 * k)
    text.textAlign = "center"
    group.addChild(text)
  }
  const text = addText('▶︎　　　　　　　　　　　　　　　　　　◀︎', 10, 54)
  text.textAlign = "center"
  text.addEventListener('enterframe', function() {
    if (core.input.down) {
      if (text.y >= 90) {
        text.y = 54
      } else {
        text.y += 18
      }
    }
    if (core.input.up) {
      if (text.y <= 54) {
        text.y = 90
      } else {
        text.y -= 18
      }
    }
  })
  group.addChild(text)
  return group
}
