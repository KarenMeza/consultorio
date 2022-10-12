import React from 'react'
import { Table, NumberInput,Button,Group,Text } from '@mantine/core';
import { useState } from 'react';

const PorcentajeMacro = ({kcal, pesoMacro}) => {

  const [proteina, setProteina]= useState(0);
  const [carbohidratos, setCarbohidratos]= useState(0);
  const [lipidos, setLipidos]= useState(0);
  
  function kcalProteina(f){
    switch(f){
      case 'kcal': 
        return kcal * proteina / 100
      case 'g': 
        return kcal * proteina / 100 / 4
      case 'gKg': 
        return kcal * proteina / 100 / 4 /pesoMacro
    }
  }

  function kcalLipidos(f){
    switch(f){
      case 'kcal':
        return kcal * lipidos / 100
      case 'g':
        return kcal * lipidos / 100/9
      case 'gKg':
        return kcal * lipidos / 100 /9 / pesoMacro
    }
  }

  function kcalCarbohidratos(f){
    switch(f){
      case 'kcal':
        return kcal * carbohidratos / 100
      case 'g':
        return kcal * carbohidratos / 100 / 4
      case 'gKg':
        return kcal * carbohidratos / 100 /4 / pesoMacro
    }
  }

  function formatearImpresion(valor){
    if(isNaN(valor)){
      return '0.0'
    }else{
      return valor.toFixed(2)
    }
  }

  function porcentajeTotal(){
    return proteina + lipidos + carbohidratos
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>Macronutrientes</th>
          <th>%</th>
          <th>Kcal</th>
          <th>Gr</th>
          <th>Gr/Kg</th>
        </tr>
      </thead>
      
      <tbody>
        {/* {rows} */}
        <tr>
          <td>Proteinas</td>
            <td>
                <NumberInput
                radius="md"
                size="xs"
                sx={{ maxWidth: 50, minWidth: 70 }}
                min={1}
                defaultValue={0.0} 
                precision={2}
                step={10.00}
                max={100 - lipidos - carbohidratos}
                value={proteina} onChange={(val) => setProteina(val)}
            />
            </td>
            <td><Text>{formatearImpresion(kcalProteina('kcal'))}</Text></td>
            <td><Text>{formatearImpresion(kcalProteina('g'))}</Text></td>
            <td><Text>{formatearImpresion(kcalProteina('gKg'))}</Text></td>
        </tr>

        <tr>
          <td>Lipidos</td>
            <td>
                  <NumberInput
                  radius="md"
                  size="xs"
                  sx={{ maxWidth: 50, minWidth: 70 }}
                  min={1}
                  defaultValue={0.0} 
                  precision={2}
                  step={10.00}
                  max={100 - proteina - carbohidratos}
                  value={lipidos} onChange={(val) => setLipidos(val)}  
            />
            </td>
            <td><Text>{formatearImpresion(kcalLipidos('kcal'))}</Text></td>
            <td><Text>{formatearImpresion(kcalLipidos('g'))}</Text></td>
            <td><Text>{formatearImpresion(kcalLipidos('gKg'))}</Text></td>
        </tr>

        <tr>
          <td>Carbohidratos</td>
            <td>
                    <NumberInput
                    radius="md"
                    size="xs"
                    sx={{ maxWidth: 50, minWidth: 70 }}
                    min={1}
                    defaultValue={0.0} 
                    precision={2}
                    step={10.00}
                    value={carbohidratos} onChange={(val) => setCarbohidratos(val)}
                    max= {100 - proteina - lipidos}
                />
                </td>
            <td><Text>{formatearImpresion(kcalCarbohidratos('kcal'))}</Text></td>
            <td><Text>{formatearImpresion(kcalCarbohidratos('g'))}</Text></td>
            <td><Text>{formatearImpresion(kcalCarbohidratos('gKg'))}</Text></td>
        </tr>
            
        <tr>
          <td>Total</td>
            <td><Text>{formatearImpresion(porcentajeTotal())}%</Text></td>
            <td>{kcal.toFixed(2)}</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default PorcentajeMacro