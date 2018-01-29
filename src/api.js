export const getPhotos = () => {
    return fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res) => res.json())
        .then((resJson) => {
            return resJson;
        })
}