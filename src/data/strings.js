
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
    //Header
    searchPlaceholder: 'Suche etwas',
    //Main
    popularTitle: 'Beliebte Filme',
    popularSeriesTitle: 'Beliebte Serien',
    popularLinkMovies: 'Beliebte Filme',
    popularLinkSeries: 'Beliebte Serien',
    //Detail
    movieDetailRelease: 'Veröffentlichung',
    movieDetailGenre: 'Genre',
    movieDetailOverview: 'Übersicht',
    movieDetailVoting: 'Durschnittsbewertung',
    movieDetailTrailer: 'Alle Trailer',
    //Footer
    footerImprint: 'Impressum'
}

const enStrings =
{
    //Header
    searchPlaceholder: 'Search something',
    //Main
    popularTitle: 'Popular movies',
    popularSeriesTitle: 'Popular series',
    popularLinkMovies: 'Popular movies',
    popularLinkSeries: 'Popular series',
    //Detail
    movieDetailRelease: 'Release Date',
    movieDetailGenre: 'Genres',
    movieDetailOverview: 'Overview',
    movieDetailVoting: 'Average Voting',
    movieDetailTrailer: 'All Trailers',
    //Footer
    footerImprint: 'Imprint'
}

const ruStrings =
{
     //Header
     searchPlaceholder: 'поиск',
     //Main
     popularTitle: 'Популярные фильмы',
     popularSeriesTitle: 'Популярные серии',
     popularLinkMovies: 'Популярные фильмы',
     popularLinkSeries: 'Популярные серии',
     //Detail
     movieDetailRelease: 'Дата выхода',
     movieDetailGenre: 'Жанры',
     movieDetailOverview: 'Обзор',
     movieDetailVoting: 'Среднее голосование',
     movieDetailTrailer: 'Все трейлеры',
     //Footer
     footerImprint: 'Оттиск'
}

const frStrings =
{
     //Header
     searchPlaceholder: 'Recherche',
     //Main
     popularTitle: 'Films populaires',
     popularSeriesTitle: 'Séries populaires',
     popularLinkMovies: 'Films populaires',
     popularLinkSeries: 'Séries populaires',
     //Detail
     movieDetailRelease: 'date de sortie',
     movieDetailGenre: 'Genres',
     movieDetailOverview: 'Vue d`ensemble',
     movieDetailVoting: 'Average Voting',
     movieDetailTrailer: 'Vote moyen',
     //Footer
     footerImprint: 'Impression'
}

const nlStrings =
{
     //Header
     searchPlaceholder: 'Zoek iets',
     //Main
     popularTitle: 'Populaire films',
     popularSeriesTitle: 'Populaire series',
     popularLinkMovies: 'Populaire films',
     popularLinkSeries: 'Populaire series',
     //Detail
     movieDetailRelease: 'releasedatum',
     movieDetailGenre: 'Genres',
     movieDetailOverview: 'Overzicht',
     movieDetailVoting: 'Gemiddelde stemming',
     movieDetailTrailer: 'Alle Aanhangwagens',
     //Footer
     footerImprint: 'Afdruk'
}



export default getString
