import{userService} from '../services/user.service'
import{router} from '../routes'

const user = JSON.parse(localStorage.getItem('user')) //ใช้งานเมื่อ log in ผ่าน มันจะเก็บข้อมูล getItem(user) จาก local storage แล้วก็ให้สถานะเริ่มต้น
const state = user
    ? {status: {loggedIn : true}, user: user}
    : {status: {}, user:null}

const mutations = { // เหมือน private method
    registerRequest(state){
        state.status = {registering: true}
    },

    registerSuccess(state){
        state.status = {}
    },
    
    registerFailure(state) {
        state.status = {}
    },

    loginRequest(state, user){ //ใช้งานตอนระหว่าง login
        state.status = { loggingIn : true}
        state.user = user
    },
     
    loginSuccess(state, user){ //ใช้งานตอนระหว่าง login
        state.status = {loggedIn: true}
        state.user = user
    },

    loginFailure(state){ //ใช้งานตอนระหว่าง login
        state.status = {}
        state.user = null
    },

    logout(state){
        state.status = {}
        state.user = null
    }
}

const actions = { //สร้างการทำงานนบางอย่างให้ภายนอกไปใช้งาน

    register({ dispatch,commit}, user){ //dispatch,commit ข้อมูลของ user จะใช้อันไหนก็ใส่อันนั้น dispatch,commit อะ
        commit('registerRequest') // commit ใช้เรียก mutations ของตัวเอง

        userService.register(user)
        .then(user =>{
            commit('registerSuccess')
            router.push ({name: 'Login'})
            setTimeout(() => {
                dispatch ('alert/success', 'Registration successful',{root: true})
            }, 1000);
        })
        .catch(error =>{
            commit('registerFailure')
            dispatch('alert/error',error.message, {root: true}) // dispatch ใช้เรียก actions ของ store ตัวอื่น
        })
    },

    login ({dispatch,commit}, {email,password}) { //ใช้งานข้อมูล email, password
        commit('loginRequest',{email}) //เมื่อมีการ loginRequest มันจะเก็บ email ใน local storage
        
        userService.login(email,password) //ทำงาน login ใน userservice จะทำตาม if else ข้างล่าง
        .then (user=>{
            commit('loginSuccess', user) //mutation login success จะทำงานให้เปลี่ยนสถานะเป็น loginSuccess
            router.push({name: 'Home'})
        })

        .catch (error => {
            commit('loginFailure',user) // เหมือน success
            dispatch('alert/error', error.message,{root: true}) //แสดง alert  error ที่เซตไว้ออกมา //root : true คือมันเรียกข้าม module เลยต้องเขียน
        })
    },

    logout({commit}){
        userService.logout() //ทำงาน logout ใน service
        commit("logout") // เปลี่ยน state เป็น logout
        router.push({name: "Login"})
    }
}

export const account = {
    namespaced: true,
    state,
    mutations,
    actions

}
