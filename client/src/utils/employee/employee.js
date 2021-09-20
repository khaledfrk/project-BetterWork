import 'core-js'
import "regenerator-runtime/runtime"

import axios from "axios"

const baseUrl = "http://localhost:3000"

// login employee
export const loginEmp = async (email, password) => {
    const data = await axios.post(baseUrl + '/employees/login',{email, password})
    return data
}

// Update Profile of employee
export const updateEmpAcc = async (id, updates = {}, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
    }
    const  data = await axios.patch(baseUrl + '/employees/modify/'+id, updates, {headers: headers})
    return data;
}

export const changeEmpPassword = async (id, updates, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
    }
    const  data = await axios.patch(baseUrl + '/employees/password/'+id, updates, {headers: headers})
    return data;
}

// logout employee
export const logoutEmp = async (token) => {
    try {
        const data = await axios.post({
            url: baseUrl + `/employees/logout`,
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        }).then((data) => {
            console.log(data)
        })
        localStorage.removeItem("Auth")
        return data
    } catch (e) {
        console.log(e)
    }
}

//logoutAll employee
export const logoutAllEmp = async (token) => {
    try {
        const { data } = await axios.post({
            url: baseUrl + `/employees/logoutall`,
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        }).then((data) => {
            console.log(data)
        })
  
      localStorage.removeItem("Auth")
      return data
    } catch (e) {
      console.log(e)
    }
}

//create employee's account by admin
export const createAcc = async (data , token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const formData = await axios.post(baseUrl + '/employees', data, {headers: headers})
    return formData;
}

//Delete employee's account by admin
export const deleteEmpAcc = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.delete(baseUrl +'/employees/'+id, {headers: headers})

    return data;
}


//Add profile pic to employee
export const addProfileImg = async (file, token) => {
    const data = await axios.post({
        url: baseUrl + '/employees/me/image',
        data: file,
        headers: {
            'Content-Type': 'multipart/form-data',
            "Authorization": `Bearer ${token}` 
        }
    }).then( (response) => {
        console.log(response);               
        //console.log('Finish')
    })
    return data;
}

//Delete profile pic of employee
export const deleteEmpPic = async (token) => {
    const { data } = await remove({
        url: `/employees/me/image`,
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    })

    return data;
}

export const getAllEmployees = async (token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+'/employees', {headers: headers})
    return data
}

export const getEmployeeById = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+'/employees/'+id, {headers: headers})
    return data
}
export const getEmployeesByName = async (lastname, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/employees/search/"+ lastname, { headers })
    return data
}