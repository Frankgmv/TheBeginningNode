const references = require('./references.json');

module.exports = {
    getReferences: ()=>references,
    getReference: (idR)=>{
        let reference = references.filter(ref =>ref.id == idR)[0];
        return reference;
    },
    createReference:(dataRef)=>{
        const newReference = {...dataRef}
        references.push(newReference);
        return newReference;
    }

}