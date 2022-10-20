import { storage } from '../libs/firebase.js'
import { ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage';
import { v4 as createID } from 'uuid';

interface PhotoType {
  name: string,
  url: string
}

export const getAll = async () => {
    let list:PhotoType[] = [];
    
    const imagesFolder = ref(storage, "postsImages");
    const photoList = await listAll(imagesFolder);

    for(let i in photoList.items){
        let photoUrl = await getDownloadURL(photoList.items[i]);

        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        });
    }
    
    return list;
}

export const insertProfile = async (file) => {
    if(['image/jpeg','image/jpg','image/png'].includes(file.type)){

        let randomName = createID();
        let newFile = ref(storage, `profilePics/${randomName}`);
        let upload = await uploadBytes(newFile, file);
        let photourl = await getDownloadURL(upload.ref);
        return{name: upload.ref.name,url: photourl};
    }else{
        return new Error('Tipo de arquivo nao permitido');
    }
}

export const insertPosts = async (file) => {
    if(['image/jpeg','image/jpg','image/png'].includes(file.type)){

        let randomName = createID();
        let newFile = ref(storage, `postsImages/${randomName}`);
        let upload = await uploadBytes(newFile, file);
        let photourl = await getDownloadURL(upload.ref);
        return{name: upload.ref.name,url: photourl};
    }else{
        return new Error('Tipo de arquivo nao permitido');
    }
}

