import React from 'react'
import { Center, Space, TextInput,Text,Divider,Title,Button,Box,Group,Select } from '@mantine/core'
import {useForm} from '@mantine/form'
import { factoresActividad } from '../const/factores'


const MifflinSt = () => {
    const form= useForm({
        initialValues: {
            peso: '',
            altura: '',
            edad: '',
            genero: '',
            factor:'',
            get:0.0,
            fa: 0.0,
            formula: 0.0

        }
    })

    const Calcular = () => {
        const peso = form.values.peso;
        const altura = form.values.altura;
        const edad = form.values.edad;
        const genero=form.values.genero;
        
        let formula=0
        if(genero=='masculino'){
          formula= ((10*parseFloat(peso)) + (6.25*100*parseFloat(altura) ) - (5*parseFloat(edad)) + 5)
        }else{
          formula= ((10*parseFloat(peso)) + (6.25*100*parseFloat(altura) ) - (5*parseFloat(edad)) - 161)
        }

        const fa= (factoresActividad[form.values.factor] * formula)
        const get= fa;
        
     
        form.setValues({
          formula: formula.toFixed(2),
          fa: fa,
          get:get.toFixed(2)
        })
      }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
        <Text size="md" color="purple" align="center">Mifflin St-Jeor</Text>
        <Divider my="sm" />
        <Space h="xs" />
      <form onSubmit={form.onSubmit((values) => Calcular())}>
        
        <TextInput
          label="Peso"
          placeholder="Ingresa tu peso"
          {...form.getInputProps('peso')}
        />

        <TextInput
          label="Altura"
          placeholder="Ingresa tu altura"
          {...form.getInputProps('altura')}
        />

        <TextInput
          label="Edad"
          placeholder="Ingresa tu edad"
          {...form.getInputProps('edad')}
        />
        <Space/>
        <Select
          label="Your favorite framework/library"
          placeholder="Pick one"
          data={[
            { value: 'femenino', label: 'Femenino'  },
            { value: 'masculino', label: 'Masculino' },
          ]}
          {...form.getInputProps('genero')}
        />

        <Select
          label="Factores de Actividad"
          placeholder="Seleccione un factor"
          data={[
            { value: 'sedentario', label: 'Sedentario'  },
            { value: 'ligero', label: 'Ligero' },
            { value: 'moderado', label: 'Moderado'  },
            { value: 'activo', label: 'Activo' },
            { value: 'vigoroso', label: 'Vigoroso'},
          ]}
          {...form.getInputProps('factor')}
        />

        <Group position="center" mt="md">
        <Button variant="light" color="grape" compact type="submit">
           Calcular
        </Button>
        </Group>
      </form>
      
      <Text>GEB:{form.values.formula===0?'':form.values.formula}</Text>
      <Text>FA:{form.values.fa===0?'':form.values.fa}</Text>
      <Text>GET:{form.values.get===0?'':form.values.get}</Text>
    </Box>
  )
}

export default MifflinSt