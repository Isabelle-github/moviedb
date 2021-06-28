
function getString(id) {
    // console.log(id)
    switch (localStorage.getItem('preferredLanguage')) {
        case 'de':
            // console.log(localStorage.getItem('preferredLanguage'))
            return getDeForId(id)
        case 'en':
            return getEnForId(id)
        case 'ru':
            return getRuForId(id)
        case 'fr':
            return getFrForId(id)
        case 'nl':
            return getNlForId(id)
        default:
            // console.log(localStorage.getItem('preferredLanguage'))
            break
    }
}

function getDeForId(id) {
    // console.log(id)

    for (const [key, value] of Object.entries(deStrings)) {
        console.log(`${key}: ${value}`)
        if (id === key) {
            return value
        }
    }

    // return deStrings.find(ele => {
    //     if (ele.hasOwnProperty(id)) {
    //         console.log(ele[id])
    //         return ele[id].toString()
    //     }
    // })
}
function getEnForId(id) {
    for (const [key, value] of Object.entries(enStrings)) {
        console.log(`${key}: ${value}`)
        if (id === key) {
            return value
        }
    }
}
function getRuForId(id) {
    for (const [key, value] of Object.entries(ruStrings)) {
        console.log(`${key}: ${value}`)
        if (id === key) {
            return value
        }
    }
}
function getFrForId(id) {
    for (const [key, value] of Object.entries(frStrings)) {
        console.log(`${key}: ${value}`)
        if (id === key) {
            return value
        }
    }
}
function getNlForId(id) {
    for (const [key, value] of Object.entries(nlStrings)) {
        console.log(`${key}: ${value}`)
        if (id === key) {
            return value
        }
    }
}

const deStrings =
{
    popularTitle: 'Beliebte Filme',
    searchPlaceholder: 'Suche etwas',
    movieDetailRelease: 'Veröffentlichung'

}

const enStrings =
{
    popularTitle: 'Popular movies',
    searchPlaceholder: 'Search something',
    movieDetailRelease: 'Release Date'
}

const ruStrings =
{
    popularTitle: '',
    searchPlaceholder: '',
    movieDetailRelease: ''
}

const frStrings =
{
    popularTitle: '',
    searchPlaceholder: '',
    movieDetailRelease: ''
}

const nlStrings =
{
    popularTitle: '',
    searchPlaceholder: '',
    movieDetailRelease: ''
}



export default getString
