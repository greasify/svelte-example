import App from './app.svelte'

// include style.css from dist folder
if (import.meta.env.MODE === 'development') {
  const styleResource = GM_info.script.resources.find((resource) => resource.name === 'style')
  if (!styleResource) throw new Error('Could not find style resource')

  GM_xmlhttpRequest({
    method: 'GET',
    url: `${styleResource.url}?ts=${Date.now()}`,
    onload: (response) => GM_addStyle(response.responseText)
  })
} else {
  GM_addStyle(GM_getResourceText('style'))
}

const target = document.querySelector('body')
if (target) {
  new App({ target })
}
