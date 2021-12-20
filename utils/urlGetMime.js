const urlGetMime = ( b64)=>{
    // base64 encoded data doesn't contain commas    
    let base64ContentArray = b64.split(",");  

    // base64 content cannot contain whitespaces but nevertheless skip if there are!
    return base64ContentArray[0].match(/[^:\s*]\w+\/[\w-+\d.]+(?=[;| ])/)[0];
};

export default urlGetMime;