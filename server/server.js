import http from "http";
import {Pool} from "pg";
import app from "./app";
import "dotenv/config";

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//  },
//   //don't push from line 12-16;
//   host: "ec2-63-32-7-190.eu-west-1.compute.amazonaws.com",
//   port: 5432,
//   user: "utrjvtawiylfiq",
//   password: "31fa1828fcd521be2e4599a96fece2696afc76c788eab72cee16410bd2465f0d",
//   database: "d4hdbq2ksaqpvm"
// });

// pool.connect();




// app.get("/teachers", (req, res) => {
// const teacherQuery = `SELECT * FROM teacher;`
//   pool.query(teacherQuery, (error, result) => {
//     if (error) {
//       res.status(500).send(error);
//     } else {
//       res.json(result.rows);
//     }
//   })}
// );


const port = parseInt(process.env.PORT || "3000");

const server = http.createServer(app);

server.on("listening", () => {
	const addr = server.address();
	const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
	// eslint-disable-next-line no-console
	console.log(`Listening on ${bind}`);
});

process.on("SIGTERM", () => server.close());

server.listen(port);
