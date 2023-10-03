const logger = (store)=>(next)=>(action)=>{

    const currentState = store.getState()

    console.log("current",currentState)
    console.log("action", action)
    
    next(action)
    
    console.log("updated", store.getState())

    
}

export default logger