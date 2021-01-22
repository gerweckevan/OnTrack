// Dependencies

// Requiring Courses model
const db = require('../models');

// 1. Create user table - New user
 //    returns the new user object - userID
 // 2. FindAll from buisnessCourse table where major = UserMajorID
 //    then returns all courses for that major
 //    now you have UserInfo(userid) major's info (courses and coursID)
 // 3. Create in userCourse w/ forgein keys of UserID and MajorID
// Routes
module.exports = app => {

    // Get all courses for userProgram with status 'Not Complete' and return results as JSON
    app.get('/api/incomplete', (req, res) => {
        db.Business_Course.findAll({
            where: {
                status: false,
            }
        }).then((result) => res.json(result));
    });

    // Get all courses for userProgram with status 'Complete' and return results as JSON
    app.get('/api/complete', (req, res) => {
        db.Business_Course.findAll({
            where: {
                status: true,
                // type: "Business Core Requirement",
            }
        }).then((result) => res.json(result));
    });

    // Update status of course and return results as JSON
    app.put('/api/courses', (req, res) => {
        db.Business_Course.update(
            {
                status: req.body.status,
            },
            {
                where: {id: req.body.id}
            }
        ).then((result) => res.json(result));
    });

    // Delete course
    app.delete('/api/courses/:id', (req, res) => {
        db.Business_Course.destroy({
            where: {id: req.params.id}
        }).then((result) => res.json(result))
    });
};

