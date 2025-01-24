import {Router} from 'express';
const router=Router();

router.get('/', (req,res) => res.render('index',{title:'Inicio'}))
router.get('/menu', (req,res) => res.render('menu',{title:'Menu'}))
router.get('/entradas',(req,res) =>res.render('entradas',{title:'Entradas'}))
router.get('/platos',(req,res) =>res.render('platos',{title:'Platos'}))
router.get('/bebidas',(req,res) =>res.render('bebidas',{title:'Bebidas'}))
router.get('/iniciosesion',(req,res) =>res.render('iniciosesion',{title:'Iniciar Sesión'}))

export default router;