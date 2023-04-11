/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {

    return knex.schema.createTable('healthcare', (table) => {
        table.increments("id").primary().unsigned();
        table.string('borough').notNullable();
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
