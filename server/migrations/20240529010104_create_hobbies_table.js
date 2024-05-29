/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("hobbies", (table) => {
    table.increments("id").primary();
    table.string("hobby_name").notNullable();
    table.string("hobby_description").notNullable();
    table.string("image");
    table.string("hobby_wiki").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("hobbies");
};
