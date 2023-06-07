import axios from 'axios';



export const signup = (obj) => {
    let response = axios.post("http://localhost:8080/home/users/create",obj)
    return response
}
 export const onetimepass = (obj) =>
{
    let response = axios.post("http://localhost:8080/password/onetimepassword",obj)
    return response

}
export const lookingjob = (obj) =>
{
    let response = axios.post("http://localhost:8080/home/job/createjob",obj)
    return response

}
export const hireperson = (obj) =>
{
    let response = axios.post("http://localhost:8080/hire/createjob",obj)
    return response

}
export const network = (obj) =>
{
    let response = axios.post("http://localhost:8080/build/create/buildnetwork",obj)
    return response

}
export const collaborateApi = (obj) =>
{
    let response = axios.post("http://localhost:8080/collaborate/create/collaborate",obj)
    return response

}
export const mentorApi = (obj) =>
{
    let response = axios.post("http://localhost:8080/home/mentor/creatementor",obj)
    return response

}
export const mentorshipApi = (obj) =>
{
    let response = axios.post("http://localhost:8080/mentorship/create/mentorship",obj)
    return response

}
export const investmentApi = (obj) =>
{
    let response = axios.post("http://localhost:8080/forinvest/create/investment",obj)
    return response

}
export const investorApi = (obj) =>
{
    let response = axios.post("http://localhost:8080/toinvest/create/toinvest",obj)
    return response

}
export const advertiseApi = (obj) =>
{
    let response = axios.post("http://localhost:8080/advertise/create/advertise",obj)
    return response

}
export const affiliateApi = (obj) =>
{
    let response = axios.post("http://localhost:8080/affiliate/create/affiliate",obj)
    return response

}

export const referralCodeApi = (obj) =>
{
    let response = axios.post("http://localhost:8080/referal/create/referalcode",obj)
    return response

}
// export const referrerApi = (obj) =>
// {
//     let response = axios.post("http://localhost:8080/referrer/create/referrer",obj)
//     return response

// }

export const accountApi = (obj) =>
{
    let response = axios.post("http://localhost:8080/accountinfo/create/account",obj)
    return response

}
export const personinfoApi = (obj) =>
{
    let response = axios.post("http://localhost:8080/personinfo/create/persondetails",obj)
    return response

}
export const contactinfoApi = (obj) =>
{
    let response = axios.post("http://localhost:8080/contactinfo/create/contact",obj)
    return response

}
export const educationApi = (obj) =>
{
    let response = axios.post("http://localhost:8080/education/create/educationaldetails",obj)
    return response

}
export const experienceApi = (obj) =>
{
    let response = axios.post("http://localhost:8080/experience/create/experience",obj)
    return response

}
export const projectApi = (obj) =>
{
    let response = axios.post("http://localhost:8080/projectdetails/create/project",obj)
    return response

}



export const signupApi = (obj) => {
    console.log(obj)
    let response = axios.post("http://localhost:8080/karands/saveuser",obj)
    return response
}

export const LookingForJobApi = (obj) =>
{
    let response = axios.post("http://localhost:8080/karands/lookingforjob/save",obj)
    return response

}



