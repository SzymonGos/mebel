function signMeOut() {
    confirm("You are still signed in other devices. Would you like to sign out of these devices?");
}

function signMeOutInit() {
    const signInBtn = document.querySelector(".btn-signin");

    if(signInBtn !== null){
        signInBtn.addEventListener( 'click', signMeOut, false );
    }
}

export {signMeOutInit}