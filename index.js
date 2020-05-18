const express=require('express')
const path=require('path')
const exphbs=require('express-handlebars')
const homeRoutes=   require('./routs/home')
const addRoutes=   require('./routs/add')
const courseRoutes=   require('./routs/course')

const app=express()
//Створення движка
const hbs=exphbs.create({
    defaultLayout:'main',
    extname:'hbs'
})
app.engine('hbs', hbs.engine)
app.set('view engine','hbs')
// ===================================================================
// статична папка 
app.use(express.static('public')) 
app.use(express.urlencoded({extended:true}))
// роути 
app.use('/',homeRoutes)
app.use('/add',addRoutes)
app.use('/course',courseRoutes)

app.set('views','views')

PORT=process.env.PORT||3001
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})