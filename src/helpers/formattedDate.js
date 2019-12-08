exports.formattedDate = function (date) {
    let dia = date.substr(8,2)
    let mes = date.substr(5,2)
    let ano = date.substr(0,4)
    let formattedDate = `${dia}/${mes}/${ano}`
    return formattedDate
}