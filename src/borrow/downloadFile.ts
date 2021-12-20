 function downloadFile(buffer, name) {
    try {
        let url = window.URL.createObjectURL(new Blob([buffer]));
        let link = document.createElement('a');
        link.style.display = 'none';
        link.href = url;
        link.setAttribute('download', `${name}`); //'exporttemp-zh.xls'
        document.body.appendChild(link);
        link.click();
    } catch (e) {
        console.log(e);
        window.navigator.msSaveBlob(new Blob([buffer]), `${name}.xls`);
    }
}

export default downloadFile