// Dependencies

// Requiring Courses model
const db = require('../models');

// Routes
module.exports = app => {

    // Get all courses for userProgram with status 'Not Complete' and return results as JSON
    app.get('/api/not-complete', (req, res) => {
        db.Course.findAll({
            where: {
                degree_program: userProgram,
                status: 'Not Complete',
            }
        }).then((result) => res.json(result));
    });

    // Get all courses for userProgram with status 'In Progress' and return results as JSON
    app.get('/api/in-progress', (req, res) => {
        db.Course.findAll({
            where: {
                degree_program: userProgram,
                status: "In Progress",
            }
        }).then((result) => res.json(result));
    });

    // Get all courses for userProgram with status 'Complete' and return results as JSON
    app.get('/api/complete', (req, res) => {
        db.Course.findAll({
            where: {
                degree_program: userProgram,
                status: "Complete",
            }
        }).then((result) => res.json(result));
    });

    // Update status of course and return results as JSON
    app.put('/api/courses', (req, res) => {
        db.Course.update(
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
        db.Course.destroy({
            where: {id: req.params.id}
        }).then((result) => res.json(result))
    });

};

