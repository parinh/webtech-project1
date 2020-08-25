import {openingdonateCollection} from '../firebase'

function create(data){
    return openingdonateCollection.add({
        name: data.name,
        tel: data.tel,
        type: data.type,
        volume: parseInt(data.volume),
        address: data.address,
        createdAt: new Date()       
    })
}





export const donateService = {
  create,
}


