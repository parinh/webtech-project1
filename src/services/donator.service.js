import {donatorCollection} from '../firebase'

function create(data){
    return donatorCollection.add({
        name: data.name,
        tel: data.tel,
        type: data.type,
        volume: parseInt(data.volume),
        createdAt: new Date()       
    })
}




export const donatorService = {
  create,
}