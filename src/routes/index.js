import {Router} from 'express';
const router=Router();

router.get('/', (req,res) => res.render('index',{title:'Inicio'}))

router.get('/menu', (req,res) => res.render('menu',{title:'Menu'}))


export default router;