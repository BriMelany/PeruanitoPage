import pg from 'pg';
const {Client}=pg;

const config={
    user:'db_lacasainformatica_user',
    host: 'dpg-cu9bvv23esus73b2o410-a.oregon-postgres.render.com',
    database: 'db_lacasainformatica',
    password: 'Y6Wxkx2RNSh4DAGd5rGPgzxYIIR5d7tY',
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    }
}

export async function Conectar(params){
    const client= new Client(config);
    try{
        await client.connect();
        console.log('Conexión exitosa');
    }catch(error){
        console.log('Error en la conexión');
    }
}