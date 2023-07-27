const express = require('express');
const Service = require('./src/service.js');
const morgan = require('morgan');
const service = require('./src/service.js');

const PORT = 9000
const server = express();

server.use(morgan('dev'));
server.use(express.json());

server.get("/", (req, res) => {
    const references = Service.getReferences();
    return res.json({
        message: `There's all references: ${references.length}`,
        body: references
    })
});

server.get("/:id", (req, res) => {
    let { params: {id} } = req;
    const reference = Service.getReference(id);
    return res.json({
        message: `Petición realizada con éxito`,
        body: reference,
    })
});

server.post('/', (req, res) => {
    let {body: Ref} = req;
    let newRef = service.createReference(Ref);
    res.json({
        message: `Añadiste referencia con éxito`,
        body: newRef
    })
})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));