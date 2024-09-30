/*..................Registering & Emitting Events............*/

import EventEmitter from 'events';
const eventEmitterObj=new EventEmitter();

eventEmitterObj.setMaxListeners(15);
eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})
eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})

eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})

eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})

eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})

eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})

eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})

eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})

eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})

eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})

eventEmitterObj.on('end',(data)=>{
    console.log(data);
})

eventEmitterObj.once('start',(data)=>{
    console.log(data);
})

eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})

eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})

eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})


eventEmitterObj.emit('msg','hii msg event 1');
eventEmitterObj.emit('msg');
eventEmitterObj.emit('end','hii end event 1');
eventEmitterObj.emit('start','hii start event 1');
eventEmitterObj.emit('start','hii start event 2');
eventEmitterObj.emit('end','hii end event 2');
eventEmitterObj.emit('start','hii start event 3');

// eventEmitterObj.removeListener('msg',()=>{
//     console.log('removed listener for msg');
// });

eventEmitterObj.emit('msg','hii msg event 2...');
// eventEmitterObj.removeAllListeners('msg');
eventEmitterObj.emit('msg','hii msg event 3...');
eventEmitterObj.emit('msg','hii msg event 4...');
eventEmitterObj.emit('msg','hii msg event 5...');

console.log(eventEmitterObj.listeners('msg'))


/*......................Asynchronous error.......................*/

import EventEmitter from 'events';
const errorEventEmitter=new EventEmitter();

errorEventEmitter.on('error',(err)=>{
    console.error('An error occurred:',err.message);
});
//1
try{
    const abc=10;
    console.log(abc++);
}
catch(err){
    errorEventEmitter.emit('error',err);
}
console.log('Program execution completed');

//2
function fun(task){
    if (task === 'fail') {
          errorEventEmitter.emit('error', new Error('Task failed'));
    } else{
          console.log('Task performed successfully');
    }
}
fun('fail')
fun('completed')


/*......................Logging System ....................*/

const EventEmitter=require('events');

class Logger extends EventEmitter {
    logInfo(message){
        this.emit('info',message);
    }
    logWarning(message){
        this.emit('warning',message);
    }
    logError(message){
        this.emit('error',message);
    }
    logCritical(message){
        this.emit('critical',message);
    }
    logTrace(message){
        this.emit('trace',message);
    }
}
const logger=new Logger();

logger.on('info',(msg)=>console.log(msg));
logger.on('warning',(msg)=>console.warn(msg));
logger.on('error',(msg)=>console.error(msg));
logger.on('critical',(msg)=>console.error(msg));
logger.on('trace',(msg)=>console.trace(msg));

logger.logInfo("user logged in");
logger.logWarning("password is wrong");
logger.logError("failed request")
logger.logCritical("server crashed");
 logger.logTrace("API call started");


 /*.......................customizing EventEmitter.....................*/
 
 
// const EventEmitter=require('events');
// class CustomEventEmitter extends EventEmitter {
//     constructor(){
//         super();
//     }
//     fireEvent(){
//         this.emit('fire', 'This is an event fired');
//     }
// }
// const customEmitter=new CustomEventEmitter();
// customEmitter.on('fire',message=>console.log(message));

// customEmitter.fireEvent();




const EventEmitter=require('events');
class Chat extends EventEmitter {
    constructor(){
        super();
        this.message=[];
    }
    sendMessage(user,message){
        this.emit('message',user,message);
        this.message.push({user,message});
        // console.log("message=",this.message);
    }
    
    newUser(user) {
        this.emit('newUser', user);
    }
    deleteChat(user,message){
        const deleted=this.message.findIndex((para)=>{
            if(para.user===user&&para.message===message){
                // console.log("true");
                return true;
            }
        });
        if(deleted!==-1){
            // console.log("del=",deleted,this.message);
            this.message.splice(deleted,1);
            this.emit('delete',user,message);
        }
        else{
            // console.log("er");
            this.emit("error","no such message");
        }
    }

}
const chatRoom=new Chat();
chatRoom.on('message',(user,message)=>{
    console.log(`${user} says: ${message}`)
});

chatRoom.on('newUser',(user)=>{
    console.log(`New user joined: ${user}`)
});

chatRoom.on('delete',(user,message)=>{
    console.log(`${user} deleted: ${message}`)
});

chatRoom.on('error',(message)=>{
    console.log(message)
});


chatRoom.sendMessage('Alice',"hello, everyone");
chatRoom.newUser("harry");
chatRoom.sendMessage('tom',"bye, everyone");
chatRoom.deleteChat('tom',"bye, everyone");
chatRoom.newUser("geeta");
chatRoom.sendMessage('sunny',"good night, everyone");
chatRoom.deleteChat('sunny',"good night, everyone");
chatRoom.newUser("jack");
chatRoom.sendMessage('jack',"hii,i'm jack");
chatRoom.deleteChat("jack","hii");


/*.............................Handling Asynchronous Events......................................................*/

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

const asyncHandler = async (message) => {
    console.log("started...");
    await new Promise((resolve) =>{
         setTimeout(()=>{
             console.log("Async operation started!");
            console.log(`Received message: ${message}`);
             resolve();
         },1000)
        });
    console.log("completed!");
  }
  eventEmitter.on('data', async function(){
    try{
        console.log("Async event handler started!");
        await asyncHandler("Hello, this is an async event!");
        console.log("Async event handler completed!");
    }
    catch(err){
        console.error("An error occurred:",err.message);
    }
  });
eventEmitter.emit("data");


/*...................................Server Monitoring.......................................................*/

const os = require('os');
const EventEmitter = require('events');
class ServerMonitor extends EventEmitter {
    constructor() {
    super();
    this.checkServerLoad();
    this.checkMemoryUsage();
    }
    checkServerLoad() {
        setInterval(() => {
            const load = os.loadavg()[0];
            if (load > 1.5) {
                this.emit('overload', load);
            }}, 1000);
        }
    checkMemoryUsage(){
        setInterval(() => {
            const memUsage = os.totalmem() - os.freemem();
            const percentage = (memUsage / os.totalmem()) * 100;
            if (percentage > 80) {
                this.emit('memory-warning', percentage);
            }}, 1000);
    
    }
}
const monitor = new ServerMonitor();
monitor.on('overload', (load) => {
console.warn(`Warning: Server overload detected! Load: ${load}`);
});

monitor.on('memory-warning', (percentage) => {
console.warn(`Warning: Memory usage is high! Percentage: ${percentage}%`);
});


/*..................................Memory leaks in event emitter...........................................*/

const EventEmitter = require('events');
const eventEmitterObj=new EventEmitter();

eventEmitterObj.setMaxListeners(15);
eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})
eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})

eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})

eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})

eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})

eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})

eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})

eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})

eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})

eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})

eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})

eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})

eventEmitterObj.addListener('msg',(data)=>{
    console.log(data);
})

//avoiding memory leaks
eventEmitterObj.once('start',(data)=>{
    console.log(data);
})

eventEmitterObj.removeAllListeners('msg');

eventEmitterObj.emit('msg','msg event 1');
eventEmitterObj.emit('start','start event 1');
eventEmitterObj.emit('start','start event 2');
eventEmitterObj.emit('start','start event 3');

