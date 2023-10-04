setTimeout(() => {
    throw new Error("oops")
}, 300)

//process represents the current process of the system
// -> operating system, file system, current file, variables, metadata, hardware, ip, ...
//process.on() - process event handler
process.on("uncaughtException", () => {
    console.log("sync error");
})

process.on("unhandledRejection", () => {
    //handle async errors    
    console.log("async error");
})