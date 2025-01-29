import pg from 'pg';
const {Client}=pg;

const config={
    user:'bd_peruanito_user',
    host: 'dpg-cu179ld6l47c73a132b0-a.oregon-postgres.render.com',
    database: 'bd_peruanito',
    password: 'sE7u0jQ2EUvzdY0Y2elmVCpbpbgi3w4n',
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

export async function ConsultarPlatos() {
    const client = new Client(config);
    try {
        await client.connect();
        const result = await client.query('SELECT * FROM platos');
        return result.rows;
    } catch (error) {
        console.log('Error en la conexión');
    }
}