exports.up = function(knex, Promise) {
  return knex.schema.createTable('snowboard', function(table){
    table.increments();
    table.string('make');
    table.string('model');
    table.float('size').notNullable();
    table.float('price');
    table.integer('flex').nullable();
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('snowboard');
};
