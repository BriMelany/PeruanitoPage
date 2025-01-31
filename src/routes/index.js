import {Router} from 'express';
const router=Router();
import { ConsultarPlatos } from '../services/conexion.js';

router.get('/', (req,res) => res.render('index',{title:'Inicio'}))
router.get('/menu', (req,res) => res.render('menu',{title:'Menu'}))
router.get('/entradas',(req,res) =>res.render('entradas',{title:'Entradas'}))
router.get('/platos',(req,res) =>res.render('platos',{title:'Platos'}))
router.get('/bebidas',(req,res) =>res.render('bebidas',{title:'Bebidas'}))
router.get('/iniciosesion',(req,res) =>res.render('iniciosesion',{title:'Iniciar Sesión'}))
router.get('/registro',(req,res) =>res.render('registro',{title:'Registro'}))
router.get('/promociones',(req,res) =>res.render('promociones',{title:'Promociones'}))
router.get('/api/get-platos',async(req,res)=>{
    const platos=await ConsultarPlatos();
    res.status(200).json(platos);
});
router.get('/carrito',(req,res) =>res.render('carrito',{title:'Carrito'}))
router.get('/pago',(req,res) =>res.render('pago',{title:'Pago'}))



export default router;