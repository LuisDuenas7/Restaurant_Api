import {sequelize} from './database/database.js'
import app from './app.js'
import dotenv from 'dotenv'
 
import './models/customer_addresses.js'
import './models/customer_details.js'
import './models/employees.js'
import './models/roles.js'
import './models/users.js'


dotenv.config();

const PORT= process.env.PORT || 8002

async function main(){
 try {
   await sequelize.authenticate;
   //await sequelize.sync({force:true})
   console.log('Connection to DB has been established succesfully')
   app.listen(PORT,()=>{
    console.log(`Server listen in port ${PORT}`)
   })
    
 } catch (error) {
    console.log('Unable to connect to the server and database', error)
 }

}

main()