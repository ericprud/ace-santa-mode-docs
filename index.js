/* generate HTML forms from ShEx schemas and conformant data
 *
 * TODO: automate fetching of various files
 */

(function () {
  const editor = ace.edit("shexc-demo")
  editor.setTheme("ace/theme/textmate")
  editor.session.setMode("ace/mode/shexc")
  fetch('https://raw.githubusercontent.com/shexSpec/ace-shexc-support/master/demo/kitchen-sink/docs/shexc.shex')
    .then(resp => resp.text()).then(function (txt) {
      editor.setValue(txt, 1)
      editor.setFontSize("18px")
    })
})()
