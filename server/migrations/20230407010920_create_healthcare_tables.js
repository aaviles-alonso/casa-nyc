/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {

    return knex.schema.createTable('healthcare', (table) => {
        table.uuid('id').primary();
        table.string('name').notNullable();
        table.string('address').notNullable();
        table.string('phone').notNullable();
        table.string('zipcode').notNullable();
    });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('healthcare');

};
