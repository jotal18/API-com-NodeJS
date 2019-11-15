module.exports = (sequelize, DataTypes) => {
    return sequelize.define('adaptador', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        matricula: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        setor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        data: {
            type: DataTypes.DATE,
            allowNull: true
        },
        observacao: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true
    })
}


/*
Adaptador.sync({ force: true }).then(() => {
    return Adaptador.create({
        nome: 'Johnssaaa',
        matricula: 1991885,
        setor: 'Hancock',
        data: 2019-11-01,
        observacao: 'Hancock1'
    })
})
*/
