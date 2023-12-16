const apiBase = 'https://web-portfolio.tech/api/';
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

async function deleteVotePool(id, token) {
    return await fetch(`${apiBase}pool/${id}/vote`, {
        'method': 'DELETE',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
}

async function getAllGroups(token) {
    const response = await fetch(`${apiBase}group`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    return await response.json();
}

const getGroup = async (id, token) => {
    const response = await fetch(`${apiBase}group/${id}/user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    return await response.json();
}

async function createGroup(data, token) {
    return await fetch(`${apiBase}group`, {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }, body: data
    });
}

async function editGroup(id, data, token) {
    return await fetch(`${apiBase}group/${id}`, {
        'method': 'PATCH',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }, body: data
    });
}

async function groupAddUser(id, data, token) {
    return await fetch(`${apiBase}group/${id}/user`, {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }, body: data
    });
}

async function groupDeleteUser(idGroup, idUser, token) {
    return await fetch(`${apiBase}group/${idGroup}/user/${idUser}`, {
        'method': 'DELETE',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
}

async function deleteUser(token) {
    return await fetch(`${apiBase}user`, {
        'method': 'DELETE',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
}

async function whoVoted(poolId, optionId, token) {
    const response = await fetch(`${apiBase}pool/${poolId}/vote/${optionId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    return await response.json();

}

async function deleteGroup(id, token) {
    return await fetch(`${apiBase}group/${id}`, {
        'method': 'DELETE',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
}

async function getGroupMessages(id, token) {
    const response = await fetch(`${apiBase}chat/${id}?count=25&offset=0`, {
        'method': 'GET',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    );
    return await response.json();
}

async function sendGroupMessage(id, data, token) {
    return await fetch(`${apiBase}chat/${id}`, {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: data
    });
}

export {createUser, sendGroupMessage, getGroupMessages, deleteGroup, whoVoted, getUserId, getProfileInfo, updateUser, createPool, getAllPools, getPool, deletePool, votePool, deleteVotePool, createGroup, getAllGroups, getGroup, deleteUser, editGroup, groupAddUser, groupDeleteUser};
