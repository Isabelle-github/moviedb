
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
        // console.log(`${key}: ${value}`)
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
        // console.log(`${key}: ${value}`)
        if (id === key) {
            return value
        }
    }
}
function getRuForId(id) {
    for (const [key, value] of Object.entries(ruStrings)) {
        // console.log(`${key}: ${value}`)
        if (id === key) {
            return value
        }
    }
}
function getFrForId(id) {
    for (const [key, value] of Object.entries(frStrings)) {
        // console.log(`${key}: ${value}`)
        if (id === key) {
            return value
        }
    }
}
function getNlForId(id) {
    for (const [key, value] of Object.entries(nlStrings)) {
        // console.log(`${key}: ${value}`)
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
    popularMoviesNotFoundText: 'Es wurde kein Film gefunden, der Ihrer Suche entspricht 😟 , werfen Sie stattdessen einen Blick auf die folgenden beliebten Filme!',
    popularSeriesNotFoundText: 'Es wurde keine Serie gefunden, die Ihrer Suche entspricht 😟 , werfen Sie stattdessen einen Blick auf die folgenden beliebten Serien!',

    //Detail
    movieDetailRelease: 'Veröffentlichung',
    movieDetailGenre: 'Genre',
    movieDetailOverview: 'Übersicht',
    movieDetailVoting: 'Durschnittsbewertung',
    movieDetailTrailer: 'Alle Trailers',
    noTrailerFound: 'Leider keine Trailer gefunden.',
    //Footer
    footerImprint: 'Impressum',
    //404
    Error404Text: 'Haben Sie sich auf dem Weg Snacks zu holen verlaufen?'
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
    popularMoviesNotFoundText: 'No Movie found that matches your Search 😟 , take a look at the following popular Movies instead!',
    popularSeriesNotFoundText: 'No Series where found to match your Search 😟 , take a look at the following popular Series instead!',
    //Detail
    movieDetailRelease: 'Release Date',
    movieDetailGenre: 'Genres',
    movieDetailOverview: 'Overview',
    movieDetailVoting: 'Average Voting',
    movieDetailTrailer: 'All Trailers',
    noTrailerFound: 'Sorry, no trailers found.',
    //Footer
    footerImprint: 'Imprint',
    //404
    Error404Text: 'Did you get lost on your way to get some snacks?'
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
    popularMoviesNotFoundText: 'Не найдено ни одного фильма, соответствующего вашему запросу 😟, вместо этого посмотрите следующие популярные фильмы!',
    popularSeriesNotFoundText: 'Не найдено ни одной серии, соответствующей вашему запросу 😟, взгляните на следующую популярную серию!',
    //Detail
    movieDetailRelease: 'Дата выхода',
    movieDetailGenre: 'Жанры',
    movieDetailOverview: 'Обзор',
    movieDetailVoting: 'Среднее голосование',
    movieDetailTrailer: 'Все трейлеры',
    noTrailerFound: 'К сожалению, трейлеры не найдены.',
    //Footer
    footerImprint: 'Оттиск',
    //404
    Error404Text: 'Вы заблудились по дороге за закусками?'
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
    popularMoviesNotFoundText: "Aucun film ne correspond à votre recherche 😟 , jetez plutôt un coup d'œil sur les films populaires suivants !",
    popularSeriesNotFoundText: "Aucune série ne correspond à votre recherche 😟 , jetez plutôt un coup d'œil sur les séries populaires suivantes !",
    //Detail
    movieDetailRelease: 'Date de sortie',
    movieDetailGenre: 'Genres',
    movieDetailOverview: `Vue d'ensemble`,
    movieDetailVoting: 'Vote en Moyenne',
    movieDetailTrailer: 'Tous les Trailers',
    noTrailerFound: 'Désolé, aucune bande-annonce trouvée.',
    //Footer
    footerImprint: 'Impression',
    //404
    Error404Text: 'Vous êtes-vous perdu en allant chercher de quoi grignoter?'
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
    popularMoviesNotFoundText: 'Geen film gevonden die overeenkomt met uw zoekopdracht 😟 , bekijk in plaats daarvan de volgende populaire films!',
    popularSeriesNotFoundText: 'Er zijn geen series gevonden die overeenkomen met uw zoekopdracht 😟 , bekijk in plaats daarvan de volgende populaire series!',
    //Detail
    movieDetailRelease: 'Releasedatum',
    movieDetailGenre: 'Genres',
    movieDetailOverview: 'Overzicht',
    movieDetailVoting: 'Gemiddelde stemming',
    movieDetailTrailer: 'Alle Aanhangwagens',
    noTrailerFound: 'Sorry, geen trailers gevonden.',
    //Footer
    footerImprint: 'Impressum',
    //404
    Error404Text: 'Ben je verdwaald op weg naar de snacks?'
}



export default getString
