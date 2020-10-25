export const getPolice = async (page, count) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:9000'}/police/users?c=${count}}&p=${page}`,  {
        method: "GET",
        credentials: "include"
    })

    const res = await response.json();

    return res
};

export const searchPolice = async (term, page, pageLength) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:9000'}/police/search?uname=${term}&p=${page}&c=${pageLength}`,  {
        method: "GET",
        credentials: "include"
    })

    const res = await response.json();

    return res
}

export default {
    getPolice,
    searchPolice
};