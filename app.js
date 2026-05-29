const appName = import.meta.env.VITE_APP_NAME;
const apiUrl = import.meta.env.VITE_API_URL;

document.querySelector('#title').textContent = appName;
console.log('API URL:', apiUrl);