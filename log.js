// Don't log under testing/development conditions
if (location.protocol != 'file:'     &&
    location.hostname != 'localhost' &&
    location.search   != '?test')
{
    const url = new URL('https://jomshcc.s3.us-east-2.amazonaws.com/c.gif')
    if (document.referrer) { url.searchParams.set('r', document.referrer) }

    fetch(url, {                     // Opaque response is fine; prevent
        mode: 'no-cors'              //  console errors related to CORS
      , referrerPolicy: 'unsafe-url' // Track precise URL
      , cache: 'no-store'            // Never use cache
    }).catch(e => e)
}

