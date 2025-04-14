import axios from 'axios'
const baseURL = 'http://localhost:5000'

export const signUpPost = async ({email,telephone,username,password,userType})=>{
    try{
        const {data} = await axios.post(`${baseURL}/sign-up`,
            {email,telephone,username,password,userType}
        )
        return data
        
    }catch(err){
         console.log(err)
    }

}

export const logIn = async({username,password,userType})=>{
    try{
        const {data} = await axios.post(`${baseURL}/log-in`,{
            username,
            password,
            userType
        })
        return data
    }catch(err){
        console.log(err)
    }
}