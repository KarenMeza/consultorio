import { Table, NumberInput,Button,Group,Text} from '@mantine/core';
import React from 'react'
import { useState } from 'react';


const KilosMacro = ({kcal,pesoMacro}) => {
  
  const [proteina, setProteina]= useState(0.0);
  const [lipidos, setLipidos]= useState(0.0); 
  

  function formulasProteina(f){
    switch(f){
      case 'porcentaje': 
        return proteina * pesoMacro * 4 / kcal *100
      case 'kcal': 
        return proteina * pesoMacro * 4
      case 'g': 
        return proteina * pesoMacro
        default: return 0
    }
  }

  function formulasLipidos(f){
    switch(f){
      case 'porcentaje':
        return lipidos * pesoMacro * 9 / kcal*100
      case 'kcal':
        return lipidos * pesoMacro * 9
      case 'g':
        return lipidos * pesoMacro
        default: return 0
    }
  }

  function formulasCarbohidratos(f){
    switch(f){
      case 'porcentaje':
        return 100 - (formulasLipidos('porcentaje') + formulasProteina('porcentaje'))
      case 'kcal':
        return kcal - ((lipidos * pesoMacro * 9) + (proteina * pesoMacro * 4))
      case 'g':
        return (kcal - ((lipidos * pesoMacro * 9) + (proteina * pesoMacro * 4))) / 4
      case 'gKg':
        return (kcal - ((lipidos * pesoMacro * 9) + (proteina * pesoMacro * 4))) / 4 / pesoMacro
        default: return 0
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
    return formulasCarbohidratos('porcentaje') + formulasLipidos('porcentaje') + formulasProteina('porcentaje')
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
            <td><Text>{formatearImpresion(formulasProteina('porcentaje'))}</Text></td>
            <td><Text>{formatearImpresion(formulasProteina('kcal'))}</Text></td>
            <td><Text>{formatearImpresion(formulasProteina('g'))}</Text></td>
            <td>
                    <NumberInput
                    radius="md"
                    size="xs" 
                    sx={{ maxWidth: 50, minWidth: 70 }}
                    min={0}
                    defaultValue={0.0} 
                    precision={2}
                    step={0.01} 
                    max={10}
                    value={proteina} onChange={(val) => setProteina(val)}
                />
             </td>
        </tr>

        <tr>
          <td>Lipidos</td>
            <td><Text>{formatearImpresion(formulasLipidos('porcentaje'))}</Text></td>
            <td><Text>{formatearImpresion(formulasLipidos('kcal'))}</Text></td>
            <td><Text>{formatearImpresion(formulasLipidos('g'))}</Text></td>
            <td>
                    <NumberInput
                    
                    radius="md"
                    size="xs"
                    sx={{ maxWidth: 50, minWidth: 70 }}
                    min={0}
                    defaultValue={0.0} 
                    precision={2}
                    step={0.01} 
                    max={10}
                    value={lipidos} onChange={(val) => setLipidos(val)}
                />
             </td>    

        </tr>

        <tr>
          <td>Carbohidratos</td>
            <td><Text>{formatearImpresion(formulasCarbohidratos('porcentaje'))}</Text></td>
            <td><Text>{formatearImpresion(formulasCarbohidratos('kcal'))}</Text></td>
            <td><Text>{formatearImpresion(formulasCarbohidratos('g'))}</Text></td>
            <td><Text>{formatearImpresion(formulasCarbohidratos('gKg'))}</Text></td>
            
        </tr>
            
        <tr>
          <td>Total</td>
            <td>{formatearImpresion(porcentajeTotal())}%</td>
            <td>{kcal.toFixed(2)}</td>

        </tr>
      </tbody>
    </Table>
    
    
  )
}

export default KilosMacro