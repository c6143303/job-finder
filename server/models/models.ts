import {DataTypes} from "sequelize";
import sequelize from '../db'

const Product = sequelize.define('product', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isLiked: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salaryFrom: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    salaryTill: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imageSrc: {
        type: DataTypes.STRING,
        // allowNull: false,
        defaultValue: 'avatar-1679227572697-707020683.jpg'
    },
    expires: {
        type: DataTypes.DATE,
        // allowNull: false,
        defaultValue: new Date()
    }
})

const ProductType = sequelize.define('types', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

const ProductCategory = sequelize.define('categories', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

const Company = sequelize.define('companies', {
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    about: {
        type: DataTypes.TEXT('long'),
        allowNull: true
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true
    },
    website: {
        type: DataTypes.STRING,
        allowNull: true
    },
    contactPerson: {
        type: DataTypes.STRING,
        allowNull: true
    },
    contactEmail: {
        type: DataTypes.STRING,
        allowNull: true
    },
    contactPhone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    facebook: {
        type: DataTypes.STRING,
        allowNull: true
    },
    twitter: {
        type: DataTypes.STRING,
        allowNull: true
    },
    linkedin: {
        type: DataTypes.STRING,
        allowNull: true
    },
    verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true
    },
    companyName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    logo: {
        type: DataTypes.STRING,
        allowNull: true
    },
})

const Employee = sequelize.define('employees', {
    from: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    till: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
})

const Subscriptions = sequelize.define('subscriptions', {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

const Speak = sequelize.define('speak', {
    language: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

const SupportForm = sequelize.define('form', {
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

const Applications = sequelize.define('applications', {
    companyId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cv: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    checked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
})

ProductType.hasOne(Product, {foreignKey: {name: 'typeId', allowNull: false}})
Product.belongsTo(ProductType)

ProductCategory.hasOne(Product, {foreignKey: {name: 'categoryId', allowNull: false}})
Product.belongsTo(ProductCategory)

Speak.hasOne(Company)
Company.belongsTo(Speak)

Employee.hasOne(Company)
Company.belongsTo(Employee)

Company.hasMany(Product, {foreignKey: {name: 'companyId', allowNull: false}})
Product.belongsTo(Company)

Company.hasMany(SupportForm)
SupportForm.belongsTo(Company)

sequelize.sync()
    .then(e => {
        console.log('is running')
    })
export {
    Product,
    ProductType,
    ProductCategory,
    Company,
    Speak,
    Employee,
    SupportForm,
    Applications,
}