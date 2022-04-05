const photos = [];

async function photoUpload() {
    let uploadStatus = new Promise((resolve, reject) => {
        setTimeout(() => {
            photos.push("Profile Pic");
            resolve("PhotoUploaded!");
        }, 3000);
    })

    let result = await uploadStatus;
    console.log(result);
    console.log(photos.length);
}

photoUpload();