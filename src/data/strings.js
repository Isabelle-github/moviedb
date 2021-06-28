
function getString(id) {
    // console.log(id)
    switch (localStorage.getItem('preferredLanguage')) {
        case 'de':
            // console.log(localStorage.getItem('preferredLanguage'))
            return getDeForId(id)
        case 'en':
            return getEnForId(id)
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

const deStrings =
{
    popularTitle: 'Beliebte Filme',
    searchPlaceholder: 'Suche etwas',
    MovieDetailRelease: 'Veröffentlichung'

}

const enStrings =
{
    popularTitle: 'Popular movies',
    searchPlaceholder: 'Search something',
    MovieDetailRelease: 'Release Date'
}



export default getString
