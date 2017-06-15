module.exports = function(sequelize, DataTypes) {

    var Burger = sequelize.define('Burger', {
        */
        burger_name: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN
        },
        eatenby: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        date: {
            type: DataTypes.DATE
        }
    }, 
    {
        // disable the automatic record timestamping that Sequelize
        // does when defining/writing new tables
        timestamps: false
    });
    return Burger;
};