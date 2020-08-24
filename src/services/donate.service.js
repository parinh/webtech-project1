import {openingdonateCollection} from '../firebase'

function create(data){
    return openingdonateCollection.add({
        name: data.name,
        tel: data.tel,
        type: data.type,
        volume: parseInt(data.volume)
    })
}

export const donateService = {
  create
}


