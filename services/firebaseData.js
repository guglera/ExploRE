const firebaseBasePath = 'https://explore-689ed-default-rtdb.europe-west1.firebasedatabase.app/';

export const fetchSpecificId = async (userId) => {
    try {
        const res = await fetch(`${firebaseBasePath}${userId}.json`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.warn(error);
    }
}


const pushCinema = async (bd) => {
    try {
        const res = await fetch(firebaseBasePath + '/cinemas.json', {
            method: 'POST',
            body: JSON.stringify(bd),
        });
        const data = await res.json();
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

export const pushAll = () => {
    cinemas.map(cin => pushCinema(cin));
}