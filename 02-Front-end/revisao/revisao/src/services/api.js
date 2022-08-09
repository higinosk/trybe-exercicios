export const getAllCharacters = async () => {
    const result = await fetch('https://swapi.co/api/people/');
    const data = await result.json();
    return data.results;
}

export const getCharacters = async (character) => {
    const result = await fetch(`https://swapi.co/api/people/${character}`);
    const data = await result.json();
    return data.results;
}

// export default { getAllCharacters,  getCharacters };
