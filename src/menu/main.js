enchant()
document.write("<script type='text/javascript' src='./menu/menu.js'></script>")

window.onload = function () {
  const core = new Core(320, 240)
  setPreload(core, ['scene/menu.png', 'texture/message.png', 'texture/interior1.png', 'texture/char_p03.png'])
  core.fps = 10
  core.onload = function() {
    const menu = startMenu(core)
    core.currentScene.addChild(menu)
    const selector = menu.lastChild.lastChild
    document.addEventListener('keydown', function(e) {
      if (e.keyCode === 13) {
        switch(selector.y) {
          case 54:
            chapter1(core)
            break
          case 72:
            console.log('続きから')
            break
          case 90:
            window.open('about:blank','_self').close()
            break
        }
      }
    })
  }
  core.start()
}
