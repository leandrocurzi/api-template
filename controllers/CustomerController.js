const mock = require('../mocks/CustomerServiceMock');
const mockery = require('mockery');

mockery.registerMock('../services/CustomerService', mock);

const Service = require('../services/CustomerService');

class CustomerController {
    constructor() {
        this.service = new Service();
    }
    search(req, res) {
        this.service.search(req)
            .then((result) => {
                res.status(200).json({ result });
            })
            .catch((error) => {
                res.status(400);
                res.json(error.message);
            });
    }
    get(req) {
        this.service.get(req)
            .then((result) => { return result; })
            .catch((error) => { return error; });
    }
    add(req) {
        this.service.add(req)
            .then((result) => { return result; })
            .catch((error) => { return error; });
    }
    update(req) {
        this.service.update(req)
            .then((result) => { return result; })
            .catch((error) => { return error; });
    }
    delete(req) {
        this.service.delete(req)
            .then((result) => { return result; })
            .catch((error) => { return error; });
    }
}

module.exports = CustomerController;
