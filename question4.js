const globalScope = "Global Scope" // We can access anywhere in this program and cannot change the value of this variable.

function scopeExp() {

    var functionScope = "Function Scope" // Can be accessed only inside the function.

    if (functionScope) {

        let blockScope = "Block Scope" // Can only access inside this "if" block.
        console.log(blockScope)
        var varBlockScope = "var Block Scope" // With "var" we can access outside "if" block.

    }

    console.log(varBlockScope)
    console.log(functionScope)
    console.log(globalScope)
}


scopeExp()