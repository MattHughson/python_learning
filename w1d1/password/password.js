var passwordMod = {
  a: "4", 
  e: "3",
  o: "0",
  l: "1"
} 
// console.log(typeof(passwordMod))

// function obfuscate (argument){
// //   console.log(argument.length)
// /for(var i = 0; i < argument.length; i++)
// if ('key' in passwordMod){ "true"
// //   //retun Object.values(passwordMod)
// // })
// // // console.log(obfuscate("password"))
//  obfuscate(process.argv[2])

function obfuscate (argument){
  var string = ""
  for(var i = 0; i < argument.length; i++){
    if(argument[i] in passwordMod){
      string += passwordMod[argument[i]]
    } else { string += argument[i]

    }
  }
return console.log(string)
}

obfuscate(process.argv[2])