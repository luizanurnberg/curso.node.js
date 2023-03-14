const express = require('express')
const exphbs = require('express-handlebars')
const app = express()


//Defining that tue application will use handlebars 
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//Manipulating req
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())


//Reading static files
app.use(express.static('public'))

//Defining main page based on 'home.handlebars'
app.get('/', (req, res) => {
    res.render('home')
})

// //Gets the information typed by the user in 'home.handlebars' and insert into students data base. After that, it will redirect the aplication to main page
app.post('/students/insertstudent', (req, res) => {
    const studentName = req.body.studentName
    const studentClass = req.body.studentClass
    const sql = `INSERT INTO students (studentName, studentClass) VALUES('${studentName}', '${studentClass}')`
    pool.query(sql, function (err) {
        if (err) {
            console.log(err)
        }
        res.redirect('/')
    })
})

// //Shows all students registered in the data base. Using 'students.handlebars' to show the information
app.get('/students', (req, res) => {
    const sql = 'SELECT * FROM students'

    pool.query(sql, function (err, data) {
        if (err) {
            console.log(err)
            return
        }
        const student = data
        res.render('students', { student })
    })
})

// //If the user select one student, this route will show only the information of the selected student, based on it's id. Using 'student.handlebars' to show the information
app.get('/students/:id', (req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM students WHERE id = ${id}`
    pool.query(sql, function (err, data) {
        if (err) {
            console.log(err)
        }
        const student = data[0]
        res.render('student', { student })
    })
})

// //If the user select one student, this route will delete only the information of the selected student, based on it's id. After that, it will redirect the aplication to the students page
app.post('/students/removestudent/:id', (req, res) => {
    const id = req.params.id
    const sql = `DELETE FROM students WHERE ${id}`

    pool.query(sql, function (err) {
        if (err) {
            console.log(err)
        }
        res.redirect('/students')
    })
})

app.listen(3000, () => {
    console.log('A aplicação está rodando!')
})

