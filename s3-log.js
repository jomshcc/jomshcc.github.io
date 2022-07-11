// USER PARAMETERS
const BUCKET = 'jomshcc'
    , REGION = 'us-east-2' // e.g. us-east-2
    , PIXEL  = 'c.gif'

// Don't log under testing/development conditions
if (location.protocol != 'file:'     &&
    location.hostname != 'localhost' &&
    location.search   != '?test')    // Fallback convention
{
    const url = new URL(`https://${BUCKET}.s3.${REGION}.amazonaws.com/${PIXEL}`)
    if (document.referrer) {
        url.searchParams.set('r', cleanQuery(document.referrer))
    }

    fetch(url, {                     // Opaque response is fine; prevent
        mode: 'no-cors'              //  console errors related to CORS
      , referrer: cleanQuery(location.href)
      , referrerPolicy: 'unsafe-url' // Track precise URL
      , cache: 'no-store'            // Never use cache
    }).catch(e => e)
}

function cleanQuery(s_url) {
    if (!s_url) { return s_url }
    const url = new URL(s_url)

    if (url.searchParams.has('fbclid')) { url.searchParams.set('fbclid','') }

    return url.href
}
