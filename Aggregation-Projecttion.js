// Here We use Projection for Our Aggregation Fremework.......


db.persons.aggregate([
    { $project: { _id: 0, gender: 1, fullName: { $concat: ["$name.first", " ", "$name.last"] } } }
]).pretty()

///////////////////////////////////////////

db.persons.aggregate([
    { $project: { _id: 0, gender: 1, fullName: { $concat: [{ $toUpper: "$name.first" }, " ", { $toUpper: "$name.last" }] } } }
]).pretty()

// db.persons.aggregate([
//     {
//         $project: {
//             _id: 0, gender: 1, fullName: {
//                 $concat: [{ $toUpper: { $substrCP: ["$name.first", 0, 1] } },
//                 { $substrCP: ["$name.first", 1, { $substract: [{ $strLenCp: "$name.first" }, 1] }] }, " ",
//                 { $toUpper: { $substrCP: ["$name.last", 0, 1] } },
//                 { $substrCP: ["$name.last", 1, { $substract: [{ $strLenCp: "$name.last" }, 1] }] },
//                 ]
//             }
//         }
//     }
// ]).pretty()

db.persons.aggregate([
    {
      $project: {
        _id: 0,
        gender: 1,
        fullName: {
          $concat: [
            { $toUpper: { $substrCP: ['$name.first', 0, 1] } },
            {
              $substrCP: [
                '$name.first',
                1,
                { $subtract: [{ $strLenCP: '$name.first' }, 1] }
              ]
            },
            ' ',

            
            { $toUpper: { $substrCP: ['$name.last', 0, 1] } },
            {
              $substrCP: [
                '$name.last',
                1,
                { $subtract: [{ $strLenCP: '$name.last' }, 1] }
              ]
            }
          ]
        }
      }
    }
  ]).pretty();

  db.persons.aggregate([
      {$project:
         {_id: 0, gender: 1,
             fullName: 
             {$concat: [{$toUpper:{$substrCP:["$location.state", 0, 1]}},
             {$substrCP: ["location.state", 1, {$subtract: [{$strLenCP: "$location.state"}, 1]}]},
             " ",
             {$toUpper:{$substrCP:["$location.city", 0, 1]}},
             {$substrCP: ["location.city", 1, {$subtract: [{$strLenCP: "$location.city"}, 1]}]}
        ]}}}
  ]).pretty()


