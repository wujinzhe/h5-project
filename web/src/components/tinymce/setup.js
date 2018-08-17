const toolbars = require.context('./toolbar', false, /.vue$/)
let tool = []
let name = []
toolbars.keys().map(key => {
  name.push(key.replace(/(\.\/)|(\.vue)/ig, ''))
  tool[key.replace(/(\.\/)|(\.vue)/ig, '')] = toolbars(key).default
})

export const tools = tool

export const toolName = name // 导出所有toolbar的名称

export function setup (editor) {
  Object.keys(tool).forEach((item, index) => {
    editor.addButton(tool[item].name, {
      text: tool[item].text,
      icon: tool[item].icon,
      tooltip: tool[item].tooltip,
      onclick: this.$children[index + 1].click
    })
  })
}
