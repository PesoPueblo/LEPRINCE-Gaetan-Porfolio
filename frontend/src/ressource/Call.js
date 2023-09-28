
export const workApi = fetch(`${process.env.REACT_APP_SERVER_URL}/api/works`)
.then(prom=>prom.json())