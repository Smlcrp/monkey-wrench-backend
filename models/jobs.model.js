module.exports = (sequelize, Sequelize) => {
    const Jobs = sequelize.define('jobs', {
        customer: {
            type: Sequelize.STRING,
        },
        phone: {
            type: Sequelize.TEXT,
        },
        job_description: {
            type: Sequelize.TEXT,
        }
    });
    return Jobs;
};