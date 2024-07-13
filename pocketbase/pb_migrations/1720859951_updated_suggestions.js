/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j194h1rq8na4w5h")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wju38e2o",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "planned",
        "in-progress",
        "live"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j194h1rq8na4w5h")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wju38e2o",
    "name": "status",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "planned",
        "in-progress",
        "live"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
