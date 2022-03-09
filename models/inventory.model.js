module.exports = (sequelize, Sequelize) => {
    const Inventory = sequelize.define('inventory', {
        name: {
            type: Sequelize.STRING,
        },
        stock: {
            type: Sequelize.INTEGER,
        },
        price: {
            type: Sequelize.DECIMAL,
        }
    });
    return Inventory;
};