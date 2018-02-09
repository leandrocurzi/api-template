
const helper = {
    doWork(id) {
        return new Promise((resolve, reject) => {
            const random = Math.random() >= 0.5;
            if (random) {
                resolve();
            } else {
                reject(new Error(`There was an error trying to get customer id ${id}`));
            }
        });
    }
};

module.exports = helper;
