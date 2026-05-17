let DOM = document.body;
(function (list) {
    //verifie que 'list' soit bien un tableau
    if (!((list.constructor==Array)||list.every(e=>e.constructor==String))) {
        throw TypeError('Type of \'list\' must is an Array.');
    };
    for (let elm of list) {
        dat = elm.split(/(?=(?<!>[#\.>\w]*)[#\.>])/).map(e=>{p='#.>'.split('').findIndex(c=>c==e.match(/[#\.>]/))+1;return p?[['id','className','parentNode'][p-1],(p==1?e.replace(/\./g,' '):e).slice(1)]:e})
        elm = document.createElement(dat[0]);
        for (let TempVal of dat.filter(e=>e.includes('id')||e.includes('className'))) {
            if (TempVal) {
                elm[TempVal[0]] = TempVal[1];
            };
        };
        pN = [...document.all].filter(e=>(e=>e.localName+e.id.replace(/(?=^[\w-]+)/,'#')+e.classList.value.replace(/(?=^.)|\s/g,'.'))(e)==(dat.find(e=>e.includes('parentNode'))?.at(1))).slice(-1)[0];
        pN ||= DOM;
        pN.appendChild(elm);
    };
})(/*voir dans "doc.md"*/[
    'div.main',
    'section.main>div.main',
    //'p#welcome.modal>section.main'
])