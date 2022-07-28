/**
 * @param {string[]} emails
 * @return {number}
 */

const isValidEmail = (email) => {
    let opMail = '';
    
    if(email === "@") return false;
    if(email.length === 0 || email.startsWith("+") || !email.endsWith(".com")) return false;
    
    const [localName, domainName] = email.split('@');
    
    for(let i = 0; i < localName.length; i++) {
      
        let char = localName[i];
        let code = char.charCodeAt();
        
        if(code === 43) {
            break;
        }
        
        if(code === 46) {
            continue;
        }
        
        if (code >= 97 && code <= 122 ) {
            opMail += char;
        }
            
    }
    
    return opMail +'@'+ domainName;
};

const numUniqueEmails = function(emails) {
    let count = 0;
    const emailMap = {};
    
    for(let i = 0; i < emails.length; i++) {
         let validEmail = isValidEmail(emails[i]);
         
         if(validEmail && !(validEmail in emailMap)) {
             emailMap[validEmail] = true;
             count++;
         }
    }

    return count;
};