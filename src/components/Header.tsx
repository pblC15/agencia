import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/logo.png'
export default function Header(){const [open,setOpen]=useState(false); const links=[['Serviços','servicos'],['Projetos','projetos'],['Processo','processo'],['Sobre','sobre']]; return <header className="header"><div className="container nav"><a href="#inicio" className="brand"><img src={logo} alt="Agência Goolbe"/></a><nav className={open?'navlinks open':'navlinks'}>{links.map(([l,id])=><a key={id} href={'#'+id} onClick={()=>setOpen(false)}>{l}</a>)}<a className="btn small" href="#contato" onClick={()=>setOpen(false)}>Solicitar orçamento</a></nav><button className="menu" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button></div></header>}
