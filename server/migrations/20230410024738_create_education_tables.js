/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {

    return knex.schema.createTable('education', (table) => {
        table.uuid("id").primary();
        table.string("name").notNullable();
        table.string("address").notNullable();
        table.string("phone").notNullable();
        table.string("zipcode").notNullable();
        table.string("description", 1000).notNullable();
        table.string("class_type").notNullable();
        table.string("link").notNullable();

    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('education');

};
