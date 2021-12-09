
(function() {
  var pagetop = document.querySelector('.pagetop')
  if (!pagetop) return

  function pagetop_divider() {
    var span = document.createElement('span')
    span.textContent = ' | '
    pagetop.appendChild(span)
  }

  function today() {
    return (new Date).toISOString().split('T').shift()
  }

  function querystring_value(key) {
    return (new URLSearchParams(location.search)).get(key)
  }

  var topcolor = hnmain.querySelector('[bgcolor]').getAttribute('bgcolor')
  var rgb = parseInt(topcolor.slice(1), 16)
  var brightness = (
    (0.2126 * ((rgb >> 16) & 0xff)) +
    (0.7152 * ((rgb >> 8) & 0xff)) +
    (0.0722 * ((rgb >> 0) & 0xff))
  )
  var color = brightness > 127.5 ? 'black' : 'white'

  pagetop_divider()

  var lists = document.createElement('select')
  lists.onchange = function() {
    lists.style.width = lists.selectedOptions[0].textContent.length + 3 + 'ch'
    if (lists.value === 'nil') return
    location.href = location.origin + lists.value
  }
  pagetop.appendChild(lists)
  
  var option = document.createElement('option')
  option.textContent = 'Lists'
  option.value = 'nil'
  lists.appendChild(option)
  
  var optgroup = document.createElement('optgroup')
  optgroup.label = '---'
  
  void [
    {path: '/active', name: 'Active'},
    {path: '/best', name: 'Best'},
    {path: '/bestcomments', name: 'Best Comments'},
    {path: '/classic', name: 'Classic'},
    {
      path: '/front',
      name: 'Front',
      querystring_key: '?day=',
      querystring_value: function() {
        return querystring_value('day') || today()
      }
    },
    {path: '/invited', name: 'Invited'},
    {path: '/launches', name: 'Launches'},
    {path: '/leaders', name: 'Leaders'},
    {path: '/shownew', name: 'Newest Show HNs'},
    {path: '/noobcomments', name: 'Noob Comments'},
    {path: '/noobstories', name: 'Noob Stories'},
    {
      path: '/over',
      name: 'Over',
      querystring_key: '?points=',
      querystring_value: function() {
        return querystring_value('points') || 1
      }
    },
    {path: '/pool', name: 'Pool'},
    {
      path: '/submitted',
      name: 'Who is hiring?',
      querystring_key: '?id=',
      querystring_value: function() {
        return 'whoishiring'
      }
    }
  ].forEach(function(page) {
    var option = document.createElement('option')
    option.textContent = page.name
    optgroup.appendChild(option)

    if (page.querystring_key) {
      option.value = page.path + page.querystring_key + page.querystring_value()
      option.selected = (
        (
          location.pathname +
          location.search
        ).indexOf(
          page.path +
          page.querystring_key +
          page.querystring_value()
        ) !== -1
      )
    } else {
      option.value = page.path
      option.selected = location.pathname.indexOf(page.path) !== -1
    }
  })

  lists.appendChild(optgroup)
  lists.style.color = color
  lists.style.border = 'none'
  lists.style.cursor = 'pointer'
  lists.style['background-color'] = topcolor
  lists.style['-moz-appearance'] = '-moz-mac-source-list'
  lists.style['-moz-appearance'] = '-moz-win-source-list'
  lists.style['-webkit-appearance'] = 'menulist-button'
  lists.style.width = lists.selectedOptions[0].textContent.length + 3 + 'ch'
  
  var is_front = location.pathname === '/front'
  var is_over = location.pathname === '/over'
  if (!(is_front || is_over)) return

  pagetop_divider()

  if (is_front) {
    var querystring_key = 'day'
    var type = 'date'
    var max = today()
    var min = '2006-10-09'
    var width = 17
  } else {
    var querystring_key = 'points'
    var type = 'number'
    var max = 99999
    var min = 1
    var width = 8
  }

  var input = document.createElement('input')
  input.type = type
  input.value = querystring_value(querystring_key)
  input.max = max
  input.min = min
  input.style.color = color
  input.style.border = 'none'
  input.style.cursor = 'pointer'
  input.style['background-color'] = topcolor
  input.style.width = width + 'ch'
  input.onchange = function() {
    location.search = '?' + [querystring_key, input.value].join('=')
  }
  pagetop.appendChild(input)
})()
