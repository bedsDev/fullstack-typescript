import express from 'express';
import {routes} from './routes'

console.log("Hello World1!")


// abstract class App {

// 	static get port(): number { return 4201 }

// 	static init(): any {

// 		switch (process.argv[2]) {

// 			case 'start-server':
// 				return App.start_server()
// 			default:
// 				return App.display_help()
//         }
//         return App.start_server();
// 	}

// 	static start_server(): void {
		
// 		const server = express()
// 		server.get('/make-vehicle', App.make_vehicle)
// 		server.get('/', (req, res) => { res.send('call /make-vehicle to create a vehicle') })
// 		server.listen(App.port, () => { console.log('Listening on port ' + App.port) })
// 	}

// 	static make_vehicle(request: express.Request, response: express.Response) {
		
// 		let types: Array<string> = [ GroceryGetter.name, CopAttractor.name, JunkHauler.name ]
// 		if (!request.query.class || !types.includes(request.query.class)) { 
// 			return response.send('class parameter must be one of [ ' + types.join(' | ') + ' ]')
// 		}

// 		SimpleAPI.make_vehicle(request.query.class)
// 			.then((vehicle) => { response.json(vehicle) })
// 	}

// 	static display_help() { console.log('usage: index.ts [ start-server | list-vehicles ]')}
// }

// App.init();

const app = express();
// Allow any method from any host and log requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    // res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if ('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
})
// Handle POST requests that come in formatted as JSON
app.use(express.json())
// A default hello word route

app.use('/',routes);
// app.get('/', (req, res) => {
//     // console.log(req);
//     res.send([{ message: 'hello world' }]);
// });
// start our server on port 4201
app.listen(4201, '127.0.0.1', function () {
    console.log("Server now listening on 4201");
});