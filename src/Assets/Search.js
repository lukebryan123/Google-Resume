import resultsData from './ResultsData.json';

let storedResults;

export function search(searchInput) {
    let orderedSearch = Array.from(resultsData);

    if (searchInput && searchInput !== 'Luke Bryan') {
        orderedSearch.forEach(experience => {
            experience.score = experience.relevancy;
            if (experience.body.toUpperCase().includes(searchInput.toUpperCase())) {
                experience.score = experience.score + 100;
            }
            // Should probably set all keywords to upper case and add that to this logic
            if (experience.keywords.includes(searchInput)) {
                experience.score = experience.score + 100;
            }
            if (experience.languages.includes(searchInput)) {
                experience.score = experience.score + 300;
            }
        });
    }

    orderedSearch.sort((a,b) => {
        return b.score - a.score
    })
    // orderedSearch.reverse();
    storedResults = orderedSearch;
    console.log(resultsData[3].score);
    return orderedSearch
}

export function getStoredResults() {
    if (storedResults) {
        return storedResults
    } else {
        storedResults = search('');
        return storedResults
    }
}

// export default Search