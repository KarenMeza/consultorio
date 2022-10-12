import { Navbar, NavLink } from "@mantine/core"
import React from "react"
import { useRouter } from "next/router"
import {BiHomeHeart, BiCalculator} from "react-icons/bi"
import {WiBarometer} from "react-icons/wi"

const NavbarCustom = () => {
    const router=useRouter()
  return (
    <Navbar width={{base:200}}>
        <NavLink
        active={router.pathname === '/'}
        label={'Inicio'}
        icon={<BiHomeHeart></BiHomeHeart>}
        onClick={() => router.push('/')}
        color="grape"
    />
    <NavLink
        active={router.pathname === '/imc'}
        label={'IMC'}
        icon={<WiBarometer></WiBarometer>}
        onClick={() => router.push('/imc')}
        color="grape"
    />
    <NavLink
        active={router.pathname === '/calculoDietetico'}
        label={'Calculo Dietetico'}
        icon={<BiCalculator/>}
        onClick={() => router.push('/calculoDietetico')}
        color="grape"
    />
    <NavLink
        active={router.pathname === '/alimentos'}
        label={'Busqueda Alimentos'}
        icon={<BiCalculator/>}
        onClick={() => router.push('/alimentos')}
        color="grape"
    />
      </Navbar>
  )
}

export default NavbarCustom