import request from 'superagent';

const URL = 'https://glacial-sea-63165.herokuapp.com';

export async function getAllCharacters() {
    const data = await request.get(`${URL}/characters`);

    return data.body;
}

export async function getOneCharacter(id) {
    const { body } = await request.get(`${URL}/characters/${id}`);

    return body;
}

export async function updateCharacter(id, characterData) {
    const { body } = await (await request.put(`${URL}/characters/${id}`)).setEncoding(characterData);

    return body;
}

export async function createCharacter() {
    const { body } = await (await request.post(`${URL}/characters/`).send(characterData);

    return body;
}

export async function getAllCategories() {
    const { body } = await request.get(`${URL}/categories`);

    return body;
}

export async function deleteCharacter() {
    const { body } = await request.delete(`${URL}/characters/${id}`);

    return body;
}