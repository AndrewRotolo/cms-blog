const User = require('./User');
const BlogPost = require('./Blogpost');
const Comment = require('./Comment');

User.hasMany(BlogPost, {
    foreignKey: 'user-id',
    onDelete: 'CASCADE'
});

BlogPost.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(BlogPost, {
    foreignKey: 'blogpost_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

BlogPost.hasMany(Comment, {
    foreignKey: 'blogpost_id',
    onDelete: 'CASCADE'
});

module.exports = { User, BlogPost, Comment };