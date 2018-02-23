
'use strict'

var pagetop = document.querySelector('.pagetop')
pagetop.appendChild(function() {
  var divider = document.createElement('span')
  divider.textContent = ' | '
  return divider
}())
pagetop.appendChild(function() {
  var hnlinks = document.createElement('select')
  hnlinks.style.color = 'white'
  hnlinks.style.border = 'none'
  hnlinks.style.cursor = 'pointer'
  hnlinks.style['background-color'] = '#ef6230'
  hnlinks.style['-moz-appearance'] = '-moz-mac-source-list'
  hnlinks.style['-moz-appearance'] = '-moz-win-source-list'
  hnlinks.style['-webkit-appearance'] = 'menulist-button'
  hnlinks.onchange = function(e) {
    if (e.target.value === 'ignoreme') return
    document.location.pathname = e.target.value
  }
  hnlinks.appendChild(function() {
    var prompt = document.createElement('option')
    prompt.textContent = 'Lists'
    prompt.value = 'ignoreme'
    return prompt
  }())
  hnlinks.appendChild(function() {
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
    return linkopts
  }())
  return hnlinks
}())