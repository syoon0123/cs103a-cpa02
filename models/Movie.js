'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var movieSchema = Schema( {
    title: String,
    year: Number,
    cast: Mixed,
    genres: Mixed,

} );

module.exports = mongoose.model( 'Movie', movieSchema );
