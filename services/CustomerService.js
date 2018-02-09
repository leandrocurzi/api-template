class CustomerService {
    search(req) {
        return new Promise((resolve, reject) => {
            const random = Math.random() >= 0.5;
            if (random) {
                resolve();
            } else {
                reject(new Error('There was an error trying to get customes'));
            }
        });
    }
    get(req) {
        return true;
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

module.exports = CustomerService;
