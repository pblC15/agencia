import panelaCheia from './assets/projects/panela-cheia.jpg'
import camilaNutri from './assets/projects/camila-nutri.jpg'
import matheusAdvocacia from './assets/projects/matheus-advocacia.jpg'
import rodrigoNutrologo from './assets/projects/rodrigo-nutrologo.jpeg'

export type Project = {
  slug:string; title:string; category:string; image:string; description:string; tags:string[]; demoUrl:string
}
export const projects: Project[] = [
 {slug:'panela-cheia',title:'Panela Cheia',category:'Website para restaurante',image:panelaCheia,description:'Website institucional para restaurante, com apresentação da marca, cardápio, ambiente e canais de contato.',tags:['HTML','CSS','JavaScript','Bootstrap'],demoUrl:'https://panelacheia.agenciagoolbe.site'},

 {slug:'camila-nutri-esportiva',title:'Camila Fernandez',category:'Nutrição Esportiva',image:camilaNutri,description:'Landing page profissional para nutricionista esportiva, com apresentação de serviços e comunicação focada no atendimento.',tags:['HTML','CSS','JavaScript'],demoUrl:'https://nutricamila.agenciagoolbe.site'},
 
 {slug:'matheus-fernandes-advocacia',title:'Matheus Fernandes Advocacia',category:'Website institucional',image:matheusAdvocacia,description:'Site institucional para escritório de advocacia, com áreas de atuação, apresentação profissional e formulário de contato.',tags:['HTML','CSS','JavaScript','PHP'],demoUrl:'https://matheusadv.agenciagoolbe.site'},
 
 {slug:'rodrigo-leite',title:'Dr. Rodrigo Leite',category:'Nutrologia e Nefrologia',image:rodrigoNutrologo,description:'Website profissional para área da saúde, estruturado para apresentar especialidades, informações e facilitar o contato.',tags:['HTML','CSS','JavaScript'],demoUrl:'https://rodrigonutrologo.agenciagoolbe.site'}
]
