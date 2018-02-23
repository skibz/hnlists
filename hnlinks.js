
'use strict'

var pagetop = document.querySelector('.pagetop')

var divider = document.createElement('span')
divider.textContent = ' | '
pagetop.appendChild(divider)

var hnlinks = document.createElement('select')
hnlinks.onchange = function(e) {
  if (e.target.value === 'ignoreme') return
  document.location.pathname = e.target.value
}

var prompt = document.createElement('option')
prompt.textContent = 'Choose a page'
prompt.value = 'ignoreme'

var linkopts = document.createElement('optgroup')
linkopts.label = '---'

var pages = [
  {uri: '/leaders', name: 'Leaders'},
  {uri: '/front', name: 'Front'},
  {uri: '/best', name: 'Best'},
  {uri: '/active', name: 'Active'},
  {uri: '/bestcomments', name: 'Best Comments'},
  {uri: '/noobstories', name: 'Noob Stories'},
  {uri: '/noobcomments', name: 'Noob Comments'},
  {uri: '/shownew', name: 'Newest Show HNs'}
]

pages.forEach(function(page) {
  var option = document.createElement('option')
  option.value = page.uri
  option.textContent = page.name
  option.selected = document.location.pathname.indexOf(page.uri) !== -1
  linkopts.appendChild(option)
})

hnlinks.appendChild(prompt)
hnlinks.appendChild(linkopts)
pagetop.appendChild(hnlinks)