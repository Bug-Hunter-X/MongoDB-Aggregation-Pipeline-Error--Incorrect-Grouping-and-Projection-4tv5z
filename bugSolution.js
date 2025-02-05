```javascript
//Corrected aggregation pipeline
db.collection('data').aggregate([
  {
    $match: { "field": "value" }
  },
  {
    $group: { _id: "$field", count: { $sum: 1 } }
  },
  {
    $project: { _id: 0, field: "$_id", count: 1 }
  }
])
```