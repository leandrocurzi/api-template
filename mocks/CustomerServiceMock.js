const mockery = require('mockery');

class CustomerServiceMock {
    search(req) {
        return new Promise((resolve, reject) => {
            const random = Math.random() >= 0.5;
            if (random) {
                resolve(JSON.stringify([
                    {
                        customer_id: 1,
                        name: 'Pablo',
                        last_name: 'Perez'
                    },
                    {
                        customer_id: 2,
                        name: 'Marcos',
                        last_name: 'Diaz'
                    },
                ]));
            } else {
                reject(new Error('There was an error trying to search customers'));
            }
        });
    }
    get(req) {
        return new Promise((resolve, reject) => {
            const random = Math.random() >= 0.5;
            if (random) {
                resolve(JSON.stringify({
                    customer_id: req.params.id,
                    name: 'Pablo',
                    last_name: 'Perez'
                }));
            } else {
                reject(new Error(`There was an error trying to get customer id ${req.params.id}`));
            }
        });
    }
    add(req) {
        return true;
    }
    update(req) {
        return true;
    }
    delete(req) {
        return true;
    }
}

// mockery.registerMock('CustomerService', CustomerServiceMock);

module.exports = CustomerServiceMock;
