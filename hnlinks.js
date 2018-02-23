
// get a reference to the page navbar
var pagetop = document.querySelector('.pagetop')

// add a vertical divider to the navbar
var divider = document.createElement('span')
divider.textContent = ' | '
pagetop.appendChild(divider)

// create a reference to the menu element
var hnlinks = document.createElement('select')
hnlinks.onchange = function(e) {
  // do nothing if the user didn't select a page
  if (e.target.value === 'ignoreme') return
  // otherwise, navigate!
  document.location.pathname = e.target.value
}

// add an option for when no page is selected
var prompt = document.createElement('option')
prompt.textContent = 'Choose a page'
prompt.value = 'ignoreme'

// visual grouping for pages
var linkopts = document.createElement('optgroup')
linkopts.label = 'Additional pages'

var leaders = document.createElement('option')
leaders.value = '/leaders'
leaders.textContent = 'Leaders'
leaders.selected = document.location.pathname.indexOf(leaders.value) !== -1

var front = document.createElement('option')
front.value = '/front'
front.textContent = 'Front'
front.selected = document.location.pathname.indexOf(front.value) !== -1

var best = document.createElement('option')
best.value = '/best'
best.textContent = 'Best'
best.selected = document.location.pathname.indexOf(best.value) !== -1

var active = document.createElement('option')
active.value = '/active'
active.textContent = 'Active'
active.selected = document.location.pathname.indexOf(active.value) !== -1

var bestcomments = document.createElement('option')
bestcomments.value = '/bestcomments'
bestcomments.textContent = 'Best Comments'
bestcomments.selected = document.location.pathname.indexOf(bestcomments.value) !== -1

var noobstories = document.createElement('option')
noobstories.value = '/noobstories'
noobstories.textContent = 'Noob Stories'
noobstories.selected = document.location.pathname.indexOf(noobstories.value) !== -1

var noobcomments = document.createElement('option')
noobcomments.value = '/noobcomments'
noobcomments.textContent = 'Noob Comments'
noobcomments.selected = document.location.pathname.indexOf(noobcomments.value) !== -1

var shownew = document.createElement('option')
shownew.value = '/shownew'
shownew.textContent = 'Show New'
shownew.selected = document.location.pathname.indexOf(shownew.value) !== -1

hnlinks.appendChild(prompt)
hnlinks.appendChild(linkopts)

linkopts.appendChild(leaders)
linkopts.appendChild(front)
linkopts.appendChild(best)
linkopts.appendChild(active)
linkopts.appendChild(bestcomments)
linkopts.appendChild(noobstories)
linkopts.appendChild(noobcomments)
linkopts.appendChild(shownew)

pagetop.appendChild(hnlinks)