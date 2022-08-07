// import all models
const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');
const Vote = require('./Vote');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
})