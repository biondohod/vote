const apiBase = 'http://web-portfolio.tech/api/';
async function createUser(data) {
    return  await fetch(`${apiBase}user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });
}

async function getUserId(data) {
    return  await fetch(`${apiBase}user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });
}
async function getProfileInfo(id, token) {
    const response = await fetch(`${apiBase}user/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    return await response.json();
}

async function updateUser(data, token) {
    return  await fetch(`${apiBase}user`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: data
    });
}

async function createPool(data, token) {
    return  await fetch(`${apiBase}pool`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: data
    });
}

async function getAllPools(token) {
    const response = await fetch(`${apiBase}pool`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    return await response.json();
}



async function getPool(id, token) {
    const response = await fetch(`${apiBase}pool/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    return await response.json();
}

async function deletePool(id, token) {
    return  await fetch(`${apiBase}pool/${id}`, {
        'method': 'DELETE',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
}

async function votePool(data, id, token) {
    return await fetch(`${apiBase}pool/${id}/vote`, {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }, body: data
    });
}

async function deleteVotePool(data, id, token) {
    return await fetch(`${apiBase}pool/${id}/vote`, {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }, body: data
    });
}

export {createUser, getUserId, getProfileInfo, updateUser, createPool, getAllPools, getPool, deletePool, votePool, deleteVotePool};