
export function getTimestamp(timestamp){
    const date = new Date(timestamp * 1000);

    const unixEpochToDMY = `
        ${ ('0' + date.getDate()).slice(- 2) }- 
        ${ ('0' + (date.getMonth() + 1)).slice(- 2) }- 
        ${date.getFullYear()}`

    return unixEpochToDMY
};