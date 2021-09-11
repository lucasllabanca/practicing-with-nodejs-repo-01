let dataNasc = '13/11/1992';
console.log('Nascido em ' + dataNasc +', natural de Muzambinho-MG');
console.log(`Nascido em ${ dataNasc }, natural de Muzambinho-MG`);
console.log("Me chamam de 'Lucas'");
console.log('Me chamam de "Lucas"');

var antes = 'antes';
var validaEscopo = function() {
    var antesNaFunc = 'antes-na-func';
    console.log(`Na Func ${ antes }, ${depois}, ${antesNaFunc}, ${depoisNaFunc}, ${naoDefinida}`);
    var depoisNaFunc = 'depois-na-func';
}

var depois = 'depois';
var naoDefinida;
validaEscopo();