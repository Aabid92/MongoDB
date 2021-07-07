db.persons.aggregate([

    { $match: { gender: "female" } },
    { $group: { _id: { state: "$location.state" }, totalPersons: { $sum: 1 } } }
    

]).pretty();

// Here We use Sorting.......

db.persons.aggregate([

    { $match: { gender: "female" } },
    { $group: { _id: { state: "$location.state" }, totalPersons: { $sum: 1 } } },
    { $sort: { totalPersons: -1 } }

]).pretty();

// db.persons.aggregate:([

//     {$match: {gender: "male"},
//     {$group: {_id: {age: "$dob.age"}, totalAge: {$sum: 1}}}

// ]).pretty()

db.persons.aggregate([
    { $match: { "dob.age": { $gt: 50 } } },
    { $group: { _id: { genger: "$gender" } }, totalPersons: { $sum: -1 } }


]).pretty();