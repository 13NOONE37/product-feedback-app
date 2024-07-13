/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j194h1rq8na4w5h")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_WS8Isri` ON `suggestions` (`slug`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2utysd8j",
    "name": "slug",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 128,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j194h1rq8na4w5h")

  collection.indexes = []

  // remove
  collection.schema.removeField("2utysd8j")

  return dao.saveCollection(collection)
})
