const API_KEY = 'S59Agy83TL9XGaFy85NbY3sKrjz0muGA';

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth()+1;

export async function getNewsArchiveList() {
    const url = `/svc/archive/v1/${year}/${month}.json?api-key=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    return data.response.docs.filter((item, index) => index < 20);
}

export async function getPopularNewsList() {
    const url = `/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    return data.results.filter((item, index) => index < 20);
}