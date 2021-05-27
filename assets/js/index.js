function copiarCBU(text) {
    const type = "text/plain";
    const blob = new Blob([text], { type });
    let data = [
        new ClipboardItem({
            [type]: blob,
        }),
    ];

    navigator.clipboard.write(data).then(
        function() {
            console.log("Copiado!");
        },
        function() {
            console.log("Ups! No se copio");
        }
    );
}
document.getElementById("copiar").addEventListener("click", function() {
    copiarCBU(document.getElementById("contenido").innerHTML);
});