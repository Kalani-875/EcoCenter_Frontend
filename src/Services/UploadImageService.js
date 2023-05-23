import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const uploadImage = async (imageFile) => {
    const storage = getStorage();
    console.log("file name " + imageFile.name)
    const storageRef = ref(storage, `images/${imageFile.name}`);


    try {
        // Upload image to Firebase Storage
        await uploadBytes(storageRef, imageFile);

        // Get download URL of the uploaded image
        const downloadURL = await getDownloadURL(storageRef);

        return downloadURL;
    } catch (error) {
        console.error('Error uploading image:', error);

        return null
    }
};


export default { uploadImage }